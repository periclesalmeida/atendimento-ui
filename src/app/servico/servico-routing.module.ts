import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../seguranca/auth.guard';
import {ServicoComponent} from './servico.component';

const routes: Routes = [
  {
    path: '',
    component: ServicoComponent,
    canActivate: [ AuthGuard ],
    data: { roles: ['ROLE_SERVICO_CONSULTAR'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoRoutingModule { }
