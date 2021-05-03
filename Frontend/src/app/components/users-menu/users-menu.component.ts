import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '@services/auth-service.service';
//SERVICES

@Component({
  selector: 'app-users-menu',
  templateUrl: './users-menu.component.html',
  styleUrls: ['./users-menu.component.css'],
})
export class UsersMenuComponent implements OnInit {
  //VARIABLES
  opened = true;
  constructor(private authServi:AuthServiceService) {}

  ngOnInit(): void {}
  toggleSlideBar() {
    this.opened = !this.opened;
  }
  cerrarSesion(){
    this.authServi.logoutUser();
  }
}
