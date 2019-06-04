import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../seguranca/auth.guard';
import {TipoLocalizacaoComponent} from './tipo-localizacao.component';
import {TipoLocalizacaoCadastrarComponent} from './tipo-localizacao-cadastrar/tipo-localizacao-cadastrar.component';

const routes: Routes = [
  {
    path: '',
    component: TipoLocalizacaoComponent,
    canActivate: [ AuthGuard ],
    data: { roles: ['ROLE_TIPO_LOCALIZACAO_CONSULTAR'] }
  },
  {
    path: 'novo',
    component: TipoLocalizacaoCadastrarComponent,
    canActivate: [ AuthGuard ],
    data: { roles: ['ROLE_TIPO_LOCALIZACAO_INCLUIR'] }
  },
  {
    path: ':codigo',
    component: TipoLocalizacaoCadastrarComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_TIPO_LOCALIZACAO_ALTERAR'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoLocalizacaoRoutingModule { }
