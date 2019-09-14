import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../seguranca/auth.guard';
import {LocalizacaoComponent} from './localizacao.component';
import {LocalizacaoCadastrarComponent} from './localizacao-cadastrar/localizacao-cadastrar.component';

const routes: Routes = [
  {
    path: '',
    component: LocalizacaoComponent,
    canActivate: [ AuthGuard ],
    data: { roles: ['ROLE_LOCALIZACAO_CONSULTAR'] }
  },
  {
    path: 'novo',
    component: LocalizacaoCadastrarComponent,
    canActivate: [ AuthGuard ],
    data: { roles: ['ROLE_LOCALIZACAO_INCLUIR'] }
  },
  {
    path: ':id',
    component: LocalizacaoCadastrarComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_LOCALIZACAO_ALTERAR'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalizacaoRoutingModule { }
