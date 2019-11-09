import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {AppHttp} from '../seguranca/app-http.service';
import {Atendimento, Localizacao, Servico} from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {

  private resourceUrl = environment.API_URL + '/atendimento';

  constructor(private appHttp: AppHttp) { }

  consultarPorId(sequencial): any {
    return this.appHttp.get<any>(`${this.resourceUrl}/${sequencial}`);
  }

  consutlarMovimentacaoPorLocalizacao(servicos): any {
    return this.appHttp.get<any>(`${this.resourceUrl}/movimentacao/${servicos}`);
  }

  consultarMovimentacaoChamadaPorServicos(servicos): any {
    return this.appHttp.get<any>(`${this.resourceUrl}/movimentacao-chamado/${servicos}`);
  }

  gerar(servico: Servico): any {
    return this.appHttp.post<any>(`${this.resourceUrl}/gerar/${servico.id}`);
  }

  gerarPrioridade(servico: Servico): any {
    return this.appHttp.post<any>(`${this.resourceUrl}/gerar-prioridade/${servico.id}`);
  }

  chamarProximo(localizacao: Localizacao): any {
    return this.appHttp.post<any>(`${this.resourceUrl}/chamar-proximo/${localizacao.id}`);
  }

  chamarNovamente(atendimento: Atendimento, localizacao: Localizacao): any {
    return this.appHttp.post<any>(`${this.resourceUrl}/chamar-novamente/${atendimento.id}/${localizacao.id}`);
  }
}
