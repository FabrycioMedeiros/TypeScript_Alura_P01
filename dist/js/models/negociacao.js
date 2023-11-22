export class Negociacao {
    //sintaxe utilizada pelo TS, evita ter que declarar propriedades, evita ter que receber os parametros e atribuir para as propriedades
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    // sintaxe utilizada em TS
    //    private _data: Date;
    //    private _quantidade: number;
    //    private _valor: number;
    //    Sintaxe utilizada em JS ES6
    // #data;
    // #quatidade;
    // #valor;
    // get data(): Date {
    //     return this._data;
    // }
    // get quantidade(): number {
    //     return this._quantidade;
    // }
    // get valor(): number {
    //     return this._valor;
    // }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
