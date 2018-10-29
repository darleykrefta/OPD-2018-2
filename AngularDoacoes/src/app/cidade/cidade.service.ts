import { Injectable } from '@angular/core';
import { CrudService } from '../generic/crud.service';
import { Cidade } from '../model/cidade';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class CidadeService extends CrudService<Cidade, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/cidade', http);
  }
}
