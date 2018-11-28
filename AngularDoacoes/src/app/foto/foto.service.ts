import { Foto } from '../model/foto';
import { CrudService } from '../generic/crud.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class FotoService extends CrudService<Foto, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/foto', http);
  }

  getFotos(campanhaId: number): Observable<Foto[]> {
    const url = `${this.getUrl()}/visualizaranuncio/${campanhaId}`;
    return this.http.get<Foto[]>(url);
  }

}
