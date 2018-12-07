import { environment } from './../../environments/environment';
import { Pessoa } from './../model/pessoa';
import { PessoaService } from './pessoa.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {DataTable} from 'primeng/components/datatable/datatable';
import { LazyLoadEvent, Message, ConfirmationService } from 'primeng/api';
import { LoginService } from '../login/login.service';
import { Endereco } from '../model/endereco';
import { EnderecoService } from '../endereco/endereco.service';
import { Cidade } from '../model/cidade';
import { CidadeService } from '../cidade/cidade.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  @ViewChild('dt') dataTable: DataTable;

  cols: any[];
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

  constructor(private pessoaService: PessoaService,
    private confirmationService: ConfirmationService,
     private enderecoService: EnderecoService,
     private cidadeService: CidadeService,
     private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.verificaAdmin();
    this.cidadeService.findAll().subscribe(e => this.cidades = e);
      this.cols = [
        {field: 'id', header: 'Código'},
        {field: 'nome', header: 'Nome'},
        {field: 'apelido', header: 'Apelido'},
        {field: 'email', header: 'E-mail'},
        {field: 'cpfCnpj', header: 'CPF/CNPJ'},
        {field: 'telefone', header: 'Telefone'},
        {field: 'celular', header: 'Celular'},
        {field: 'status', header: 'Status'}
      ];
      this.enderecoEdit = new Endereco();
      this.enderecos = [];
  }

  findAllPaged(page: number, size: number) {
    this.pessoaService.count().subscribe(e =>
      this.totalRecords = e);
    this.pessoaService.findPageable(page, size)
      .subscribe(e => this.pessoas = e.content);
  }

  findSearchPaged(filter: string, page: number, size: number) {
    this.pessoaService.searchCount(filter).subscribe(e => this.totalRecords = e);
    this.pessoaService.findSearchPageable(filter, page, size).subscribe(e => this.pessoas = e.content);
  }

  load(event: LazyLoadEvent) {
    const currentPage = event.first / event.rows;
    const maxRecords = event.rows;
    if (event.globalFilter) {
      setTimeout(() => {
        this.findSearchPaged(event.globalFilter, currentPage, maxRecords);
      }, 250);
    } else {
      setTimeout(() => {
        this.findAllPaged(currentPage, maxRecords);
      }, 250);
    }
  }

  newEntity() {
    this.showDialog = true;
    this.pessoaEdit = new Pessoa();
    this.enderecoEdit = new Endereco();
    this.pessoaEdit.endereco = this.enderecoEdit;
  }

  search(event) {
      this.cidadesFiltred = this.cidades.filter(
        p => p.nome.toLocaleLowerCase().includes(event.query.toLocaleLowerCase())
      );
  }

  save() {
    this.pessoaEdit.endereco = this.enderecoEdit;
    this.pessoaService.save(this.pessoaEdit).subscribe(
      e => {
        this.enderecoEdit = new Endereco();
        this.pessoaEdit = new Pessoa();
        this.showDialog = false;
        this.pessoaService.findAll().subscribe(e => this.pessoas = e);
        this.msgs = [{
          severity: 'success',
          summary: 'Confirmado',
          detail: 'Registro salvo com sucesso!'
        }];
        this.showDialog = false;
        this.pessoaService.findAll();
      }, error => {
        this.msgs = [{
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro! Verifique os dados!'
        }];
      }
    );
    this.pessoaService.findAll().subscribe(e => this.pessoas = e);
  }

  cancel() {
    this.showDialog = false;
  }

  edit(pessoa: Pessoa) {
    this.today = Date.now();
    this.pessoaEdit = Object.assign({}, pessoa);
    this.enderecoEdit = Object.assign({}, pessoa.endereco);
    this.showDialog = true;
  }

  delete(pessoa: Pessoa) {
    this.confirmationService.confirm({
      message: 'Essa ação não pode ser desfeita.',
      header: 'Deseja remover esse registro?',
      acceptLabel: 'Confirmar',
      rejectLabel: 'Cancelar',
      accept: () => {
        this.pessoaService.delete(pessoa.id).subscribe(() => {
          this.msgs = [{severity: 'success', summary: 'Removido', detail: 'Registro removido com sucesso!'}];
          this.pessoaService.findAll().subscribe(e => this.pessoas = e);
        }, error => {
          this.msgs = [{severity: 'error', summary: 'Erro', detail: 'Erro! Falha aos remover registro!'}];
          this.pessoaService.findAll().subscribe(e => this.pessoas = e);
        });
      }
    });
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
      this.dataTable.reset();
      this.showDialog = false;
      this.uploadedFiles = [];
    }, 500);
  }
}
