import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CrudService } from '../generic/crud.service';
import { Endereco } from '../model/endereco';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Page } from '../generic/page';

@Injectable()
export class EnderecoService extends CrudService<Endereco, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/endereco', http);
   }

   //
  //findEndereco(teste: String): Observable<Endereco> {
  //  const url = `${this.getUrl()}/${teste}`;
   // return this.http.get<Endereco>(url);
 // }

  findSearchPageable(filter: string, page: number, size: number, order?: string, asc?: boolean): Observable<Page<Endereco>> {
    let url = `${this.getUrl()}/filter/nome?filter=${filter}&page=${page}&size=${size}`;
    if (order) {
      url += `&order=${order}`;
    }
    if (asc !== undefined) {
      url += `&asc=${asc}`;
    }
    return this.http.get<Page<Endereco>>(url);
  }


  searchCount(filter: string): Observable<number> {
    const url = `${this.getUrl()}/search/count?filter=${filter}`;
    return this.http.get<number>(url);
  }

  findByCampanha(id: Number): Observable<Endereco[]> {
    const url = `${this.getUrl()}/filter/enderecoCampanha?id=${id}`;
    return this.http.get<Endereco[]>(url);
  }
}

