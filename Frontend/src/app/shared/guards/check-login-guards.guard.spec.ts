import { TestBed } from '@angular/core/testing';

import { CheckLoginGuardsGuard } from './check-login-guards.guard';

describe('CheckLoginGuardsGuard', () => {
  let guard: CheckLoginGuardsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckLoginGuardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
