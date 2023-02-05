import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private readonly listaDeJogosApi = `${environment.endpoint}/match`;

  constructor(private http: HttpClient) {
  }

  listar() {
    return this.http.get<any>(this.listaDeJogosApi);
  }
}
