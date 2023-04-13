import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:9000'

  index() {
    return this.http.get(`${this.apiUrl}/users`);
  }

  view(id: number) {
    return this.http.get(`${this.apiUrl}/users/${id}`)
  }

  indexPag(page: number, limit: number) {
    return this.http.get(`${this.apiUrl}/users/${page}/${limit}`)
  }
}
