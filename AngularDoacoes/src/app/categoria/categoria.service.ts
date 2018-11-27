import { Injectable } from '@angular/core';
import { CrudService } from '../generic/crud.service';
import { Categoria } from '../model/categoria';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Page } from '../generic/page';

@Injectable()
export class CategoriaService extends CrudService<Categoria, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/categoria', http);
  }

  findSearchPageable(filter: string, page: number, size: number, order?: string, asc?: boolean): Observable<Page<Categoria>> {
    let url = `${this.getUrl()}/filter/nome?filter=${filter}&page=${page}&size=${size}`;
    if (order) {
      url += `&order=${order}`;
    }
    if (asc !== undefined) {
      url += `&asc=${asc}`;
    }
    return this.http.get<Page<Categoria>>(url);
  }


  searchCount(filter: string): Observable<number> {
    const url = `${this.getUrl()}/search/count?filter=${filter}`;
    return this.http.get<number>(url);
  }
}
