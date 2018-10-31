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
import {DropdownModule} from 'primeng/dropdown';
import {PanelModule} from 'primeng/panel';
import {TabViewModule} from 'primeng/tabview';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './/app-routing.module';
import { GeneroComponent } from './genero/genero.component';
import { GeneroService } from './genero/genero.service';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoraComponent } from './produtora/produtora.component';
import { ProdutoraService } from './produtora/produtora.service';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaService } from './pessoa/pessoa.service';
import { CidadeComponent } from './cidade/cidade.component';
import { CidadeService } from './cidade/cidade.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndexComponent,
    GeneroComponent,
    ProdutoraComponent,
    PessoaComponent,
    CidadeComponent
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
    TabViewModule
  ],
  providers: [
    GeneroService,
    ProdutoraService,
    ConfirmationService,
    PessoaService,
    CidadeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
