import { TestBed } from '@angular/core/testing';

import { GuardsEmpleadoGuard } from './guards-empleado.guard';

describe('GuardsEmpleadoGuard', () => {
  let guard: GuardsEmpleadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardsEmpleadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
