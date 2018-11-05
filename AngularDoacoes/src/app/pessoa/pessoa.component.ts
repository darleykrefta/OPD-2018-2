import { environment } from './../../environments/environment';
import { Pessoa } from './../model/pessoa';
import { PessoaService } from './pessoa.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {DataTable} from 'primeng/components/datatable/datatable';
import { LazyLoadEvent, Message, ConfirmationService } from 'primeng/api';
//import { Produtora } from '../model/endereco';
//import { ProdutoraService } from '../endereco/endereo.service';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  @ViewChild('dt') dataTable: DataTable;

 // enderecos: Endereco[];
 // enderecosFiltered: Endereco[];
  pessoas: Pessoa[];
  pessoaEdit = new Pessoa();
  totalRecords: number;
  showDialog = false;
  msgs: Message[] = [];
  uploadFiles: any[] = [];
  urlApi: string = environment.api;
  today: number = Date.now();

  constructor(private pessoaService: PessoaService,
    /*private enderecoService: EnderecoService,*/
     private confirmationService: ConfirmationService) { }

  ngOnInit() {
    //this.enderecoService.findAll().subscribe(
      //e => this.enderecos = e);
  }

  findAllPaged(page: number, size: number) {
    this.pessoaService.count().subscribe(e => this.totalRecords = e);
    this.pessoaService.findPageable(page, size).subscribe(e => this.pessoas = e.content);
  }

  load(event: LazyLoadEvent) {
    const currentPage = event.first / event.rows;
    const maxRecords = event.rows;
    setTimeout(() => {
      this.findAllPaged(currentPage, maxRecords);
    }, 250);
  }

  findAll() {
    this.pessoaService.findAll().subscribe(e => this.pessoas = e);
  }

  newEntity() {
    this.showDialog = true;
    this.pessoaEdit = new Pessoa();
  }

  /*
  search(event) {
    this.enderecosFiltered = this.enderecos
        .filter(
    p => p.rua.toLocaleLowerCase()
      .includes(event.query.toLocaleLowerCase())
    );
  }*/
  cancel() {
    this.showDialog = false;
  }

  save() {
    this.pessoaService.save(this.pessoaEdit).subscribe(
      e => {
        this.pessoaEdit = new Pessoa();
        this.findAll();
        this.showDialog = false;
        this.msgs = [{severity: 'success', summary: 'Confirmado', detail: 'Registro salvo com sucesso!'}];
      }, error => {
        this.msgs = [{severity: 'error', summary: 'Erro', detail: 'Erro! Verifique os dados!'}];
      }
    );
  }

  edit(pessoa: Pessoa) {
    // this.generoEdit = genero;
    // assign remove a referencia
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
          this.findAll();
          this.msgs = [{severity: 'success', summary: 'Removido', detail: 'Registro removido com sucesso!'}];
        }, error => {
          this.msgs = [{severity: 'error', summary: 'Erro', detail: 'Erro! Falha aos remover registro!'}];
        });
      }
    });
  }

  onUpload(event) {
    for (const file of event.files) {
      this.uploadFiles.push(file);
    }
    this.msgs = [{severity : 'info',
                  summary: 'Arquivo salvo!',
         detail: 'Arquivo salvo com sucesso' }];

    setTimeout(() => {
      this.dataTable.reset();
      this.showDialog = false;
      this.uploadFiles = [];
    }, 500);
  }

}
