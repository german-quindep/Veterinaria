import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMascotasComponent } from './list-mascotas.component';

describe('ListMascotasComponent', () => {
  let component: ListMascotasComponent;
  let fixture: ComponentFixture<ListMascotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMascotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
