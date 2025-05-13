import CommandsPessoa from "./commandsPessoa";

export default interface CommandsFuncionario<T> extends CommandsPessoa<T>{
    PesquisarCargo(cargo:string):T[]
    PesquisarSalario(salario:number):T[]
}