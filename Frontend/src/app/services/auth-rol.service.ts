import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthRolService {
  //VARIABLES
  private sesionAdmin = new BehaviorSubject<boolean>(false);
  private sesionEmpleado = new BehaviorSubject<boolean>(false);
  private sesionCliente = new BehaviorSubject<boolean>(false);
  constructor() {
    this.checkRol();
  }
  //RETURNO EL AS OBSERVABLE
  get isAdmin(): Observable<boolean> {
    return this.sesionAdmin.asObservable();
  }
  get isEmpleado(): Observable<boolean> {
    return this.sesionEmpleado.asObservable();
  }
  get isCliente(): Observable<boolean> {
    return this.sesionCliente.asObservable();
  }
  //asignar segun el rol del usuario con el BehaviorSubject
  ObservableCheckRol(rol) {
    switch (rol) {
      case 'Administrador':
        localStorage.setItem('rol-user', rol);
        this.sesionAdmin.next(true);
        break;
      case 'Empleado':
        localStorage.setItem('rol-user', rol);
        this.sesionEmpleado.next(true);
        break;
      case 'Cliente':
        localStorage.setItem('rol-user', rol);
        this.sesionCliente.next(true);
        break;
      default:
        this.logoutRol();
    }
  }
  //VERIFICAR ROL DEL USUARIO
  private checkRol() {
    const userRol = localStorage.getItem('rol-user');
    switch (userRol) {
      case 'Administrador':
        this.sesionAdmin.next(true);
        this.sesionEmpleado.next(false);
        this.sesionCliente.next(false);
        break;
      case 'Empleado':
        this.sesionEmpleado.next(true);
        this.sesionAdmin.next(false);
        this.sesionCliente.next(false);
        break;
      case 'Cliente':
        this.sesionCliente.next(true);
        this.sesionEmpleado.next(false);
        this.sesionAdmin.next(false);
        break;
      default:
        this.sesionAdmin.next(false);
        this.sesionEmpleado.next(false);
        this.sesionCliente.next(false);
        this.logoutRol();
    }
  }
  //DEJO TODO EL BEHAVIOR EN FALSE
  logoutRol() {
    this.sesionAdmin.next(false);
    this.sesionEmpleado.next(false);
    this.sesionCliente.next(false);
  }
}
