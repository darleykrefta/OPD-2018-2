import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { CrudService } from '../generic/crud.service';
import { ResetarSenhaToken } from '../model/resetarSenhaToken';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService extends CrudService<ResetarSenhaToken, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/reset-password', http);
   }


}
