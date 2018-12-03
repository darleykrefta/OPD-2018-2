import { Component, OnInit } from '@angular/core';
import { Message, ConfirmationService } from 'primeng/api';
import { ResetarSenhaToken } from '../model/resetarSenhaToken';
import { ResetPasswordService } from './reset-password.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  senha: string;
  confirmSenha: string;
  token: string;
  msgs: Message[] = [];
  editSenha =  new ResetarSenhaToken();
  // senhas: ResetarSenhaToken[];
  constructor(private resetarPasswordService: ResetPasswordService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((objeto: any) => { this.editSenha.token = objeto['token']; });
  }

  save() {
    this.resetarPasswordService.save(this.editSenha).
      subscribe(e => {
        this.editSenha = new ResetarSenhaToken();
        this.msgs = [{
          severity: 'success',
          summary: 'Confirmado',
          detail: 'Registro salvo com sucesso'
        }];
      }, error => {
        this.msgs = [{
          severity: 'error',
          summary: 'Erro',
          detail: 'Certifique-se de preencher senhas iguais.'
        }];
      }
      );
  }
}
