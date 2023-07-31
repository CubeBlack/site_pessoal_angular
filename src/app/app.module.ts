import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//------ Material ------
import { MatToolbarModule } from '@angular/material/toolbar'; //Menu/cabecario da pagina
import { MatIconModule } from "@angular/material/icon"; // Icones
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatSidenavModule} from '@angular/material/sidenav'; //menu lateral
import {MatListModule} from '@angular/material/list';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ProjetosComponent } from './paginas/projetos/projetos.component'; //lista de itens
import {MatCardModule} from '@angular/material/card'; //cards
import {MatTreeModule} from '@angular/material/tree';

//-------

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProjetosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //----------- Material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
