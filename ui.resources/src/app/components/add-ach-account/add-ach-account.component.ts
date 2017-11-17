import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { AddAchAccountVO } from "../../model/add-ach-account.vo";
import { AppService } from "../../services/app.service";
import { AppState } from "../../services/app.state";
import { KPService } from "../../services/kp.service";
import { ModelService } from "../../services/model.service";
import { templates } from '../../services/template.service';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import $ from 'jquery';

declare var $kp;

@Component( {
    selector: 'pm-add-ach-account',
    template: templates.GetTemplate('pmaddach.html')
} )

export class AddAchAccountComponent implements OnInit {

    @Input() model:AddAchAccountVO;
    
    public readonly appState$:Observable<AppState>;
    constructor(private appSvc:AppService, private modelSvc:ModelService) {
        this.appState$ = appSvc.getAppState$();
    }
    
    ngOnInit() {
        
    }
    valueChange() {
        //console.log('addCheckingAccount,state - ' + JSON.stringify(this.model));
    }

    dropDownDisplay() {
        //console.log("hello");
        $('.select-dropdown').each(function() {
            var $element = $(this);
            var $select = $element.find('select');
            var $value = $element.find('.select-value');
            // Bind event handlers to select
            $select.on({
              'change keyup': function() {
                $value.text($select.val());
              },
              'focus': function() {
                $element.addClass('focus');
              },
              'blur': function() {
                $element.removeClass('focus');
              }
            });
            $select.trigger('change');
          });
    }
    
}
