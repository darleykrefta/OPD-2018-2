import { LoginService } from './../login/login.service';
import { CidadeService } from './../cidade/cidade.service';
import { Cidade } from './../model/cidade';
import { TableModule } from 'primeng/table';
import { Endereco } from './../model/endereco';
import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import { EnderecoService } from './endereco.service';
import { DataTable } from 'primeng/components/datatable/datatable';
import { Message, ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { EventEmitter } from '@angular/core';

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

  @Output() respostaEndereco = new EventEmitter();

  constructor(private enderecoService: EnderecoService, private confirmationService: ConfirmationService,
    private cidadeService: CidadeService,
    private loginService: LoginService) { }

  search(event) {
    this.cidadesFiltred = this.cidades.filter(
      p => p.nome.toLocaleLowerCase().includes(event.query.toLocaleLowerCase())
    );
  }

  ngOnInit() {
    this.findByCampanha(this.recebeAnuncioID);
    this.loginService.verificaAdmin();
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
    this.enderecoEdit = new Endereco();
  }

  findByCampanha(anuncioID) {
    this.enderecoService.findByCampanha(anuncioID).subscribe(
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
    if (this.enderecoEdit.index > 0) {
      const enderecoAux: Endereco = Object.assign({}, this.enderecoEdit);

      let indexDelete = -1;

      this.enderecos.forEach( (item, index) => {
        if (this.enderecoEdit.index === item.index) {
          indexDelete = index;
        }
      });

      if (indexDelete !== -1) {
        this.enderecos.splice(indexDelete, 1);
      }

      this.enderecos.push(enderecoAux);
      this.msgs = [{
        severity: 'success',
        summary: 'Confirmado',
        detail: 'Registro alterado com sucesso'
      }];
    } else {
      this.enderecoEdit.index = this.getRandomInt(1, 10000);
      this.enderecos.push(this.enderecoEdit);
      this.msgs = [{
        severity: 'success',
        summary: 'Confirmado',
        detail: 'Registro salvo com sucesso'
      }];
    }
    this.respostaEndereco.emit(this.enderecos);
    this.showDialog = false;
  }

  edit(endereco: Endereco) {
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
        this.enderecos.splice(this.enderecos.indexOf(endereco), 1);
        this.msgs = [{
          severity: 'success',
          summary: 'Confirmado',
          detail: 'Registro removido com sucesso'
        }];
      }
    });
  }





  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
