import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesHistorialEnfermedadesComponent } from './detalles-historial-enfermedades.component';

describe('DetallesHistorialEnfermedadesComponent', () => {
  let component: DetallesHistorialEnfermedadesComponent;
  let fixture: ComponentFixture<DetallesHistorialEnfermedadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesHistorialEnfermedadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesHistorialEnfermedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
