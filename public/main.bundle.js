webpackJsonp([0,3],{

/***/ 1139:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 1139;


/***/ },

/***/ 1140:
/***/ function(module, exports) {

/* (ignored) */

/***/ },

/***/ 1141:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(488);


/***/ },

/***/ 169:
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
        this.Hostname = location.protocol + '//' + location.hostname + (location.port ? ':' + (location.port === '4200' ? "3000" : location.port) : '');
        this.ServerWithApiUrl = this.Server + this.ApiUrl;
        this.LocalhostWithApiUrl = this.Localhost + this.ApiUrl;
        this.AutoWithApiUrl = this.Hostname + "/" + this.ApiUrl;
    }
    Contract = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], Contract);
    return Contract;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/contract.js.map

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Task; });
/**
 * Created by Bart on 26/12/2016.
 */
var Task = (function () {
    function Task() {
    }
    Task.makeTaskFromJSON = function (item) {
        var task = new Task();
        task.id = item.id;
        task.name = item.name;
        task.dueDate = new Date(Date.parse(item.dueDate));
        task.description = item.description;
        task.period = item.period;
        task.assigned_to = item.assigned_to;
        task.household_id = item.household_id;
        task.points = item.points;
        return task;
    };
    return Task;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/task.model.js.map

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(1129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocketService = (function () {
    function SocketService() {
        var _this = this;
        this.hostname = location.protocol + '//' + location.hostname + (location.port ? ':' + (location.port === '4200' ? "3000" : location.port) : '');
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"](this.hostname);
        this.socket.on("connect", function () { return _this.subscribe(); });
    }
    SocketService.prototype.subscribe = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.getToken().then(function (token) {
            _this.socket.emit("subscribe", token);
        });
    };
    SocketService.prototype.sendMessage = function (message) {
        this.socket.emit("chat-message", message);
    };
    SocketService.prototype.receiveMessages = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].create(function (observer) {
            _this.socket.on("sent-message", function (msg) {
                observer.next(msg);
            });
        });
    };
    SocketService.prototype.taskUpdates = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].create(function (observer) {
            _this.socket.on("tasks-update", function (taskInfo) {
                observer.next(taskInfo);
            });
        });
    };
    SocketService.prototype.awardWinner = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].create(function (observer) {
            _this.socket.on("award-winner", function (winnerInfo) {
                observer.next(winnerInfo);
            });
        });
    };
    SocketService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], SocketService);
    return SocketService;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/socket.service.js.map

/***/ },

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Household; });
var Household = (function () {
    function Household() {
    }
    Household.makeHouseholdFromJSON = function (item) {
        var household = new Household();
        household.id = item.id;
        household.name = item.name;
        // household.taskstodo = item.taskstodo;
        // household.countFinishedTasks = item.countFinishedTasks;
        // household.countFinishedAwards = item.countFinishedAwards;
        // household.countTotalScore = item.countTotalScore;
        // household.countTasks = item.countTasks;
        // household.mostPopularTask = item.mostPopularTask;
        // household.mostAwardsWon = item.mostAwardsWon;
        // household.lastAward = item.lastAward;
        // household.lastAwardWonBy = item.lastAwardWonBy;
        // household.tasks = item.tasks;
        household.users = item.users;
        household.award = item.award;
        return household;
    };
    return Household;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/household.model.js.map

/***/ },

/***/ 388:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(841),
            styles: [__webpack_require__(823)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/app.component.js.map

/***/ },

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard_auth_guard__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_guard_unauth_guard__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_tasks_todo_tasks_todo_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_all_tasks_all_tasks_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_household_household_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__ = __webpack_require__(395);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
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
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/app.routes.js.map

/***/ },

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__(47);
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
    function AllTasksComponent(apiSevice) {
        this.apiSevice = apiSevice;
        this.loading = true;
    }
    AllTasksComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    AllTasksComponent.prototype.getUser = function () {
        var _this = this;
        this.apiSevice
            .getEverything()
            .subscribe(function (data) {
            _this.user = data;
            _this.loading = false;
        }, function (error) { return console.log(error); });
    };
    AllTasksComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-all-tasks',
            template: __webpack_require__(842),
            styles: [__webpack_require__(824)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], AllTasksComponent);
    return AllTasksComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/all-tasks.component.js.map

/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(69);
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
    }
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(851),
            styles: [__webpack_require__(828)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/home.component.js.map

/***/ },

/***/ 392:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-household',
            template: __webpack_require__(856),
            styles: [__webpack_require__(833)]
        }), 
        __metadata('design:paramtypes', [])
    ], HouseholdComponent);
    return HouseholdComponent;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/household.component.js.map

/***/ },

/***/ 393:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__(47);
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
    function TasksTodoComponent(apiSevice) {
        this.apiSevice = apiSevice;
        this.loading = true;
    }
    TasksTodoComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    TasksTodoComponent.prototype.getUser = function () {
        var _this = this;
        this.apiSevice
            .getEverything()
            .subscribe(function (data) {
            _this.user = data;
            _this.loading = false;
        }, function (error) { return console.log(error); });
    };
    TasksTodoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tasks-todo',
            template: __webpack_require__(859),
            styles: [__webpack_require__(836)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], TasksTodoComponent);
    return TasksTodoComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/tasks-todo.component.js.map

/***/ },

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(69);
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
            _this.auth.addUser().subscribe(function (data) { return _this.router.navigate(['home']); }, function (error) { return console.log(error); });
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
            _this.auth.addUser().subscribe(function (data) { return _this.router.navigate(['home']); }, function (error) { return console.log(error); });
        })
            .catch(function (error) {
            _this.title = "" + error;
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(863),
            styles: [__webpack_require__(839)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/login.component.js.map

/***/ },

/***/ 395:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(864),
            styles: [__webpack_require__(840)]
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/not-found.component.js.map

/***/ },

/***/ 396:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(54);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/auth.guard.js.map

/***/ },

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(54);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], UnauthGuard);
    return UnauthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/unauth.guard.js.map

/***/ },

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contract__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_services_auth_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_task_model__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_household_model__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_user_model__ = __webpack_require__(70);
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
        // this.actionUrl = _contract.ServerWithApiUrl;
        console.log(_contract.AutoWithApiUrl);
        this.actionUrl = _contract.AutoWithApiUrl;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    ApiService.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json().error || 'server error...');
    };
    ApiService.prototype.getTasks = function () {
        var _this = this;
        var tokenPromise = new Promise(function (resolve, reject) {
            _this.auth.token.then(function (token) {
                _this.headers.set('Firebase-ID-Token', token);
                return _this._http.get(_this.actionUrl + "tasksbytoken", { headers: _this.headers })
                    .map(function (response) {
                    var tasks = [];
                    response.json().forEach(function (item) { return tasks.push(__WEBPACK_IMPORTED_MODULE_5__models_task_model__["a" /* Task */].makeTaskFromJSON(item)); });
                    return tasks;
                })
                    .catch(ApiService.handleError)
                    .subscribe(function (data) { return resolve(data); }, function (err) { return reject(err); });
            });
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].fromPromise(tokenPromise);
    };
    ApiService.prototype.getTaskstodobyhousehold = function (term) {
        var _this = this;
        if (term === void 0) { term = 7; }
        var tokenPromise = new Promise(function (resolve, reject) {
            _this.auth.token.then(function (token) {
                _this.headers.set('Firebase-ID-Token', token);
                return _this._http.get(_this.actionUrl + "taskstodobyhousehold/" + null + "/" + term, { headers: _this.headers })
                    .map(function (response) {
                    var tasks = [];
                    response.json().forEach(function (item) { return tasks.push(__WEBPACK_IMPORTED_MODULE_5__models_task_model__["a" /* Task */].makeTaskFromJSON(item)); });
                    return tasks;
                })
                    .catch(ApiService.handleError)
                    .subscribe(function (data) { return resolve(data); }, function (err) { return reject(err); });
            });
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].fromPromise(tokenPromise);
    };
    ApiService.prototype.getHousehold = function () {
        var _this = this;
        var tokenPromise = new Promise(function (resolve, reject) {
            _this.auth.token.then(function (token) {
                _this.headers.set('Firebase-ID-Token', token);
                return _this._http.get(_this.actionUrl + "household", { headers: _this.headers })
                    .map(function (response) {
                    return __WEBPACK_IMPORTED_MODULE_6__models_household_model__["a" /* Household */].makeHouseholdFromJSON(response.json());
                })
                    .catch(ApiService.handleError)
                    .subscribe(function (data) { return resolve(data); }, function (err) { return reject(err); });
            });
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].fromPromise(tokenPromise);
    };
    ApiService.prototype.getEverything = function () {
        var _this = this;
        var tokenPromise = new Promise(function (resolve, reject) {
            _this.auth.token.then(function (token) {
                _this.headers.set('Firebase-ID-Token', token);
                return _this._http.get(_this.actionUrl + "userbyuid/" + null, { headers: _this.headers })
                    .map(function (response) {
                    var user = response.json();
                    if (user.household) {
                        for (var u in user.household.users) {
                            user.household.users[u] = __WEBPACK_IMPORTED_MODULE_7__models_user_model__["a" /* User */].makeUserFromJSON(user.household.users[u]);
                        }
                        for (var t in user.household.tasks) {
                            user.household.tasks[t] = __WEBPACK_IMPORTED_MODULE_5__models_task_model__["a" /* Task */].makeTaskFromJSON(user.household.tasks[t]);
                        }
                        for (var t in user.household.taskstodo) {
                            user.household.taskstodo[t] = __WEBPACK_IMPORTED_MODULE_5__models_task_model__["a" /* Task */].makeTaskFromJSON(user.household.taskstodo[t]);
                        }
                    }
                    return user;
                })
                    .catch(ApiService.handleError)
                    .subscribe(function (data) { return resolve(data); }, function (err) { return reject(err); });
            });
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].fromPromise(tokenPromise);
    };
    ApiService.prototype.addFinishedTask = function (id, done, finished_by, finished_on) {
        var _this = this;
        var tokenPromise = new Promise(function (resolve, reject) {
            _this.auth.token.then(function (token) {
                _this.headers.set('Firebase-ID-Token', token);
                return _this._http.post(_this.actionUrl + "finishtask", { id: id, done: done, finished_by: finished_by, finished_on: finished_on }, { headers: _this.headers })
                    .map(function (res) { return res.json(); })
                    .catch(ApiService.handleError)
                    .subscribe(function (data) { } /*console.log(data)*/);
            });
        });
    };
    ApiService.prototype.addFinishedAward = function () {
        var _this = this;
        var data = 'Test';
        var tokenPromise = new Promise(function (resolve, reject) {
            _this.auth.token.then(function (token) {
                _this.headers.set("Firebase-ID-Token", token);
                return _this._http.post(_this.actionUrl + "finishaward", { data: data }, { headers: _this.headers })
                    .map(function (res) { return res.json(); })
                    .catch(ApiService.handleError)
                    .subscribe(function (data) { return console.log(data); });
            });
        });
    };
    ApiService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__contract__["a" /* Contract */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__contract__["a" /* Contract */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__auth_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__auth_services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], ApiService);
    return ApiService;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/api.service.js.map

/***/ },

/***/ 487:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 487;


/***/ },

/***/ 488:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(611);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/main.js.map

/***/ },

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contract__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user_model__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
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
    function AuthService(auth$, router, _http, _contract) {
        var _this = this;
        this.auth$ = auth$;
        this.router = router;
        this._http = _http;
        this._contract = _contract;
        this.authState = null;
        //this.actionUrl = _contract.LocalhostWithApiUrl;
        this.actionUrl = _contract.ServerWithApiUrl;
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        //abonneer op authstate wijzigingen
        this.auth$.subscribe(function (state) {
            _this.authState = state;
            //navigeer naar login als authstate null is
            //door logout, door netwerk error, door...
            if (!state) {
                _this.router.navigate(['']);
            }
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
    AuthService.prototype.addUser = function () {
        var _this = this;
        var tokenPromise = new Promise(function (resolve, reject) {
            _this.token.then(function (token) {
                _this.headers.set('Firebase-ID-Token', token);
                return _this._http.post(_this.actionUrl + "adduser", null, { headers: _this.headers })
                    .map(function (response) {
                    return __WEBPACK_IMPORTED_MODULE_5__models_user_model__["a" /* User */].makeUserFromJSON(response.json());
                })
                    .catch(function (error) {
                    console.error(error);
                    return __WEBPACK_IMPORTED_MODULE_6_rxjs__["Observable"].throw(error.json().error || 'server error...');
                })
                    .subscribe(function (data) { return resolve(data); }, function (err) { return reject(err); });
            });
        });
        return __WEBPACK_IMPORTED_MODULE_6_rxjs__["Observable"].fromPromise(tokenPromise);
    };
    AuthService.prototype.loginFacebook = function () {
        return this.auth$
            .login({ provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AuthProviders */].Facebook });
    };
    AuthService.prototype.loginGoogle = function () {
        return this.auth$
            .login({ provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AuthProviders */].Google });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* FirebaseAuth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* FirebaseAuth */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__contract__["a" /* Contract */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__contract__["a" /* Contract */]) === 'function' && _d) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/auth.service.js.map

/***/ },

/***/ 593:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_services_auth_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_guard_auth_guard__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routes__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_guard_unauth_guard__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_module__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__not_found_not_found_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contract__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_api_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_socket_service__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_modal__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_modal_plugins_bootstrap__ = __webpack_require__(634);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__not_found_not_found_component__["a" /* NotFoundComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routes__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["d" /* AngularFireModule */].initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
                __WEBPACK_IMPORTED_MODULE_11__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_12__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_17_angular2_modal__["m" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_18_angular2_modal_plugins_bootstrap__["a" /* BootstrapModalModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__auth_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__auth_guard_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_10__auth_guard_unauth_guard__["a" /* UnauthGuard */], __WEBPACK_IMPORTED_MODULE_14__contract__["a" /* Contract */], __WEBPACK_IMPORTED_MODULE_15__service_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_16__service_socket_service__["a" /* SocketService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/app.module.js.map

/***/ },

/***/ 594:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_task_model__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TaskRowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskRowComponent = (function () {
    function TaskRowComponent() {
        this.showDetail = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TaskRowComponent.prototype.showDetailClick = function () {
        this.showDetail.emit(this.task);
    };
    TaskRowComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(TaskRowComponent.prototype, "dateDiff", {
        get: function () {
            return Math.ceil(__WEBPACK_IMPORTED_MODULE_3_moment__["duration"](__WEBPACK_IMPORTED_MODULE_3_moment__(this.task.dueDate).diff(__WEBPACK_IMPORTED_MODULE_3_moment__())).asDays());
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_task_model__["a" /* Task */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__models_task_model__["a" /* Task */]) === 'function' && _a) || Object)
    ], TaskRowComponent.prototype, "task", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */]) === 'function' && _b) || Object)
    ], TaskRowComponent.prototype, "user", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], TaskRowComponent.prototype, "showDetail", void 0);
    TaskRowComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-row',
            template: __webpack_require__(843),
            styles: [__webpack_require__(817)],
        }), 
        __metadata('design:paramtypes', [])
    ], TaskRowComponent);
    return TaskRowComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/task-row.component.js.map

/***/ },

/***/ 595:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TasklistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TasklistComponent = (function () {
    function TasklistComponent(apiService) {
        this.apiService = apiService;
        this.showDialog = false;
    }
    TasklistComponent.prototype.ngOnInit = function () {
        //this.getTasks();
    };
    TasklistComponent.prototype.user = function (id) {
        for (var user in this.users) {
            if (this.users[user].id == id)
                return this.users[user];
        }
        return new __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* User */]();
    };
    TasklistComponent.prototype.showDetail = function (task) {
        this.selectedTask = task;
        this.showDialog = !this.showDialog;
    };
    TasklistComponent.prototype.getTasks = function () {
        // this.apiService
        //     .getTasks()
        //     .subscribe(
        //         data => {
        //             this.tasks = data.sort((t1, t2) => {
        //                 if (t1.period > t2.period) return 1;
        //                 if (t1.period < t2.period) return -1;
        //                 return 0;
        //             });
        //             this.loading = false;
        //         },
        //         error => console.log(error)
        //     );
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], TasklistComponent.prototype, "tasks", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], TasklistComponent.prototype, "users", void 0);
    TasklistComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tasklist',
            template: __webpack_require__(844),
            styles: [__webpack_require__(825)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], TasklistComponent);
    return TasklistComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/tasklist.component.js.map

/***/ },

/***/ 596:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_household_model__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__(1135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChatComponent; });
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
    function ChatComponent(apiService) {
        this.apiService = apiService;
        this.isHidden = true;
        this.household = new __WEBPACK_IMPORTED_MODULE_1__models_household_model__["a" /* Household */]();
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.getHousehold();
    };
    ChatComponent.prototype.toggleChat = function () {
        this.isHidden = !this.isHidden;
    };
    ChatComponent.prototype.getHousehold = function () {
        var _this = this;
        this.apiService
            .getHousehold()
            .subscribe(function (data) {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_util__["isUndefined"])(data.users)) {
                data.users.sort(function (a, b) {
                    if (a.score < b.score)
                        return 1;
                    if (b.score < a.score)
                        return -1;
                    return 0;
                });
                _this.household = data;
            }
            else {
            }
        }, 
        //test
        function (error) { return console.log("error household " + error); });
    };
    ChatComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(845),
            styles: [__webpack_require__(818)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], ChatComponent);
    return ChatComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/chat.component.js.map

/***/ },

/***/ 597:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_socket_service__ = __webpack_require__(171);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MessageFormComponent; });
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
    function MessageFormComponent(socketService) {
        this.socketService = socketService;
        this.socket = null;
        this.messageContent = "";
        this.messageSent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MessageFormComponent.prototype.sendMessage = function () {
        if (this.messageContent.trim() !== "") {
            this.socketService.sendMessage(this.messageContent);
            this.messageContent = "";
            this.messageSent.emit(true);
        }
    };
    MessageFormComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], MessageFormComponent.prototype, "messageSent", void 0);
    MessageFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-message-form',
            template: __webpack_require__(846),
            styles: [__webpack_require__(819)],
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_socket_service__["a" /* SocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_socket_service__["a" /* SocketService */]) === 'function' && _b) || Object])
    ], MessageFormComponent);
    return MessageFormComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/message-form.component.js.map

/***/ },

/***/ 598:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MessageItemComponent; });
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
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], MessageItemComponent.prototype, "message", void 0);
    MessageItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-message-item',
            template: __webpack_require__(847),
            styles: [__webpack_require__(820)]
        }), 
        __metadata('design:paramtypes', [])
    ], MessageItemComponent);
    return MessageItemComponent;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/message-item.component.js.map

/***/ },

/***/ 599:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_socket_service__ = __webpack_require__(171);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MessageListComponent; });
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
    function MessageListComponent(socketService) {
        this.socketService = socketService;
        this.messages = [{
                user: {
                    imgsrc: "https://scontent.xx.fbcdn.net/v/t1.0-1/s100x100/13100703_10206817833626040_7412135762927104247_n.jpg?oh=790f130d163810fa6f01733daea967a2&oe=589D9B76",
                    name: "Nick",
                    lname: "D'hondt"
                }, message: "Hebban olla uogala nestas hagunnan hinase hi(c) (a)nda thu uuat unbidan uue nu"
            },
            { user: { imgsrc: "https://scontent.xx.fbcdn.net/v/t1.0-1/s100x100/13100703_10206817833626040_7412135762927104247_n.jpg?oh=790f130d163810fa6f01733daea967a2&oe=589D9B76", name: "Nick", lname: "D'hondt" }, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, mauris id pulvinar semper, orci ligula pulvinar elit, ullamcorper gravida eros nibh eget orci. Mauris." },
            { user: { imgsrc: "https://scontent.xx.fbcdn.net/v/t1.0-1/s100x100/13100703_10206817833626040_7412135762927104247_n.jpg?oh=790f130d163810fa6f01733daea967a2&oe=589D9B76", name: "Nick", lname: "D'hondt" }, message: "HDes Teufels liebstes Möbelstück ist die lange Bank." }];
    }
    MessageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socketService
            .receiveMessages()
            .subscribe(function (msg) {
            _this.messages.push(msg);
            _this.scrollToBottom();
        });
        this.scrollToBottom();
    };
    MessageListComponent.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            try {
                _this.myScrollContainer.nativeElement.scrollTop = _this.myScrollContainer.nativeElement.scrollHeight;
            }
            catch (err) {
            }
        }, 300);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollMe'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object)
    ], MessageListComponent.prototype, "myScrollContainer", void 0);
    MessageListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-message-list',
            template: __webpack_require__(848),
            styles: [__webpack_require__(821)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_socket_service__["a" /* SocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_socket_service__["a" /* SocketService */]) === 'function' && _b) || Object])
    ], MessageListComponent);
    return MessageListComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/message-list.component.js.map

/***/ },

/***/ 600:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(849),
            styles: [__webpack_require__(826)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/footer.component.js.map

/***/ },

/***/ 601:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(850),
            styles: [__webpack_require__(827)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/header.component.js.map

/***/ },

/***/ 602:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_services_auth_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tasks_todo_tasks_todo_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__all_tasks_all_tasks_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__household_household_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navigation_navigation_component__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_api_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contract__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tasks_todo_todolist_todolist_component__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__chat_chat_component__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__chat_message_list_message_list_component__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__chat_message_form_message_form_component__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__chat_message_item_message_item_component__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_forms__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_materialize__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angular2_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__all_tasks_tasklist_tasklist_component__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__taskdetail_taskdetail_component__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__household_overview_household_overview_component__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__loader_small_loader_small_component__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__household_overview_user_img_user_img_component__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__household_overview_user_detail_user_detail_component__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__household_overview_award_award_component__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipe_tasks_filter_pipe__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__footer_footer_component__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__tasks_todo_todolist_tasktodo_row_tasktodo_row_component__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pipe_sort_pipe__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__all_tasks_tasklist_task_row_task_row_component__ = __webpack_require__(594);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
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
                __WEBPACK_IMPORTED_MODULE_17__chat_message_item_message_item_component__["a" /* MessageItemComponent */],
                __WEBPACK_IMPORTED_MODULE_19_angular2_materialize__["MaterializeDirective"],
                __WEBPACK_IMPORTED_MODULE_20__all_tasks_tasklist_tasklist_component__["a" /* TasklistComponent */],
                __WEBPACK_IMPORTED_MODULE_21__taskdetail_taskdetail_component__["a" /* TaskdetailComponent */],
                __WEBPACK_IMPORTED_MODULE_22__household_overview_household_overview_component__["a" /* HouseholdOverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_23__loader_small_loader_small_component__["a" /* LoaderSmallComponent */],
                __WEBPACK_IMPORTED_MODULE_24__household_overview_user_img_user_img_component__["a" /* UserImgComponent */],
                __WEBPACK_IMPORTED_MODULE_25__household_overview_user_detail_user_detail_component__["a" /* UserDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_26__household_overview_award_award_component__["a" /* AwardComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pipe_tasks_filter_pipe__["a" /* TasksFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_30__pipe_sort_pipe__["a" /* SortPipe */],
                __WEBPACK_IMPORTED_MODULE_28__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_29__tasks_todo_todolist_tasktodo_row_tasktodo_row_component__["a" /* TasktodoRowComponent */],
                __WEBPACK_IMPORTED_MODULE_31__all_tasks_tasklist_task_row_task_row_component__["a" /* TaskRowComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_12__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_18__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__auth_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_10__service_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_11__contract__["a" /* Contract */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_15__chat_message_list_message_list_component__["a" /* MessageListComponent */], __WEBPACK_IMPORTED_MODULE_16__chat_message_form_message_form_component__["a" /* MessageFormComponent */], __WEBPACK_IMPORTED_MODULE_17__chat_message_item_message_item_component__["a" /* MessageItemComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/home.module.js.map

/***/ },

/***/ 603:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_award_model__ = __webpack_require__(614);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AwardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AwardComponent = (function () {
    function AwardComponent() {
    }
    AwardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_award_model__["a" /* Award */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_award_model__["a" /* Award */]) === 'function' && _a) || Object)
    ], AwardComponent.prototype, "award", void 0);
    AwardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-award',
            template: __webpack_require__(852),
            styles: [__webpack_require__(829)]
        }), 
        __metadata('design:paramtypes', [])
    ], AwardComponent);
    return AwardComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/award.component.js.map

/***/ },

/***/ 604:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_household_model__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_services_auth_service__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HouseholdOverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HouseholdOverviewComponent = (function () {
    // loading: boolean = true;
    //merge comment
    function HouseholdOverviewComponent(apiService, auth) {
        this.apiService = apiService;
        this.auth = auth;
        this.showDialog = false;
        this.authenticatedUserUID = auth.uid;
    }
    HouseholdOverviewComponent.prototype.ngOnInit = function () {
        // this.getHousehold();
    };
    HouseholdOverviewComponent.prototype.getHousehold = function () {
        //         this.apiService
        //             .getHousehold()
        //             .subscribe(
        //                 data => {
        //
        //                     this.loading = false;
        //
        //                     if (!isUndefined(data.users)) {
        //                         data.users.sort((a: User, b: User) => {
        //                             if (a.score < b.score) return 1;
        //                             if (b.score < a.score) return -1;
        //                             return 0;
        //                         });
        //                         this.household = data;
        //                     }
        //                     else {
        //
        //                     }
        //
        //                 },
        // //test
        //                 error => console.log("error household " + error)
        //             );
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_household_model__["a" /* Household */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__models_household_model__["a" /* Household */]) === 'function' && _a) || Object)
    ], HouseholdOverviewComponent.prototype, "household", void 0);
    HouseholdOverviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-household-overview',
            template: __webpack_require__(853),
            styles: [__webpack_require__(830)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__auth_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__auth_services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], HouseholdOverviewComponent);
    return HouseholdOverviewComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/household-overview.component.js.map

/***/ },

/***/ 605:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserDetailComponent = (function () {
    function UserDetailComponent() {
        this.closable = true;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    UserDetailComponent.prototype.ngOnInit = function () {
    };
    UserDetailComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    UserDetailComponent.prototype.save = function () {
        //Code om update-user uit te voeren
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */]) === 'function' && _a) || Object)
    ], UserDetailComponent.prototype, "user", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], UserDetailComponent.prototype, "closable", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], UserDetailComponent.prototype, "visible", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], UserDetailComponent.prototype, "visibleChange", void 0);
    UserDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__(854),
            styles: [__webpack_require__(831)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('dialog', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'scale3d(.3, .3, .3)' }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(100)
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(100, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'scale3d(.0, .0, .0)' }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], UserDetailComponent);
    return UserDetailComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/user-detail.component.js.map

/***/ },

/***/ 606:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserImgComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserImgComponent = (function () {
    function UserImgComponent() {
    }
    UserImgComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */]) === 'function' && _a) || Object)
    ], UserImgComponent.prototype, "user", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], UserImgComponent.prototype, "index", void 0);
    UserImgComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-img',
            template: __webpack_require__(855),
            styles: [__webpack_require__(832)]
        }), 
        __metadata('design:paramtypes', [])
    ], UserImgComponent);
    return UserImgComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/user-img.component.js.map

/***/ },

/***/ 607:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(69);
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
        this.user = auth.authState.auth;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.logout = function () {
        this.auth.logout();
    };
    NavigationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(857),
            styles: [__webpack_require__(834)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], NavigationComponent);
    return NavigationComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/navigation.component.js.map

/***/ },

/***/ 608:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_task_model__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TaskdetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



;
var TaskdetailComponent = (function () {
    function TaskdetailComponent(apiservice) {
        this.apiservice = apiservice;
        this.closable = true;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TaskdetailComponent.prototype.ngOnInit = function () {
    };
    TaskdetailComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    TaskdetailComponent.prototype.save = function () {
        // TODO : code to save changes
        this.visible = false;
        this.visibleChange.emit(this.visible);
        // this.apiservice.addFinishedTask("Brent",3);
    };
    TaskdetailComponent.prototype.delete = function () {
        //TODO : code to delete task
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_task_model__["a" /* Task */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_task_model__["a" /* Task */]) === 'function' && _a) || Object)
    ], TaskdetailComponent.prototype, "task", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], TaskdetailComponent.prototype, "users", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], TaskdetailComponent.prototype, "closable", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], TaskdetailComponent.prototype, "visible", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], TaskdetailComponent.prototype, "visibleChange", void 0);
    TaskdetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-taskdetail',
            template: __webpack_require__(858),
            styles: [__webpack_require__(835)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('dialog', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'scale3d(.3, .3, .3)' }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(100)
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(100, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'scale3d(.0, .0, .0)' }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */]) === 'function' && _c) || Object])
    ], TaskdetailComponent);
    return TaskdetailComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/taskdetail.component.js.map

/***/ },

/***/ 609:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_task_model__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_api_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_socket_service__ = __webpack_require__(171);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TasktodoRowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TasktodoRowComponent = (function () {
    function TasktodoRowComponent(apiService, socketService) {
        this.apiService = apiService;
        this.socketService = socketService;
        this.showDetail = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.finish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isDestroyed = false;
    }
    TasktodoRowComponent.prototype.showDetailClick = function () {
        this.showDetail.emit(this.task);
    };
    TasktodoRowComponent.prototype.finishClick = function () {
        this.state = 'finished';
        this.isDestroyed = true;
        this.finish.emit(this.task);
        var userUid = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid;
        this.apiService.addFinishedTask(this.task.id, true, userUid, __WEBPACK_IMPORTED_MODULE_2_moment__().format("YYYY-MM-DD HH:mm:ss"));
    };
    TasktodoRowComponent.prototype.cancelClick = function () {
        this.state = 'canceled';
        this.isDestroyed = true;
        this.cancel.emit(this.task);
        var userUid = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid;
        this.apiService.addFinishedTask(this.task.id, false, userUid, __WEBPACK_IMPORTED_MODULE_2_moment__().format("YYYY-MM-DD HH:mm:ss"));
    };
    TasktodoRowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socketService.taskUpdates().subscribe(function (data) {
            if (!_this.isDestroyed && data.taskID === _this.task.id) {
                console.log(data.done);
                console.log(data.taskID + ", " + _this.task.id);
                if (data.done) {
                    _this.state = "finished";
                    _this.finish.emit(_this.task);
                }
                else {
                    _this.state = "canceled";
                    _this.cancel.emit(_this.task);
                }
            }
        });
    };
    Object.defineProperty(TasktodoRowComponent.prototype, "dateDiff", {
        get: function () {
            return Math.ceil(__WEBPACK_IMPORTED_MODULE_2_moment__["duration"](__WEBPACK_IMPORTED_MODULE_2_moment__(this.task.dueDate).diff(__WEBPACK_IMPORTED_MODULE_2_moment__())).asDays());
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_task_model__["a" /* Task */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_task_model__["a" /* Task */]) === 'function' && _a) || Object)
    ], TasktodoRowComponent.prototype, "task", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* User */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* User */]) === 'function' && _b) || Object)
    ], TasktodoRowComponent.prototype, "user", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], TasktodoRowComponent.prototype, "showDetail", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], TasktodoRowComponent.prototype, "finish", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], TasktodoRowComponent.prototype, "cancel", void 0);
    TasktodoRowComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tasktodo-row',
            template: __webpack_require__(860),
            styles: [__webpack_require__(822)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('visibleState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('finished', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        transform: 'translateX(-50%) scale(0)',
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('canceled', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        transform: 'translateX(50%) scale(0)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => finished', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('300ms ease-out')]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => canceled', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('300ms ease-out')])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__service_api_service__["a" /* ApiService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__service_socket_service__["a" /* SocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__service_socket_service__["a" /* SocketService */]) === 'function' && _d) || Object])
    ], TasktodoRowComponent);
    return TasktodoRowComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/tasktodo-row.component.js.map

/***/ },

/***/ 610:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model__ = __webpack_require__(70);
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
    function TodolistComponent(apiService) {
        this.apiService = apiService;
        this.showDialog = false;
    }
    TodolistComponent.prototype.ngOnInit = function () {
    };
    TodolistComponent.prototype.user = function (id) {
        for (var user in this.users) {
            if (this.users[user].id == id)
                return this.users[user];
        }
        return new __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* User */]();
    };
    TodolistComponent.prototype.showDetail = function (task) {
        this.selectedTask = task;
        this.showDialog = !this.showDialog;
    };
    TodolistComponent.prototype.cancel = function (task, index) {
        var _this = this;
        setTimeout(function () { return _this.tasksTodo.splice(index, 1); }, 300);
    };
    TodolistComponent.prototype.finish = function (task, index) {
        var _this = this;
        setTimeout(function () { return _this.tasksTodo.splice(index, 1); }, 300);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], TodolistComponent.prototype, "tasksTodo", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], TodolistComponent.prototype, "users", void 0);
    TodolistComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-todolist',
            template: __webpack_require__(861),
            styles: [__webpack_require__(837)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], TodolistComponent);
    return TodolistComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/todolist.component.js.map

/***/ },

/***/ 611:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(593);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/index.js.map

/***/ },

/***/ 612:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoaderSmallComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loader-small',
            template: __webpack_require__(862),
            styles: [__webpack_require__(838)]
        }), 
        __metadata('design:paramtypes', [])
    ], LoaderSmallComponent);
    return LoaderSmallComponent;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/loader-small.component.js.map

/***/ },

/***/ 613:
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
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/environment.js.map

/***/ },

/***/ 614:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Award; });
/**
 * Created by Bart on 28/12/2016.
 */
/**
 * Created by Bart on 26/12/2016.
 */
var Award = (function () {
    function Award() {
    }
    Award.makeAwardFromJSON = function (item) {
        var award = new Award();
        award.id = item.id;
        award.name = item.name;
        award.month = new Date(Date.parse(item.month));
        award.description = item.description;
        award.winner_id = item.winner_id;
        award.household_id = item.household_id;
        award.creator_id = award.creator_id;
        return award;
    };
    return Award;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/award.model.js.map

/***/ },

/***/ 615:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SortPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortPipe = (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (value, args) {
        if (value == null)
            return null;
        switch (args) {
            case 'period':
                {
                    value.sort(function (a, b) {
                        if (a.period < b.period) {
                            return -1;
                        }
                        else if (a.period > b.period) {
                            return 1;
                        }
                        else {
                            return 0;
                        }
                    });
                }
                break;
            default: {
                value.sort(function (a, b) {
                    if (a.dueDate < b.dueDate) {
                        return -1;
                    }
                    else if (a.dueDate > b.dueDate) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
            }
        }
        return value;
    };
    SortPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'sort'
        }), 
        __metadata('design:paramtypes', [])
    ], SortPipe);
    return SortPipe;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/sort.pipe.js.map

/***/ },

/***/ 616:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TasksFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TasksFilterPipe = (function () {
    function TasksFilterPipe() {
    }
    TasksFilterPipe.prototype.transform = function (tasks, filter) {
        return tasks.filter(function (task) {
            return task.name.toLowerCase().includes(filter.toLowerCase());
        });
    };
    TasksFilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'tasksFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], TasksFilterPipe);
    return TasksFilterPipe;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/tasks-filter.pipe.js.map

/***/ },

/***/ 617:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/polyfills.js.map

/***/ },

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return User; });
/**
 * Created by Bart on 27/12/2016.
 */
var User = (function () {
    function User() {
    }
    User.makeUserFromJSON = function (item) {
        var user = new User();
        user.id = item.id;
        user.name = item.name;
        user.lname = item.lname;
        user.email = item.email;
        user.household_id = item.household_id;
        user.score = item.score;
        user.phoneNumber = item.phoneNumber;
        user.uid = item.uid;
        user.imgsrc = item.imgsrc;
        return user;
    };
    return User;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/user.model.js.map

/***/ },

/***/ 817:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 818:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 819:
/***/ function(module, exports) {

module.exports = ".chat-form {\n  height: 50px; }\n  .chat-form input {\n    width: 92% !important; }\n"

/***/ },

/***/ 820:
/***/ function(module, exports) {

module.exports = ".card-action {\n  font-size: 0.8em;\n  font-style: italic; }\n\n.card-content, .card-action {\n  padding: 10px;\n  font-size: 0.8em; }\n"

/***/ },

/***/ 821:
/***/ function(module, exports) {

module.exports = "::-webkit-scrollbar {\n  width: 0px;\n  /* remove scrollbar space */\n  background: transparent;\n  /* optional: just make scrollbar invisible */ }\n\n/* optional: show position indicator in red */\n::-webkit-scrollbar-thumb {\n  background: #FF0000; }\n\n.chat-list {\n  margin: 20px 0;\n  overflow-y: auto;\n  height: 300px; }\n  .chat-list li:not(:first-of-type) {\n    margin: 20px 0 0 0; }\n"

/***/ },

/***/ 822:
/***/ function(module, exports) {

module.exports = "\r\n"

/***/ },

/***/ 823:
/***/ function(module, exports) {

module.exports = "/*@media all and (min-width: 992px){*/\r\n/*body{*/\r\n/*background-color: yellow;*/\r\n/*}*/\r\n/*app-header{*/\r\n/*display: none;*/\r\n/*}*/\r\n/*}*/"

/***/ },

/***/ 824:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 825:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 826:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 827:
/***/ function(module, exports) {

module.exports = "/*.brand-logo{*/\r\n/*font-family: 'Finger Paint', cursive;*/\r\n/*font-size: 32px;*/\r\n/*}*/"

/***/ },

/***/ 828:
/***/ function(module, exports) {

module.exports = "/*h1{*/\r\n/*font-size: 35px;*/\r\n/*}*/\r\n/*app-header{*/\r\n/*display: none;*/\r\n/*}*/\r\n/*header, main, footer,aside {*/\r\n/*padding-left: 350px;*/\r\n/*}*/\r\n\r\n/*@media only screen and (max-width : 992px) {*/\r\n/*header, main, footer {*/\r\n/*padding-left: 0;*/\r\n\r\n/*}*/\r\n/*app-header{*/\r\n/*display: block;*/\r\n/*}*/\r\n/*}*/\r\n\r\n/*aside app-chat {*/\r\n/*position: absolute;*/\r\n\r\n/*top:0px;*/\r\n/*bottom: 0px;*/\r\n/*right: 0px;*/\r\n/*width: 250px;*/\r\n/*border-left: 1px solid gray;*/\r\n\r\n/*}*/"

/***/ },

/***/ 829:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 830:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 831:
/***/ function(module, exports) {

module.exports = ".overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    z-index: 999;\r\n}\r\n\r\n.dialog {\r\n    z-index: 1000;\r\n    position: fixed;\r\n    right: 0;\r\n    left: 0;\r\n    top: 20px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    width: 90%;\r\n    max-width: 520px;\r\n    /*background-color: #fff;*/\r\n    /*padding: 12px;*/\r\n    /*box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);*/\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .dialog {\r\n        top: 40px;\r\n    }\r\n}"

/***/ },

/***/ 832:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 833:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 834:
/***/ function(module, exports) {

module.exports = "/*.logo a{*/\r\n/*font-family: 'Finger Paint', cursive;*/\r\n/*font-size: 32px;*/\r\n/*margin-bottom: 5%;*/\r\n/*margin-top: 5%;*/\r\n/*}*/\r\n\r\n\r\n"

/***/ },

/***/ 835:
/***/ function(module, exports) {

module.exports = ".overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    z-index: 999;\r\n}\r\n\r\n.dialog {\r\n    z-index: 1000;\r\n    position: fixed;\r\n    right: 0;\r\n    left: 0;\r\n    top: 20px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    width: 90%;\r\n    max-width: 520px;\r\n    /*background-color: #fff;*/\r\n    /*padding: 12px;*/\r\n    /*box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);*/\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .dialog {\r\n        top: 40px;\r\n    }\r\n}"

/***/ },

/***/ 836:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 837:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 838:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 839:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 840:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 841:
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ },

/***/ 842:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n    <app-loader-small *ngIf=\"loading\"></app-loader-small>\r\n\r\n    <app-tasklist *ngIf=\"user\"\r\n                  [tasks]=\"user.household? user.household.tasks : []\"\r\n                  [users]=\"user.household? user.household.users : undefined\">\r\n    </app-tasklist>\r\n\r\n</div>"

/***/ },

/***/ 843:
/***/ function(module, exports) {

module.exports = "<div class=\"row flex-stretch\" style=\"margin-bottom: 0;\">\r\n    <div class=\"col flex-down-center\">\r\n\r\n        <p class=\"text-small\">repeats every</p>\r\n        <p class=\"text-large\">{{task.period}}</p>\r\n        <p class=\"text-small \">{{task.period == 1 ? 'day':'days'}}</p>\r\n\r\n    </div>\r\n    <div class=\"col flex-down-spacebetween\" style=\"flex-grow: 1;\">\r\n        <span class=\"title\">{{task.name}}</span>\r\n        <p class=\"grey-text truncate\">{{task.description}} </p>\r\n        <span class=\"\">{{task.points}} points</span>\r\n    </div>\r\n    <div class=\"col flex-down-left\" style=\"align-items: flex-end\">\r\n\r\n        <a class=\"tooltipped\"\r\n           (click)=\"showDetailClick()\"\r\n           materialize=\"tooltip\"\r\n           data-position=\"bottom\"\r\n           data-delay=\"20\"\r\n           data-tooltip=\"edit\">\r\n            <i class=\"material-icons \">mode_edit</i></a>\r\n\r\n\r\n    </div>\r\n</div>\r\n\r\n"

/***/ },

/***/ 844:
/***/ function(module, exports) {

module.exports = "<h2 class=\"center-align grey-text light text-darken-1\">all our tasks</h2>\r\n\r\n<div class=\"collection\" [hidden]=\"tasks.length == 0\" *ngIf=\"tasks.length > 0\">\r\n\r\n    <nav class=\"amber\">\r\n        <div class=\"nav-wrapper\">\r\n            <form>\r\n                <div class=\"input-field\">\r\n                    <input #filterField (keyup)=\"0\" id=\"search\" type=\"search\" name=\"filter\" required>\r\n                    <label for=\"search\"><i class=\"material-icons\">search</i></label>\r\n                    <i class=\"material-icons\" (click)=\"filterField.value = ''\">close</i>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </nav>\r\n\r\n    <div class=\"collection-item\"\r\n         *ngFor=\"let task of tasks | tasksFilter:filterField.value | sort:'period'; let i = index\">\r\n\r\n\r\n        <app-task-row\r\n                (showDetail)=\"showDetail($event)\"\r\n                [task]=\"task\"\r\n                [user]=\"user(task.assigned_to)\"></app-task-row>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"tasks.length == 0\">\r\n\r\n\r\n    <div class=\"card\">\r\n        <div class=\"card-content\">\r\n            <span class=\"card-title\">No tasks found</span>\r\n            <p>You have no tasks, what are you even doing!</p>\r\n        </div>\r\n        <div class=\"card-action\">\r\n            <a href=\"#\">Fuck you</a>\r\n            <a href=\"#\">OK</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<app-taskdetail [(visible)]=\"showDialog\" [(task)]=\"selectedTask\" [(users)]=\"users\"></app-taskdetail>\r\n"

/***/ },

/***/ 845:
/***/ function(module, exports) {

module.exports = "\r\n<div class=\"no-margin card-panel chat-panel\" *ngIf=\"household.users\">\r\n    <a (click)=\"toggleChat()\">{{isHidden ? 'Announcements' : 'X Close'}}</a>\r\n<!--<p>Users in {{household.name}}:</p>-->\r\n<!--<div class=\"col s12  \" *ngFor=\"let user of household.users; let i=index;\">-->\r\n<!--<div class=\" card gray lighten-5 \"  >-->\r\n<!--<div class=\"row valign-wrapper hoverable\">-->\r\n<!--<div class=\"col s3\" >-->\r\n<!--<img src=\"{{user.imgsrc}}\" alt=\"\" class=\"responsive-img circle\" style=\"max-width: 30px; max-height: 30px; overflow: hidden; \">-->\r\n\r\n<!--</div>-->\r\n<!--<div class=\"col s9\">-->\r\n<!--<span class=\"black-text\">-->\r\n<!--{{user.name}}-->\r\n<!--</span>-->\r\n\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<app-message-list [hidden]=\"isHidden\"></app-message-list>\r\n<app-message-form [hidden]=\"isHidden\"></app-message-form>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ },

/***/ 846:
/***/ function(module, exports) {

module.exports = "<div class=\"chat-form\">\r\n    <form>\r\n        <div class=\"row no-margin\">\r\n            <div class=\"input-field col s10 no-margin no-padding\">\r\n                <i class=\"prefix mdi-communication-chat\"></i>\r\n                <input type=\"text\" class=\"no-margin\" placeholder=\"Announcement\" value={{messageContent}} (input)=\"messageContent = $event.target.value\">\r\n            </div>\r\n            <div class=\"input-field col s2 no-margin right-align no-padding\">\r\n                <button type=\"submit\" (click)=\"sendMessage()\"\r\n                        class=\"waves-effect waves-light btn-floating btn-small blue\">\r\n                    <i class=\"material-icons\">send</i>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ },

/***/ 847:
/***/ function(module, exports) {

module.exports = "<div class=\"row no-margin\">\r\n    <div class=\"col s12 no-padding\">\r\n        <div class=\"card blue lighten-4 no-margin\">\r\n            <div class=\"card-content\">\r\n                <p>{{message.message}}</p>\r\n            </div>\r\n            <div class=\"card-action\">\r\n                <span>{{message.user.name}} {{message.user.lname}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },

/***/ 848:
/***/ function(module, exports) {

module.exports = "<!--<p>Messages in Houshold:</p>-->\r\n<ul class=\"chat-list\" #scrollMe>\r\n    <li *ngFor=\"let message of messages\"><app-message-item [message]=\"message\"></app-message-item></li>\r\n</ul>\r\n\r\n\r\n\r\n"

/***/ },

/***/ 849:
/***/ function(module, exports) {

module.exports = "<div class=\"container \">\r\n    <div class=\"row\">\r\n        <div class=\"col l6 s12\">\r\n            <h5 class=\"white-text\">Footer Content</h5>\r\n            <p class=\"grey-text text-lighten-4\">You can use rows and columns here to organize your footer\r\n                content.</p>\r\n        </div>\r\n        <div class=\"col l4 offset-l2 s12\">\r\n            <h5 class=\"white-text\">Links</h5>\r\n            <ul>\r\n                <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 1</a></li>\r\n                <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 2</a></li>\r\n                <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 3</a></li>\r\n                <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 4</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"footer-copyright\">\r\n    <div class=\"container\">\r\n        © 2014 Copyright Text\r\n        <a class=\"grey-text text-lighten-4 right\" href=\"#!\">More Links</a>\r\n    </div>\r\n</div>\r\n"

/***/ },

/***/ 850:
/***/ function(module, exports) {

module.exports = "<nav class=\"yellow darken-2\">\r\n  <div class=\"nav-wrapper\">\r\n\r\n      <ul class=\"right hide-on-med-and-down\">\r\n      <li><a href=\"\">My Account</a> </li>\r\n      <li><a>Settings</a></li>\r\n      <li><a>Sign out</a> </li>\r\n    </ul>\r\n\r\n    <ul class=\"side-nav\" id=\"mobile-demo\">\r\n      <li><a href=\"\">My Account</a> </li>\r\n      <li><a>Settings</a></li>\r\n      <li><a>Sign out</a> </li>\r\n    </ul>\r\n      <a href=\"home\" class=\"brand-logo center\">The Cleansing</a>\r\n      <a data-activates=\"mobile-demo\" class=\"\"><i class=\"material-icons\">menu</i></a>\r\n    <script>\r\n\r\n    </script>\r\n  </div>\r\n\r\n\r\n</nav>\r\n\r\n\r\n"

/***/ },

/***/ 851:
/***/ function(module, exports) {

module.exports = "<header>\r\n    <app-navigation></app-navigation>\r\n</header>\r\n\r\n<main>\r\n    <div class=\"row\">\r\n        <div class=\"col s12 l12\" style=\"min-height: 100vh;\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        <aside class=\"chat-bottom card\">\r\n            <app-chat></app-chat>\r\n        </aside>\r\n    </div>\r\n</main>\r\n\r\n<footer class=\"red darken-4\">\r\n    <app-footer></app-footer>\r\n</footer>"

/***/ },

/***/ 852:
/***/ function(module, exports) {

module.exports = "<p *ngIf=\"award\" class=\"center materialize-red-text\">{{award.name}}</p>\r\n<p *ngIf=\"!award\" class=\"center materialize-red-text\">ik werk nog niet</p>"

/***/ },

/***/ 853:
/***/ function(module, exports) {

module.exports = "<!--<app-loader-small *ngIf=\"loading\"></app-loader-small>-->\r\n\r\n<div *ngIf=\"household\">\r\n\r\n    <h2 class=\"center-align grey-text light text-darken-1\">{{household.name}}</h2>\r\n\r\n    <div style=\"padding-bottom: 25px; display: flex; justify-content: center; align-items: flex-end; flex-wrap: wrap\">\r\n\r\n        <app-user-img\r\n                *ngFor=\"let user of household.users; let i = index;\"\r\n                [user]=\"user\"\r\n                [index]=\"i\"\r\n                (click)=\"showDialog = !showDialog; selectedUser = user;\"\r\n        ></app-user-img>\r\n\r\n    </div>\r\n\r\n    <app-award [(award)]=\"household.award\"></app-award>\r\n\r\n\r\n</div>\r\n\r\n<div *ngIf=\"!household\">\r\n\r\n    <h2 class=\"center-align grey-text light text-darken-1\">my household</h2>\r\n\r\n    <div class=\"card\">\r\n        <div class=\"card-content\">\r\n            <span class=\"card-title\">No household found</span>\r\n            <p>It seems like you don't belong to a household yet.</p>\r\n            <p>Go join or make a household.</p>\r\n        </div>\r\n        <div class=\"card-action\">\r\n            <a href=\"#\">Fuck you</a>\r\n            <a href=\"#\">OK</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<app-user-detail [(visible)]=\"showDialog\" [(user)]=\"selectedUser\"></app-user-detail>"

/***/ },

/***/ 854:
/***/ function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"card dialog\">\r\n    <!--<ng-content></ng-content>-->\r\n    <div class=\"card-content\">\r\n        <span class=\"card-title center\">Member Details</span>\r\n        <div class=\"row center-align\" >\r\n            <img src=\"{{user.imgsrc}}\" class=\"responsive-img circle \" style=\"max-height: 100px; max-width: 100px; overflow: hidden\">\r\n        </div>\r\n        <div class=\"row\">\r\n            <form class=\"col s12\">\r\n                <div class=\"row\">\r\n                    <div class=\"input-field col s6\">\r\n                        <input value=\"{{user.name}}\" id=\"first_name\" type=\"text\" class=\"validate\">\r\n                        <label class=\"active\" for=\"first_name\">First Name</label>\r\n                    </div>\r\n                    <div class=\"input-field col s6\">\r\n                        <input value=\"{{user.lname}}\" id=\"last_name\" type=\"text\" class=\"validate\">\r\n                        <label class=\"active\" for=\"last_name\">Last Name</label>\r\n                    </div>\r\n                    <div class=\"input-field col s12\">\r\n                        <i class=\"prefix material-icons\">email</i>\r\n                        <input value=\"{{user.email}}\" id=\"email\" type=\"email\" class=\"validate\">\r\n                        <label class=\"active\" for=\"email\" data-error=\"Email not validated\" data-success=\"Valid Email \">E-mail</label>\r\n                    </div>\r\n                    <div class=\"input-field col s12\">\r\n                        <i class=\"material-icons prefix\">phone</i>\r\n                        <input value=\"{{user.phoneNumber}}\" id=\"phone_number\" type=\"number\" class=\"validate\">\r\n                        <label class=\"active\" for=\"phone_number\">Phone Number</label>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-action\">\r\n        <a *ngIf=\"closable\" (click)=\"close()\" aria-label=\"Close\" class=\"\" style=\"cursor: default\">close</a>\r\n        <a  (click)=\"save()\" class=\"right\"  aria-label=\"Save\" style=\"cursor: default\">save</a>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>"

/***/ },

/***/ 855:
/***/ function(module, exports) {

module.exports = "<figure class=\"\" style=\"margin: 0\">\r\n\r\n    <div style=\"position: relative\">\r\n\r\n        <div class=\"chip\"\r\n             [ngClass]=\"index == 0 ? 'yellow darken-2 white-text':''\"\r\n             style=\"position: absolute; top:-10px; left:0;\">\r\n            {{user.score}}\r\n        </div>\r\n\r\n        <div class=\"hoverable circle z-depth-1\"\r\n             style=\"max-width: 75px; max-height: 75px; overflow: hidden; margin: 10px\">\r\n            <img src=\"{{user.imgsrc}}\" class=\"responsive-img\">\r\n        </div>\r\n    </div>\r\n\r\n    <figcaption class=\"center grey-text darken-1\">{{user.name}}</figcaption>\r\n\r\n</figure>\r\n"

/***/ },

/***/ 856:
/***/ function(module, exports) {

module.exports = "<p>\r\n  household works!\r\n</p>\r\n"

/***/ },

/***/ 857:
/***/ function(module, exports) {

module.exports = "<nav class=\"top-nav yellow darken-2\">\r\n    <div class=\"container\">\r\n        <div class=\"nav-wrapper\">\r\n            <a\r\n                    materialize=\"sideNav\"\r\n                    data-activates=\"nav-mobile\"\r\n                    class=\"button-collapse top-nav full hide-on-large-only\">\r\n                <i class=\"material-icons\">menu</i>\r\n            </a>\r\n            <a href=\"home\" class=\"page-title\">The cleansing</a>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<ul id=\"nav-mobile\" class=\"side-nav fixed\">\r\n    <li>\r\n        <div class=\"userView\">\r\n            <div class=\"background yellow darken-2\">\r\n\r\n            </div>\r\n            <img class=\"circle\" src=\"/assets/web_hi_res_205.png\">\r\n            <span class=\"name white-text\">{{user.displayName}}</span>\r\n            <span class=\"email white-text\">{{user.email}}</span>\r\n        </div>\r\n    </li>\r\n\r\n    <li><a [routerLink]=\"['']\" class=\"waves-effect \"><i class=\"material-icons\">home</i>Home</a></li>\r\n    <li><a [routerLink]=\"['tasks']\" class=\"waves-effect \"><i class=\"material-icons\">assignment</i>Tasks</a></li>\r\n    <li><a [routerLink]=\"['household']\" class=\"waves-effect \"><i class=\"material-icons\">people</i>Household</a></li>\r\n    <li>\r\n        <div class=\"divider\"></div>\r\n    </li>\r\n    <li><a href=\"#\" class=\"waves-effect \"><i class=\"material-icons\">settings</i>Settings</a></li>\r\n    <li><a class=\"waves-effect \" (click)=\"logout()\"><i class=\"material-icons\">input</i>Sign out</a></li>\r\n    <li>\r\n        <div class=\"divider\"></div>\r\n    </li>\r\n    <li><a href=\"#\" class=\"waves-effect waves-teal\">About</a></li>\r\n</ul>"

/***/ },

/***/ 858:
/***/ function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"card dialog\">\r\n    <!--<ng-content></ng-content>-->\r\n    <div class=\"card-content\">\r\n        <span class=\"card-title\">{{task.name}}</span>\r\n\r\n\r\n        <!--<div class=\"fixed-action-btn horizontal\">-->\r\n            <!--<a class=\"btn-floating btn-large red\">-->\r\n                <!--<i class=\"large material-icons\">mode_edit</i>-->\r\n            <!--</a>-->\r\n            <!--<ul>-->\r\n                <!--<li><a class=\"btn-floating red\" onclick=\"Materialize.toast('Task Changes Saved',4000,'rounded')\" ><i class=\"material-icons\">save</i></a> </li>-->\r\n                <!--<li><a class=\"btn-floating yellow darken-1\" onclick=\"Materialize.toast('Task Deleted',4000,'rounded')\"><i class=\"material-icons\">delete</i></a> </li>-->\r\n            <!--</ul>-->\r\n        <!--</div>-->\r\n        <div class=\"row\">\r\n            <form class=\"col s12\">\r\n                <div class=\"row\">\r\n                    <div class=\"input-field col s6\">\r\n                        <input value=\"{{task.name}}\" id=\"task_name\" type=\"text\" class=\"validate\">\r\n                        <label for=\"task_name\" class=\"active\">Task Name</label>\r\n                    </div>\r\n                    <div class=\"input-field col s6\">\r\n                        <input value=\"{{task.dueDate}}\" id=\"task_due_date\" type=\"date\" class=\"\">\r\n                        <label for=\"task_due_date\" class=\"active\">Next Due Date</label>\r\n                    </div>\r\n                    <div class=\"input-field col s12\">\r\n                        <input value=\"{{task.description}}\" id=\"task_description\" type=\"text\" class=\"materialize-textarea\">\r\n                        <label for=\"task_due_date\" class=\"active\">Description</label>\r\n                    </div>\r\n                    <div class=\"input-field col s6\">\r\n                        <input value=\"{{task.period}}\" id=\"task_periodicity\" type=\"number\" class=\"validate\">\r\n                        <label for=\"task_periodicity\" class=\"active\">Periodicity (in days)</label>\r\n                    </div>\r\n                    <div class=\"input-field col s6\">\r\n                        <input value=\"{{task.points}}\" id=\"task_points\" type=\"number\" class=\"validate\">\r\n                        <label for=\"task_points\" class=\"active\">Points</label>\r\n                    </div>\r\n                    <div class=\"input-field col s6\">\r\n                        <!--todo Select user werkt nog niet-->\r\n                        <!--todo verder afwerken -->\r\n                        <!--<select class=\"waves-effect icon\" id=\"task_user\">-->\r\n                            <!--<option disabled selected>select user</option>-->\r\n                            <!--<option *ngFor=\"let user of users\" value=\"{{user.id}}\">-->\r\n                                <!--{{user.name}}-->\r\n                            <!--</option>-->\r\n                        <!--</select>-->\r\n                        <!--<label for=\"task_user\" class=\"active\">User</label>-->\r\n                        <select class=\"validate browser-default\" id=\"task_user\" >\r\n                            <option disabled selected>Select User</option>\r\n                            <option *ngFor=\"let user of users\">{{user.name}}</option>\r\n                        </select>\r\n                        <label for=\"task_user\" class=\"active\">User</label>\r\n\r\n                    </div>\r\n                    <div class=\"input-field col s6\">\r\n                        <input value=\"{{task.points}}\" id=\"task_test\" type=\"number\" class=\"validate\">\r\n                        <label for=\"task_test\" class=\"active\">Points</label>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"card-action\">\r\n        <a *ngIf=\"closable\" (click)=\"close()\" aria-label=\"Close\" class=\"\">close</a>\r\n        <a aria-label=\"Delete Task\" class=\"right\">delete task</a>\r\n        <a aria-label=\"Save Task\" (click)=\"save()\" class=\"right\">save task</a>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>\r\n"

/***/ },

/***/ 859:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n    <app-loader-small *ngIf=\"loading\"></app-loader-small>\r\n\r\n    <app-household-overview *ngIf=\"user\" [household]=\"user.household\">loading...</app-household-overview>\r\n\r\n    <app-todolist *ngIf=\"user\"\r\n                  [tasksTodo]=\"user.household? user.household.taskstodo : []\"\r\n                  [users]=\"user.household? user.household.users : undefined\">loading...\r\n    </app-todolist>\r\n\r\n</div>"

/***/ },

/***/ 860:
/***/ function(module, exports) {

module.exports = "<div class=\"row flex-stretch\" style=\"margin-bottom: 0;\" [@visibleState]=\"(state)\">\r\n    <div class=\"col flex-down-center\">\r\n\r\n        <p [ngClass]=\"{'red-text': dateDiff<=0}\" class=\"text-large\">{{dateDiff}}</p>\r\n        <p class=\"text-small \">{{dateDiff == 1 ? 'day left' : 'days left'}}</p>\r\n\r\n    </div>\r\n    <div class=\"col\" style=\"flex-grow: 1\">\r\n        <span class=\"title\">{{task.name}}</span>\r\n        <p class=\"grey-text\">{{user.name || \"do me!\"}}</p>\r\n        <p class=\"text-small\">repeats every {{task.period}} days</p>\r\n\r\n\r\n    </div>\r\n    <div class=\"col flex-down\">\r\n        <div class=\"flex-wrap-end\"\r\n             style=\"align-self: flex-start\">\r\n\r\n        <a class=\"tooltipped\"\r\n           (click)=\"finishClick()\"\r\n           materialize=\"tooltip\" data-position=\"bottom\" data-delay=\"20\" data-tooltip=\"finish\">\r\n            <i class=\"material-icons\">done</i></a>\r\n        <a class=\"tooltipped\"\r\n           (click)=\"showDetailClick()\"\r\n           materialize=\"tooltip\"\r\n           data-position=\"bottom\"\r\n           data-delay=\"20\"\r\n           data-tooltip=\"edit\">\r\n            <i class=\"material-icons\">mode_edit</i></a>\r\n        <a class=\"tooltipped\"\r\n           (click)=\"cancelClick()\"\r\n           materialize=\"tooltip\" data-position=\"bottom\" data-delay=\"20\" data-tooltip=\"finish\">\r\n            <i class=\"material-icons\">cancel</i></a>\r\n\r\n    </div>\r\n        <span class=\"chip\">{{task.points}} points</span>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ },

/***/ 861:
/***/ function(module, exports) {

module.exports = "<!--<app-loader-small *ngIf=\"loading\"></app-loader-small>-->\r\n\r\n\r\n<div class=\"collection\" [hidden]=\"tasksTodo.length == 0\" *ngIf=\"tasksTodo.length > 0\">\r\n\r\n    <div class=\"collection-item\" style=\"\" *ngFor=\"let tasktodo of tasksTodo | sort; let i = index\">\r\n\r\n        <!--<div style=\"position:absolute; z-index: 10\">-->\r\n        <!--<a class=\"btn\">test</a>-->\r\n        <!--</div>-->\r\n\r\n        <app-tasktodo-row\r\n                (cancel)=\"cancel($event, i)\"\r\n                (finish)=\"finish($event, i)\"\r\n                (showDetail)=\"showDetail($event)\"\r\n                [task]=\"tasktodo\"\r\n                [user]=\"user(tasktodo.assigned_to)\"></app-tasktodo-row>\r\n\r\n\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"tasksTodo.length == 0\">\r\n\r\n    <h2 class=\"center-align grey-text light text-darken-1\">my upcoming tasks</h2>\r\n\r\n    <div class=\"card\">\r\n        <div class=\"card-content\">\r\n            <span class=\"card-title\">No tasks found</span>\r\n            <p>You have nothing to do, go make some tasks!</p>\r\n        </div>\r\n        <div class=\"card-action\">\r\n            <a href=\"#\">Fuck you</a>\r\n            <a href=\"#\">OK</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<app-taskdetail [(visible)]=\"showDialog\" [(task)]=\"selectedTask\" [(users)]=\"users\"></app-taskdetail>"

/***/ },

/***/ 862:
/***/ function(module, exports) {

module.exports = "<div class=\"center-align\" style=\"margin-top: 150px\">\r\n    <div class=\"preloader-wrapper small active\">\r\n        <div class=\"spinner-layer spinner-blue\">\r\n            <div class=\"circle-clipper left\">\r\n                <div class=\"circle\"></div>\r\n            </div>\r\n            <div class=\"gap-patch\">\r\n                <div class=\"circle\"></div>\r\n            </div>\r\n            <div class=\"circle-clipper right\">\r\n                <div class=\"circle\"></div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"spinner-layer spinner-red\">\r\n            <div class=\"circle-clipper left\">\r\n                <div class=\"circle\"></div>\r\n            </div>\r\n            <div class=\"gap-patch\">\r\n                <div class=\"circle\"></div>\r\n            </div>\r\n            <div class=\"circle-clipper right\">\r\n                <div class=\"circle\"></div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"spinner-layer spinner-yellow\">\r\n            <div class=\"circle-clipper left\">\r\n                <div class=\"circle\"></div>\r\n            </div>\r\n            <div class=\"gap-patch\">\r\n                <div class=\"circle\"></div>\r\n            </div>\r\n            <div class=\"circle-clipper right\">\r\n                <div class=\"circle\"></div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"spinner-layer spinner-green\">\r\n            <div class=\"circle-clipper left\">\r\n                <div class=\"circle\"></div>\r\n            </div>\r\n            <div class=\"gap-patch\">\r\n                <div class=\"circle\"></div>\r\n            </div>\r\n            <div class=\"circle-clipper right\">\r\n                <div class=\"circle\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },

/***/ 863:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col s12 m6 l4 offset-m3 offset-l4\">\r\n        <article class=\"card\">\r\n            <div class=\"card-content\">\r\n                <h1 class=\"card-title\">{{title}}</h1>\r\n            </div>\r\n            <div class=\"card-action\">\r\n                <button class=\"btn\" (click)=\"loginFacebook()\">Login With Facebook</button>\r\n                <button class=\"btn\" (click)=\"loginGoogle()\">Login With Google</button>\r\n            </div>\r\n\r\n        </article>\r\n    </div>\r\n</div>"

/***/ },

/***/ 864:
/***/ function(module, exports) {

module.exports = "<p>\r\n  not-found works!\r\n</p>\r\n"

/***/ }

},[1141]);
//# sourceMappingURL=main.bundle.map