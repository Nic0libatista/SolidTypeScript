import {Request, Response} from "express";
import ItemVendido from "../classes/itemVendido";
import itemVendidoRepository from "../repositories/ItemVendidoRepository";
import Produto from "../classes/produto";
import Venda from "../classes/venda";
import itemVendido from "../classes/itemVendido";

export default class itensVendidoService{
    itnRepository = new itemVendidoRepository();
    async cadastroItemVendido(req:Request, res:Response){
        const itn:itemVendido = new ItemVendido();
      //  console.log(req.body)
        itn.quantidade = req.body.quantidade,
        itn.venda = new Venda()
        itn.venda.id = req.body.id_venda;
        itn.produto = new Produto()
        itn.produto.id = req.body.id_produto;
        try{
            const rs = await this.itnRepository.Cadastrar(itn);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }

    }
    
    async listarItemVendido(req:Request, res:Response){
        try{
            const rs = await this.itnRepository.Listar();
            return res.status(200).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

}