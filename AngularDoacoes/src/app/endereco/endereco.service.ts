import { Observable } from 'rxjs';
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

  findEndereco(teste: String): Observable<Endereco> {
    const url = `${this.getUrl()}/${teste}`;
    return this.http.get<Endereco>(url);
  }

  findByCampanha(id: Number): Observable<Endereco> {
    const url = `${this.getUrl()}/filter/enderecoCampanha?id=${id}`;
    return this.http.get<Endereco>(url);
  }
}

