import Produto from "./produto";
import Venda from "./venda";

export default class itemVendido{
    id!:number;
    venda!:Venda;
    produtos!:Produto;
    quantidade!:number;
}