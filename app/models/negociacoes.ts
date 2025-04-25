import { Negociacao } from './negociacao.js';
//Garante que a classe Negociacoes não pode ser instanciada diretamente, apenas através de uma instância da classe Negociacao.
// Isso é feito através do modificador de acesso private na propriedade negociacoes, que impede que ela seja acessada fora da classe Negociacoes.
export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}
