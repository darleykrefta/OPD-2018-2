import { Injectable } from '@angular/core';
import { CrudService } from '../generic/crud.service';
import { Categoria } from '../model/categoria';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class CategoriaService extends CrudService<Categoria, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/categoria', http);
  }
}
