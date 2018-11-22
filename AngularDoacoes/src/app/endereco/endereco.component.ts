import { CidadeService } from './../cidade/cidade.service';
import { Cidade } from './../model/cidade';
import { TableModule } from 'primeng/table';
import { Endereco } from './../model/endereco';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EnderecoService } from './endereco.service';
import { DataTable } from 'primeng/components/datatable/datatable';
import { Message, ConfirmationService, LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @ViewChild('dt') dataTable: DataTable;

  enderecos: Endereco[];
  enderecoEdit: Endereco = new Endereco();
  showDialog = false;
  msgs: Message[] = [];
  maxRecords = 5;
  currentPage = 1;
  totalRecords: number;
  cidades: Cidade[];
  cidadesFiltred: Cidade[];
  cols: any[];

  constructor(private enderecoService: EnderecoService, private confirmationService: ConfirmationService,
    private cidadeService: CidadeService) { }


  search(event) {
    this.cidadesFiltred = this.cidades.filter(
      p => p.nome.toLocaleLowerCase().includes(event.query.toLocaleLowerCase())
    );
  }

  ngOnInit() {
    this.findAll();
    this.cidadeService.findAll().subscribe(e => this.cidades = e);

    this.cols = [
      { field: 'id', header: 'Cod.' },
      { field: 'rua', header: 'Rua' },
      { field: 'numero', header: 'Numero' },
      { field: 'bairro', header: 'Bairro' },
      { field: 'cep', header: 'CEP' },
      { field: 'complemento', header: 'Complemento' },
      { field: 'cidade.nome', header: 'Cidade' }
    ];
  }

  findAll() {
    this.enderecoService.findAll().subscribe(
      e => this.enderecos = e);
  }

  findAllPaged(page: number, size: number) {
    this.enderecoService.count().subscribe(e => this.totalRecords = e);
    this.enderecoService.findPageable(page, size).subscribe(e => this.enderecos = e.content);
  }

  findSearchPaged(filter: string, page: number, size: number) {
    this.enderecoService.searchCount(filter).subscribe(e => this.totalRecords = e);
    this.enderecoService.findSearchPageable(filter, page, size).subscribe(e => this.enderecos = e.content);
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
    this.enderecoEdit = new Endereco();
    this.showDialog = true;
  }

  cancel() {
    this.showDialog = false;
  }

  save() {
    this.enderecoService.save(this.enderecoEdit).
      subscribe(e => {
        this.enderecoEdit = new Endereco();
        this.findAll();
        this.showDialog = false;
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

  edit(endereco: Endereco) {
    // this.enderecoEdit = endereco;
    this.enderecoEdit = Object.assign({}, endereco);
    this.showDialog = true;
  }

  delete(endereco: Endereco) {
    this.confirmationService.confirm({
      message: 'essa acao nao pode ser desfeita.',
      header: 'Deseja remover esse registro?',
      acceptLabel: 'Confirmar',
      rejectLabel: 'Cancelar',
      accept: () => {
        this.enderecoService.delete(endereco.id).subscribe(() => {
          this.findAll();
          this.msgs = [{
            severity: 'success',
            summary: 'Confirmado',
            detail: 'Registro removido com sucesso'
          }];
        }, error => {
          this.msgs = [{
            severity: 'error',
            summary: 'Erro',
            detail: 'Certifique-se de preencher todos dos campos.'
          }];
        });

      }
    });
  }






}
