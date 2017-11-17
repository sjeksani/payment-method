import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {isUndefined} from "util";
import {ApiService} from "./api.service";
import {JSONConfigsService} from "./jsonConfigs.service";
import {AppService} from "./app.service";
import {AppVO} from "../model/app.vo";

@Injectable()
export class ModelService {
    private currentModel$:ReplaySubject<AppVO>;
    constructor() {
        this.currentModel$ = new ReplaySubject<AppVO>(1);
    }
    public getInitialModel$():Observable<AppVO> {
        return this.currentModel$.asObservable();
    }
    public setInitialModel(initialModel:AppVO):void {
        this.currentModel$.next(initialModel);
    }
}
