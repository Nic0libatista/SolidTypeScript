import commands from "./commands";

export default interface commandsPessoa<T> extends commands<T>{
    pesquisarCPF(cpf:string):Promise<T>;
    pesquisarEmail(email:string):Promise<T>;
}