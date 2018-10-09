import { Component, OnInit } from '@angular/core';
import { Produtora } from '../model/produtora';
import { ProdutoraService } from './produtora.service';

@Component({
  selector: 'app-produtora',
  templateUrl: './produtora.component.html',
  styleUrls: ['./produtora.component.css']
})
export class ProdutoraComponent implements OnInit {

  produtoras: Produtora[];

  constructor(private produtoraService: ProdutoraService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.produtoraService.findAll().subscribe(
                    e => this.produtoras = e);
  }

}
