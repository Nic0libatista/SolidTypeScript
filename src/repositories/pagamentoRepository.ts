import itemVendido from "../classes/itemVendido";
import Pagamento from "../classes/pagamento";
import { conexao } from "../database/Config";
import Commands from "../interfaces/commands";

export default class pagamentoRepository implements Commands<Pagamento>{
    Cadastrar(obj: Pagamento): Promise<Pagamento> {
        return new Promise((resolve,reject)=>{
            //Antes de cadastrar um cliente, temos de cadastrar o
            //endereço deste cliente e, então obtemos o id do endereço
            //cadastrado e alocamos em uma variável para depois inserir
            //na tabela clientes, no campo id_endereco
            let id_end:any = null;
            conexao.query("INSERT INTO pagamento(id_venda,total_pagar) Values (?,?)",
            [
                obj.venda.id,
                obj.total_pagar
            ],
                (erro,end:any)=>{
            
          
                if(erro){
                    return reject(erro);
                }
                else{
                    return resolve(obj)
                }                    
            })
        })
    }
    Listar(): Promise<Pagamento[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from pagamento",(erro, result)=>{
                if(erro){
                    return reject(erro)
                }
                else{
                    return resolve(result as Pagamento[])
                }
            })
        })
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Pagamento): Promise<Pagamento> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Pagamento> {
        throw new Error("Method not implemented.");
    }
    
}
    