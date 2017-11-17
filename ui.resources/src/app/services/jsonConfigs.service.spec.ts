import { async, inject, TestBed } from '@angular/core/testing';
import { JSONConfigsService } from "./jsonConfigs.service";

describe('JSONConfigService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                JSONConfigsService
            ]
        });
    });

    describe('isMocked', () => {
        it('Should return the matching value from jsonConfigs', inject( [ JSONConfigsService ], ( jsonConfigsSvc ) => {
            expect(jsonConfigsSvc.isMocked()).toEqual(true);
        }));
    });

    describe('apiUrl', () => {
        it('Should return the matching value from jsonConfigs', inject( [ JSONConfigsService ], ( jsonConfigsSvc ) => {
            expect(jsonConfigsSvc.apiUrl()).toEqual("http://localhost:9080");
        }));
    });

    describe('nodeApiUrl', () => {
        it('Should return the matching value from jsonConfigs', inject( [ JSONConfigsService ], ( jsonConfigsSvc ) => {
            expect(jsonConfigsSvc.nodeApiUrl()).toEqual("http://localhost:9080");
        }));
    });

    describe('apiHeaders', () => {
        it('Should return the matching value from jsonConfigs', inject( [ JSONConfigsService ], ( jsonConfigsSvc ) => {
            expect(jsonConfigsSvc.apiHeaders()).toEqual({
                "X-appName": "MCC",
                "X-componentName": "MCC",
                "X-apiKey": "kpaemcostcov29863545175176114176",
                "X-useragentcategory": "I",
                "X-sessionToken": false,
                "Content-Type": "application/json; charset\u003dUTF-8"
            });
        }));
    });

    describe('nodeApiHeaders', () => {
        it('Should return the matching value from jsonConfigs', inject( [ JSONConfigsService ], ( jsonConfigsSvc ) => {
            expect(jsonConfigsSvc.nodeApiHeaders()).toEqual({
                "Content-Type": "application/json; charset\u003dUTF-8",
                "X-apiKey": "29447e0b-386d-4eb0-b8ef-bc7ba1399588",
                "X-apiSecret": "fI6fY6aT4yP4vV3fK7vL1vJ2vD1tB6dL5sY1dH4tO3hS0dY7bO",
                "X-appName": "MCC",
                "X-componentName": "MCC",
                "X-useragentcategory": "I",
                "X-sessionToken": false
            });
        }));
    });

    describe('exceptionMessageUrl', () => {
        it('Should return the matching value from jsonConfigs', inject( [ JSONConfigsService ], ( jsonConfigsSvc ) => {
            expect(jsonConfigsSvc.exceptionMessageUrl('en')).toEqual("/system/messages/gem/1003.data.json");
        }));
    });

    describe('mccMessageUrl', () => {
        it('Should return the matching value from jsonConfigs', inject( [ JSONConfigsService ], ( jsonConfigsSvc ) => {
            expect(jsonConfigsSvc.mccMessageUrl('en')).toEqual("/system/messages/coveragecosts.list.json");
        }));
    });

    describe('defaultErrorMessage', () => {
        it('Should return the matching value from jsonConfigs', inject( [ JSONConfigsService ], ( jsonConfigsSvc ) => {
            expect(jsonConfigsSvc.defaultErrorMessage('en')).toEqual("<h4>Unable to display content (English)</h4>");
        }));
    });

    describe('medicalBillApiUri', () => {
        it('Should return the matching value from jsonConfigs', inject( [ JSONConfigsService ], ( jsonConfigsSvc ) => {
            expect(jsonConfigsSvc.medicalBillApiUri()).toEqual("/mycare/coverage-costs/v1/medical/bill");
        }));
    });

    describe('lastPaymentApiUri', () => {
        it('Should return the matching value from jsonConfigs', inject( [ JSONConfigsService ], ( jsonConfigsSvc ) => {
            expect(jsonConfigsSvc.lastPaymentApiUri()).toEqual("/mycare/coverage-costs/v1/medical/latestpayment");
        }));
    });

    describe('getButtonValue', () => {
        it('Should return the matching value from jsonConfigs', inject( [ JSONConfigsService ], ( jsonConfigsSvc ) => {
            expect(jsonConfigsSvc.getButtonValue("estimate-a-cost")).toEqual("/health/mycare/consumer/my-health-manager/my-plan-and-coverage/estimates/");
        }));
    });

    describe('getButtonValue', () => {
        it('Should return the matching value from jsonConfigs', inject( [ JSONConfigsService ], ( jsonConfigsSvc ) => {
            expect(jsonConfigsSvc.getButtonValue("bad id")).toEqual("");
        }));
    });

    describe('getFeatureEntryID', () => {
        it('Should return the matching value from the entry with the id', inject( [ JSONConfigsService ], ( jsonConfigsSvc ) => {
            expect(jsonConfigsSvc.getFeatureEntryID({id: "hello"})).toEqual("hello");
        }));
    });

    describe('memberDataApiUri', () => {
        it('Should return the matching value from the entry with the id', inject( [ JSONConfigsService ], ( jsonConfigsSvc ) => {
            expect(jsonConfigsSvc.memberDataApiUri()).toEqual("/mycare/membership/v1.0/account");
        }));
    });

    describe('userApiUri', () => {
        it('Should return the matching value from the entry with the id', inject( [ JSONConfigsService ], ( jsonConfigsSvc ) => {
            expect(jsonConfigsSvc.userApiUri()).toEqual("/mycare/coverage-costs/v1/user/plan");
        }));
    });
});
