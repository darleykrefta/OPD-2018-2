import { Observable } from 'rxjs';
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

  findByEmail(email: String): Observable<boolean> {
    const url = `${this.getUrl()}/filter/email?email=${email}`;
    return this.http.get<boolean>(url);
  }
}
