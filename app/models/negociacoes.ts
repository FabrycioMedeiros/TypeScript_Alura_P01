import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];
    // mesma forma de escrita para Arrays
    //  private negociacoes: Array<Negociacao> = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }
// lista(): ReadonlyArray<Negociacao> outra forma de escrita
    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}
