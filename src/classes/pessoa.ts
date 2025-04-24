import endereco from "./endereco";

// criar a classe pai ou super classe chamada pessoa q passará todos os seus dados ás classes filhas

// a classe pessoa segue o principio O(open/close) do solid, onde temos a classe fechada p modificaçoes e aberta para extensões.
// o qualificador abstract mantém a classe Pessoa abstrata, n permitindo q ela seja materializada, 
// ou seja, n poderá ser uma instancia 
export default abstract class Pessoa{
    id!: number;
    nome!:string;
    cpf!: string;
    email!:string;
    telefone?:string;
    endereco!: endereco;
}