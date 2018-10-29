import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './categoria.service';
import { Categoria } from '../model/categoria';
import { Message, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categorias: Categoria[];
  categoriaEdit = new Categoria();
  showDialog = false;
  msgs: Message[] = [];

  constructor(private categoriaService: CategoriaService,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.findAll();
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
