import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from './environments/environment';

@Injectable()
export class AuthService {

  private jwtHelper = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(): void {
    let userCredentials = {
      email: environment.email,
      password: environment.password,
    };

    this.http
      .post('/api/v1/user/login', userCredentials, { headers: { noAuth: 'true' } })
      .subscribe((res: any) => {
        this.setToken(res.data.token);

        this.reloadCurrentRoute();
      });
  }

  setToken(token): void {
    console.log("setando novo token");
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return localStorage.getItem('token') as string;
  }

  islogged(): boolean {
    if (this.jwtHelper.isTokenExpired(this.getToken())) {
      this.login();
      return false;
    }

    this.router.navigate(['tabela']);
    return true;
  }

  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
