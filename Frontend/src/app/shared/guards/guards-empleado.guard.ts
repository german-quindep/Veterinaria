import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
//SERVICES
import { AuthRolService } from '@services/auth-rol.service';
@Injectable({
  providedIn: 'root'
})
export class GuardsEmpleadoGuard implements CanActivate {
  constructor(private authRolServi:AuthRolService){}
  canActivate(): Observable<boolean> {
    return this.authRolServi.isEmpleado.pipe(
      take(1),
      map((isLogged: boolean) => (isLogged))
    );
  }
}
