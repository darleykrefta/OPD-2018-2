import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Imports PrimeNG
import {TableModule} from 'primeng/table';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './/app-routing.module';
import { GeneroComponent } from './genero/genero.component';
import { GeneroService } from './genero/genero.service';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoraComponent } from './produtora/produtora.component';
import { ProdutoraService } from './produtora/produtora.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndexComponent,
    GeneroComponent,
    ProdutoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    TableModule
  ],
  providers: [
    GeneroService,
    ProdutoraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
