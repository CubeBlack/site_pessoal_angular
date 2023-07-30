import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetosComponent } from './paginas/projetos/projetos.component';
import { InicioComponent } from './paginas/inicio/inicio.component';


//-------------- Paginas -------------


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'projetos', component: ProjetosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
