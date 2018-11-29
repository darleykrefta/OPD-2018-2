import { Campanha } from '../model/campanha';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from '../generic/crud.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService extends CrudService<Campanha, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/campanha', http);
  }

  findSearchPageable(dataIni: string, dataFinal: string, categoria: string):
        Observable<Campanha []> {
    const url = `${this.getUrl()}/search?dataIni=${dataIni}&dataFim=${dataFinal}&categoria=${categoria}`;
    return this.http.get<Campanha[]>(url);
  }

  
}
