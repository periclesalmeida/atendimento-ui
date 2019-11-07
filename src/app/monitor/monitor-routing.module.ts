import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';
import { MonitorSelecionarServicoComponent } from './monitor-selecionar-servico/monitor-selecionar-servico.component';

const routes: Routes = [
  {
    path: 'selecionar-servico',
    component: MonitorSelecionarServicoComponent,
    canActivate: [ AuthGuard ],
    data: { roles: ['ROLE_ATENDIMENTO_CONSULTAR'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitorRoutingModule { }
