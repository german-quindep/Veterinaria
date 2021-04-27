import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVacunasComponent } from './list-vacunas.component';

describe('ListVacunasComponent', () => {
  let component: ListVacunasComponent;
  let fixture: ComponentFixture<ListVacunasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVacunasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVacunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
