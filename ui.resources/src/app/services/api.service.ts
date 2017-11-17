import { Injectable, OnInit } from '@angular/core';

import 'rxjs/add/operator/publishLast';
import 'rxjs/add/operator/map';

import * as extend from '../../../node_modules/lodash/extend.js';


import {Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable } from "rxjs";
import { JSONConfigsService } from "./jsonConfigs.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

declare var jsonConfigs: any;

@Injectable()
export class ApiService implements OnInit {

    //httpResponseStatus$: BehaviorSubject<number>;

    static headers: any = {
        'X-useragenttype': navigator.userAgent,
        'X-osversion': navigator.appVersion
    };

    constructor( protected http: Http, protected jsonConfigSvc: JSONConfigsService ) {
    }

    ngOnInit() {
    }

    get( resource: string, additionalHeaders: any = null, useRoot: boolean = true, nodeHeaders: boolean = false, queryParams?: any ) {
        var root = this.jsonConfigSvc.apiUrl();

        let headers: any;
        headers = extend(headers, ApiService.headers);

        if (nodeHeaders) {
        	root = this.jsonConfigSvc.nodeApiUrl();
        	headers = extend(headers, this.jsonConfigSvc.nodeApiHeaders());
        } else {
            headers = extend(headers, this.jsonConfigSvc.apiHeaders());
        }

        if (additionalHeaders != null)
            headers = extend(headers, additionalHeaders);

        let url;

        if (useRoot)
            url = root + resource;
        else
            url = resource;

        console.log(url);

        return this.http.get( url, {search: queryParams, headers: headers, withCredentials: true} )
            .map(res=>{
                    //this.httpResponseStatus$.next(res.status);
                    return this._map(res);
            })
            .publishLast()
            .refCount()
    }
    constructHeaders(additionalHeaders:any, useNodeHeaders:boolean):any {
        let headers: any;
        headers = extend(headers, ApiService.headers);
        //
        if (useNodeHeaders) {
            headers = extend(headers, this.jsonConfigSvc.nodeApiHeaders());
        } else {
            headers = extend(headers, this.jsonConfigSvc.apiHeaders());
        }
        //
        if (additionalHeaders != null) {
            headers = extend(headers, additionalHeaders);
        }
        return headers;
    }

    _map( value: any) {
        return value.json();
    }

    _error(err: any, caught: Observable<any>): any {
        return caught;
    }

    // getResponseStatus$(): Observable<any>{
    //     return this.httpResponseStatus$.asObservable()
    //         .map((data:any) =>{
    //             return data;
    //         });
    // }
}
