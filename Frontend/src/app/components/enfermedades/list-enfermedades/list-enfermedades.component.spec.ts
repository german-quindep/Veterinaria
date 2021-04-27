import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnfermedadesComponent } from './list-enfermedades.component';

describe('ListEnfermedadesComponent', () => {
  let component: ListEnfermedadesComponent;
  let fixture: ComponentFixture<ListEnfermedadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEnfermedadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnfermedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
