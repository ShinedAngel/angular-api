import { TestBed } from '@angular/core/testing';

import { ResttestService } from './resttest.service';

describe('ResttestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResttestService = TestBed.get(ResttestService);
    expect(service).toBeTruthy();
  });
});
