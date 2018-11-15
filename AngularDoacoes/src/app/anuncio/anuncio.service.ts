import { Anuncio } from './../model/anuncio';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from '../generic/crud.service';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService extends CrudService<Anuncio, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/campanha', http);
  }
}
