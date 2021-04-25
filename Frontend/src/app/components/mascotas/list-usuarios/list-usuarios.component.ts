import { Component, EventEmitter, OnInit, Output } from '@angular/core';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//MODELS
import { IUsuarios } from '@models/Iusuarios.models';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css'],
})
export class ListUsuariosComponent implements OnInit {
  //VARIABLES
  public allUsuarios: IUsuarios;
  @Output() idUserModal = new EventEmitter<string>();
  constructor(private apiServi: ApiRestService) {}

  ngOnInit(): void {
    this.getAllUser();
  }
  getAllUser() {
    this.apiServi.getAllDataApi('all-users').subscribe(
      (res: IUsuarios) => {
        this.allUsuarios = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  //EVENTENNITER
  obtenerIdUser(id) {
    this.idUserModal.emit(id);
  }
}
