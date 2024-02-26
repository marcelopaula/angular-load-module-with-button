import { TestBed } from '@angular/core/testing';

import { ModuloLazyService } from './modulo-lazy.service';

describe('ModuloLazyService', () => {
  let service: ModuloLazyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuloLazyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
