import { TestBed } from '@angular/core/testing';

import { CampanhaService } from './campanha.service';

describe('CampanhaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampanhaService = TestBed.get(CampanhaService);
    expect(service).toBeTruthy();
  });
});
