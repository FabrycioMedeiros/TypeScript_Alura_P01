export class Negociacao {
    // sintaxe utilizada em TS
   private _data;
   private _quantidade;
   private _valor;
   
//    Sintaxe utilizada em JS ES6
    // #data;
    // #quatidade;
    // #valor;

    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

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