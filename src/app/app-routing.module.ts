import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PaginaNaoEncontradaComponent} from './shared/erro/pagina-nao-encontrada.component';
import {LoginComponent} from './login/login.component';
import {LayoutComponent} from './layout/layout.component';
import {AuthGuard} from './seguranca/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
      {path: 'tipo-localizacao', loadChildren: './tipo-localizacao/tipo-localizacao.module#TipoLocalizacaoModule'},
      {path: 'servico', loadChildren: './servico/servico.module#ServicoModule'},
      {path: 'localizacao', loadChildren: './localizacao/localizacao.module#LocalizacaoModule'}
    ]
  },

  {path: 'login', component: LoginComponent},
  {path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent},
  {path: '**', redirectTo: '/login'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
