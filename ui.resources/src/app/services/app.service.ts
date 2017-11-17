import { Injectable, OnInit } from '@angular/core';
import { Http, URLSearchParams } from "@angular/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/combineLatest';
//import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { AddCreditCardVO } from "../model/add-credit-card.vo";
import { AddAchAccountVO } from "../model/add-ach-account.vo";
import { PaymentMethodList} from '../model/payment-method-list.vo';
import { AppState } from "./app.state"
import { EWalletTx } from "./app.state"
import { AppVO } from "../model/app.vo"
import { PaymentTypeVO } from "../model/payment-type.vo"
import { ApiService } from "./api.service";
import { JSONConfigsService } from "./jsonConfigs.service";
import { ModelService } from "./model.service";
import { SessionService } from "./session.service";


@Injectable()
export class AppService extends ApiService {
    private appState$:ReplaySubject<AppState>;
    private initialModel$:Observable<AppVO>;
    constructor(
            http: Http, jsonConfigSvc: JSONConfigsService,
            sessionSvc: SessionService, modelSvc: ModelService) {
        super(http, jsonConfigSvc);
        this.appState$ = new ReplaySubject<AppState>(1);

        //get/return EWalletTx here
        //validate EWalletTx here
        //get payment method list for this signed-in user (on EPS profile, like user-specific credit card)
        //build page value object based on initial data/calls
        //create multiple observables - EWalletTx (session), payment method list, appState$
        this.initialModel$ = modelSvc.getInitialModel$();
        let targetUrl:string = window.location.href;
        console.log('targetUrl = ' + targetUrl);
        let startOfUrlFile:number = targetUrl.lastIndexOf('payment-method');
        console.log('startOfUrlFile = ' + startOfUrlFile);
        if (startOfUrlFile !== -1) {
            targetUrl = targetUrl.substring(0, startOfUrlFile);
            console.log('targetUrl = ' + targetUrl);
        }
        targetUrl = targetUrl + "payment-method.json.html";
        console.log('targetUrl (using) = ' + targetUrl);
        Observable.combineLatest(
                    http.get(targetUrl, { withCredentials: true }),
                    this.mockSessionWebServiceCall(),
                    this.getPaymentList$()
            ).subscribe(
                ([res, ewt, pl]) => {
                        let data:any = res.json();
                        console.log('data = ' + JSON.stringify(data));
                        let accv:AddCreditCardVO = new AddCreditCardVO();
                        let aachv:AddAchAccountVO = new AddAchAccountVO();
                        let ptvOptions:PaymentTypeVO[] = [];
                        let ptv:PaymentTypeVO = ptvOptions[1];
                        let ptvlist:PaymentMethodList =
                            <PaymentMethodList>{
                                card: pl.profile.card,
                                check: pl.profile.check
                            };
                        try {
                            for (var i = 0; i < data.comps.length; i++) {
                                if (data.comps[i].payment_types) {
                                    //
                                    for (var j = 0; j < data.comps[i].payment_types.length; j++) {
                                        //
                                        var nextValue = data.comps[i].payment_types[j].value;
                                        var nextText = data.comps[i].payment_types[j].text;
                                        //apply filter - if payment type isn't in session data, ignore payment type
                                        if (ewt.paymentTypes.findIndex((x) => (x === nextValue)) === -1) {
                                            continue;
                                        }
                                        //
                                        let nextPtv:PaymentTypeVO =
                                            new PaymentTypeVO(nextValue, nextText);
                                        ptvOptions.push(nextPtv);
                                        if (!ptv) {
                                            ptv = nextPtv;
                                        }
                                    }
                                }
                            }
                        } catch (subErr) {
                            throw subErr;
                        }
                        this.appState$.next(new AppState(ptv));
                        modelSvc.setInitialModel(new AppVO(ptv, ptvOptions, accv, aachv, ptvlist));
                    //});
                },
                (err) => {
                    throw err;
                }
            );
        //sessionSvc.delete$('ns1', 'ns2').subscribe(
        //sessionSvc.get$('ns1', 'ns2').subscribe(
        //sessionSvc.post$('ns1', 'ns2', '{"a": "b"}').subscribe(
        //sessionSvc.put$('ns1', 'ns2', '{"a": "b"}').subscribe(
        //sessionSvc.patch$('ns1', 'ns2', '{"a": "b"}').subscribe(
        //    (response) => {console.log('Response - ' + response.status)},
        //    (error) => {console.log('Error - ' + JSON.stringify(error));});
    }
    private mockSessionWebServiceCall():Observable<EWalletTx> {
        let o:EWalletTx = new EWalletTx();
        o.paymentTypes = ["CC", "CA", "SA"];//["CC", "CA"];
        return Observable.of(o);
    }
    public getAppState$():Observable<AppState> {
        return this.appState$.asObservable();
    }
    public updateAppState(nextAppState:AppState):void {
        //
        this.appState$.next(nextAppState);
    }

    public getPaymentList$():Observable<any> {
        //this.paymentPlan$ = super.get(
        //    "/mycare/coverage-costs/v1/medical/paymentplan",
        //    {'x-guarantoraccountnumber': guarantorAccount}, true, true);
        let outValue:Observable<any>;
        outValue = new BehaviorSubject<any>({
            "profile": {
                "card": [
                    {
                        "lastName": "Last",
                        "paymentToken": "2",
                        "healthCapability": "N",
                        "accountType": "creditcard",
                        "ccNumber": 1417,
                        "cardType": "MasterCard",
                        "expDate": "expiry",
                        "firstName": "First",
                        "ccName": "FirstLast",
                        "nickName": null,
                        "middleInitial": ""
                    },
                    {
                        "lastName": "K",
                        "paymentToken": "1",
                        "healthCapability": "N",
                        "accountType": "creditcard",
                        "ccNumber": 7811,
                        "cardType": "American Express",
                        "expDate": 1612,
                        "firstName": "Goutham",
                        "ccName": "GouthamK",
                        "nickName": "my rewards card",
                        "middleInitial": ""
                    },
                    {
                        "lastName": "Ho",
                        "paymentToken": "4",
                        "healthCapability": "N",
                        "accountType": "creditcard",
                        "ccNumber": 1004,
                        "cardType": "American Express",
                        "expDate": 2012,
                        "firstName": "Jack",
                        "ccName": "JoeJoe",
                        "nickName": "amex",
                        "middleInitial": "J"
                    }
                ],
                "xmlns:aes": "xalan://dpt.dss.is.ws.payment.proxy.cryptography.AESCipherUrlSafe",
                "xmlns:xalan": "http://xml.apache.org/xalan",
                "profileId": "<encrypted profileid>",
                "check":    [
                         {
                      "lastName": "Lastname",
                      "paymentToken": "5",
                      "accountNumber": 4368,
                      "bankName": "Bank",
                      "accountType": "checking",
                      "firstName": "Firstname",
                      "name": "FirstnamecheckingLastnamechecking",
                      "nickName": "testCheckingAC",
                      "middleInitial": ""
                   },
                         {
                      "lastName": "Last",
                      "paymentToken": "3",
                      "accountNumber": 4567,
                      "bankName": "Bank",
                      "accountType": "checking",
                      "firstName": "First",
                      "name": "FirstcheckingLastchecking",
                      "nickName": "",
                      "middleInitial": ""
                   }
                ],
                "defaultToken": "2",         
                "paymentToken": "<encrypted paymenttoken>",
                "xmlns:mes": "http://message2.eps.kp.org"
            }
        });
        return outValue;
    
    }

}