import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//SERVICES
import { ApiRestService } from '@services/api-rest.service';
//MODELS
import { IVeterinario } from '@models/Iveterinario.models';

@Component({
  selector: 'app-list-mascotas-veterinario',
  templateUrl: './list-mascotas-veterinario.component.html',
  styleUrls: ['./list-mascotas-veterinario.component.css'],
})
export class ListMascotasVeterinarioComponent implements OnInit {
  //VARIBALES
  public allVeterinario: IVeterinario;
  @Output() idVeterinarioModal = new EventEmitter<string>();
  constructor(private apiServi: ApiRestService) {}

  ngOnInit(): void {
    this.getAllVeterinario();
  }
  getAllVeterinario() {
    this.apiServi.getAllDataApi('Todos-Veterinario').subscribe(
      (res: IVeterinario) => {
        this.allVeterinario = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  obtenerIdVeterinario(id) {
    this.idVeterinarioModal.emit(id);
  }
}
