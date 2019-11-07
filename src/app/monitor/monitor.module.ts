import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { MonitorRoutingModule } from './monitor-routing.module';
import { MonitorSelecionarServicoComponent } from './monitor-selecionar-servico/monitor-selecionar-servico.component';
import { MonitorTelaComponent } from './monitor-tela/monitor-tela.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [MonitorSelecionarServicoComponent, MonitorTelaComponent],
  imports: [
    CommonModule,
    MonitorRoutingModule,
    PanelModule,
    ButtonModule
  ],
  entryComponents: [MonitorSelecionarServicoComponent, MonitorTelaComponent]
})
export class MonitorModule { }
