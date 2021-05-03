import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
//SERVICES
import { AuthServiceService } from '@services/auth-service.service';
@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuardsGuard implements CanActivate {
  constructor(private authService: AuthServiceService) {}
  canActivate(): Observable<boolean> {
    return this.authService.isLogged.pipe(
      take(1),
      map((isLogged: boolean) => (!isLogged))
    );
  }
  
}
