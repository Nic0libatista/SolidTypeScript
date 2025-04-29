import Cliente from "../classes/cliente";
import { conexao } from "../database/Config";
import commandsPessoa from "../interfaces/commandsPessoa";

export default class clienteRepository implements commandsPessoa<Cliente>{
    pesquisarCPF(cpf: string): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    pesquisarEmail(email: string): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }

    Listar(): Promise<Cliente[]> {
        return new Promise((resolve, reject)=>{ 
            conexao.query("Select * from cliente", (erro, result)=>{
                if(erro){ 
                    return reject (erro);
                } else {
                return resolve (result as Cliente[]);
                }
            })
        })
    }


    apagar(id: number): string {
        throw new Error("Method not implemented.");
    }
    atualizar(obj: Cliente): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    pesquisarId(id: number): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }


    cadastrar(obj: Cliente):Promise<Cliente> {

        return new Promise((resolve, reject)=>{

            conexao.query("INSERT INTO cliente SET?",obj,(erro,result)=>{
                if(erro){ 
                    return reject (erro);
                } else {
                return resolve (obj);
                }
         })
        
        })
    }
}