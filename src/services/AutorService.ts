import {Request, Response} from "express";
import Autor from "../classes/autor";
import AutorRepository from "../repositories/AutorRepository";

export default class AutorService{
    autRepository = new AutorRepository();
    async cadastroAutor(req:Request, res:Response){
        const aut:Autor = new Autor();
        aut.nome = req.body.nome
        aut.email = req.body.email;
        aut.cpf = req.body.cpf;
        aut.telefone = req.body.telefone;
        aut.genero_literario = req.body.genero_literario;
        aut.endereco = req.body.endereco;
        try{
            const rs = await this.autRepository.Cadastrar(aut);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }

    }
    
    async listarAutores(req:Request, res:Response){
        try{
            const rs = await this.autRepository.Listar();
            return res.status(200).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

}