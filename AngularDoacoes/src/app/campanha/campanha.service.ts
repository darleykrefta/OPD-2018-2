import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Campanha} from '../interface/Campanha';
import { CrudService } from '../generic/crud.service';
import { environment } from '../../environments/environment';
import { Page } from '../generic/page';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CampanhaService extends CrudService<Campanha, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/campanha', http);
  }


  findByPessoa(): Observable<Campanha[]>  {
    const url = `${this.getUrl()}/filter/meusanuncios`;
    return this.http.get<Campanha[]>(url);
  }

   findSearchPageable(dataIni: string, dataFinal: string, categoria: string):
        Observable<Campanha []> {
    const url = `${this.getUrl()}/search?dataIni=${dataIni}&dataFim=${dataFinal}&categoria=${categoria}`;
    return this.http.get<Campanha[]>(url);
  }


}
