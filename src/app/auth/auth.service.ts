import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';
import { Observable, tap } from 'rxjs';
import { LoginResult } from './login-result';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(protected http: HttpClient) { }

  public tokenKey: string = 'tokenKey';

  login(loginRequest: LoginRequest): Observable<LoginResult> {
    let url = `${environment.baseURL}api/Admin/Login`;
    return this.http.post<LoginResult>(url, loginRequest).pipe(tap(loginResult => {
      if(loginResult.success) {
        localStorage.setItem(this.tokenKey, loginResult.token);
      }
    }));
  }

  getToken():string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
