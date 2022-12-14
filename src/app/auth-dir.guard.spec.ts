import { TestBed } from '@angular/core/testing';

import { AuthDirGuard } from './auth-dir.guard';

describe('AuthDirGuard', () => {
  let guard: AuthDirGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthDirGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
