import Cliente from "./cliente";
import Funcionario from "./funcionario";

export default class Venda{
    id!:number;
    cliente!:Cliente;
    funcionario!:Funcionario;
    data_hora!:Date;
}