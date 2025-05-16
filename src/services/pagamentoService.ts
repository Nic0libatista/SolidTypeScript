import {Request, Response} from "express";
import ItemVendido from "../classes/itemVendido";
import itemVendidoRepository from "../repositories/ItemVendidoRepository";
import Produto from "../classes/produto";
import Venda from "../classes/venda";
import itemVendido from "../classes/itemVendido";
import pagamentoRepository from "../repositories/pagamentoRepository";
import pagamento from "../classes/pagamento";

export default class pagamentoService{
    pagRepository = new pagamentoRepository();
    async cadastroPagamento(req:Request, res:Response){
        const pag:pagamento = new pagamento();
      //  console.log(req.body)
        pag.venda = new Venda()
        pag.venda.id = req.body.id_venda;
        pag.total_pagar = req.body.total_pagar
        try{
            const rs = await this.pagRepository.Cadastrar(pag);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }

    }
    
    async listarPagamento(req:Request, res:Response){
        try{
            const rs = await this.pagRepository.Listar();
            return res.status(200).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

}