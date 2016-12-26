webpackJsonp([0,3],{

    /***/ 160:
/***/ function(module, exports, __webpack_require__) {

"use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(338);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__contract__ = __webpack_require__(238);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(730);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__auth_services_auth_service__ = __webpack_require__(47);
        /* harmony export (binding) */
        __webpack_require__.d(exports, "a", function () {
            return ApiService;
        });
        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
        var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };


        var ApiService = (function () {
            function ApiService(_http, _contract, auth) {
                this._http = _http;
                this._contract = _contract;
                this.auth = auth;
                this.actionUrl = _contract.ServerWithApiUrl;
                //this.actionUrl = _contract.LocalhostWithApiUrl;
                this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                this.headers.append('Content-Type', 'application/json');
                this.headers.append('Accept', 'application/json');
            }

            ApiService.prototype.handleError = function (error) {
                console.error(error);
                return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json().error || 'server error');
            };
            ApiService.prototype.addToken = function (cb) {
                this.auth.token
                    .then(function (token) {
                        cb(token);
                    })
                    .catch(function (msg) {
                        console.log('no token: ' + msg);
                    });
            };
            ApiService.prototype.getTaskstodobyhousehold = function (token, householdId, term) {
                if (term == 0)
                    term = 7;
                this.headers.append('firebase-token', token);
                return this._http.get(this.actionUrl + "taskstodobyhousehold/" + householdId + "/" + term, {headers: this.headers})
                    .map(function (response) {
                        return response.json();
                    })
                    .catch(ApiService.handleError);
            };
            ApiService = __decorate([
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(),
                __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__contract__["a" /* Contract */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__contract__["a" /* Contract */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__auth_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__auth_services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
            ], ApiService);
            return ApiService;
            var _a, _b, _c;
        }());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/api.service.js.map

        /***/
    },

    /***/ 238: /***/ function (module, exports, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
        /* harmony export (binding) */
        __webpack_require__.d(exports, "a", function () {
            return Contract;
        });
        /**
         * Created by Bart on 26/12/2016.
         */
        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
        var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

        var Contract = (function () {
            function Contract() {
                this.Localhost = "http://localhost:3000/";
                this.Server = "https://cleansing-api.herokuapp.com/";
                this.ApiUrl = "api/";
                this.ServerWithApiUrl = this.Server + this.ApiUrl;
                this.LocalhostWithApiUrl = this.Localhost + this.ApiUrl;
            }

            Contract = __decorate([
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(),
                __metadata('design:paramtypes', [])
            ], Contract);
            return Contract;
        }());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/contract.js.map

        /***/
    },

    /***/ 361: /***/ function (module, exports, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__ = __webpack_require__(47);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(720),
            styles: [__webpack_require__(712)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/app.component.js.map

/***/ },

    /***/ 362:
/***/ function(module, exports, __webpack_require__) {

"use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__(364);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(367);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__auth_guard_auth_guard__ = __webpack_require__(369);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(65);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5__auth_guard_unauth_guard__ = __webpack_require__(370);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_6__home_tasks_todo_tasks_todo_component__ = __webpack_require__(366);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_7__home_all_tasks_all_tasks_component__ = __webpack_require__(363);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_8__home_household_household_component__ = __webpack_require__(365);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__ = __webpack_require__(368);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__auth_guard_unauth_guard__["a" /* UnauthGuard */]] },
    {
        path: 'home',
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_6__home_tasks_todo_tasks_todo_component__["a" /* TasksTodoComponent */] },
            { path: 'tasks', component: __WEBPACK_IMPORTED_MODULE_7__home_all_tasks_all_tasks_component__["a" /* AllTasksComponent */] },
            { path: 'household', component: __WEBPACK_IMPORTED_MODULE_8__home_household_household_component__["a" /* HouseholdComponent */] },
            { path: '**', redirectTo: '/404' }
        ]
    },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: '**', redirectTo: '/404' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(routes),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/app.routes.js.map

/***/ },

    /***/ 363:
/***/ function(module, exports, __webpack_require__) {

"use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AllTasksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AllTasksComponent = (function () {
    function AllTasksComponent() {
    }
    AllTasksComponent.prototype.ngOnInit = function () {
    };
    AllTasksComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-all-tasks',
            template: __webpack_require__(721),
            styles: [__webpack_require__(713)]
        }), 
        __metadata('design:paramtypes', [])
    ], AllTasksComponent);
    return AllTasksComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/all-tasks.component.js.map

/***/ },

    /***/ 364:
/***/ function(module, exports, __webpack_require__) {

"use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__ = __webpack_require__(47);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.user = auth.authState.auth.displayName;
    }
    HomeComponent.prototype.logout = function () {
        this.auth.logout();
    };
    HomeComponent.prototype.getToken = function () {
        this.auth.token
            .then(function (token) { console.log('token app: ' + token); })
            .catch(function (msg) { console.log('no token: ' + msg); });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(722),
            styles: [__webpack_require__(714)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/home.component.js.map

/***/ },

    /***/ 365:
/***/ function(module, exports, __webpack_require__) {

"use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HouseholdComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HouseholdComponent = (function () {
    function HouseholdComponent() {
    }
    HouseholdComponent.prototype.ngOnInit = function () {
    };
    HouseholdComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-household',
            template: __webpack_require__(723),
            styles: [__webpack_require__(715)]
        }), 
        __metadata('design:paramtypes', [])
    ], HouseholdComponent);
    return HouseholdComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/household.component.js.map

/***/ },

    /***/ 366:
/***/ function(module, exports, __webpack_require__) {

"use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__(160);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__auth_services_auth_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TasksTodoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


        var TasksTodoComponent = (function () {
            function TasksTodoComponent(apiService, auth) {
                this.apiService = apiService;
                this.auth = auth;
    }
    TasksTodoComponent.prototype.ngOnInit = function () {
    };
    TasksTodoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-tasks-todo',
            template: __webpack_require__(724),
            styles: [__webpack_require__(716)]
        }),
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], TasksTodoComponent);
    return TasksTodoComponent;
            var _a, _b;
}());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/tasks-todo.component.js.map

/***/ },

    /***/ 367:
/***/ function(module, exports, __webpack_require__) {

"use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__ = __webpack_require__(47);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.title = "Please login";
    }
    LoginComponent.prototype.loginFacebook = function () {
        var _this = this;
        this.title = "logging in with facebook";
        this.auth.loginFacebook()
            .then(function () {
            _this.router.navigate(['home']);
        })
            .catch(function (error) {
            _this.title = "" + error;
        });
    };
    LoginComponent.prototype.loginGoogle = function () {
        var _this = this;
        this.title = "logging in with google";
        this.auth.loginGoogle()
            .then(function () {
            _this.router.navigate(['home']);
        })
            .catch(function (error) {
            _this.title = "" + error;
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(726),
            styles: [__webpack_require__(718)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/login.component.js.map

/***/ },

    /***/ 368:
/***/ function(module, exports, __webpack_require__) {

"use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__(727),
            styles: [__webpack_require__(719)]
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/not-found.component.js.map

/***/ },

    /***/ 369:
/***/ function(module, exports, __webpack_require__) {

"use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(65);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    // canActivate() {
    //     console.log("canactivate: " + this.auth.authenticated);
    //     return (this.auth.authenticated);
    // }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.auth.auth$
            .take(1)
            .map(function (authState) { return !!authState; })
            .do(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['/']);
            }
        });
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/auth.guard.js.map

/***/ },

    /***/ 370:
/***/ function(module, exports, __webpack_require__) {

"use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(65);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UnauthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UnauthGuard = (function () {
    function UnauthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    UnauthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.auth.auth$
            .take(1)
            .map(function (authState) { return !authState; })
            .do(function (unauthenticated) {
            if (!unauthenticated) {
                _this.router.navigate(['/home']);
            }
        });
    };
    UnauthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], UnauthGuard);
    return UnauthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/unauth.guard.js.map

/***/ },

    /***/ 433:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
        webpackEmptyContext.id = 433;


/***/ },

    /***/ 434:
/***/ function(module, exports, __webpack_require__) {

"use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(514);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(544);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(543);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_27" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/main.js.map

/***/ },

    /***/ 47:
/***/ function(module, exports, __webpack_require__) {

"use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(373);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(65);
        /* harmony export (binding) */
        __webpack_require__.d(exports, "a", function () {
            return AuthService;
        });
        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
        var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };


        var AuthService = (function () {
            function AuthService(auth$, router) {
                var _this = this;
                this.auth$ = auth$;
                this.router = router;
                this.authState = null;
                //abonneer op authstate wijzigingen
                this.auth$.subscribe(function (state) {
                    _this.authState = state;
                    //navigeer naar login als authstate null is
                    //door logout, door netwerk error, door...
                    if (!state)
                        _this.router.navigate(['']);
                    console.log("authstate changed " + _this.authenticated);
                });
            }

            Object.defineProperty(AuthService.prototype, "authenticated", {
                get: function () {
                    return this.authState !== null;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AuthService.prototype, "uid", {
                get: function () {
                    return this.authenticated ? this.authState.uid : '';
                },
                enumerable: true,
                configurable: true
            });
            AuthService.prototype.loginFacebook = function () {
                return this.auth$
                    .login({provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AuthProviders */].Facebook});
                //.catch(error => console.error('Error @ AuthService#loginFacebook : ', error ));
            };
            AuthService.prototype.loginGoogle = function () {
                return this.auth$
                    .login({provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AuthProviders */].Google});
                //.catch(error => console.error('Error @ AuthService#loginGoogle : ', error ));
            };
            AuthService.prototype.logout = function () {
                this.auth$.logout();
            };
            Object.defineProperty(AuthService.prototype, "token", {
                get: function () {
                    if (this.authState)
                        return this.authState.auth.getToken();
                    else
                        return new Promise(function (resolve, reject) {
                            reject('authstate was null');
                        });
                },
                enumerable: true,
                configurable: true
            });
            AuthService = __decorate([
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(),
                __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* FirebaseAuth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* FirebaseAuth */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
            ], AuthService);
            return AuthService;
            var _a, _b;
        }());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/auth.service.js.map

        /***/
    },

    /***/ 540: /***/ function (module, exports, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(157);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(507);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(338);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(361);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(373);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_6__auth_services_auth_service__ = __webpack_require__(47);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(367);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_8__auth_guard_auth_guard__ = __webpack_require__(369);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_9__app_routes__ = __webpack_require__(362);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_10__auth_guard_unauth_guard__ = __webpack_require__(370);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__(81);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_12__home_home_module__ = __webpack_require__(541);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_13__not_found_not_found_component__ = __webpack_require__(368);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_14__contract__ = __webpack_require__(238);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_15__service_api_service__ = __webpack_require__(160);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


        var myFirebaseConfig = {
    apiKey: "AIzaSyB_BRv8vUg4D0njciLkTNqGBEfZM4cNVlQ",
    authDomain: "kuisapp.firebaseapp.com",
    databaseURL: "https://kuisapp.firebaseio.com",
    storageBucket: "kuisapp.appspot.com"
};
var myFirebaseAuthConfig = {
    method: __WEBPACK_IMPORTED_MODULE_5_angularfire2__["c" /* AuthMethods */].Popup
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__not_found_not_found_component__["a" /* NotFoundComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routes__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["d" /* AngularFireModule */].initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
                __WEBPACK_IMPORTED_MODULE_11__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_12__home_home_module__["a" /* HomeModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__auth_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__auth_guard_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_10__auth_guard_unauth_guard__["a" /* UnauthGuard */], __WEBPACK_IMPORTED_MODULE_14__contract__["a" /* Contract */], __WEBPACK_IMPORTED_MODULE_15__service_api_service__["a" /* ApiService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/app.module.js.map

/***/ },

    /***/ 541:
/***/ function(module, exports, __webpack_require__) {

"use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__(364);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__auth_services_auth_service__ = __webpack_require__(47);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(65);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(362);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5__tasks_todo_tasks_todo_component__ = __webpack_require__(366);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_6__all_tasks_all_tasks_component__ = __webpack_require__(363);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_7__household_household_component__ = __webpack_require__(365);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_8__service_api_service__ = __webpack_require__(160);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_9__contract__ = __webpack_require__(238);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__(81);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_11__tasks_todo_todolist_todolist_component__ = __webpack_require__(542);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


        var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__tasks_todo_tasks_todo_component__["a" /* TasksTodoComponent */],
                __WEBPACK_IMPORTED_MODULE_6__all_tasks_all_tasks_component__["a" /* AllTasksComponent */],
                __WEBPACK_IMPORTED_MODULE_7__household_household_component__["a" /* HouseholdComponent */],
                __WEBPACK_IMPORTED_MODULE_11__tasks_todo_todolist_todolist_component__["a" /* TodolistComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_10__angular_common__["b" /* CommonModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__auth_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__service_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_9__contract__["a" /* Contract */]],
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/home.module.js.map

/***/ },

    /***/ 542:
/***/ function(module, exports, __webpack_require__) {

"use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__(160);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__auth_services_auth_service__ = __webpack_require__(47);
        /* harmony export (binding) */
        __webpack_require__.d(exports, "a", function () {
            return TodolistComponent;
        });
        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
        var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };


        var TodolistComponent = (function () {
            function TodolistComponent(apiService, auth) {
                this.apiService = apiService;
                this.auth = auth;
                this.getTasksTodo();
            }

            TodolistComponent.prototype.ngOnInit = function () {
            };
            TodolistComponent.prototype.getTasksTodo = function () {
                var _this = this;
                this.auth.token
                    .then(function (token) {
                        _this.apiService
                            .getTaskstodobyhousehold(token, 37, 7)
                            .subscribe(function (data) {
                                _this.tasksTodo = data;
                                console.log(data);
                            }, function (error) {
                                return console.log(error);
                            }, function () {
                                return console.log('Get all Items complete');
                            });
                    })
                    .catch(function (msg) {
                        console.log('no token: ' + msg);
                    });
            };
            TodolistComponent = __decorate([
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
                    selector: 'app-todolist',
                    template: __webpack_require__(725),
                    styles: [__webpack_require__(717)]
                }),
                __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
            ], TodolistComponent);
            return TodolistComponent;
            var _a, _b;
        }());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/todolist.component.js.map

        /***/
    },

    /***/ 543: /***/ function (module, exports, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(361);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(540);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/index.js.map

/***/ },

    /***/ 544:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/environment.js.map

/***/ },

    /***/ 545:
/***/ function(module, exports, __webpack_require__) {

"use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(996);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/polyfills.js.map

/***/ },

    /***/ 712: /***/ function (module, exports) {

        module.exports = ""

/***/ },

    /***/ 713:
/***/ function(module, exports) {

module.exports = ""

/***/ },

    /***/ 714:
/***/ function(module, exports) {

module.exports = ""

/***/ },

    /***/ 715:
/***/ function(module, exports) {

module.exports = ""

/***/ },

    /***/ 716:
/***/ function(module, exports) {

module.exports = ""

/***/ },

    /***/ 717:
/***/ function(module, exports) {

module.exports = ""

/***/ },

    /***/ 718:
/***/ function(module, exports) {

module.exports = ""

/***/ },

    /***/ 719:
/***/ function(module, exports) {

module.exports = ""

/***/ },

    /***/ 720:
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ },

    /***/ 721:
/***/ function(module, exports) {

module.exports = "<p>\n  all-tasks works!\n</p>\n"

/***/ },

    /***/ 722:
/***/ function(module, exports) {

module.exports = "<header>\n    <h1>ik moet een header component worden</h1>\n    <p>hallo {{user}}</p>\n</header>\n\n<nav>\n    <h1>ik moet een navigatie component worden</h1>\n    <ul>\n        <li><a [routerLink]=\"['']\">todo</a></li>\n        <li><a [routerLink]=\"['tasks']\">all tasks</a></li>\n        <li><a [routerLink]=\"['household']\">household</a></li>\n        <li><span (click)=\"getToken()\">get token, je kan op mij klikken</span></li>\n        <li><span (click)=\"logout()\">logout, je kan op mij klikken</span></li>\n    </ul>\n</nav>\n\n<main>\n    <h1>ik ben main en bevat enkel een router-outlet</h1>\n    <router-outlet></router-outlet>\n\n</main>\n<footer><h1>ik moet een footer component worden</h1></footer>\n\n\n"

/***/ },

    /***/ 723:
/***/ function(module, exports) {

module.exports = "<p>\n  household works!\n</p>\n"

/***/ },

    /***/ 724:
/***/ function(module, exports) {

        module.exports = "<p>\n  tasks-todo works!\n</p>\n<app-todolist>loading...</app-todolist>\n\n"

/***/ },

    /***/ 725: /***/ function (module, exports) {

        module.exports = "<ul>\n  <li *ngFor=\"let tasktodo of tasksTodo\">\n    {{tasktodo.name}}\n  </li>\n</ul>\n"

        /***/
    },

    /***/ 726:
/***/ function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n\n<button (click)=\"loginFacebook()\">Login With Facebook</button>\n<button (click)=\"loginGoogle()\">Login With Google</button>\n"

/***/ },

    /***/ 727:
/***/ function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ },

    /***/ 997:
/***/ function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__(434);


/***/ }

}, [997]);
//# sourceMappingURL=main.bundle.map