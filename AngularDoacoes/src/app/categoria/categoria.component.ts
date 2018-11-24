import { LoginService } from './../login/login.service';
import { Component, OnInit, ViewChild  } from '@angular/core';
import { CategoriaService } from './categoria.service';
import { Categoria } from '../model/categoria';
import { LazyLoadEvent, Message, ConfirmationService } from 'primeng/api';
import {DataTable} from 'primeng/components/datatable/datatable';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  @ViewChild('dt') dataTable: DataTable;
  categorias: Categoria[];
  categoriaEdit = new Categoria();
  totalRecords: number;
  showDialog = false;
  msgs: Message[] = [];

  constructor(private categoriaService: CategoriaService,
    private confirmationService: ConfirmationService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.verificaAdmin();
    this.findAll();
  }

  findAllPaged(page: number, size: number) {
    this.categoriaService.count().subscribe(e =>
      this.totalRecords = e);
    this.categoriaService.findPageable(page, size)
      .subscribe(e => this.categorias = e.content);
  }

  findSearchPaged(filter: string, page: number, size: number) {
    this.categoriaService.searchCount(filter).subscribe(e => this.totalRecords = e);
    this.categoriaService.findSearchPageable(filter, page, size).subscribe(e => this.categorias = e.content);
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

  findAll() {
    this.categoriaService.findAll().subscribe(
      e => this.categorias = e);
  }

  newEntity() {
    this.categoriaEdit = new Categoria();
    this.showDialog = true;
  }

  cancel() {
    this.showDialog = false;
  }

  save() {
    this.categoriaService.save(this.categoriaEdit).
      subscribe(e => {
        this.categoriaEdit = new Categoria();
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

  edit(categoria: Categoria) {
    // this.categoriaEdit = categoria;
    this.categoriaEdit = Object.assign({}, categoria);
    this.showDialog = true;
  }

  delete(categoria: Categoria) {
    this.confirmationService.confirm({
      message: 'Essa ação não pode ser desfeita.',
      header: 'Deseja remover esse registro?',
      acceptLabel: 'Confirmar',
      rejectLabel: 'Cancelar',
      accept: () => {
        this.categoriaService.delete(categoria.id)
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
