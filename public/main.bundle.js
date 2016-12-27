webpackJsonp([0,3],{

    /***/ 1054:
/***/ function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__(459);


/***/ },

    /***/ 163:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(350);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__contract__ = __webpack_require__(241);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__auth_services_auth_service__ = __webpack_require__(48);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5__models_task_model__ = __webpack_require__(577);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ApiService; });
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
        //this.actionUrl = _contract.ServerWithApiUrl;
        this.actionUrl = _contract.LocalhostWithApiUrl;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    ApiService.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json().error || 'server error...');
    };
    ApiService.prototype.getTaskstodobyhousehold = function (term) {
        var _this = this;
        if (term === void 0) {
            term = 7;
        }
        var tokenPromise = new Promise(function (resolve, reject) {
            _this.auth.token.then(function (token) {
                _this.headers.set('Firebase-ID-Token', token);
                return _this._http.get(_this.actionUrl + "taskstodobyhousehold/" + null + "/" + term, {headers: _this.headers})
                    .map(function (response) {
                        var tasks = [];
                        response.json().forEach(function (item) {
                            return tasks.push(__WEBPACK_IMPORTED_MODULE_5__models_task_model__["a" /* Task */].makeTaskFromJSON(item));
                        });
                        return tasks;
                    })
                    .catch(ApiService.handleError)
                    .subscribe(function (data) {
                        return resolve(data);
                    }, function (err) {
                        return reject(err);
                    });
            });
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].fromPromise(tokenPromise);
    };
    ApiService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__contract__["a" /* Contract */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__contract__["a" /* Contract */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__auth_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__auth_services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], ApiService);
    return ApiService;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/api.service.js.map

/***/ },

    /***/ 241:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Contract; });
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

/***/ },

    /***/ 373:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(772),
            styles: [__webpack_require__(757)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/app.component.js.map

/***/ },

    /***/ 374:
/***/ function(module, exports, __webpack_require__) {

"use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__(376);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(379);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__auth_guard_auth_guard__ = __webpack_require__(381);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5__auth_guard_unauth_guard__ = __webpack_require__(382);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_6__home_tasks_todo_tasks_todo_component__ = __webpack_require__(378);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_7__home_all_tasks_all_tasks_component__ = __webpack_require__(375);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_8__home_household_household_component__ = __webpack_require__(377);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__ = __webpack_require__(380);
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

    /***/ 375:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
            template: __webpack_require__(773),
            styles: [__webpack_require__(758)]
        }), 
        __metadata('design:paramtypes', [])
    ], AllTasksComponent);
    return AllTasksComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/all-tasks.component.js.map

/***/ },

    /***/ 376:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__ = __webpack_require__(48);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(53);
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
            template: __webpack_require__(779),
            styles: [__webpack_require__(764)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/home.component.js.map

/***/ },

    /***/ 377:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
            template: __webpack_require__(780),
            styles: [__webpack_require__(765)]
        }), 
        __metadata('design:paramtypes', [])
    ], HouseholdComponent);
    return HouseholdComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/household.component.js.map

/***/ },

    /***/ 378:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__(163);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__auth_services_auth_service__ = __webpack_require__(48);
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
            template: __webpack_require__(782),
            styles: [__webpack_require__(767)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], TasksTodoComponent);
    return TasksTodoComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/tasks-todo.component.js.map

/***/ },

    /***/ 379:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__ = __webpack_require__(48);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(53);
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
            template: __webpack_require__(785),
            styles: [__webpack_require__(770)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/login.component.js.map

/***/ },

    /***/ 380:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
            template: __webpack_require__(786),
            styles: [__webpack_require__(771)]
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/not-found.component.js.map

/***/ },

    /***/ 381:
/***/ function(module, exports, __webpack_require__) {

"use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(53);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(48);
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

    /***/ 382: /***/ function (module, exports, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__ = __webpack_require__(270);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__(272);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(271);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(53);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(48);
        /* harmony export (binding) */
        __webpack_require__.d(exports, "a", function () {
            return UnauthGuard;
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


        var UnauthGuard = (function () {
            function UnauthGuard(auth, router) {
                this.auth = auth;
                this.router = router;
            }

            UnauthGuard.prototype.canActivate = function () {
                var _this = this;
                return this.auth.auth$
                    .take(1)
                    .map(function (authState) {
                        return !authState;
                    })
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

        /***/
    },

    /***/ 458: /***/ function (module, exports) {

        function webpackEmptyContext(req) {
            throw new Error("Cannot find module '" + req + "'.");
        }

        webpackEmptyContext.keys = function () {
            return [];
        };
        webpackEmptyContext.resolve = webpackEmptyContext;
        module.exports = webpackEmptyContext;
        webpackEmptyContext.id = 458;


        /***/
    },

    /***/ 459: /***/ function (module, exports, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(578);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(539);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(576);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(574);


        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_28" /* enableProdMode */])();
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/main.js.map

        /***/
    },

    /***/ 48:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(396);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthService; });
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
            if (!state) {
                _this.router.navigate(['']);
            }
            // else{
            //   this.token.then(token => {
            //     localStorage.setItem('firebaseToken', token);
            //     console.log("localstorage set");
            //   });
            // }
            //console.log("authstate changed " + this.authenticated);
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
            .login({ provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AuthProviders */].Facebook });
        //.catch(error => console.error('Error @ AuthService#loginFacebook : ', error ));
    };
    AuthService.prototype.loginGoogle = function () {
        return this.auth$
            .login({ provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AuthProviders */].Google });
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

/***/ },

    /***/ 565:
/***/ function(module, exports, __webpack_require__) {

"use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(532);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(350);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(373);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(396);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_6__auth_services_auth_service__ = __webpack_require__(48);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(379);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_8__auth_guard_auth_guard__ = __webpack_require__(381);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_9__app_routes__ = __webpack_require__(374);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_10__auth_guard_unauth_guard__ = __webpack_require__(382);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__(72);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_12__home_home_module__ = __webpack_require__(571);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_13__not_found_not_found_component__ = __webpack_require__(380);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_14__contract__ = __webpack_require__(241);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_15__service_api_service__ = __webpack_require__(163);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_16_angular2_modal__ = __webpack_require__(37);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_17_angular2_modal_plugins_bootstrap__ = __webpack_require__(389);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_18__loader_small_loader_small_component__ = __webpack_require__(575);
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
                __WEBPACK_IMPORTED_MODULE_18__loader_small_loader_small_component__["a" /* LoaderSmallComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routes__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["d" /* AngularFireModule */].initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
                __WEBPACK_IMPORTED_MODULE_11__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_12__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_16_angular2_modal__["m" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17_angular2_modal_plugins_bootstrap__["b" /* BootstrapModalModule */],
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

    /***/ 566: /***/ function (module, exports, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__ = __webpack_require__(48);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(53);
        /* harmony export (binding) */
        __webpack_require__.d(exports, "a", function () {
            return ChatComponent;
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


        var ChatComponent = (function () {
            function ChatComponent(auth, router) {
                this.auth = auth;
                this.router = router;
                this.user = auth.authState.auth.displayName;
                this.photoUrl = auth.authState.auth.photoURL;
                this.uid = auth.authState.auth.uid;
            }

            ChatComponent.prototype.ngOnInit = function () {
            };
            ChatComponent = __decorate([
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
                    selector: 'app-chat',
                    template: __webpack_require__(774),
                    styles: [__webpack_require__(759)]
                }),
                __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
            ], ChatComponent);
            return ChatComponent;
            var _a, _b;
        }());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/chat.component.js.map

        /***/
    },

    /***/ 567: /***/ function (module, exports, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
        /* harmony export (binding) */
        __webpack_require__.d(exports, "a", function () {
            return MessageFormComponent;
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

        var MessageFormComponent = (function () {
            function MessageFormComponent() {
            }

            MessageFormComponent.prototype.ngOnInit = function () {
            };
            MessageFormComponent = __decorate([
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
                    selector: 'app-message-form',
                    template: __webpack_require__(775),
                    styles: [__webpack_require__(760)]
                }),
                __metadata('design:paramtypes', [])
            ], MessageFormComponent);
            return MessageFormComponent;
        }());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/message-form.component.js.map

        /***/
    },

    /***/ 568: /***/ function (module, exports, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
        /* harmony export (binding) */
        __webpack_require__.d(exports, "a", function () {
            return MessageItemComponent;
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

        var MessageItemComponent = (function () {
            function MessageItemComponent() {
            }

            MessageItemComponent.prototype.ngOnInit = function () {
            };
            MessageItemComponent = __decorate([
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
                    selector: 'app-message-item',
                    template: __webpack_require__(776),
                    styles: [__webpack_require__(761)]
                }),
                __metadata('design:paramtypes', [])
            ], MessageItemComponent);
            return MessageItemComponent;
        }());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/message-item.component.js.map

        /***/
    },

    /***/ 569: /***/ function (module, exports, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
        /* harmony export (binding) */
        __webpack_require__.d(exports, "a", function () {
            return MessageListComponent;
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

        var MessageListComponent = (function () {
            function MessageListComponent() {
            }

            MessageListComponent.prototype.ngOnInit = function () {
            };
            MessageListComponent = __decorate([
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
                    selector: 'app-message-list',
                    template: __webpack_require__(777),
                    styles: [__webpack_require__(762)]
                }),
                __metadata('design:paramtypes', [])
            ], MessageListComponent);
            return MessageListComponent;
        }());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/message-list.component.js.map

        /***/
    },

    /***/ 570:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__(778),
            styles: [__webpack_require__(763)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/header.component.js.map

/***/ },

    /***/ 571:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__(376);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__auth_services_auth_service__ = __webpack_require__(48);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(53);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(374);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5__tasks_todo_tasks_todo_component__ = __webpack_require__(378);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_6__all_tasks_all_tasks_component__ = __webpack_require__(375);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_7__household_household_component__ = __webpack_require__(377);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_8__navigation_navigation_component__ = __webpack_require__(572);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__(570);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_10__service_api_service__ = __webpack_require__(163);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_11__contract__ = __webpack_require__(241);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__(72);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_13__tasks_todo_todolist_todolist_component__ = __webpack_require__(573);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_14__chat_chat_component__ = __webpack_require__(566);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_15__chat_message_list_message_list_component__ = __webpack_require__(569);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_16__chat_message_form_message_form_component__ = __webpack_require__(567);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_17__chat_message_item_message_item_component__ = __webpack_require__(568);
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
                __WEBPACK_IMPORTED_MODULE_13__tasks_todo_todolist_todolist_component__["a" /* TodolistComponent */],
                __WEBPACK_IMPORTED_MODULE_7__household_household_component__["a" /* HouseholdComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_15__chat_message_list_message_list_component__["a" /* MessageListComponent */],
                __WEBPACK_IMPORTED_MODULE_16__chat_message_form_message_form_component__["a" /* MessageFormComponent */],
                __WEBPACK_IMPORTED_MODULE_17__chat_message_item_message_item_component__["a" /* MessageItemComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_12__angular_common__["b" /* CommonModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__auth_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_10__service_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_11__contract__["a" /* Contract */]],
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/home.module.js.map

/***/ },

    /***/ 572:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__ = __webpack_require__(48);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = (function () {
    function NavigationComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.logout = function () {
        this.auth.logout();
    };
    NavigationComponent.prototype.slideOut = function () {
        document.getElementById("slide-out").style.transform = "translateX(0px)";
    };
    NavigationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__(781),
            styles: [__webpack_require__(766)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], NavigationComponent);
    return NavigationComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/navigation.component.js.map

/***/ },

    /***/ 573:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__(163);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_angular2_modal__ = __webpack_require__(37);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__ = __webpack_require__(389);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TodolistComponent; });
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
    function TodolistComponent(apiService, modal, overlay, vcRef) {
        this.apiService = apiService;
        this.modal = modal;
        overlay.defaultViewContainer = vcRef;
    }
    TodolistComponent.prototype.ngOnInit = function () {
        this.getTasksTodo();
    };
    TodolistComponent.prototype.getTasksTodo = function () {
        var _this = this;
        this.apiService
            .getTaskstodobyhousehold()
            .subscribe(function (data) {
                return _this.tasksTodo = data.sort(function (t1, t2) {
                    if (t1.dueDate > t2.dueDate)
                        return 1;
                    if (t1.dueDate < t2.dueDate)
                        return -1;
                    return 0;
                });
            }, function (error) {
                return console.log(error);
            });
    };
    TodolistComponent.prototype.showDetail = function () {
        //alert("detail popup van de taak (geen echte popup hé!)")
        this.modal
            .prompt()
            .size('lg')
            .title('Task detail')
            .body("\n    \n                    <h4>Alert is a classic (title/body/footer) 1 button modal window that \n            does not block.</h4>\n            <b>Configuration:</b>\n            <ul>\n                <li>Non blocking (click anywhere outside to dismiss)</li>\n                <li>Size large</li>\n                <li>Dismissed with default keyboard key (ESC)</li>\n                <li>Close wth button click</li>\n                <li>HTML content</li>\n            </ul>\n    \n                ")
            .open();
    };
    TodolistComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-todolist',
            template: __webpack_require__(783),
            styles: [__webpack_require__(768)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__["a" /* Modal */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__["a" /* Modal */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_modal__["k" /* Overlay */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_modal__["k" /* Overlay */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewContainerRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewContainerRef */]) === 'function' && _d) || Object])
    ], TodolistComponent);
    return TodolistComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/todolist.component.js.map

/***/ },

    /***/ 574:
/***/ function(module, exports, __webpack_require__) {

"use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(373);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(565);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/index.js.map

/***/ },

    /***/ 575: /***/ function (module, exports, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
        /* harmony export (binding) */
        __webpack_require__.d(exports, "a", function () {
            return LoaderSmallComponent;
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

        var LoaderSmallComponent = (function () {
            function LoaderSmallComponent() {
            }

            LoaderSmallComponent.prototype.ngOnInit = function () {
            };
            LoaderSmallComponent = __decorate([
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
                    selector: 'app-loader-small',
                    template: __webpack_require__(784),
                    styles: [__webpack_require__(769)]
                }),
                __metadata('design:paramtypes', [])
            ], LoaderSmallComponent);
            return LoaderSmallComponent;
        }());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/loader-small.component.js.map

        /***/
    },

    /***/ 576:
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

    /***/ 577:
/***/ function(module, exports, __webpack_require__) {

"use strict";
        /* harmony export (binding) */
        __webpack_require__.d(exports, "a", function () {
            return Task;
        });
        /**
         * Created by Bart on 26/12/2016.
         */
        var Task = (function () {
            function Task(id, name, dueDate, description, period, assigned_to, household_id, points) {
                this.id = id;
                this.name = name;
                this.dueDate = dueDate;
                this.description = description;
                this.period = period;
                this.assigned_to = assigned_to;
                this.household_id = household_id;
                this.points = points;
            }

            Task.makeTaskFromJSON = function (item) {
                return new Task(item.id, item.name, new Date(Date.parse(item.dueDate)), item.description, item.period, item.assigned_to, item.household_id, item.points);
            };
            return Task;
        }());
//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/task.model.js.map

        /***/
    },

    /***/ 578: /***/ function (module, exports, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1053);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);


//# sourceMappingURL=C:/xampp/htdocs/www/backend_kuisApp/src/polyfills.js.map

/***/ },

    /***/ 757:
/***/ function(module, exports) {

        module.exports = "/*@media all and (min-width: 992px){*/\r\n/*body{*/\r\n/*background-color: yellow;*/\r\n/*}*/\r\n/*app-header{*/\r\n/*display: none;*/\r\n/*}*/\r\n/*}*/"

/***/ },

    /***/ 758:
/***/ function(module, exports) {

module.exports = ""

/***/ },

    /***/ 759:
/***/ function(module, exports) {

        module.exports = "/*img{*/\r\n/*width: 50px;*/\r\n/*height:50px;*/\r\n/*}*/"

/***/ },

    /***/ 760:
/***/ function(module, exports) {

        module.exports = "/*.message-form{*/\r\n/*bottom: 60px;*/\r\n/*position: absolute;*/\r\n/*}*/\r\n/*form{*/\r\n/*width: 100%;*/\r\n/*margin-left: 0px;*/\r\n\r\n/*}*/"

/***/ },

    /***/ 761:
/***/ function(module, exports) {

module.exports = ""

/***/ },

    /***/ 762:
/***/ function(module, exports) {

        module.exports = "\r\n"

/***/ },

    /***/ 763: /***/ function (module, exports) {

        module.exports = "/*.brand-logo{*/\r\n/*font-family: 'Finger Paint', cursive;*/\r\n/*font-size: 32px;*/\r\n/*}*/"

        /***/
    },

    /***/ 764: /***/ function (module, exports) {

        module.exports = "/*h1{*/\r\n/*font-size: 35px;*/\r\n/*}*/\r\n/*app-header{*/\r\n/*display: none;*/\r\n/*}*/\r\n/*header, main, footer,aside {*/\r\n/*padding-left: 350px;*/\r\n/*}*/\r\n\r\n/*@media only screen and (max-width : 992px) {*/\r\n/*header, main, footer {*/\r\n/*padding-left: 0;*/\r\n\r\n/*}*/\r\n/*app-header{*/\r\n/*display: block;*/\r\n/*}*/\r\n/*}*/\r\n\r\n/*aside app-chat {*/\r\n/*position: absolute;*/\r\n\r\n/*top:0px;*/\r\n/*bottom: 0px;*/\r\n/*right: 0px;*/\r\n/*width: 250px;*/\r\n/*border-left: 1px solid gray;*/\r\n\r\n/*}*/"

        /***/
    },

    /***/ 765:
/***/ function(module, exports) {

module.exports = ""

/***/ },

    /***/ 766: /***/ function (module, exports) {

        module.exports = "/*.logo a{*/\r\n/*font-family: 'Finger Paint', cursive;*/\r\n/*font-size: 32px;*/\r\n/*margin-bottom: 5%;*/\r\n/*margin-top: 5%;*/\r\n/*}*/\r\n\r\n\r\n"

        /***/
    },

    /***/ 767:
/***/ function(module, exports) {

module.exports = ""

/***/ },

    /***/ 768:
/***/ function(module, exports) {

module.exports = ""

/***/ },

    /***/ 769: /***/ function (module, exports) {

        module.exports = "app-loader-small * {\r\n    height: 200px;\r\n    background: red;\r\n}"

        /***/
    },

    /***/ 770:
/***/ function(module, exports) {

module.exports = ""

/***/ },

    /***/ 771:
/***/ function(module, exports) {

        module.exports = ""

/***/ },

    /***/ 772:
/***/ function(module, exports) {

        module.exports = "<router-outlet></router-outlet>\n"

/***/ },

    /***/ 773: /***/ function (module, exports) {

        module.exports = "<p>\n  all-tasks works!\n</p>\n"

        /***/
    },

    /***/ 774: /***/ function (module, exports) {

        module.exports = "<!--<app-message-list></app-message-list>-->\r\n<!--<app-message-form></app-message-form>-->\r\n\r\n<!--message-container side-nav fixed right-aligned-->\r\n<div class=\"\">\r\n    <h5>The Cleansing Chatbox </h5>\r\n    <p>Users in household:</p>\r\n    <div class=\"col s12 \">\r\n        <div class=\" card gray lighten-5 \">\r\n            <div class=\"row valign-wrapper \">\r\n                <div class=\"col s3\">\r\n                    <img src=\"{{photoUrl}}\" alt=\"\" class=\"responsive-img circle\">\r\n                </div>\r\n                <div class=\"col s9\">\r\n        <span class=\"black-text\">\r\n          {{user}}\r\n        </span>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <app-message-list></app-message-list>\r\n    <app-message-form></app-message-form>\r\n</div>\r\n"

        /***/
    },

    /***/ 775: /***/ function (module, exports) {

        module.exports = "<div class=\"message-form\">\r\n  <form class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"input-field col s8\" >\r\n        <i class=\"prefix mdi-communication-chat\"></i>\r\n        <input ngmodel=\"messageContent\" type=\"text\" placeholder=\"Brent is fantastisch\">\r\n      </div>\r\n      <div class=\"input-field col s4\">\r\n        <button type=\"submit\" class=\"waves-effect waves-light btn-floating btn-large\">\r\n          <i class=\"material-icons\">chat</i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

        /***/
    },

    /***/ 776: /***/ function (module, exports) {

        module.exports = "<p>\r\n  message-item works!\r\n</p>\r\n"

        /***/
    },

    /***/ 777: /***/ function (module, exports) {

        module.exports = "<p>Messages in Houshold:</p>\r\n\r\n"

        /***/
    },

    /***/ 778:
/***/ function(module, exports) {

        module.exports = "<nav class=\"yellow darken-2\">\r\n  <div class=\"nav-wrapper\">\r\n\r\n    <ul class=\"right hide-on-med-and-down\">\r\n      <li><a href=\"\">My Account</a> </li>\r\n      <li><a>Settings</a></li>\r\n      <li><a>Sign out</a> </li>\r\n    </ul>\r\n\r\n    <ul class=\"side-nav\" id=\"mobile-demo\">\r\n      <li><a href=\"\">My Account</a> </li>\r\n      <li><a>Settings</a></li>\r\n      <li><a>Sign out</a> </li>\r\n    </ul>\r\n    <a href=\"home\" class=\"brand-logo center\">The Cleansing</a>\r\n    <a data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\r\n    <script>\r\n\r\n    </script>\r\n  </div>\r\n\r\n\r\n</nav>\r\n\r\n\r\n"

/***/ },

    /***/ 779:
/***/ function(module, exports) {

        module.exports = "<header>\r\n    <nav class=\"top-nav yellow darken-2\">\r\n        <div class=\"container\">\r\n            <div class=\"nav-wrapper\">\r\n                <a data-activates=\"nav-mobile\" class=\"button-collapse top-nav full hide-on-large-only\">\r\n                    <i class=\"material-icons\">menu</i>\r\n                </a>\r\n                <a class=\"page-title\">cleansing top-nav</a>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <!--<div class=\"container\">-->\r\n        <!--<a data-activates=\"nav-mobile\" class=\"button-collapse top-nav full hide-on-large-only\">-->\r\n            <!--<i class=\"material-icons\">menu</i>-->\r\n        <!--</a>-->\r\n    <!--</div>-->\r\n\r\n    <ul id=\"nav-mobile\" class=\"side-nav fixed\">\r\n            <li>\r\n                <div class=\"userView\">\r\n                    <div class=\"background yellow darken-2\">\r\n\r\n                    </div>\r\n                    <img class=\"circle\"\r\n                         src=\"https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAe_AAAAJDI1NDNhYjBhLTU0OTQtNDQyNi1iNGQ2LTIzZmMxMDMxOWMzMg.jpg\">\r\n                    <span class=\"name\">The cleansing</span>\r\n                    <span class=\"email\">get it clean or get out</span>\r\n                </div>\r\n            </li>\r\n\r\n            <li><a [routerLink]=\"['']\" class=\"waves-effect \"><i class=\"material-icons\">home</i>Home</a></li>\r\n            <li><a [routerLink]=\"['tasks']\" class=\"waves-effect \"><i class=\"material-icons\">assignment</i>Tasks</a></li>\r\n            <li><a [routerLink]=\"['household']\" class=\"waves-effect \"><i class=\"material-icons\">people</i>Household</a></li>\r\n            <li>\r\n                <div class=\"divider\"></div>\r\n            </li>\r\n            <li><a href=\"#\" class=\"waves-effect \"><i class=\"material-icons\">settings</i>Settings</a></li>\r\n            <li><a class=\"waves-effect \" (click)=\"logout()\"><i class=\"material-icons\">input</i>Sign out</a></li>\r\n            <li>\r\n                <div class=\"divider\"></div>\r\n            </li>\r\n            <li><a href=\"#\" class=\"waves-effect waves-teal\">About</a></li>\r\n        </ul>\r\n\r\n\r\n</header>\r\n<!--<app-header></app-header>-->\r\n<!--<nav class=\"yellow darken-2\">-->\r\n    <!--<app-navigation></app-navigation>-->\r\n<!--</nav>-->\r\n\r\n\r\n<main class=\"\">\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col l2 hide-on-med-and-down\"></div>\r\n        <div class=\"col s12 l8\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        <aside class=\"hide-on-med-and-down col l2\"><app-chat></app-chat></aside>\r\n    </div>\r\n</main>\r\n\r\n<!--<aside>-->\r\n<!--&lt;!&ndash;<app-chat></app-chat>&ndash;&gt;-->\r\n<!--</aside>-->\r\n<footer></footer>\r\n\r\n\r\n\r\n\r\n"

/***/ },

    /***/ 780:
/***/ function(module, exports) {

        module.exports = "<p>\n  household works!\n</p>\n"

/***/ },

    /***/ 781:
/***/ function(module, exports) {

        module.exports = "<!--<ul id=\"nav-mobile\" class=\"side-nav fixed  \">-->\r\n<!--<li class=\"logo\">-->\r\n<!--<a id=\"logo-container\" href=\"#!\" class=\"brand-logo\">The Cleansing</a>-->\r\n<!--</li>-->\r\n<!--<li class=\"bold\"><a [routerLink]=\"['']\" class=\"waves-effect waves-teal\">Home</a></li>-->\r\n<!--<li class=\"bold\"><a [routerLink]=\"['tasks']\" class=\"waves-effect waves-teal\">Tasks</a></li>-->\r\n<!--<li class=\"bold\"><a [routerLink]=\"['household']\"class=\"waves-effect waves-teal\">Household</a></li>-->\r\n<!--<li class=\"bold\"><a href=\"#\" class=\"waves-effect waves-teal\">Settings</a></li>-->\r\n<!--<li class=\"bold\"><a class=\"waves-effect waves-teal\" (click)=\"logout()\">Sign out</a> </li>-->\r\n<!--</ul>-->\r\n\r\n<div class=\"nav-wrapper\">\r\n\r\n    <!--<ul class=\"right \">-->\r\n        <!--<li><a href=\"\">My Account</a> </li>-->\r\n        <!--<li><a>Settings</a></li>-->\r\n        <!--<li><a>Sign out</a> </li>-->\r\n    <!--</ul>-->\r\n\r\n    <ul id=\"slide-out\" class=\"side-nav\">\r\n    <li>\r\n        <div class=\"userView\">\r\n            <div class=\"background yellow darken-2\">\r\n\r\n            </div>\r\n            <img class=\"circle\"\r\n                 src=\"https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAe_AAAAJDI1NDNhYjBhLTU0OTQtNDQyNi1iNGQ2LTIzZmMxMDMxOWMzMg.jpg\">\r\n            <span class=\"name\">The cleansing</span>\r\n            <span class=\"email\">get it clean or get out</span>\r\n        </div>\r\n    </li>\r\n\r\n    <li><a [routerLink]=\"['']\" class=\"waves-effect \"><i class=\"material-icons\">home</i>Home</a></li>\r\n    <li><a [routerLink]=\"['tasks']\" class=\"waves-effect \"><i class=\"material-icons\">assignment</i>Tasks</a></li>\r\n    <li><a [routerLink]=\"['household']\" class=\"waves-effect \"><i class=\"material-icons\">people</i>Household</a></li>\r\n    <li>\r\n        <div class=\"divider\"></div>\r\n    </li>\r\n    <li><a href=\"#\" class=\"waves-effect \"><i class=\"material-icons\">settings</i>Settings</a></li>\r\n    <li><a class=\"waves-effect \" (click)=\"logout()\"><i class=\"material-icons\">input</i>Sign out</a></li>\r\n    <li>\r\n        <div class=\"divider\"></div>\r\n    </li>\r\n    <li><a href=\"#\" class=\"waves-effect waves-teal\">About</a></li>\r\n</ul>\r\n\r\n    <a href=\"home\" class=\"brand-logo center\">The Cleansing</a>\r\n    <a (click)=\"slideOut()\" data-activates=\"slide-out\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\r\n</div>"

/***/ },

    /***/ 782:
/***/ function(module, exports) {

        module.exports = "<div>\n    <p>\n  ik heb nog een household_overview component nodig\n        <br>\n        <br>\n    </p>\n</div>\n<app-todolist>loading...</app-todolist>\n\n"

/***/ },

    /***/ 783:
/***/ function(module, exports) {

        module.exports = "<div class=\"collection\" *ngIf=\"[tasksTodo]\">\n\n    <div class=\"collection-item\" *ngFor=\"let tasktodo of tasksTodo\"\n         (click)=\"showDetail()\">\n\n        <p>{{tasktodo.name}}</p>\n            <p>{{tasktodo.dueDate.toLocaleDateString()}}</p>\n\n    </div>\n\n</div>\n<div *ngIf=\"[tasksTodo]==''\">\n    <p>loading tasks...</p>\n</div>\n"

/***/ },

    /***/ 784:
/***/ function(module, exports) {

        module.exports = "<div class=\"center-align\">\n    <div class=\"preloader-wrapper small active\">\n        <div class=\"spinner-layer spinner-blue\">\n            <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n            </div>\n            <div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n            </div>\n            <div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n            </div>\n        </div>\n\n        <div class=\"spinner-layer spinner-red\">\n            <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n            </div>\n            <div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n            </div>\n            <div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n            </div>\n        </div>\n\n        <div class=\"spinner-layer spinner-yellow\">\n            <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n            </div>\n            <div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n            </div>\n            <div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n            </div>\n        </div>\n\n        <div class=\"spinner-layer spinner-green\">\n            <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n            </div>\n            <div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n            </div>\n            <div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ },

    /***/ 785:
/***/ function(module, exports) {

        module.exports = "<div class=\"row\">\n    <div class=\"col s12 m6 l4 offset-m3 offset-l4\">\n        <article class=\"card\">\n            <div class=\"card-content\">\n                <h1 class=\"card-title\">{{title}}</h1>\n            </div>\n            <div class=\"card-action\">\n                <button class=\"btn\" (click)=\"loginFacebook()\">Login With Facebook</button>\n                <button class=\"btn\" (click)=\"loginGoogle()\">Login With Google</button>\n            </div>\n\n        </article>\n    </div>\n</div>"

        /***/
    },

    /***/ 786: /***/ function (module, exports) {

        module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }

}, [1054]);
//# sourceMappingURL=main.bundle.map