import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMascotasHistorialComponent } from './list-mascotas-historial.component';

describe('ListMascotasHistorialComponent', () => {
  let component: ListMascotasHistorialComponent;
  let fixture: ComponentFixture<ListMascotasHistorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMascotasHistorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMascotasHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
