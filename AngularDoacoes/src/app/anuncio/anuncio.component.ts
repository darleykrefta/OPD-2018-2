import { LoginService } from './../login/login.service';
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
import { Router, ActivatedRoute } from '@angular/router';
import { Pessoa } from '../model/pessoa';
import { PessoaService } from '../pessoa/pessoa.service';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {

  @ViewChild('dtEndereco') enderecoCp: EnderecoComponent;

  pessoa: Pessoa;
  campanhaEdit: Campanha = new Campanha();
  categorias: Categoria[];
  msgs: Message[] = [];
  enderecos: Endereco[];
  uploadFiles: any[] = [];
  urlApi: string = environment.api;
  today: number = Date.now();
  anuncioID: string;

  constructor(private anuncioService: AnuncioService,
    private confirmationService: ConfirmationService,
    private categoriaService: CategoriaService,
    private enderecoService: EnderecoService,
    private router: Router,
    private loginService: LoginService,
    private pessoaService: PessoaService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    //this.loginService.verificaUsuarioLogado();
    this.categoriaService.findAll().subscribe(
      e => this.categorias = e);
    let id: string;
    this.route.params.subscribe((objeto: any) => { id = objeto['id']; });
    if (id !== null) {
      this.edit(this.anuncioService.findOne(Number(id)).subscribe(e => (this.campanhaEdit = e)));
      this.anuncioID = id;
      console.log('anuncio' + this.anuncioID);
    } else {
      this.newEntity();
    }
  }

  newEntity() {
    this.campanhaEdit = new Campanha();
    this.campanhaEdit.tipoAnuncio = 0;
    this.campanhaEdit.categoria = this.categorias[0];
  }

  save() {
    this.campanhaEdit.status = 1;
    const oPessoa = this.loginService.getUserInfo();
    this.pessoa = new Pessoa();
    this.pessoa.id = oPessoa.principal.id;
    this.campanhaEdit.pessoa = this.pessoa;
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
          detail: 'Erro! Verifique os dados!'
        }];
      });
      this.router.navigate(['/meusanuncios']);
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

  edit(campanha) {
    this.campanhaEdit = campanha;
  }

}
