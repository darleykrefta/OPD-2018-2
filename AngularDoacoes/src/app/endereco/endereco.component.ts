import { TableModule } from 'primeng/table';
import { Endereco } from './../model/endereco';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EnderecoService } from './endereco.service';
import { DataTable } from 'primeng/components/datatable/datatable';
import { Message, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @ViewChild('dt') dataTable: DataTable;

  enderecos: Endereco[];
  enderecoEdit = new Endereco();
  showDialog = false;
  msgs: Message[] = [];

  cidades: Cidade[];
  cidadesFiltred: Cidade[];


  constructor(private enderecoService: EnderecoService, private confirmationService: ConfirmationService, private cidadeService: CidadeService) { }


  search(event) {
    this.cidadesFiltred = this.cidades.filter(
      p => p.nome.toLocaleLowerCase().includes(event.query.toLocaleLowerCase())
    );
  }

  filterCountry(query, cidades: any[]): any[] {
    const filtered: any[] = [];
    for (let i = 0; i < cidades.length; i++) {
      const cidade = cidades[i];
      if (cidade.nome.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(cidade);
      }
    }
    return filtered;
  }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.enderecoService.findAll().subscribe(
      e => this.enderecos = e);
  }

  newEntity() {
    this.enderecoEdit = new Endereco();
    this.showDialog = true;
  }

  cancel() {
    this.showDialog = false;
  }

  save() {
    this.enderecoService.save(this.enderecoEdit).
      subscribe(e => {
        this.enderecoEdit = new Endereco();
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

  edit(endereco: Endereco) {
    // this.enderecoEdit = endereco;
    this.enderecoEdit = Object.assign({}, endereco);
    this.showDialog = true;
  }

  delete(endereco: Endereco) {
    this.confirmationService.confirm({
      message: 'essa acao nao pode ser desfeita.',
      header: 'Deseja remover esse registro?',
      acceptLabel: 'Confirmar',
      rejectLabel: 'Cancelar',
      accept: () => {
        this.enderecoService.delete(endereco.id).subscribe(() => {
          this.findAll();
          this.msgs = [{
            severity: 'success',
            summary: 'Confirmado',
            detail: 'Registro removido com sucesso'
          }];
        }, error => {
          this.msgs = [{
            severity: 'error',
            summary: 'Erro',
            detail: 'Certifique-se de preencher todos dos campos.'
          }];
        });

      }
    });
  }
}
