import commandsPessoa from "./commandsPessoa";

export default interface commandsFuncionario<T> extends commandsPessoa<T>{
    pesquisarCargo(cargo:string):Promise<T>[];
    pesquisarSalario(salario:number):Promise<T>[];

}