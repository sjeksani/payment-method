import { Component, Input, OnInit } from '@angular/core';
import { AddCreditCardVO } from "../../model/add-credit-card.vo";
import { AppService } from "../../services/app.service";
import { AppState } from "../../services/app.state";
import { KPService } from "../../services/kp.service";
import { ModelService } from "../../services/model.service";
import { templates } from '../../services/template.service';
import { AddCreditCardValidator } from './add-credit-card.validator';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

declare var $kp;

@Component( {
    selector: 'pm-add-credit-card',
    template: templates.GetTemplate('pmaddcreditcard.html')
} )

export class AddCreditCardComponent implements OnInit {
    public static readonly currentYear:number = (new Date()).getFullYear();
    @Input() model:AddCreditCardVO;
    validator$:Subject<AddCreditCardValidator>;
    public readonly appState$:Observable<AppState>;
    //year:number;
    yearOptions:number[];
    constructor(private appSvc:AppService, private modelSvc:ModelService) {
        this.appState$ = appSvc.getAppState$();
        //this.model = new AddCreditCardState();
        this.validator$ = new Subject();
        //console.log('CurrentYear = ' + (new Date()).getFullYear());
        this.yearOptions = [];
        //let currentYear:number = (new Date()).getFullYear();
        for (var i = 0; i <= 20; i++) {
            //
            this.yearOptions.push(AddCreditCardComponent.currentYear + i);
        }
        //this.year = currentYear;
    }
    ngOnInit() {
    }
    valueChange() {
        //console.log('addCreditCard,state - ' + JSON.stringify(this.model));
    }
    validate() {
        this.validator$.next(new AddCreditCardValidator());
    }

    
}
