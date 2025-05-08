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
            conexao.query("Select * from clientes", (erro, result)=>{
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

            // antes de cadastrar um cliente temos q cadastrar o endereco desse cliente e ent obtemos o id do endereço cadastrado
            // e alocamos em uma variavel para depois inserir na tabela clientes no campo id_endereco
            conexao.query("INSERT INTO endereco{tipo_logradouro. logradouro, numero, complemento,cep,bairro}) Values (?,?,?,?,?,?)",
            [obj.endereco.tipo_logradouro,
                 obj.endereco.logadouro,
                  obj.endereco.numero, 
                  obj.endereco.complemento,
                  obj.endereco.cep,
                  obj.endereco.bairro],
                  (erro,end)=>{}
            )
            conexao.query("INSERT INTO clientes SET?",obj,(erro,result)=>{
                if(erro){ 
                    return reject (erro);
                } else {
                return resolve (obj);
                }
         })
        
        })
    }
}