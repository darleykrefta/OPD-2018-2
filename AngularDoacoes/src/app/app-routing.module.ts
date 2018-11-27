
import { VisualizarAnuncioComponent } from './visualizar-anuncio/visualizar-anuncio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginService } from './login/login.service';
import { EnderecoComponent } from './endereco/endereco.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { CidadeComponent } from './cidade/cidade.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { LoginComponent } from './login/login.component';
import { MensagemComponent } from './mensagem/mensagem.component';
import { PermissaoComponent } from './permissao/permissao.component';

const routes: Routes = [

  {
      path: '', canActivate: [LoginService], children: [
      {path: 'pessoa', component: PessoaComponent},
      {path: 'cidade', component: CidadeComponent},
      {path: 'categoria', component: CategoriaComponent},
      {path: 'endereco', component: EnderecoComponent},
      {path: 'perfil', component: PerfilComponent},
      {path: 'index/campanha/visualizaranuncio/:campanhaId', component: VisualizarAnuncioComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'cadastroUsuario', component: CadastroComponent},
  {path: 'filter/:titulodescricao', component: IndexComponent},
  {path: 'index', component: IndexComponent},
  {path: 'permissao', component: PermissaoComponent}
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
