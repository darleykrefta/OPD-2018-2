import { Injectable } from '@angular/core';
import { Campanha } from '../model/campanha';
import { CrudService } from '../generic/crud.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IndexService extends CrudService<Campanha, number> {


  constructor(http: HttpClient) {
    super(environment.api + '/campanha', http);
  }

   findSearchPageable(dataIni: string, dataFinal: string, categoria: number):
        Observable<Campanha []> {
    const url = `${this.getUrl()}/search?dataIni=${dataIni}&dataFim=${dataFinal}&categoria=${categoria}`;
    return this.http.get<Campanha[]>(url);
  }

findByPessoa(): Observable<Campanha[]> {
  const url = `${this.getUrl()}/filter/meusanuncios`;
  return this.http.get<Campanha[]>(url);
}

finalizarAnuncio(id: number): Observable<void> {
  const url = `${this.getUrl()}/finalizarAnuncio/${id}`;
  return this.http.get<void>(url);
}

findByAtivo(): Observable<Campanha[]> {
  const url = `${this.getUrl()}/ativos`;
  return this.http.get<Campanha[]>(url);
}




}
