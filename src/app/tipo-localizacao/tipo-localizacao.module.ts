import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TipoLocalizacaoRoutingModule} from './tipo-localizacao-routing.module';
import {TipoLocalizacaoComponent} from './tipo-localizacao.component';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {ToolbarModule} from 'primeng/primeng';
import {TipoLocalizacaoCadastrarComponent} from './tipo-localizacao-cadastrar/tipo-localizacao-cadastrar.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [TipoLocalizacaoComponent, TipoLocalizacaoCadastrarComponent],
  imports: [
    CommonModule,
    TipoLocalizacaoRoutingModule,
    TableModule,
    PanelModule,
    ButtonModule,
    MenubarModule,
    ToolbarModule,
    SharedModule,
    FormsModule
  ],
  entryComponents: [TipoLocalizacaoCadastrarComponent]
})
export class TipoLocalizacaoModule { }
