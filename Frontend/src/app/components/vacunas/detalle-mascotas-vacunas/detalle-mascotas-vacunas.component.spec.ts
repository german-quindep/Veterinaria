import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMascotasVacunasComponent } from './detalle-mascotas-vacunas.component';

describe('DetalleMascotasVacunasComponent', () => {
  let component: DetalleMascotasVacunasComponent;
  let fixture: ComponentFixture<DetalleMascotasVacunasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleMascotasVacunasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleMascotasVacunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
