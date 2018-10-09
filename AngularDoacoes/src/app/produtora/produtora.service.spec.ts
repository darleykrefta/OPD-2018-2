import { TestBed } from '@angular/core/testing';

import { ProdutoraService } from './produtora.service';

describe('ProdutoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdutoraService = TestBed.get(ProdutoraService);
    expect(service).toBeTruthy();
  });
});
