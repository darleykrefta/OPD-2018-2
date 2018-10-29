import { Component, OnInit, ViewChild } from '@angular/core';
import {DataTable} from 'primeng/components/datatable/datatable';
import { CidadeService } from './cidade.service';
import { Cidade } from '../model/cidade';
import { LazyLoadEvent, Message, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {

  @ViewChild('dt') dataTable: DataTable;

  cidades: Cidade[];
  totalRecords: number;
  cidadeEdit = new Cidade();
  showDialog = false;
  msgs: Message[] = [];

  constructor(private cidadeService: CidadeService,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.findAll();
  }

  findAllPaged(page: number, size: number) {
    this.cidadeService.count().subscribe(e =>
      this.totalRecords = e);
    this.cidadeService.findPageable(page, size)
      .subscribe(e => this.cidades = e.content);
  }

  load(event: LazyLoadEvent) {
    const currentPage = event.first / event.rows;
    const maxRecords = event.rows;
    setTimeout(() => {
      this.findAllPaged(currentPage, maxRecords);
    }, 250);
  }

  findAll() {
    this.cidadeService.findAll().subscribe(
      e => this.cidades = e);
  }

  newEntity() {
    this.cidadeEdit = new Cidade();
    this.showDialog = true;
  }

  cancel() {
    this.showDialog = false;
  }

  save() {
    this.cidadeService.save(this.cidadeEdit).
      subscribe(e => {
        this.cidadeEdit = new Cidade();
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

  edit(cidade: Cidade) {
    // this.cidadeEdit = cidade;
    this.cidadeEdit = Object.assign({}, cidade);
    this.showDialog = true;
  }

  delete(cidade: Cidade) {
    this.confirmationService.confirm({
      message: 'Essa ação não pode ser desfeita.',
      header: 'Deseja remover esse registro?',
      acceptLabel: 'Confirmar',
      rejectLabel: 'Cancelar',
      accept: () => {
        this.cidadeService.delete(cidade.id)
          .subscribe(() => {
            this.findAll();
            this.msgs = [{
              severity: 'success',
              summary: 'Removido',
              detail: 'Registro removido com sucesso'
            }];
          }, error => {
            this.msgs = [{
              severity: 'error',
              summary: 'Erro',
              detail: 'Falha ao remover registro.'
            }];
          });
      }
    });
  }
}
