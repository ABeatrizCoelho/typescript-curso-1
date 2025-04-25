//Garante que a classe Negociacoes não pode ser instanciada diretamente, apenas através de uma instância da classe Negociacao.
// Isso é feito através do modificador de acesso private na propriedade negociacoes, que impede que ela seja acessada fora da classe Negociacoes.
export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
