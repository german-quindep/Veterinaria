import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
//SERVICES
import { AuthRolService } from '@services/auth-rol.service';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  //VARIABLES
  Url_api: string = 'http://localhost:3000/api';
  private sesionUser = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private authRol: AuthRolService) {
    this.checkTokenUser();
  }
  //RETURNAMOS EL OBSERVABLE
  get isLogged(): Observable<boolean> {
    return this.sesionUser.asObservable();
  }
  //HEADERS
  headers: HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
  });
  registerUser(url, form: any) {
    return this.http
      .post(`${this.Url_api}/` + url, form, { headers: this.headers })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
  loginUser(url, form: any): Observable<any> {
    return this.http
      .post<any>(`${this.Url_api}/` + url, form, { headers: this.headers })
      .pipe(
        map((data) => {
          this.setUser(data);
          this.setToken(data['token']);
          this.sesionUser.next(true);
          const rol = data.result[0].Rol;
          this.authRol.ObservableCheckRol(rol);
          return data;
        })
      );
  }
  private checkTokenUser() {
    const userToken = localStorage.getItem('access-token');
    userToken ? this.sesionUser.next(true) : this.sesionUser.next(false);
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
  //ENVIAR USER
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
    this.authRol.logoutRol(); //FUNCION DEL ROL LOGOUT
    this.sesionUser.next(false);
    //ELIMINAR EL LOCALSTORAGE
    localStorage.removeItem('access-token');
    localStorage.removeItem('Current-user');
    localStorage.removeItem('rol-user');
  }
}
