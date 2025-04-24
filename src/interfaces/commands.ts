export default interface commands{
     cadastrar<T>(obj:T): T;
     atualizar<T>(obj:T): T;
     apagar(id:number):string;
}