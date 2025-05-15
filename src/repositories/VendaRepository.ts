import Venda from "../classes/venda";
import { conexao } from "../database/Config";
import commandsVenda from "../interfaces/commandsVenda";

export default class VendaRepository implements commandsVenda<Venda>{
    PesquisarPorData(data: Date): Promise<Venda[]> {
        throw new Error("Method not implemented.");
    }
    PesquisarPorIntervalo(data_inicial: Date, data_final: Date): Promise<Venda[]> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Venda): Promise<Venda> {
         return new Promise((resolve,reject)=>{
            //Antes de cadastrar um cliente, temos de cadastrar o
            //endereço deste cliente e, então obtemos o id do endereço
            //cadastrado e alocamos em uma variável para depois inserir
            //na tabela clientes, no campo id_endereco
            let id_end:any = null;
            conexao.query("INSERT INTO venda(id_cliente,id_funcionario) Values (?,?)",
            [obj.cliente,
                obj.funcionario
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
    
    Listar(): Promise<Venda[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from venda",(erro, result)=>{
                if(erro){
                    return reject(erro)
                }
                else{
                    return resolve(result as Venda[])
                }
            })
        })
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Venda): Promise<Venda> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Venda> {
        throw new Error("Method not implemented.");
    }
    
}