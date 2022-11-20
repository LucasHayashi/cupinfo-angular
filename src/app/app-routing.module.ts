import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMatchesComponent } from './components/list-matches/list-matches.component';
import { ListTablesComponent } from './components/list-tables/list-tables.component';

const routes: Routes = [
  {
    path: 'tabela',
    component: ListTablesComponent,
    title: "Tabela de jogos"
  },
  {
    path: 'partidas',
    component: ListMatchesComponent,
    title: "Partidas"
  },
  {
    path: '',
    redirectTo: 'tabela',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
