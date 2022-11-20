import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tabela } from './table';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private readonly API = `${environment.apiUrl}/standings`;

  constructor(private http: HttpClient) {
  }

  listar() {
    return this.http.get<Tabela[]>(this.API);
  }
}
