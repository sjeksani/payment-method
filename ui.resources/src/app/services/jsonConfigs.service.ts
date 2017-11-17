import { Injectable, Input } from '@angular/core';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { InputDecorator } from "@angular/core/src/metadata/directives";

declare var jsonConfigs;

@Injectable()
export class JSONConfigsService {

    private jCon: any;

    constructor() {
        this.jCon = jsonConfigs;
    }

    public isMocked() {
        return this.jCon.feature.isMocked;
    }

    public apiUrl(): string {
        return this.jCon.global.apiUrl;
    }
    
    public nodeApiUrl(): string {
        return this.jCon.global.apipApiUrl;
    }

    public apiHeaders(): any {
        return this.jCon.feature.apiHeaders;
    }

    public nodeApiHeaders(): any {
        return this.jCon.feature.NodeApiHeaders;
    }

    public noAccessMessageUrl( language: string ): string {
        return this.jCon.feature[ language ].NoAccessMsgURL;
    }

    public exceptionMessageUrl( language: string ): string {
        return this.jCon.feature[ language ].ExceptionMsgURL;
    }

    public mccMessageUrl( language: string ): string {
        return this.jCon.feature[ language ].MCCMsgURL;
    }

    public defaultErrorMessage( language: string ): string {
        return this.jCon.feature[ language ].defaultMsg;
    }

    public mccLandingPageUrlLocation( language: string ): string {
        return this.jCon.feature[ language ].mccLandingPageURL;
    }

    public pageConfigUrl(): string {
        return "/secure/payment-method.json.html";
    }

    public medicalBillApiUri(): string {
        return this.jCon.feature.medicalBillApiUri;
    }

    public viewBillApiUri():string {
        return this.jCon.feature.viewBillApiUri;
    }

    public lastPaymentApiUri(): string {
        return this.jCon.feature.lastPaymentApiUri;
    }

    public paymentmethodApiUri(): string {
        return this.jCon.feature.paymentmethodApiUri;
    }

    public getButtonValue(id: string): string {
        let buttons = this.jCon.feature.conditionalButton;
        for (let btn of buttons) {
            if (btn["id"] == id)
                return btn["value"];
        }
        return "";
    }

    public getControlObject(id: string): any {
        return this.jCon.feature[id];
    }

    public getFeatureEntryID(entry: any): string {
        try {
            return entry["id"];
        }
        catch (e){
            return null;
        }
    }

    public memberDataApiUri(): string {
        return this.jCon.feature.memberDataApiUri;
    }

    public userApiUri(): string{
        return this.jCon.feature.userApiUri;
    }

    public getMccGuarantorFlag(): string {
        return this.jCon.feature.hardCodedGuarantorFlag;
    }

    public getPdfSaveAsUri(): string {
        return this.jCon.feature.getPdfSaveAsUri;
    }
}