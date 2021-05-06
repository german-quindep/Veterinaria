import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVeterinarioComponent } from './modal-veterinario.component';

describe('ModalVeterinarioComponent', () => {
  let component: ModalVeterinarioComponent;
  let fixture: ComponentFixture<ModalVeterinarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVeterinarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
