export class Negociacao {
    //sintaxe utilizada pelo TS, evita ter que declarar propriedades, evita ter que receber os parametros e atribuir para as propriedades
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
        ) {}
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

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}