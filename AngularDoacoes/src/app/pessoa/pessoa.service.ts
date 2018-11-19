import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from '../generic/crud.service';
import { Pessoa } from '../model/pessoa';
import { Observable } from 'rxjs';
import { Page } from '../generic/page';

@Injectable({
  providedIn: 'root'
})
export class PessoaService extends CrudService<Pessoa, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/pessoa', http);
  }

  findSearchPageable(filter: string, page: number, size: number, order?: string, asc?: boolean): Observable<Page<Pessoa>> {
    let url = `${this.getUrl()}/search?filter=${filter}&page=${page}&size=${size}`;
    if (order) {
      url += `&order=${order}`;
    }
    if (asc !== undefined) {
      url += `&asc=${asc}`;
    }
    return this.http.get<Page<Pessoa>>(url);
  }

  searchCount(filter: string): Observable<number> {
    const url = `${this.getUrl()}/search/count?filter=${filter}`;
    return this.http.get<number>(url);
  }
}
