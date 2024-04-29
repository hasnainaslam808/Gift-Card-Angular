
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = "http://192.168.100.200:3001/api/admin"
  constructor(private http: HttpClient) { }


  login(val: any) {
    return this.http.post(`${this.baseUrl}/login`, val)
  }
  emailverification(val: any) {
    return this.http.post(`${this.baseUrl}/forgot-password`, val)
  }
  newPassword(val: any) {
    return this.http.post(`${this.baseUrl}/reset-password`, val)
  }
}
