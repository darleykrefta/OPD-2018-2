import { Injectable } from '@angular/core';
import { Campanha } from '../model/campanha';
import { CrudService } from '../generic/crud.service';
import { HttpClient } from 'selenium-webdriver/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IndexService extends CrudService<Campanha, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/campanha', http);
   }

   findSearchPageable(dataIni: string, dataFinal: string, categoria: string):
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

}
