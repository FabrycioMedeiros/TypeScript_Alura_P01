export class Negociacao {
    //sintaxe utilizada pelo TS, evita ter que declarar propriedades, evita ter que receber os parametros e atribuir para as propriedades
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    // sintaxe utilizada em TS
    //    private _data: Date;
    //    private _quantidade: number;
    //    private _valor: number;
    //    Sintaxe utilizada em JS ES6
    // #data;
    // #quatidade;
    // #valor;
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
