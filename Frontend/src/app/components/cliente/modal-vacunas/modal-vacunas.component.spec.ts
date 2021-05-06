import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVacunasComponent } from './modal-vacunas.component';

describe('ModalVacunasComponent', () => {
  let component: ModalVacunasComponent;
  let fixture: ComponentFixture<ModalVacunasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVacunasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVacunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
