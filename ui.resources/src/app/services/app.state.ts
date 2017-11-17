import {PaymentTypeVO} from "../model/payment-type.vo";

//paymentTypes - map values (like 'CC') to AEM JSON list of key-value pairs
//paymentType will default to first value in 'paymentTypes'
//  in some instances for other applications, one or more payment types may not be available
export class EWalletTx {
    //validations - transaction ID needs to be set, amount > 0, sourceURL not null, nextURL not null
  steps: string[]; //"Amount", "Payment", "Review"; "RxList", "Payment", "Review";
  paymentTypes: string[]; //New Field - "CC", "CA", "SA";
  featureTitle: string; //"Pay Medical Bill"
  transactionId: string;
  paymentAmount: any;
  sourceURL: string; // For Cancel Action
  nextURL: string;
  isDefaultPayment: boolean; // Do we really need this
  selectedPaymentMethod: any;//PaymentMethod;
}

export class AppState {
    public constructor(public readonly paymentType:PaymentTypeVO) {
    }
}
