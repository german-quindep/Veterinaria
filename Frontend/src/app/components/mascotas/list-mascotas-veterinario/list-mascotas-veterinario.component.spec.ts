import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMascotasVeterinarioComponent } from './list-mascotas-veterinario.component';

describe('ListMascotasVeterinarioComponent', () => {
  let component: ListMascotasVeterinarioComponent;
  let fixture: ComponentFixture<ListMascotasVeterinarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMascotasVeterinarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMascotasVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
