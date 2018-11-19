import { environment } from './../../environments/environment';
import { Pessoa } from './../model/pessoa';
import { PessoaService } from './pessoa.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {DataTable} from 'primeng/components/datatable/datatable';
import { LazyLoadEvent, Message, ConfirmationService } from 'primeng/api';
import { Endereco } from '../model/endereco';
import { EnderecoService } from '../endereco/endereco.service';



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

  enderecos: Endereco[];
  enderecosFiltered: Endereco[];
  pessoaEdit: Pessoa = new Pessoa();


  showDialog = false;
  msgs: Message[] = [];

  uploadedFiles: any[] = [];
  urlApi: string = environment.api;
  today: number = Date.now();

  constructor(private pessoaService: PessoaService,
     private confirmationService: ConfirmationService,
     private enderecoService: EnderecoService) { }

  ngOnInit() {
    this.enderecoService.findAll().subscribe(
      e => this.enderecos = e);
      this.cols = [
        {field: 'id', header: 'Código'},
        {field: 'nome', header: 'Nome'},
        {field: 'apelido', header: 'Apelido'},
        {field: 'email', header: 'E-mail'},
        {field: 'cpfCnpj', header: 'CPF/CNPJ'},
        {field: 'telefone', header: 'Telefone'},
        {field: 'celular', header: 'Celular'},
        {field: 'status', header: 'Status'},
        {field: 'endereco.id', header: 'Endereço'},
      ];
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
    this.pessoaEdit.endereco = this.enderecos[0];
  }

  search(event) {
    this.enderecosFiltered = this.enderecos
      .filter(
        e => e.rua.toLocaleLowerCase()
          .includes(event.query.toLocaleLowerCase())
      );
  }

  save() {
    this.pessoaService.save(this.pessoaEdit).subscribe(
      e => {
        this.pessoaEdit = new Pessoa();
        this.dataTable.reset();
        this.showDialog = false;
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

  cancel() {
    this.showDialog = false;
  }

  edit(pessoa: Pessoa) {
    this.today = Date.now();
    this.pessoaEdit = Object.assign({}, pessoa);
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
        }, error => {
          this.msgs = [{severity: 'error', summary: 'Erro', detail: 'Erro! Falha aos remover registro!'}];
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
