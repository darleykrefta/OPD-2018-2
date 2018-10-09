import { Injectable } from '@angular/core';
import { CrudService } from '../generic/crud.service';
import { Genero } from '../model/genero';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class GeneroService extends CrudService<Genero, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/genero', http);
  }
}
