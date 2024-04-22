import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  host : string = "http://localhost:8081";
  //public host = environment.apiUrl;
  private token : any;
  private loggedInUsername: any;
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) {}

   login(user: User): Observable<HttpResponse<User>> {
    return this.http.post<User>(`${this.host}/user/login`, user, { observe: 'response' });
  }

   register(user: User): Observable<User> {
    return this.http.post<User>(`${this.host}/user/register`, user);
  }

   logOut(): void {
    this.token = null;
    this.loggedInUsername = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('users');
  }

   saveToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }

   addUserToLocalCache(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

   getUserFromLocalCache(): User {
    return JSON.parse(localStorage.getItem('user')  || '{}');
  }

   loadToken(): void {
    this.token = localStorage.getItem('token');
  }

   getToken(): string {
    return this.token;
  }

 isUserLoggedIn(): any {
    this.loadToken();
    if (this.token != null && this.token !== ''){
      if (this.jwtHelper.decodeToken(this.token).sub != null || '') {
        if (!this.jwtHelper.isTokenExpired(this.token)) {
          this.loggedInUsername = this.jwtHelper.decodeToken(this.token).sub;
          return true;
        }
      }
    } else {
      this.logOut();
      return false;
    }
  }
}
