import { GalleriaModule } from 'primeng/galleria';


import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Imports PrimeNG
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {GrowlModule} from 'primeng/growl';
import {DialogModule} from 'primeng/dialog';
import {ConfirmationService} from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import {SpinnerModule} from 'primeng/spinner';
import {FileUploadModule} from 'primeng/fileupload';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {DropdownModule} from 'primeng/dropdown';
import {PanelModule} from 'primeng/panel';
import {TabViewModule} from 'primeng/tabview';
import {DataViewModule} from 'primeng/dataview';
import {SidebarModule} from 'primeng/sidebar';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {FieldsetModule} from 'primeng/fieldset';
import {PasswordModule} from 'primeng/password';
import {ContextMenuModule} from 'primeng/contextmenu';
import {CarouselModule} from 'primeng/carousel';

// Component-Service
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInterceptor } from './http-client.interceptor';
import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaService } from './pessoa/pessoa.service';
import { EnderecoComponent } from './endereco/endereco.component';
import { EnderecoService } from './endereco/endereco.service';
import { CidadeComponent } from './cidade/cidade.component';
import { CidadeService } from './cidade/cidade.service';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaService } from './categoria/categoria.service';
import { AnuncioComponent } from './anuncio/anuncio.component';
import { AnuncioService } from './anuncio/anuncio.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroService } from './cadastro/cadastro.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { PerfilComponent } from './perfil/perfil.component';
import { VisualizarAnuncioComponent } from './visualizar-anuncio/visualizar-anuncio.component';
import { RouterModule } from '@angular/router';
import { MensagemComponent } from './mensagem/mensagem.component';
import { MensagemService } from './mensagem/mensagem.service';
import { PermissaoComponent } from './permissao/permissao.component';
import { FotoComponent } from './foto/foto.component';
import { FotoService } from './foto/foto.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndexComponent,
    PessoaComponent,
    CategoriaComponent,
    EnderecoComponent,
    CidadeComponent,
    AnuncioComponent,
    PerfilComponent,
    VisualizarAnuncioComponent,
    MensagemComponent,
    CadastroComponent,
    LoginComponent,
    PerfilComponent,
    PermissaoComponent,
    FotoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    TableModule,
    ConfirmDialogModule,
    GrowlModule,
    DialogModule,
    CheckboxModule,
    SpinnerModule,
    FileUploadModule,
    AutoCompleteModule,
    DropdownModule,
    PanelModule,
    TabViewModule,
    DataViewModule,
    SidebarModule,
    InputTextModule,
    RadioButtonModule,
    CalendarModule,
    MenuModule,
    ContextMenuModule,
    FieldsetModule,
    PasswordModule,
    CarouselModule,
    RouterModule,
    PasswordModule,
    ReactiveFormsModule,
    GalleriaModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptor,
      multi: true
    },
    ConfirmationService,
    PessoaService,
    CidadeService,
    ConfirmationService,
    CategoriaService,
    AnuncioService,
    MensagemService,
    EnderecoService,
    CadastroService,
    LoginService,
    FotoService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
