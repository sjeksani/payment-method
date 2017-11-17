jsonConfigs = {
    feature: {
        "isMocked": true,
        "hardCodedGuarantorFlag": "Y",
        "apiTimeout": 6001,
        "apiKey": "kprwd65766367497853935616",
        "appName": "coverage-costs",
        "conditionalDescription": [
            {
                "id": "doesnt-matter",
                "value": "estimate-a-cost",
                "control": [{
                    "guarantor": false,
                    "proxy-selected": false
                }]
            },
            {
                "id": "doesnt-matter",
                "value": "medical-bill-balance-with-payment",
                "control": [{
                    "guarantor": true,
                    "proxy-selected": false,
                    "hasBalance": true,
                    "hasPayment": true
                }]
            },
            {
                "id": "doesnt-matter",
                "value": "medical-bill-balance-no-payment",
                "control": [{
                    "guarantor": true,
                    "proxy-selected": false,
                    "hasBalance": true,
                    "hasPayment": false
                }]
            },
            {
                "id": "doesnt-matter",
                "value": "no-balance-no-payment",
                "control": [{
                    "guarantor": true,
                    "proxy-selected": false,
                    "hasBalance": false,
                    "hasPayment": false
                }]
            },
            {
                "id": "doesnt-matter",
                "value": "no-balance-with-payment",
                "control": [{
                    "guarantor": true,
                    "proxy-selected": false,
                    "hasBalance": false,
                    "hasPayment": true
                }]
            }
        ],
        "conditionalButton": [
            {
                "id": "estimate-a-cost",
                "value": "/health/mycare/consumer/my-health-manager/my-plan-and-coverage/estimates/",
                "control": [{
                    "guarantor": false,
                    "proxy-selected": false
                }]
            },
            {
                "id": "medical-bill",
                "value": "/health/mycare/consumer/my-health-manager/my-plan-and-coverage/medicalbills/",
                "control": [{
                    "entitlementKey": 446,
                    "guarantor": true,
                    "proxy-selected": false,
                    "hasPayment": true,
                    "hasBalance": true
                }]
            }
        ],
        "en": {
            "mccLandingPageURL": "/secure/coverage-costs",
            "defaultMsg": "<h4>Unable to display content (English)</h4>",
            "MCCMsgURL": "/system/messages/coveragecosts.list.json",
            "NoAccessMsgURL": "/system/messages/gem/1000.data.json",
            "ExceptionMsgURL": "/system/messages/gem/1003.data.json"
        },
        "es": {
            "mccLandingPageURL": "/es/secure/coverage-costs",
            "defaultMsg": "<h4>No se puede mostrar el contenido (Spanish)</h4>",
            "MCCMsgURL": "/es/system/messages/coveragecosts.list.json",
            "NoAccessMsgURL": "/es/system/messages/gem/1000.data.json",
            "ExceptionMsgURL": "/es/system/messages/gem/1003.data.json"
        },
        "apiHeaders": {
            "X-appName": "MCC",
            "X-componentName": "MCC",
            "X-apiKey": "kpaemcostcov29863545175176114176",
            "X-useragentcategory": "I",
            "X-sessionToken": false,
            "Content-Type": "application/json; charset\u003dUTF-8"
        },
        "medicalBillApiUri": "/mycare/coverage-costs/v1/medical/bill",
        "lastPaymentApiUri": "/mycare/coverage-costs/v1/medical/latestpayment",
        "paymentmethodApiUri": "/mycare/coverage-costs/v1/medical/payment",
        "userApiUri": "/mycare/coverage-costs/v1/user/plan",
        "NodeApiHeaders": {
            "Content-Type": "application/json; charset\u003dUTF-8",
            "X-apiKey": "29447e0b-386d-4eb0-b8ef-bc7ba1399588",
            "X-apiSecret": "fI6fY6aT4yP4vV3fK7vL1vJ2vD1tB6dL5sY1dH4tO3hS0dY7bO",
            "X-appName": "MCC",
            "X-componentName": "MCC",
            "X-useragentcategory": "I",
            "X-sessionToken": false
        },
        "memberDataApiUri": "/mycare/membership/v1.0/account",
        "componentName": "Coverage and Costs",
        "patientBillDetailsApiUri": "/mycare/v1.0/billpay/patientbilldetails",
        "patientBillDetailsNewApiUri": "/mycare/v1.0/billpay/patientbilldetailsnew",
        "viewBillUrl": "/health/mycare/consumer/my-health-manager/my-plan-and-coverage/my-health-plan-documents/getDoc",
        "patientBillDetailsNodeApiUri": "/mycare/coverage-costs/v1/medical-bills/billingsummary",
        "getPdfSaveAsUri":'/mycare/coverage-costs/v1/payment-method/saveaspdf',
        "rightrail1": [
            {
                "id": "estimate-a-cost",
                "value": "/health/mycare/consumer/my-health-manager/my-plan-and-coverage/estimates",
                "control": [{"entitlementKey": 408, "guarantor": true, "proxy-selected": false}]
            }, {
                "id": "premium-bills",
                "value": "/health/mycare/consumer/my-health-manager/my-plan-and-coverage/monthly-bill",
                "control": [{"entitlementKey": 447, "proxy-selected": false}]
            }, {
                "id": "medical-bills",
                "value": "/health/mycare/consumer/my-health-manager/my-plan-and-coverage/medicalbills",
                "control": [{"entitlementKey": 446, "guarantor": true, "proxy-selected": false}]
            }, {
                "id": "eligibility-and-benefits",
                "value": "/health/mycare/consumer/my-health-manager/my-plan-and-coverage/eligibility-and-benefits",
                "control": [{
                    "entitlementKey": 411,
                    "guarantor": false,
                    "proxy-selected": false,
                    "self-funded": false
                }, {
                    "entitlementKey": 411,
                    "guarantor": false,
                    "proxy-selected": true,
                    "self-funded": false,
                    "proxy-self-funded": false
                }]
            }, {
                "id": "eligibility-and-benefits-harrington",
                "value": "/health/mycare/consumer/my-health-manager?PartnerSpId=fsso.out.harrington.partnerspid&TARGET=fsso.out.harrington.targeturl&tpaTarget=benefitsAndElig&sp=HarringtonHealth",
                "control": [{
                    "entitlementKey": 411,
                    "guarantor": false,
                    "proxy-selected": false,
                    "self-funded": true
                }]
            }, {
                "id": "claims-summary",
                "value": "/health/mycare/consumer/my-health-manager/my-plan-and-coverage/claims-summary",
                "control": [{
                    "entitlementKey": 410,
                    "guarantor": false,
                    "proxy-selected": false,
                    "self-funded": false
                }, {
                    "entitlementKey": 410,
                    "guarantor": false,
                    "proxy-selected": true,
                    "self-funded": false,
                    "proxy-self-funded": false
                }]
            }, {
                "id": "claims-summary-harrington",
                "value": "/health/mycare/consumer/my-health-manager?PartnerSpId=fsso.out.harrington.partnerspid&TARGET=fsso.out.harrington.targeturl&tpaTarget=claims&sp=HarringtonHealth",
                "control": [{
                    "entitlementKey": 410,
                    "guarantor": false,
                    "proxy-selected": false,
                    "self-funded": true
                }]
            }],
        "linklist1": [
            {
                "id": "out-of-pocket-summary",
                "value": "/health/mycare/consumer/my-health-manager/my-plan-and-coverage/out-of-pocket",
                "control": [
                    {
                        "entitlementKey": 404
                    }
                ]
            },
            {
                "id": "eligibility-and-benefits",
                "value": "/health/mycare/consumer/my-health-manager/my-plan-and-coverage/eligibility-and-benefits",
                "control": [
                    {
                        "entitlementKey": 411,
                        "guarantor": true,
                        "proxy-selected": false,
                        "self-funded": false
                    }
                ]
            },
            {
                "id": "eligibility-and-benefits-harrington",
                "value": "/health/mycare/consumer/my-health-manager?PartnerSpId=fsso.out.harrington.partnerspid&TARGET=fsso.out.harrington.targeturl&tpaTarget=benefitsAndElig&sp=HarringtonHealth",
                "control": [
                    {
                        "entitlementKey": 411,
                        "guarantor": true,
                        "proxy-selected": false,
                        "self-funded": true
                    }
                ]
            },
            {
                "id": "health-payment-accounts",
                "value": "/health/mycare/consumer/my-health-manager/my-plan-and-coverage/health-payment-accounts",
                "control": [
                    {
                        "entitlementKey": 449
                    }
                ]
            },
            {
                "id": "claims-summary",
                "value": "/health/mycare/consumer/my-health-manager/my-plan-and-coverage/claims-summary",
                "control": [
                    {
                        "entitlementKey": 410,
                        "guarantor": true,
                        "proxy-selected": false,
                        "self-funded": false
                    }
                ]
            },
            {
                "id": "claims-summary-harrington",
                "value": "/health/mycare/consumer/my-health-manager?PartnerSpId=fsso.out.harrington.partnerspid&TARGET=fsso.out.harrington.targeturl&tpaTarget=claims&sp=HarringtonHealth",
                "control": [
                    {
                        "entitlementKey": 410,
                        "guarantor": true,
                        "proxy-selected": false,
                        "self-funded": true
                    }
                ]
            },
            {
                "id": "my-documents",
                "value": "/health/mycare/consumer/my-health-manager/my-plan-and-coverage/my-health-plan-documents",
                "control": [
                    {
                        "entitlementKey": 725
                    }
                ]
            }
        ],
        "xIbmClientId": "18ae6751-2990-4147-8bcc-5255af74c06a"
    },
    global: {
        "api.keepalive.timeout": 3000,
        apiKey: "kprwd65766367497853935616",
        apiUrl: "http://localhost:9080",
        apipApiUrl: "http://localhost:9080",
        appName: "kp-foundation",
        auditLogApiUri: "/mycare/event/event-handler/v1.0/auditLog",
        careUserApiUri: "/care/v1.0/user",
        componentName: "KP Foundation",
        createProxyApiUri: "/mycare/v2.0/createproxyaccount",
        entitlementsApiUri: "/mycare/v2.0/entitlements",
        keepAliveComponentName: "Keep Alive Component",
        memberDataApiUri: "/mycare/membership/v1.0/account",
        mycareUserApiUri: "/mycare/v1.0/user",
        proxyApiUri: "/mycare/v2.0/proxyinformation",
        proxyComponentName: "Proxy Component",
        proxyNoCacheApiUri: "/mycare/v2.1/proxyinformation",
        userComponentName: "User Profile Component",
        userNameApiUri: "/mycare/v1.0/username",
        userProfileFeature: "all"
    }
}