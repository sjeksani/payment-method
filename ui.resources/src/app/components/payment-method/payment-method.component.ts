import { Component, Input, OnInit } from '@angular/core';
import { PaymentMethodList } from "../../model/payment-method-list.vo";
import { AppService } from "../../services/app.service";
import { AppState } from "../../services/app.state";
import { AppVO } from "../../model/app.vo"
import { PaymentTypeVO } from "../../model/payment-type.vo";
import { KPService } from "../../services/kp.service";
import { ModelService } from '../../services/model.service';
import { templates } from '../../services/template.service';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Component( {
    selector: 'pm-payment-method',
    template: templates.GetTemplate('paymentmethod.html')
} )
export class PaymentMethodComponent implements OnInit {

    @Input() public readonly model:PaymentTypeVO;
    @Input() public readonly modelOptions:PaymentTypeVO[];
    @Input() public readonly modelPaymentMethodList:PaymentMethodList;
    public readonly appState$:Observable<AppState>;
    public readonly initialModel$:Observable<AppVO>;
    //response:PaymentMethodList;
    //cardData=[];

    constructor(private appSvc:AppService, private modelSvc:ModelService) {
        this.appState$ = appSvc.getAppState$();
        this.initialModel$ = this.modelSvc.getInitialModel$();
        //this.modelOptions = [
        //    PaymentTypeVO.newForCreditCard(),
        //    PaymentTypeVO.newForCheckingAccount(),
        //    PaymentTypeVO.newForSavingsAccount()];
        //this.model = this.modelOptions[1];
    }
    ngOnInit() {
        //this.model = this.modelOptions[1];//TO DO - Remove This!
        //console.log('paymentType,model - ' + JSON.stringify(this.model));
        //console.log('paymentType,modelOptions - ' + JSON.stringify(this.modelOptions));
        //console.log('paymentType,modelPaymentMethodList - ' + JSON.stringify(this.modelPaymentMethodList));
        //this.initialModel$.subscribe(
        //    function(data) {
        //        console.log('PaymentMethodComponent,data.paymentMethodList - ' + data.paymentMethodList);
        //    });
        // let data = this.appSvc.getPaymentList().subscribe(res=>this.showResponse(res),err=>this.showError(err));
        //let data = this.appSvc.getPaymentList();
        //this.cardData = data.profile.card;
       
    }
    valueChange() {
        this.appSvc.updateAppState(new AppState(this.model));
        console.log('paymentType,model - ' + JSON.stringify(this.model));
    }

    //showResponse(res){
    //    //console.log(res);
    //    //this.cardData = res.profile.card;
    //}
    
    showError(err){
        console.log(err);
    }

}
