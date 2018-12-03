import { TestBed } from '@angular/core/testing';

import { EsqueciSenhaService } from './esqueci-senha.service';

describe('EsqueciSenhaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EsqueciSenhaService = TestBed.get(EsqueciSenhaService);
    expect(service).toBeTruthy();
  });
});
