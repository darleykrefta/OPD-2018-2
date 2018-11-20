import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Campanha} from '../model/campanha';
import { CrudService } from '../generic/crud.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CampanhaService extends CrudService<Campanha, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/campanha', http);
  }
}
