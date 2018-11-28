
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataView } from 'primeng/dataview';
import { CampanhaService } from '../campanha/campanha.service';
import { LazyLoadEvent, Message} from 'primeng/api';
import { Cidade } from '../model/cidade';
import { Categoria } from '../model/categoria';
import { CidadeService } from '../cidade/cidade.service';
import { CategoriaService } from '../categoria/categoria.service';
import { Campanha } from '../model/campanha';

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

  constructor(private campanhaService: CampanhaService,
    private cidadeService: CidadeService,
    private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.cidadeService.findAll().subscribe( e => this.cidades = e);
    this.categoriaService.findAll().subscribe( e => this.categorias = e);

    this.findAll();
  }

  findAllPaged(page: number, size: number) {
    this.campanhaService.count().subscribe(e => this.totalRecords = e);
    this.campanhaService.findPageable(page, size).subscribe(e => this.campanhas = e.content);
  }

  findSearchPaged(dataIni: string, dataFinal: string, categoria: string) {
    // tslint:disable-next-line:triple-equals
    if (dataIni === (undefined)) {
      dataIni = '';
    } else {
    }
    if (dataFinal === (undefined)) {
      dataFinal = '';
    } else {
      dataIni = dataIni;
    }

    this.campanhaService.findSearchPageable(dataIni, dataFinal, categoria).subscribe(e => this.campanhas = e);
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
  }


  findOne(id: number) {
     this.campanhaService.findOne( id)
      .subscribe(campanha => campanha = campanha);
  }

  search(event) {
    this.campanhasFiltered = this.campanhas
      .filter(
        p => p.titulo.toLocaleLowerCase().includes(event.query.toLocaleLowerCase())
      );

  }
}
