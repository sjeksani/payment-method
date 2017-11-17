import { AddAchAccountComponent } from "./add-ach-account.component";
import { AppService } from "../../services/app.service";
import { ModelService } from "../../services/model.service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { AppState } from "../../services/app.state"
import { inject, TestBed } from '@angular/core/testing';
import { PaymentTypeVO } from "../../model/payment-type.vo";

describe('AddAchAccountComponent', () => {
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
                let aaac:AddAchAccountComponent = new AddAchAccountComponent(appSvc, modelSvc);
                aaac.ngOnInit();
                aaac.valueChange();
                //console.log('2222222');
                aaac.appState$.subscribe((data) => {
                    expect(data.paymentType.label).toEqual('LABEL');
                    expect(data.paymentType.type).toEqual('TYPE');
                });
                //console.log('3333333');
            })
        );
    });

});