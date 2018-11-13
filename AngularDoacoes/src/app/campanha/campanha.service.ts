import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Campanha} from '../interface/Campanha';
import { CrudService } from '../generic/crud.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CampanhaService extends CrudService<Campanha, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/campanha', http);
  }

  findByPessoa(id: number): Observable<Campanha>  {
    const url = `${this.getUrl()}/${id}`;
    return this.http.get<Campanha>(url);
  }
}
