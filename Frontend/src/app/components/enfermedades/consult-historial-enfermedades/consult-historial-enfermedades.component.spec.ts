import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultHistorialEnfermedadesComponent } from './consult-historial-enfermedades.component';

describe('ConsultHistorialEnfermedadesComponent', () => {
  let component: ConsultHistorialEnfermedadesComponent;
  let fixture: ComponentFixture<ConsultHistorialEnfermedadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultHistorialEnfermedadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultHistorialEnfermedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
