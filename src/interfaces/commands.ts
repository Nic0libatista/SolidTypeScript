export default interface commands<T>{
     cadastrar(obj:T):PromiseLike<T>;
     Listar():Promise<T[]>;
     apagar(id:number):string;
     atualizar(obj:T):Promise<T>;
     pesquisarId(id:number):Promise<T>;
}