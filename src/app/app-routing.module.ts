import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ListMatchesComponent } from './components/list-matches/list-matches.component';
import { ListTablesComponent } from './components/list-tables/list-tables.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabela',
    pathMatch: 'full'
  },
  {
    path: 'tabela',
    component: ListTablesComponent,
    title: "Tabela de jogos",
    canActivate: [AuthGuard]
  },
  {
    path: 'partidas',
    component: ListMatchesComponent,
    title: "Partidas",
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
