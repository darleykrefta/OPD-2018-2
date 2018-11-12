import { environment } from './../../environments/environment';
import { Pessoa } from './../model/pessoa';
import { PessoaService } from './../pessoa/pessoa.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {DataTable} from 'primeng/components/datatable/datatable';
import { LazyLoadEvent, Message, ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-pessoa',

  // selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @ViewChild('dt') dataTable: DataTable;

  pessoas: Pessoa[];
  pessoaEdit = new Pessoa();
  totalRecords: number;
  showDialog = false;
  msgs: Message[] = [];
  uploadFiles: any[] = [];
  urlApi: string = environment.api;
  today: number = Date.now();

  constructor(private pessoaService: PessoaService,
     private confirmationService: ConfirmationService) { }

  ngOnInit() {
  }

  newEntity() {
    this.showDialog = true;
    this.pessoaEdit = new Pessoa();
  }

  cancel() {
    this.showDialog = false;
  }

  save() {

    if (this.pessoaEdit.senha === this.pessoaEdit.senha2) {
      this.pessoaEdit.endereco = null;
      this.pessoaEdit.status = true;
      this.showDialog = false;
      this.pessoaService.save(this.pessoaEdit).subscribe(
        e => {
          this.pessoaEdit = new Pessoa();
          // this.findAll();
        }, error => {
          this.msgs = [{severity: 'error', summary: 'Erro', detail: 'Erro! Verifique os dados!'}];
        }
      );
      this.msgs = [{severity: 'success', summary: 'Confirmado', detail: 'Registro salvo com sucesso!'}];
    } else {
      this.msgs = [{severity: 'error', summary: 'Erro', detail: 'Erro! Senhas Diferentes!'}];
    }
  }

}
