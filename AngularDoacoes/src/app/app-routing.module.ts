import { EnderecoComponent } from './endereco/endereco.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { CidadeComponent } from './cidade/cidade.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CampanhaComponent} from './campanha/campanha.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'pessoa', component: PessoaComponent},
  {path: 'cidade', component: CidadeComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'endereco', component: EnderecoComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'campanha', component: CampanhaComponent}
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
