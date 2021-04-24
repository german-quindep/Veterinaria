import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesMascotasComponent } from './detalles-mascotas.component';

describe('DetallesMascotasComponent', () => {
  let component: DetallesMascotasComponent;
  let fixture: ComponentFixture<DetallesMascotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesMascotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
