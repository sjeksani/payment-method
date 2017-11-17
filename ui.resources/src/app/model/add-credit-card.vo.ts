export class AddCreditCardVO {
    public firstName:string = "";
    public middleInitial:string = "";
    public lastName:string = "";
    public creditCardNumber:string = "";
    public year:number = (new Date()).getFullYear();
    public month:number = 1;
    public constructor() {
    }
}
