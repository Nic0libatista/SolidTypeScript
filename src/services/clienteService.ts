import {Request, Response} from "express";
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
        try {
            const rs = await this.CliRepository.cadastrar(cli);
            return res.status(201).json(rs);
        }
      catch(erro){
        return res.status(500).json(erro)
      }
    }

    async listarClientes(req:Request, res:Response){
        try{
            const rs = await this.CliRepository.Listar()
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
          }
    }
}