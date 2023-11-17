import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];
    // mesma forma de escrita para Arrays
    //  private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }
// lista(): ReadonlyArray<Negociacao> outra forma de escrita
    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}
