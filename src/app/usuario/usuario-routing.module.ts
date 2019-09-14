import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../seguranca/auth.guard';
import {UsuarioComponent} from './usuario.component';
import {UsuarioCadastrarComponent} from './usuario-cadastrar/usuario-cadastrar.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent,
    canActivate: [ AuthGuard ],
    data: { roles: ['ROLE_USUARIO_CONSULTAR'] }
  },
  {
    path: 'novo',
    component: UsuarioCadastrarComponent,
    canActivate: [ AuthGuard ],
    data: { roles: ['ROLE_USUARIO_INCLUIR'] }
  },
  {
    path: ':id',
    component: UsuarioCadastrarComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_USUARIO_ALTERAR'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
