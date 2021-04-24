import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioVeterinarioComponent } from './formulario-veterinario.component';

describe('FormularioVeterinarioComponent', () => {
  let component: FormularioVeterinarioComponent;
  let fixture: ComponentFixture<FormularioVeterinarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioVeterinarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
