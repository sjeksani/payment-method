import { async, inject, TestBed } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, XHRBackend, Response, ResponseOptions, ResponseType } from "@angular/http";
import { MockBackend } from '@angular/http/testing';
import { ApiService } from "./api.service";
import { JSONConfigsService } from "./jsonConfigs.service";

describe('ApiService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                ApiService,
                JSONConfigsService,
                { provide: XHRBackend , useClass: MockBackend }
            ]
        });
    });

    describe('get()', () => {
        it ('should return an Observable<any> of the JSON retrieved from the http call',
                inject( [ ApiService, XHRBackend ], ( apiService, mockBackend ) => {
                    mockBackend.connections.subscribe( ( connection ) => {
                        connection.mockRespond( new Response( new ResponseOptions( {
                            body: JSON.stringify(
                                {
                                    "test": "yes"
                                }
                            )
                        } ) ) );
                    } );

                    apiService.get( "/test" ).subscribe( ( data ) => {
                        expect( data ).toEqual(
                            {
                                "test": "yes"
                            }
                        );
                    } );
                } )
        );
    });

});