import { AddCreditCardComponent } from "./add-credit-card.component";
import { AddCreditCardValidator } from "./add-credit-card.validator";
import { AppService } from "../../services/app.service";
import { ModelService } from "../../services/model.service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { AppState } from "../../services/app.state"
import { inject, TestBed } from '@angular/core/testing';
import { PaymentTypeVO } from "../../model/payment-type.vo";

describe('AddCreditCardComponent', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    {
                        provide: AppService,
                        useValue: {
                            appState$: //() => {
                                new BehaviorSubject<AppState>(
                                    new AppState(new PaymentTypeVO('TYPE', 'LABEL')))
                            //}
                            //getAppState$: () => this.appState$
                        }
                    },
                    {
                        provide: ModelService,
                        useValue: {
                        }
                    }
                ]
            }).compileComponents();
        });
    describe('constructor', () => {
        it ('should preserve the values that it uses for initialization',
            inject([AppService, ModelService], (appSvc, modelSvc) => {
                //
                appSvc.getAppState$ = () => appSvc.appState$;
                //
                //console.log('1111111');
                let accc:AddCreditCardComponent = new AddCreditCardComponent(appSvc, modelSvc);
                accc.ngOnInit();
                accc.valueChange();
                for (var i = 0; i <= 20; i++) {
                    expect(accc.yearOptions[i]).toEqual(AddCreditCardComponent.currentYear + i);
                }
                //console.log('2222222');
                accc.appState$.subscribe((data) => {
                    expect(data.paymentType.label).toEqual('LABEL');
                    expect(data.paymentType.type).toEqual('TYPE');
                });
                //console.log('3333333');
                let accv:AddCreditCardValidator = new AddCreditCardValidator();
                accc.validate();
                accc.validator$.subscribe((data) => {
                    expect(data).toBeDefined();
                });
            })
        );
    });

});