import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDirectiveVacuna]'
})
export class DirectiveVacunaDirective {

  @Input('appDirectiveVacuna') set cambiarBoton(estado: boolean) {
    this.cambiandoEstado(estado);
  }
  constructor(private el: ElementRef) {}
  //CAMBIANDO EL ESTADO DEL BOTON
  cambiandoEstado(estado: boolean) {
    if (estado) {
      this.el.nativeElement.innerHTML = '';
      this.el.nativeElement.innerHTML =
        "<i class='fas fa-user-edit'></i>Editar";
      this.el.nativeElement.classList.remove('btn-outline-success');
      this.el.nativeElement.classList.add('btn-outline-warning');
    } else {
      this.el.nativeElement.innerHTML = '';
      this.el.nativeElement.innerHTML = "<i class='fas fa-plus'></i>Guardar";
      this.el.nativeElement.classList.remove('btn-outline-warning');
      this.el.nativeElement.classList.toggle('btn-outline-success');
    }
  }

}
