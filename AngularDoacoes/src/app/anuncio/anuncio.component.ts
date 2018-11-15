import { Message } from 'primeng/api';
import { Anuncio } from './../model/anuncio';
import { AnuncioService } from './anuncio.service';
import { CategoriaService } from './../categoria/categoria.service';
import { Categoria } from './../model/categoria';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {

  anuncioEdit: Anuncio = new Anuncio();
  categorias: Categoria[];
  msgs: Message[] = [];

  constructor(private anuncioService: AnuncioService,
    private categoriaService: CategoriaService) { }

  ngOnInit() {
    // load categorias
    this.categoriaService.findAll().subscribe(
      e => this.categorias = e);
  }

  newEntity() {
    this.anuncioEdit = new Anuncio();
    this.anuncioEdit.categoria = this.categorias[0];
  }

  cancel() {
    // this.showDialog = false;
  }

  save() {
    this.anuncioEdit.status = 1;
    this.anuncioService.save(this.anuncioEdit).
      subscribe(e => {
        this.anuncioEdit = new Anuncio();
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

}
