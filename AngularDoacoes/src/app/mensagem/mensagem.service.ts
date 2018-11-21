import { InputTextModule } from 'primeng/inputtext';
import { Mensagem } from '../model/mensagem';
import { Injectable } from '@angular/core';
import { CrudService } from '../generic/crud.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class MensagemService extends CrudService<Mensagem, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/mensagem', http);
  }

  getComments(campanhaId: number): Observable<Mensagem[]> {
    const url = `${this.getUrl()}?campanhaId=${campanhaId}`;
    return this.http.get<Mensagem[]>(url);
  }

  addMensagem(campanhaId: number, mensagem: Text) {
    const url = `${this.getUrl()}?campanhaId=${campanhaId}`;
    return this.http.post(url, {mensagem});
  }
}
