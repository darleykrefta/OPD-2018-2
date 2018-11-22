import { Component, OnInit, ViewChild } from '@angular/core';
import { DataView } from 'primeng/dataview';
import { CampanhaService } from '../campanha/campanha.service';
import { Campanha } from '../interface/Campanha';
import { LazyLoadEvent, Message } from 'primeng/api';
import { CategoriaService } from '../categoria/categoria.service';
import { CidadeService } from '../cidade/cidade.service';
import { Cidade } from '../model/cidade';
import { Categoria } from '../model/categoria';


@Component({
  selector: 'app-campanha',
  templateUrl: './campanha.component.html',
  styleUrls: ['./campanha.component.css']
})
export class CampanhaComponent implements OnInit {

  @ViewChild('dv') DataView: DataView;

  campanhas: Campanha[];
  totalRecords: number;
  showDialog = false;
  msgs: Message[] = [];

  cidades: Cidade[];
  categorias: Categoria[];

  constructor(private campanhaService: CampanhaService,
    private cidadeService: CidadeService,
    private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.cidadeService.findAll().subscribe(e => this.cidades = e);
    this.categoriaService.findAll().subscribe(e => this.categorias = e);

    this.campanhaService.findByPessoa().subscribe(e => this.campanhas = e);

  }

  findAllPaged(page: number, size: number) {
    this.campanhaService.count().subscribe(e =>
      this.totalRecords = e);
    this.campanhaService.findPageable(page, size)
      .subscribe(e => this.campanhas = e.content);
  }

  load(event: LazyLoadEvent) {
    const currentPage = event.first / event.rows;
    const maxRecords = event.rows;
    setTimeout(() => {
      this.findAllPaged(currentPage, maxRecords);
    }, 250);
  }

  findByPessoa() {
    this.campanhaService.findByPessoa().subscribe(
      e => this.campanhas = e);
  }

  findAll() {
    this.campanhaService.findAll().subscribe(e => this.campanhas = e);
  }

  setFinalizado(e, campanha) {
    console.log('id' + campanha.id);
    console.log('id' + campanha.descricao);
  }
}
