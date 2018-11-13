import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from '../generic/crud.service';
import { Pessoa } from '../model/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService extends CrudService<Pessoa, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/pessoa', http);
  }

  findByEmail(email: String): Observable<boolean> {
    const url = `${this.getUrl()}/filter/email?email=${email}`;
    return this.http.get<boolean>(url);
  }
}
