import { environment } from './../../environments/environment';
import { EnderecoService } from './../endereco/endereco.service';
import { Endereco } from './../model/endereco';
import { Message, ConfirmationService } from 'primeng/api';
import { Campanha } from '../model/campanha';
import { AnuncioService } from './anuncio.service';
import { CategoriaService } from './../categoria/categoria.service';
import { Categoria } from './../model/categoria';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EnderecoComponent } from '../endereco/endereco.component';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {

  @ViewChild('dtEndereco') enderecoCp: EnderecoComponent;

  campanhaEdit: Campanha = new Campanha();
  categorias: Categoria[];
  msgs: Message[] = [];
  enderecos: Endereco[];
  uploadFiles: any[] = [];
  urlApi: string = environment.api;
  today: number = Date.now();

  constructor(private anuncioService: AnuncioService,
    private confirmationService: ConfirmationService,
    private categoriaService: CategoriaService,
    private enderecoService: EnderecoService) {}

  ngOnInit() {

    this.categoriaService.findAll().subscribe(
      e => this.categorias = e);
    this.newEntity();
  }

  newEntity() {
    this.campanhaEdit = new Campanha();
    this.campanhaEdit.tipoAnuncio = 0;
    this.campanhaEdit.categoria = this.categorias[0];
  }

  save() {
    this.campanhaEdit.status = 1;
    this.anuncioService.save(this.campanhaEdit).
      subscribe(e => {
        this.enderecos = [];
        this.enderecoCp.enderecos = [];
        this.campanhaEdit = new Campanha();
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
    this.campanhaEdit.endereco = enderecoList;
  }

  onUpload(event) {
    for (const file of event.files) {
      this.uploadFiles.push(file);
    }
    this.msgs = [{
      severity: 'info',
      summary: 'Arquivo salvo!',
      detail: 'Arquivo salvo com sucesso'
    }];
    this.uploadFiles = [];
  }

  onSelect(foto) {
    this.uploadFiles.push(foto);
  }

  showConsole() {
    console.log(this.uploadFiles);
  }

}
