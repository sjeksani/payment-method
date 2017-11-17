export interface PaymentMethodList {
    //profile:object,
    card:CardList[],
    check:CheckList[]
}

export interface CardList{
    "lastName": string,
    "paymentToken": string,
    "healthCapability": string,
    "accountType": string,
    "ccNumber": string,
    "cardType": string,
    "expDate": string,
    "firstName": string,
    "ccName": string,
    "nickName": string,
    "middleInitial": string
}

export interface CheckList{
    "lastName": string,
    "paymentToken": string,
    "accountNumber": string,
    "bankName": string,
    "accountType": string,
    "firstName": string,
    "name": string,
    "nickName": string,
    "middleInitial": string
}