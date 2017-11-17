import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {isUndefined} from "util";
import {ApiService} from "./api.service";
import {JSONConfigsService} from "./jsonConfigs.service";
import {AppService} from "./app.service";
import {Http, RequestMethod, RequestOptionsArgs, Response} from "@angular/http";

declare var jsonConfigs: any;

@Injectable()
export class SessionService extends ApiService {
    private static readonly SS_URL:string = "/mycare/pay-bill/v1/session";
    constructor(
            protected readonly http: Http,
            protected readonly jsonConfigSvc: JSONConfigsService) {
        super(http, jsonConfigSvc);
        //this.http.request()
    }
    //
    get$(namespace:string, subNs:string):Observable<Response> {
        return this.request$(RequestMethod.Get, namespace, subNs);
    }
    post$(namespace:string, subNs:string, body:any):Observable<Response> {
        return this.request$(RequestMethod.Post, namespace, subNs, body);
    }
    put$(namespace:string, subNs:string, body:any):Observable<Response> {
        return this.request$(RequestMethod.Put, namespace, subNs, body);
    }
    patch$(namespace:string, subNs:string, body:any):Observable<Response> {
        return this.request$(RequestMethod.Patch, namespace, subNs, body);
    }
    delete$(namespace:string, subNs:string):Observable<Response> {
        return this.request$(RequestMethod.Delete, namespace, subNs);
    }
    private request$(
            rm:RequestMethod, namespace:string, subNs:string, b?:any
            ):Observable<Response> {
        let outValue:Observable<Response>;
        let h:any = this.constructHeaders(
            {
                SESSION_NAMESPACE: namespace,
                SESSION_SUBNAMESPACE: subNs
            },
            true);
        let ops:any = {
            method: rm,
            headers: h,
            withCredentials: true
        };
        if (b) {
            ops.body = b;
        }
        let url:string = this.jsonConfigSvc.apiUrl() + SessionService.SS_URL;
        outValue = this.http.request(url, ops);
        return outValue;
    }
    //
}
