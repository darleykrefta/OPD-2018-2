import { Component, OnInit } from '@angular/core';
import { GeneroService } from './genero.service';
import { Genero } from '../model/genero';
import { Message, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit {

  generos: Genero[];
  generoEdit = new Genero();
  showDialog = false;
  msgs: Message[] = [];

  constructor(private generoService: GeneroService,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.generoService.findAll().subscribe(
      e => this.generos = e);
  }

  newEntity() {
    this.generoEdit = new Genero();
    this.showDialog = true;
  }

  cancel() {
    this.showDialog = false;
  }

  save() {
    this.generoService.save(this.generoEdit).
      subscribe(e => {
        this.generoEdit = new Genero();
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

  edit(genero: Genero) {
    // this.generoEdit = genero;
    this.generoEdit = Object.assign({}, genero);
    this.showDialog = true;
  }

  delete(genero: Genero) {
    this.confirmationService.confirm({
      message: 'Essa ação não pode ser desfeita.',
      header: 'Deseja remover esse registro?',
      acceptLabel: 'Confirmar',
      rejectLabel: 'Cancelar',
      accept: () => {
        this.generoService.delete(genero.id)
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