
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, Subject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { CrudService } from '../generic/crud.service';
import { EsqueciSenha } from '../model/esqueciSenha';


@Injectable({
  providedIn: 'root'
})
export class EsqueciSenhaService extends CrudService<EsqueciSenha, number> {
  userInfo: any;
  isAuthenticated = new Subject<boolean>();

  constructor(http: HttpClient) {
    super(environment.api + '/esqueci-senha', http);
  }

  findByEmail(email: String): Observable<boolean> {
    const url = `${this.getUrl()}/email?email=${email}`;
    return this.http.get<boolean>(url);
  }
}
