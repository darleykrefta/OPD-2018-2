import { Campanha } from '../model/campanha';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from '../generic/crud.service';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService extends CrudService<Campanha, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/campanha', http);
  }
}
