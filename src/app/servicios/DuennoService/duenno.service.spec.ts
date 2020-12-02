import { TestBed } from '@angular/core/testing';

import { DuennoService } from './duenno.service';

describe('DuennoService', () => {
  let service: DuennoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuennoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
