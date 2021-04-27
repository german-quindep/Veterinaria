import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultMascotasComponent } from './consult-mascotas.component';

describe('ConsultMascotasComponent', () => {
  let component: ConsultMascotasComponent;
  let fixture: ComponentFixture<ConsultMascotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultMascotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
