import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../seguranca/auth.guard';
import {TipoLocalizacaoComponent} from './tipo-localizacao.component';

const routes: Routes = [
  {
    path: '',
    component: TipoLocalizacaoComponent,
    canActivate: [ AuthGuard ],
    data: { roles: ['ROLE_TIPO_LOCALIZACAO_CONSULTAR'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoLocalizacaoRoutingModule { }
