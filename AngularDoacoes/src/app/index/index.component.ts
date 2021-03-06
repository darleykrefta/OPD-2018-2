import { AnuncioService } from './../anuncio/anuncio.service';
import { Campanha } from './../model/campanha';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataView } from 'primeng/dataview';
import { LazyLoadEvent, Message, ConfirmationService } from 'primeng/api';
import { Cidade } from '../model/cidade';
import { Categoria } from '../model/categoria';
import { CidadeService } from '../cidade/cidade.service';
import { CategoriaService } from '../categoria/categoria.service';
import { IndexService } from './index.service';
import { NgIfContext } from '@angular/common';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  @ViewChild('dv') DataView: DataView;

  campanhas: Campanha[];
  campanha: Campanha;
  campanhasFiltered: Campanha[];
  totalRecords: number;
  showDialog = false;
  msgs: Message[] = [];
  cols: any[];
  cidades: Cidade[];
  categorias: Categoria[];
  dataini: any[];
  currentPage: number;
  maxRecords: number;
  escondeBtnFinalizar = true;

  campteste: Campanha;

  constructor(private campanhaService: IndexService,
    private cidadeService: CidadeService,
    private categoriaService: CategoriaService,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.cidadeService.findAll().subscribe( e => this.cidades = e);
    this.categoriaService.findAll().subscribe( e => this.categorias = e);

    this.findAtivos();
  }

  findAllPaged(page: number, size: number) {
    this.campanhaService.count().subscribe(e => this.totalRecords = e);
    this.campanhaService.findPageable(page, size).subscribe(e => this.campanhas = e.content);
  }

  findSearchPaged(dataIni: string, dataFinal: string, categoria: Categoria) {
    if (dataIni === (undefined)) {
      dataIni = '';
    } else {
    }
    if (dataFinal === (undefined)) {
      dataFinal = '';
    } else {
      dataIni = dataIni;
    }
    if (categoria === (undefined)) {
      this.campanhaService.findSearchPageable(dataIni, dataFinal, 0).subscribe(e => this.campanhas = e);
    } else {
      this.campanhaService.findSearchPageable(dataIni, dataFinal, categoria.id).subscribe(e => this.campanhas = e);
    }

  }

  load(event: LazyLoadEvent) {
    this.currentPage = event.first / event.rows;
    this.maxRecords = event.rows;
    if (event.globalFilter) {
      setTimeout(() => {
        this.findSearchPaged(event.globalFilter, event.globalFilter, event.globalFilter);
      }, 250);
    } else {
      setTimeout(() => {
        this.findAllPaged(this.currentPage, this.maxRecords);
      }, 250);
    }
  }

  findAll() {
    this.campanhaService.findAll().subscribe( e => this.campanhas = e );
    this.escondeBtnFinalizar = true;
  }

  findAtivos() {
    this.campanhaService.findByAtivo().subscribe( e => this.campanhas = e );
    console.log(this.campanhas.length);
    this.escondeBtnFinalizar = true;
  }

  findByPessoa() {
    this.campanhaService.findByPessoa().subscribe(e => this.campanhas = e);
    this.escondeBtnFinalizar = false;
  }

  findOne(id: number) {
     this.campanhaService.findOne( id)
      .subscribe(campanha => this.campanha = campanha);
  }

  isFinalizado(e, campanha) {
    this.campteste = new Campanha();
    this.campanhaService.findOne(campanha.id).subscribe(campanha = this.campteste = campanha);
    return (this.campteste.status);
  }

  search(event) {
    this.campanhasFiltered = this.campanhas
      .filter(
        p => p.titulo.toLocaleLowerCase().includes(event.query.toLocaleLowerCase())
      );

  }

  setFinalizado(e, campanha) {
    this.confirmationService.confirm({
      message: 'Essa ação não pode ser desfeita.',
      header: 'Deseja finalizar esse Anúncio?',
      acceptLabel: 'Confirmar',
      rejectLabel: 'Cancelar',
      accept: () => {
        this.campanhaService.finalizarAnuncio(campanha.id).subscribe(() => {
          this.msgs = [{
            severity: 'success',
            summary: 'Finalizado',
            detail: 'Anúncio finalizado com sucesso.'
          }];
        }, error => {
          this.msgs = [{
            severity: 'error',
            summary: 'Erro',
            detail: 'Falha ao finalizar Anúncio.'
          }];
        });
      }
    });
  }
}
