import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../generic/crud.service';
import { Pessoa } from '../model/pessoa';

@Injectable({
  providedIn: 'root'
})
export class CadastroService extends CrudService<Pessoa, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/cadastro', http);
  }
}
