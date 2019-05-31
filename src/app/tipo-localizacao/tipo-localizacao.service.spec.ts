import { TestBed } from '@angular/core/testing';

import { TipoLocalizacaoService } from './tipo-localizacao.service';

describe('TipoLocalizacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoLocalizacaoService = TestBed.get(TipoLocalizacaoService);
    expect(service).toBeTruthy();
  });
});
