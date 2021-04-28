import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Frontend';
  public hideElement = false;
  constructor(private router: Router) {
    //COMPROBAR LA RUTA EN LA QUE NOS ENCONTRAMOS
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (
          event.url.match('/Mascotas') ||
          event.url.match('/Veterinario') ||
          event.url.match('/Vacunas') ||
          event.url.match('/Enfermedades') ||
          event.url.match('/Historial') ||
          event.url.match('/Veterinario')
        ) {
          this.hideElement = true;
        } else {
          this.hideElement = false;
        }
      }
    });
  }
}
