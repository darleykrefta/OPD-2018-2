import { EnderecoService } from './../endereco/endereco.service';
import { Endereco } from './../model/endereco';
import { Message, ConfirmationService } from 'primeng/api';
import { Campanha } from '../model/campanha';
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

  anuncioEdit: Campanha = new Campanha();
  categorias: Categoria[];
  msgs: Message[] = [];
  enderecos: Endereco[];

  constructor(private anuncioService: AnuncioService,
    private confirmationService: ConfirmationService,
    private categoriaService: CategoriaService,
    private enderecoService: EnderecoService) { }

  ngOnInit() {
    this.categoriaService.findAll().subscribe(
      e => this.categorias = e);
      this.newEntity();
  }

  newEntity() {
    this.anuncioEdit = new Campanha();
    this.anuncioEdit.tipoAnuncio = 0;
    this.anuncioEdit.categoria = this.categorias[0];
  }

  save() {
    this.anuncioEdit.status = 1;
    this.anuncioService.save(this.anuncioEdit).
      subscribe(e => {
        this.anuncioEdit = new Campanha();
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
      });
  }

  reciverEndereco(enderecoList) {
    this.anuncioEdit.endereco = enderecoList;
  }

}
