import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersMascotasListComponent } from './users-mascotas-list.component';

describe('UsersMascotasListComponent', () => {
  let component: UsersMascotasListComponent;
  let fixture: ComponentFixture<UsersMascotasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersMascotasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersMascotasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
