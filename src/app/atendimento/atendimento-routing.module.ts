import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../seguranca/auth.guard';
import {AtendimentoGerarComponent} from './atendimento-gerar/atendimento-gerar.component';
import {AtendimentoAtenderComponent} from './atendimento-atender/atendimento-atender.component';

const routes: Routes = [
  {
    path: 'gerar',
    component: AtendimentoGerarComponent,
    canActivate: [ AuthGuard ],
    data: { roles: ['ROLE_SERVICO_CONSULTAR'] }
  },
  {
    path: 'atender',
    component: AtendimentoAtenderComponent,
    canActivate: [ AuthGuard ],
    data: { roles: ['ROLE_SERVICO_CONSULTAR'] }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtendimentoRoutingModule { }
