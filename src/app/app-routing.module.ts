import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './seguranca/auth.guard';
import { PaginaNaoEncontradaComponent } from './shared/erro/pagina-nao-encontrada.component';
import { MonitorTelaComponent } from './monitor-tela/monitor-tela.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
      {path: 'usuario', loadChildren: './usuario/usuario.module#UsuarioModule'},
      {path: 'tipo-localizacao', loadChildren: './tipo-localizacao/tipo-localizacao.module#TipoLocalizacaoModule'},
      {path: 'servico', loadChildren: './servico/servico.module#ServicoModule'},
      {path: 'localizacao', loadChildren: './localizacao/localizacao.module#LocalizacaoModule'},
      {path: 'atendimento', loadChildren: './atendimento/atendimento.module#AtendimentoModule'},
      {path: 'monitor', loadChildren: './monitor/monitor.module#MonitorModule'}
    ]
  },
  {path: 'monitor-tela/:servicos', component: MonitorTelaComponent},
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
