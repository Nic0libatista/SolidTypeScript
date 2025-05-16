import itemVendido from "../classes/itemVendido";
import { conexao } from "../database/Config";
import Commands from "../interfaces/commands";

export default class itemVendaRepository implements Commands<itemVendido>{
    Cadastrar(obj: itemVendido): Promise<itemVendido> {
        return new Promise((resolve,reject)=>{
            //Antes de cadastrar um cliente, temos de cadastrar o
            //endereço deste cliente e, então obtemos o id do endereço
            //cadastrado e alocamos em uma variável para depois inserir
            //na tabela clientes, no campo id_endereco
            let id_end:any = null;
            conexao.query("INSERT INTO itensvenda(id_venda,id_produto,quantidade) Values (?,?,?)",
            [
                obj.venda.id,
                obj.produto.id,
                obj.quantidade
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
        
    Listar(): Promise<itemVendido[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from itensvenda",(erro, result)=>{
                if(erro){
                    return reject(erro)
                }
                else{
                    return resolve(result as itemVendido[])
                }
            })
        })
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: itemVendido): Promise<itemVendido> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<itemVendido> {
        throw new Error("Method not implemented.");
    }
    
}