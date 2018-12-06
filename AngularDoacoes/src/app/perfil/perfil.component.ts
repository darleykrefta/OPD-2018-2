import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { LoginService } from '../login/login.service';
import { PessoaService } from '../pessoa/pessoa.service';
import { LazyLoadEvent, Message, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  pessoa: Pessoa;
  pessoaEdit = new Pessoa();
  msgs: Message[] = [];
  uploadFiles: any[] = [];
  urlApi: string = environment.api;
  today: number = Date.now();

  constructor(private loginService: LoginService, private pessoaService: PessoaService) { }

  ngOnInit() {
    this.loginService.verificaUsuarioLogado();
    const a = this.loginService.getUserInfo();
    this.pessoa = a.principal;
    console.log('Testando' + this.pessoa.nome);
    console.log(this.pessoa.endereco.id);
    console.log(this.pessoa.foto);
  }

  save() {
    this.pessoaService.save(this.pessoaEdit).
      subscribe(e => {
        this.pessoaEdit = new Pessoa();
        this.msgs = [{
          severity: 'success',
          summary: 'Confirmado',
          detail: 'Registro salvo com sucesso'
        }];
      }, error => {
          this.msgs = [{
            severity: 'error',
            summary: 'Erro',
            detail: 'Certifique-se de preencher todos dos campos.'
        }];
      }
    );
  }

  onUpload(event) {
    for (const file of event.files) {
      this.uploadFiles.push(file);
      console.log(this.uploadFiles.push(file));
      console.log(file);
    }
    this.msgs = [{severity : 'info',
                  summary: 'Arquivo salvo!',
         detail: 'Arquivo salvo com sucesso' }];

    setTimeout(() => {
      this.uploadFiles = [];
    }, 500);
  }

}
