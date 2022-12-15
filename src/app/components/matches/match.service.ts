import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private readonly API = 'api/v1/match';

  constructor(private http: HttpClient) {
  }

  listar() {
    return this.http.get<any>(this.API);
  }
}
