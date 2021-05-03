import { TestBed } from '@angular/core/testing';

import { GuardsclienteGuard } from './guardscliente.guard';

describe('GuardsclienteGuard', () => {
  let guard: GuardsclienteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardsclienteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
