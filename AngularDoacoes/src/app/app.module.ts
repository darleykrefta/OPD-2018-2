import { EnderecoService } from './endereco/endereco.service';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaService } from './pessoa/pessoa.service';
import { EnderecoComponent } from './endereco/endereco.component';
import { CidadeComponent } from './cidade/cidade.component';
import { CidadeService } from './cidade/cidade.service';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaService } from './categoria/categoria.service';
import { Campanha } from './interface/Campanha';
import { CampanhaService } from './campanha/campanha.service';
import {ContextMenuModule} from 'primeng/contextmenu';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndexComponent,
    PessoaComponent,
    CategoriaComponent,
    EnderecoComponent,
    CidadeComponent,
    PerfilComponent
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
    PasswordModule
  ],
  providers: [
    ConfirmationService,
    PessoaService,
    EnderecoService,
    CidadeService,
    ConfirmationService,
    CategoriaService,
    CampanhaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
