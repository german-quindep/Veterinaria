import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVeterinarioComponent } from './list-veterinario.component';

describe('ListVeterinarioComponent', () => {
  let component: ListVeterinarioComponent;
  let fixture: ComponentFixture<ListVeterinarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVeterinarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
