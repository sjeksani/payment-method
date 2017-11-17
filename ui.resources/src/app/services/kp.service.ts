import { Injectable } from '@angular/core';
import { JSONConfigsService } from "./jsonConfigs.service";

declare var $kp: any;

@Injectable()
export class KPService {

    constructor(
            private jsonConfigSvc: JSONConfigsService) {
    }

    public getNoAccessMessageJsonUrlLocation(): string {
        return this.jsonConfigSvc.noAccessMessageUrl( this.getLanguagePrimarySubCode() );
    }

    public getExceptionMessageJsonUrlLocation(): string {
        return this.jsonConfigSvc.exceptionMessageUrl( this.getLanguagePrimarySubCode() );
    }

    public getDefaultErrorMessage() : string {
        return this.jsonConfigSvc.defaultErrorMessage( this.getLanguagePrimarySubCode() );
    }

    public getMccLandingPageUrlLocation(): string {
        return this.jsonConfigSvc.mccLandingPageUrlLocation( this.getLanguagePrimarySubCode() );
    }

    public getLanguagePrimarySubCode(): string {
        let outValue: string = 'en';
        let lang: any =
            $kp.KPClientCommons.CookieManager.getLanguageCookie();
        if ( lang && lang.length > 4 ) {
            outValue = lang.substring( 0, 2 );
        }
        return outValue;
    }

}