import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '@services/auth-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(public authServi: AuthServiceService) {}

  ngOnInit(): void {
    const rol = localStorage.getItem('Current-user');
    const tranform = JSON.parse(rol);
    console.log(tranform.result[0]['IdUser']);
  }
}
