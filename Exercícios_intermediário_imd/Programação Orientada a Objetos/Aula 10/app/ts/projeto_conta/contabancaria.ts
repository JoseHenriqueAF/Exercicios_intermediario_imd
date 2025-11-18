import { SaldoInsuficienteError } from "./errors/saldoinsuficienteerror";
import { ValorInvalidoError } from "./errors/valorinvalidoerror";

export class ContaBancaria {

    private _saldo: number;

    public constructor() {
        this._saldo = 0;
    }

    public depositar(valor: number): void {
        if (valor <= 0) {
            throw new ValorInvalidoError('Valor inválido para depósito', valor);

        }

        this._saldo += valor;

    }

    public sacar(valor: number): void {
        if (valor <= 0) {
            throw new ValorInvalidoError('Valor inválido para saque', valor);

        }

        if (this._saldo - valor < 0) {
            throw new SaldoInsuficienteError("Não suficiente", this._saldo);
        }

        this._saldo -= valor;
    }

    public transferir(valor: number, contaDestino: ContaBancaria) {
        this.sacar(valor);
        contaDestino.depositar(valor);

    }

    
    public get saldo() : number {
        return this._saldo;
    }
    


}