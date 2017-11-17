import { PaymentMethodComponent } from "./payment-method.component";
import { AppService } from "../../services/app.service";
import { ModelService } from "../../services/model.service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subject } from "rxjs/Subject";
import { AppState } from "../../services/app.state"
import { inject, TestBed } from '@angular/core/testing';
import { PaymentTypeVO } from "../../model/payment-type.vo";
import { AppVO } from "../../model/app.vo"

describe('PaymentMethodComponent', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    {
                        provide: AppService,
                        useValue: {
                            appState$: //() => {
                                new BehaviorSubject<AppState>(
                                    new AppState(new PaymentTypeVO('TYPE', 'LABEL'))),
                            getPaymentList: () => ({profile: {card: [1, 2, 3]}}),
                            updateAppState: (data) => {expect(data.paymentType).toBeUndefined();}
                            //}
                            //getAppState$: () => this.appState$
                        }
                    },
                    {
                        provide: ModelService,
                        useValue: {
                            getInitialModel$: () => (new Subject())
                        }
                    }
                ]
            }).compileComponents();
        });
    /*
    describe('constructor', () => {
        it ('should preserve the values that it uses for initialization',
            inject([AppService, ModelService], (appSvc, modelSvc) => {
                //
                appSvc.getAppState$ = () => appSvc.appState$;
                //
                //console.log('1111111');
                let pmc:PaymentMethodComponent = new PaymentMethodComponent(appSvc, modelSvc);
                pmc.ngOnInit();
                expect(pmc.cardData).toEqual([1, 2, 3]);
                //pmc.valueChange();
                //console.log('2222222');
                pmc.appState$.subscribe((data) => {
                    expect(data.paymentType.label).toEqual('LABEL');
                    expect(data.paymentType.type).toEqual('TYPE');
                });
                pmc.showResponse({profile: {card: [4, 5, 6]}});
                expect(pmc.cardData).toEqual([4, 5, 6]);
                //
                //pmc.appState$.subscribe(
                //    (data) => {
                //        console.log('got data - ' + data);
                //    }
                //);
                pmc.valueChange();
                //console.log('3333333');
                //let accv:AddCreditCardValidator = new AddCreditCardValidator();
                //accc.validate();
                //accc.validator$.subscribe((data) => {
                //    expect(data).toBeDefined();
                //});
            })
        );
    });
    */
});