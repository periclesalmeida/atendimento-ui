import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../seguranca/auth.guard';
import {ServicoComponent} from './servico.component';
import {ServicoCadastrarComponent} from './servico-cadastrar/servico-cadastrar.component';

const routes: Routes = [
  {
    path: '',
    component: ServicoComponent,
    canActivate: [ AuthGuard ],
    data: { roles: ['ROLE_SERVICO_CONSULTAR'] }
  },
  {
    path: 'novo',
    component: ServicoCadastrarComponent,
    canActivate: [ AuthGuard ],
    data: { roles: ['ROLE_SERVICO_INCLUIR'] }
  },
  {
    path: ':sequencial',
    component: ServicoCadastrarComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_SERVICO_ALTERAR'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoRoutingModule { }
