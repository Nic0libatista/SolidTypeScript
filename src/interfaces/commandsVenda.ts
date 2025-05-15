import Commands from "./commands";

export default interface commandsVenda<T> extends Commands<T>{
    PesquisarPorData(data:Date):Promise<T[]>
    PesquisarPorIntervalo(data_inicial:Date, data_final:Date):Promise<T[]>
    
}