import { CidadeService } from './../cidade/cidade.service';
import { Cidade } from './../model/cidade';
import { TableModule } from 'primeng/table';
import { Endereco } from './../model/endereco';
import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import { EnderecoService } from './endereco.service';
import { DataTable } from 'primeng/components/datatable/datatable';
import { Message, ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { EventEmitter } from 'events';

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

  @Input() recebeAnuncioID;

  @Output() retornoEnderecos = new EventEmitter();

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

  newEntity() {
    this.enderecoEdit = new Endereco();
    this.showDialog = true;
  }

  cancel() {
    this.showDialog = false;
  }

  save() {
    this.enderecos.push(this.enderecoEdit);
    this.msgs = [{
      severity: 'success',
      summary: 'Confirmado',
      detail: 'Registro salvo com sucesso'
    }];
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

  loadLazy(event: LazyLoadEvent) {
    this.currentPage = event.first / event.rows;
    this.maxRecords = event.rows;
    console.log(event.globalFilter);
    if (event.globalFilter == null) {
      setTimeout(() => {
        this.findAllPaged(this.currentPage, this.maxRecords);
      }, 250);
    } else {
      setTimeout(() => {
        this.enderecoService.findEndereco(event.globalFilter);
      }, 250);
    }
  }

  findAllPaged(page: number, size: number) {
    this.enderecoService.count().subscribe(e => this.totalRecords = e);
    this.enderecoService.findPageable(page, size).subscribe(e => this.enderecos = e.content);
  }


}
