import { Injectable } from '@angular/core';
import { CrudService } from '../generic/crud.service';
import { Produtora } from '../model/produtora';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoraService
      extends CrudService<Produtora, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/produtora', http);
  }
}
