import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '@services/auth-service.service';
import { UsersMenuModule } from '@module/users-menu/users-menu.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  //VARIABLES
  isLogge = false;
  constructor(
    private authServi: AuthServiceService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.isLoggin();
  }
  isLoggin() {
    this.authServi.isLogged.subscribe((res) => {
      this.isLogge = res;
    });
  }
  cerrarSesion() {
    this.authServi.logoutUser();
    //this.router.navigate(['/Usuarios/auth/Login-Users']);
  }
}
