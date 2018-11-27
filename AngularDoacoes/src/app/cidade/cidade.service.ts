import { Injectable } from '@angular/core';
import { CrudService } from '../generic/crud.service';
import { Cidade } from '../model/cidade';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Page } from '../generic/page';

@Injectable()
export class CidadeService extends CrudService<Cidade, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/cidade', http);
  }

  findSearchPageable(filter: string, page: number, size: number, order?: string, asc?: boolean): Observable<Page<Cidade>> {
    let url = `${this.getUrl()}/filter/nome?filter=${filter}&page=${page}&size=${size}`;
    if (order) {
      url += `&order=${order}`;
    }
    if (asc !== undefined) {
      url += `&asc=${asc}`;
    }
    return this.http.get<Page<Cidade>>(url);
  }


  searchCount(filter: string): Observable<number> {
    const url = `${this.getUrl()}/search/count?filter=${filter}`;
    return this.http.get<number>(url);
  }
}
