import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ServicoRoutingModule} from './servico-routing.module';
import {ServicoComponent} from './servico.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DropdownModule, Panel, PanelModule, ToggleButtonModule, ToolbarModule} from 'primeng/primeng';
import { ServicoCadastrarComponent } from './servico-cadastrar/servico-cadastrar.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ServicoComponent, ServicoCadastrarComponent],
  imports: [
    CommonModule,
    ServicoRoutingModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    PanelModule,
    SharedModule,
    FormsModule,
    DropdownModule,
    ToggleButtonModule
  ],
  entryComponents: [ServicoComponent, ServicoCadastrarComponent]
})
export class ServicoModule { }
