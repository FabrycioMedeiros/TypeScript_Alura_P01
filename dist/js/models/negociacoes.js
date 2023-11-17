export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    // mesma forma de escrita para Arrays
    //  private negociacoes: Array<Negociacao> = [];
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // lista(): ReadonlyArray<Negociacao> outra forma de escrita
    lista() {
        return this.negociacoes;
    }
}
