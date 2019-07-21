import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsuarioRoutingModule} from './usuario-routing.module';
import {UsuarioComponent} from './usuario.component';
import {TableModule} from 'primeng/table';
import {ButtonModule, PanelModule, PasswordModule, ToggleButtonModule, ToolbarModule} from 'primeng/primeng';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import { UsuarioCadastrarComponent } from './usuario-cadastrar/usuario-cadastrar.component';

@NgModule({
  declarations: [UsuarioComponent, UsuarioCadastrarComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    PanelModule,
    SharedModule,
    FormsModule,
    ToggleButtonModule,
    PasswordModule
  ],
  entryComponents: [UsuarioComponent, UsuarioCadastrarComponent]
})
export class UsuarioModule { }
