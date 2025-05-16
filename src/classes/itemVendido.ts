import Produto from "./produto";
import Venda from "./venda";
export default class ItemVendido{
    id!:number;
    venda!:Venda;
    produto!:Produto;
    quantidade!:number;
}