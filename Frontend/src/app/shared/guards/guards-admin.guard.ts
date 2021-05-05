import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
//SERVICES
import { AuthRolService } from '@services/auth-rol.service';
@Injectable({
  providedIn: 'root',
})
export class GuardsAdminGuard implements CanActivate {
  constructor(private authRolServi: AuthRolService, private router: Router) {}
  canActivate(): Observable<boolean> {
    return this.authRolServi.isAdmin.pipe(
      take(1),
      map((isLogged: boolean) =>
        isLogged
          ? isLogged
          : (this.router.navigate(['/Usuarios/auth/Login-Users']), !isLogged)
      )
    );
  }
}
