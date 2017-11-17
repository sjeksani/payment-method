import { Component, OnInit } from '@angular/core';
import { AppState } from "./services/app.state"
import { AppVO } from "./model/app.vo"
import { AppService } from "./services/app.service";
import { KPService } from "./services/kp.service";
import { ModelService } from './services/model.service';
import { templates } from './services/template.service';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { PayBillCommonService, PayBillCommonUtil } from 'paybill-common';

declare var $kp;

@Component( {
    selector: 'pm-root-comp',
    template: templates.GetTemplate('pmrootcomp.html')
} )

export class AppComponent implements OnInit {

    public readonly appState$:Observable<AppState>;
    public readonly initialModel$:Observable<AppVO>;
    constructor(public readonly appService:AppService,
            public readonly modelService:ModelService,
            public readonly pbcSvc:PayBillCommonService) {
        this.appState$ = this.appService.getAppState$();
        this.initialModel$ = this.modelService.getInitialModel$();

        window['sharedCompMessage'] = pbcSvc.getMessage();
        window['sharedCompSum'] = PayBillCommonUtil.addNumbers(1, 5);
        console.log('Confirm Integration of Module, message - '
            + window['sharedCompMessage']);
        console.log('Confirm Integration of Module, add(1,5) - '
            + window['sharedCompSum']);
    }

    ngOnInit() {
        
    }

    doLoadTemplate(val){
        debugger;
    }


}
