import { ContaCorrente, ContaPoupanca } from "./Conta.js";
import * as bancoDeDados from "./Banco.js";

const contaPoupanca = new ContaPoupanca(2, 0.1);
contaPoupanca.saldo = 30;

console.log(contaPoupanca);

console.log(contaPoupanca.getRendimento());

bancoDeDados.clientesCadastrados[0] = "";

contaPoupanca.saldo = 100;

console.log(contaPoupanca);
