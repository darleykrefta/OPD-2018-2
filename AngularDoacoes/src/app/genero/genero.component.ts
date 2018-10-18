import { Component, OnInit } from '@angular/core';
import { GeneroService } from './genero.service';
import { Genero } from '../model/genero';
import { Message, ConfirmationService } from 'primeng/api';
import { toUnicode } from 'punycode';

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

  // injects de dependencias
  constructor(private generoService: GeneroService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.generoService.findAll().subscribe(e => this.generos = e);
  }

  newEntity() {
    this.showDialog = true;
    this.generoEdit = new Genero();
  }

  cancel() {
    this.showDialog = false;
  }

  save() {
    this.generoService.save(this.generoEdit).subscribe(
      e => {
        this.generoEdit = new Genero();
        this.findAll();
        this.showDialog = false;
        this.msgs = [{severity: 'success', summary: 'Confirmado', detail: 'Registro salvo com sucesso!'}];
      }, error => {
        this.msgs = [{severity: 'error', summary: 'Erro', detail: 'Erro! Verifique os dados!'}];
      }
    );
  }

  edit(genero: Genero) {
    // this.generoEdit = genero;
    // assign remove a referencia
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
        this.generoService.delete(genero.id).subscribe(() => {
          this.findAll();
          this.msgs = [{severity: 'success', summary: 'Removido', detail: 'Registro removido com sucesso!'}];
        }, error => {
          this.msgs = [{severity: 'error', summary: 'Erro', detail: 'Erro! Falha aos remover registro!'}];
        });
      }
    });
  }
}
