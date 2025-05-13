import express from "express";
import cors from "cors";
import ClienteService from "./services/clienteService";
import AutorService from "./services/AutorService";
import FuncionarioService from "./services/FuncionarioService";



const app = express();
app.use(express.json());
app.use(cors());

const cli = new ClienteService();
const aut = new AutorService();
const fun = new FuncionarioService()


app.get("/api/v1/cliente/listar",(req,res)=>{
    cli.listarClientes(req,res);
});

app.post("/api/v1/cliente/cadastro",(req,res)=>{
    cli.cadastroCliente(req,res);
})

//-----------------------------------------------------------------------


app.get("/api/v1/autor/listar",(req,res)=>{
    aut.listarAutores(req,res);
});

app.post("/api/v1/autor/cadastro",(req,res)=>{
    aut.cadastroAutor(req,res);
})

//------------------------------------------------------------------------

app.get("/api/v1/funcionario/listar",(req,res)=>{
    fun.listarFuncionario(req,res);
});

app.post("/api/v1/funcionario/cadastro",(req,res)=>{
    fun.cadastroFuncionario(req,res);
})


app.listen(5000,()=>{
    console.log(`Online em: http://127.0.0.1:5000`)
});


