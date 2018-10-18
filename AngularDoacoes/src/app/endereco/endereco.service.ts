import { Injectable } from '@angular/core';
import { CrudService } from '../generic/crud.service';
import { Endereco } from '../model/endereco';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EnderecoService extends CrudService<Endereco, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/endereco', http);
   }
}

