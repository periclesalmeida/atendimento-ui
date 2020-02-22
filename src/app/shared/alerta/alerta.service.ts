import { Injectable } from '@angular/core';
import Swal from "sweetalert2";

const TITULO_ERRO = "ERRO";
const TITULO_AVISO = "AVISO";
const TITULO_SUCESSO = "SUCESSO";

@Injectable({
    providedIn: 'root'
})
export class AlertaService {

    constructor() {
    }

    exibirInformacao(mensagem) {
        Swal.fire({
            type: "info",
            title: TITULO_AVISO,
            text: mensagem
        });
    }

    exibirSucesso(mensagem) {
        Swal.fire({
            type: "success",
            title: TITULO_SUCESSO,
            text: mensagem
        });
    }

    exibirErro(mensagem) {
        Swal.fire({
            type: "error",
            title: TITULO_ERRO,
            text: mensagem
        });
    }

    exibirConfirmacao(titulo, mensagem, tipo) {
        return Swal.fire({
            title: titulo,
            text: mensagem,
            type: tipo,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "NÃO",
            confirmButtonText: "SIM"
        });
    }
}
