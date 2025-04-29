import { Request, Response } from "express";;
import Cliente from "../classes/cliente";
import clienteRepository from "../repositories/ClienteRepository";

export default class ClienteService{
    CliRepository = new clienteRepository();
    async cadastroCliente(req:Request,res: Response){
        const cli:Cliente = new Cliente();
        cli.nome = req.body.nome;
        cli.email = req.body.email;
        cli.cpf = req.body.cpf;
        cli.telefone = req.body.telefone;
        cli.aniversario = req.body.aniversario;
        cli.endereco = req.body.endereco;

        const rs = await this.CliRepository.cadastrar(cli);
        return rs;
    }
}