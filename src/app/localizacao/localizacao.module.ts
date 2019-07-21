import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LocalizacaoRoutingModule} from './localizacao-routing.module';
import {LocalizacaoComponent} from './localizacao.component';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {DialogModule, DropdownModule, ToggleButtonModule, ToolbarModule} from 'primeng/primeng';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {LocalizacaoCadastrarComponent} from './localizacao-cadastrar/localizacao-cadastrar.component';

@NgModule({
  declarations: [LocalizacaoComponent, LocalizacaoCadastrarComponent],
  imports: [
    CommonModule,
    LocalizacaoRoutingModule,
    TableModule,
    PanelModule,
    ButtonModule,
    MenubarModule,
    ToolbarModule,
    SharedModule,
    FormsModule,
    ToggleButtonModule,
    DropdownModule,
    DialogModule
  ],
  entryComponents: [LocalizacaoComponent, LocalizacaoCadastrarComponent]
})
export class LocalizacaoModule { }
