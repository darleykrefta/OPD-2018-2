

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

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInterceptor } from './http-client.interceptor';
import { PessoaService } from './pessoa/pessoa.service';
import { EnderecoComponent } from './endereco/endereco.component';
import { EnderecoService } from './endereco/endereco.service';
import { CidadeComponent } from './cidade/cidade.component';
import { CidadeService } from './cidade/cidade.service';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaService } from './categoria/categoria.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroService } from './cadastro/cadastro.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { Campanha } from './interface/Campanha';
import { CampanhaService } from './campanha/campanha.service';
import { VisualizarAnuncioComponent } from './visualizar-anuncio/visualizar-anuncio.component';
import { RouterModule } from '@angular/router';
import { MensagemComponent } from './mensagem/mensagem.component';
import { MensagemService } from './mensagem/mensagem.service';
import {GalleriaModule} from 'primeng/galleria';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndexComponent,
    CategoriaComponent,
    EnderecoComponent,
    CidadeComponent,
    VisualizarAnuncioComponent,
    VisualizarAnuncioComponent,
    MensagemComponent,
    CadastroComponent,
    LoginComponent
    

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
    CampanhaService,
    MensagemService,
    EnderecoService,
    CadastroService,
    LoginService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
