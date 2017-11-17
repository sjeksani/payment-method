import { AddCreditCardVO } from "./add-credit-card.vo";
import { AddAchAccountVO } from "./add-ach-account.vo";
import { PaymentTypeVO } from "../model/payment-type.vo";
import { PaymentMethodList} from '../model/payment-method-list.vo';
export class AppVO {
    public readonly ready:boolean = true;
    public constructor(
            public readonly paymentTypeVO:PaymentTypeVO,
            public readonly paymentTypeVOOptions:PaymentTypeVO[],
            public readonly addCreditCardVO:AddCreditCardVO,
        public readonly AddAchAccountVO:AddAchAccountVO,
        public readonly paymentMethodList:PaymentMethodList) {
    }
}
