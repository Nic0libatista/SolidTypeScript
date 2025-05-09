import Autor from "../classes/autor";
import commandsPessoa from "../interfaces/commandsPessoa";

export default class AutorRepository implements commandsPessoa<Autor>{
    pesquisarCPF(cpf: string): Promise<Autor> {
        throw new Error("Method not implemented.");
    }
    pesquisarEmail(email: string): Promise<Autor> {
        throw new Error("Method not implemented.");
    }
    cadastrar(obj: Autor): PromiseLike<Autor> {
        throw new Error("Method not implemented.");
    }
    Listar(): Promise<Autor[]> {
        return new Promise((resolve, reject)=>{ 

            conexao.query("Select * from autor", (erro, result)=>{
                if(erro){ 
                    return reject (erro);
                } else {
                return resolve (result as Autor[]);
                }
            })
        })
    }


    }
    apagar(id: number): string {
        throw new Error("Method not implemented.");
    }
    atualizar(obj: Autor): Promise<Autor> {
        throw new Error("Method not implemented.");
    }
    pesquisarId(id: number): Promise<Autor> {
        throw new Error("Method not implemented.");
    }
    
}