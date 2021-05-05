import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from '@services/auth-service.service';
//SERVICES
@Injectable({
  providedIn: 'root',
})
export class InterceptorsHeaders implements HttpInterceptor {
  constructor(private authServi: AuthServiceService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //OBTENGO EL TOKEN
    if (this.authServi.getToken()) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.authServi.getToken(),
      });
      //TRABAJAMOS CON UN CLON
      const reqClone = req.clone({
        headers,
      });
      return next.handle(reqClone);
    } else {
      return next.handle(req);
    }
  }
}
