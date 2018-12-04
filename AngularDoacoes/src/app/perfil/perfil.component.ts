import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { LoginService } from '../login/login.service';
import { PessoaService } from '../pessoa/pessoa.service';
import { LazyLoadEvent, Message, ConfirmationService } from 'primeng/api';
import { Endereco } from '../model/endereco';
import { EnderecoService } from '../endereco/endereco.service';
import { CidadeService } from '../cidade/cidade.service';
import { Cidade } from '../model/cidade';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  pessoas: Pessoa[];
  totalRecords: number;
  enderecoEdit: Endereco = new Endereco();

  enderecos: Endereco[];
  enderecosFiltered: Endereco[];
  pessoaEdit: Pessoa = new Pessoa();

  cidades: Cidade[];
  cidadesFiltred: Cidade[];

  showDialog = false;
  msgs: Message[] = [];

  uploadedFiles: any[] = [];
  urlApi: string = environment.api;
  today: number = Date.now();

  constructor(private loginService: LoginService, private pessoaService: PessoaService,
     private confirmationService: ConfirmationService,
     private enderecoService: EnderecoService,
     private cidadeService: CidadeService) { }

  ngOnInit() {
    this.loginService.verificaUsuarioLogado();
    const a = this.loginService.getUserInfo();
    this.pessoaEdit = a.principal;
    this.today = Date.now();
    this.enderecoService.findOne(this.pessoaEdit.endereco.id).subscribe(
      e => this.enderecoEdit = e);
    this.cidadeService.findAll().subscribe(e => this.cidades = e);
  }

  save() {
    this.pessoaEdit.endereco = this.enderecoEdit;
    this.pessoaService.save(this.pessoaEdit).subscribe(
      e => {
        this.msgs = [{
          severity: 'success',
          summary: 'Confirmado',
          detail: 'Registro salvo com sucesso!'
        }];
      }, error => {
        this.msgs = [{
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro! Verifique os dados!'
        }];
      }
    );
  }

  onUpload(event) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }
    this.msgs = [{
      severity : 'info',
      summary: 'Arquivo salvo!',
      detail: 'Arquivo salvo com sucesso'
    }];

    setTimeout(() => {
      this.showDialog = false;
      this.uploadedFiles = [];
    }, 500);
  }

}
