import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  Url_api: string = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}
  headers: HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
  });
  registerUser(url, form: any) {
    return this.http
      .post(`${this.Url_api}/` + url, form, { headers: this.headers })
      .pipe(map(data => data));
  }
  loginUser(url, form: any): Observable<any> {
    return this.http
      .post<any>(`${this.Url_api}/` + url, form, { headers: this.headers })
      .pipe(map((data) => data));
  }
  //GUARDO EL USUARIO
  setUser(users) {
    let user_string = JSON.stringify(users);
    localStorage.setItem('Current-user', user_string);
  }
  //ASIGNO EL TOKEN
  setToken(token) {
    localStorage.setItem('access-token', token);
  }
  //RETURN TOKEN
  getToken() {
    return localStorage.getItem('access-token');
  }
  getCurrentUser() {
    let user_string = localStorage.getItem('Current-user');
    if (!isNullOrUndefined(user_string)) {
      let user = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }
  //DESLOGUEARSE
  logoutUser() {
    let accessToken = localStorage.getItem('access-token');
    //ELIMINAR EL LOCALSTORAGE
    localStorage.removeItem('access-token');
    localStorage.removeItem('Current-user');
    //SE ELIMINA EL TOKEN DEL SERVIDOR
    //return this.http.post(url,{headers:this.headers});
  }
}
