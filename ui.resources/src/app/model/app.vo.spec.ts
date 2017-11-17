import { AddCreditCardVO } from "./add-credit-card.vo";
import { AddAchAccountVO } from "./add-ach-account.vo";
import { AppVO } from "./app.vo";
import { PaymentTypeVO } from "../model/payment-type.vo";
import { PaymentMethodList} from '../model/payment-method-list.vo';

describe('AppVO', () => {

    beforeEach(() => {
    });

    describe('constructor', () => {
        it ('should preserve the values that it uses for initialization',
            function() {
                //
                let paymentTypeVO:PaymentTypeVO = new PaymentTypeVO('TYPE', 'LABEL');
                let paymentTypeVOOptions:PaymentTypeVO[] = [paymentTypeVO];
                let paymentMethodList:PaymentMethodList = (<PaymentMethodList>{});
                let addCreditCardVO:AddCreditCardVO = new AddCreditCardVO();
                let addAchAccountVO:AddAchAccountVO = new AddAchAccountVO();
                //
                expect(paymentTypeVO.label).toBe('LABEL');
                expect(paymentTypeVO.type).toBe('TYPE');
                //
                expect(addCreditCardVO.firstName).toBe("");
                expect(addCreditCardVO.middleInitial).toBe("");
                expect(addCreditCardVO.lastName).toBe("");
                expect(addCreditCardVO.creditCardNumber).toBe("");
                expect(addCreditCardVO.month).toBe(1);
                //
                expect(addAchAccountVO.firstName).toBe("");
                expect(addAchAccountVO.middleName).toBe("");
                expect(addAchAccountVO.lastName).toBe("");
                expect(addAchAccountVO.routingNumber).toBe("");
                expect(addAchAccountVO.accountNumber).toBe("");
                expect(addAchAccountVO.confirmAccountnumber).toBe("");
                expect(addAchAccountVO.accountNickname).toBe("");
                expect(addAchAccountVO.saveMethod).toBe(false);
                //
                let appVo: AppVO = new AppVO(
                    paymentTypeVO, paymentTypeVOOptions,
                    addCreditCardVO, addAchAccountVO, paymentMethodList);
                expect(appVo).toBeDefined();
                expect(appVo.paymentTypeVO).toBe(paymentTypeVO);
                expect(appVo.paymentTypeVOOptions).toBe(paymentTypeVOOptions);
                expect(appVo.paymentTypeVOOptions[0]).toBe(paymentTypeVO);
                expect(appVo.paymentMethodList).toBe(paymentMethodList);
                expect(appVo.addCreditCardVO).toBe(addCreditCardVO);
                expect(appVo.AddAchAccountVO).toBe(addAchAccountVO);
                //expect(feedObj.guarantoraccount).toBe("guarantor");
                //expect(feedObj.docSourceSystem).toBe("doSourceSystem");
                //expect(feedObj.statementBalance).toBe("statementBalance");
                //expect(feedObj.docDate).toBe("docDate");
                //expect(feedObj.paymentDueDate).toBe("paymentDueDate");
            }
        );
    });

});