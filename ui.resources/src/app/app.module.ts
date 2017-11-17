import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from "./services/api.service";
import { AppService } from "./services/app.service";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AddCreditCardComponent } from "./components/add-credit-card/add-credit-card.component";
import { KPService } from "./services/kp.service";
import { JSONConfigsService } from "./services/jsonConfigs.service";
import { ModelService } from "./services/model.service";
import { SessionService } from "./services/session.service";
import {PaymentMethodComponent} from "./components/payment-method/payment-method.component";
//import {PaymentTypeComponent} from "./components/payment-type/payment-type.component";
import {AddAchAccountComponent} from "./components/add-ach-account/add-ach-account.component";
import { PayBillCommonModule, PayBillCommonService } from 'paybill-common';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        PayBillCommonModule
    ],
    declarations: [
        //-- Components --//
        AddCreditCardComponent,
        PaymentMethodComponent,
        //PaymentTypeComponent,
        AddAchAccountComponent,
        AppComponent
    ],
    providers: [
        ApiService,
        AppService,
        KPService,
        JSONConfigsService,
        ModelService,
        PayBillCommonService,
        SessionService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
