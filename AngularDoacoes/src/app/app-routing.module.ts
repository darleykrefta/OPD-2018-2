import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { IndexComponent } from './index/index.component';
import { GeneroComponent } from './genero/genero.component';
import { ProdutoraComponent } from './produtora/produtora.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { CidadeComponent } from './cidade/cidade.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'genero', component: GeneroComponent},
  {path: 'produtora', component: ProdutoraComponent},
  {path: 'pessoa', component: PessoaComponent},
  {path: 'cidade', component: CidadeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
