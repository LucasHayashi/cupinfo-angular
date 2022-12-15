import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private readonly API = '/api/v1/standings';

  constructor(private http: HttpClient) {
  }

  listar() {
    return this.http.get<any>(this.API);
  }
}
