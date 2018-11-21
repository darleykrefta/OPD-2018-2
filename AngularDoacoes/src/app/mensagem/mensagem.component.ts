import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { Mensagem } from '../model/mensagem';
import { Pessoa } from '../model/pessoa';
import { MensagemService } from './mensagem.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { Campanha } from '../model/campanha';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  @Input() campanhaId: number;
  mensagens: Mensagem[];
  mensagem = new Mensagem();

  constructor(private mensagemService: MensagemService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.mensagemService.getComments(this.campanhaId).subscribe(e => this.mensagens = e);
  }

  addMensagem() {
    const campanha = new Campanha();
    campanha.id = this.campanhaId;
    this.mensagem.campanha = campanha;
    const a = this.loginService.getUserInfo();
    const pessoa = new Pessoa();
    pessoa.id = a.principal.id;
    this.mensagem.pessoa = pessoa;

    this.mensagemService.save(this.mensagem)
      .subscribe(() => {
        alert('Comentario Adicionado com Sucesso!!');
      });

      this.mensagemService.getComments(this.campanhaId).subscribe(e => this.mensagens = e);
  }

}



