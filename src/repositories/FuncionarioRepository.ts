import Funcionario from "../classes/funcionario";
import commandsPessoa from "../interfaces/commandsPessoa";

export default class FuncionarioRepository implements commandsPessoa<Funcionario>{
    pesquisarCPF(cpf: string): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    pesquisarEmail(email: string): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    cadastrar(obj: Funcionario): PromiseLike<Funcionario> {
        throw new Error("Method not implemented.");
    }
    Listar(): Promise<Funcionario[]> {
        return new Promise((resolve, reject)=>{ 

            conexao.query("Select * from funcionario", (erro, result)=>{
                if(erro){ 
                    return reject (erro);
                } else {
                return resolve (result as Funcionario[]);
                }
            })
        })
    }

    apagar(id: number): string {
        throw new Error("Method not implemented.");
    }
    atualizar(obj: Funcionario): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    pesquisarId(id: number): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    
}