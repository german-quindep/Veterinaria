import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({ providedIn: 'root' })
export class ToastRMessage {
  constructor(private toastr: ToastrService) {}

  showSuccess(titulo, mensaje) {
    this.toastr.success(titulo, mensaje);
  }
  showWarning(titulo, mensaje) {
    this.toastr.warning(titulo, mensaje);
  }
  showDanger(titulo, mensaje) {
    this.toastr.error(titulo, mensaje);
  }
}
