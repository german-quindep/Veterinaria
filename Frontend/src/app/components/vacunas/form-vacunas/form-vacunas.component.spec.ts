import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVacunasComponent } from './form-vacunas.component';

describe('FormVacunasComponent', () => {
  let component: FormVacunasComponent;
  let fixture: ComponentFixture<FormVacunasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVacunasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVacunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
