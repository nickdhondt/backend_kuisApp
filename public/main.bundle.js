webpackJsonp([0,3],{

/***/ 1181:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 1181;


/***/ },

/***/ 1182:
/***/ function(module, exports) {

/* (ignored) */

/***/ },

/***/ 1183:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(493);


/***/ },

/***/ 126:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contract__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_services_auth_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_task_model__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_household_model__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_user_model__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
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
    ApiService.prototype.getContributions = function () {
        var _this = this;
        var tokenPromise = new Promise(function (resolve, reject) {
            _this.auth.token.then(function (token) {
                _this.headers.set('Firebase-ID-Token', token);
                return _this._http.get(_this.actionUrl + "contributionsbyhousehold", { headers: _this.headers })
                    .map(function (res) { return res.json(); })
                    .catch(ApiService.handleError)
                    .subscribe(function (data) { return resolve(data); }, function (err) { return reject(err); });
            });
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].fromPromise(tokenPromise);
    };
    ApiService.prototype.getFinishedCanceledStats = function () {
        var _this = this;
        var tokenPromise = new Promise(function (resolve, reject) {
            _this.auth.token.then(function (token) {
                _this.headers.set('Firebase-ID-Token', token);
                return _this._http.get(_this.actionUrl + "finishedcanceledstats", { headers: _this.headers })
                    .map(function (res) { return res.json(); })
                    .catch(ApiService.handleError)
                    .subscribe(function (data) { return resolve(data); }, function (err) { return reject(err); });
            });
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].fromPromise(tokenPromise);
    };
    ApiService.prototype.getTaskStats = function () {
        var _this = this;
        var tokenPromise = new Promise(function (resolve, reject) {
            _this.auth.token.then(function (token) {
                _this.headers.set('Firebase-ID-Token', token);
                return _this._http.get(_this.actionUrl + "taskstatsbyhousehold", { headers: _this.headers })
                    .map(function (res) { return res.json(); })
                    .catch(ApiService.handleError)
                    .subscribe(function (data) { return resolve(data); }, function (err) { return reject(err); });
            });
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].fromPromise(tokenPromise);
    };
    ApiService.prototype.getContributionEvolution = function () {
        var _this = this;
        var tokenPromise = new Promise(function (resolve, reject) {
            _this.auth.token.then(function (token) {
                _this.headers.set('Firebase-ID-Token', token);
                return _this._http.get(_this.actionUrl + "contributionevolutionbyhousehold", { headers: _this.headers })
                    .map(function (res) { return res.json(); })
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
                    .subscribe(function (data) {
                } /*console.log(data)*/);
            });
        });
    };
    ApiService.prototype.setAward = function (name, description) {
        var _this = this;
        var tokenPromise = new Promise(function (resolve, reject) {
            _this.auth.token.then(function (token) {
                _this.headers.set('Firebase-ID-Token', token);
                var month = __WEBPACK_IMPORTED_MODULE_8_moment__().format("YYYY-MM-DD");
                return _this._http.post(_this.actionUrl + "addaward", { month: month, name: name, description: description }, { headers: _this.headers })
                    .map(function (res) { return res.json(); })
                    .catch(ApiService.handleError)
                    .subscribe(function (data) { return resolve(data); }, function (err) { return reject(err); });
            });
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].fromPromise(tokenPromise);
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
    // public addAward(description: string, name: string, month: string, winner_id: number, creator_id: number, household_id: number): Observable<Award> {
    //
    //     let tokenPromise = new Promise<Award>((resolve, reject) => {
    //         this.auth.token.then(token => {
    //             this.headers.set("Firebase-ID-Token", token);
    //             return this._http.post(
    //                 this.actionUrl + "addaward",
    //                 {description, name, month, winner_id, creator_id, household_id},
    //                 {headers: this.headers})
    //                 .map(res => res.json())
    //                 .catch(ApiService.handleError)
    //                 .subscribe(data => console.log(" Add award Data: " + data))
    //         })
    //     });
    //     return Observable.fromPromise(tokenPromise);
    // }
    ApiService.prototype.getHouseholdbyEmail = function (email) {
        var _this = this;
        var tokenPromise = new Promise(function (resolve, reject) {
            _this.auth.token.then(function (token) {
                _this.headers.set("Firebase-ID-Token", token);
                return _this._http.get(_this.actionUrl + "householdbyemail/" + email, { headers: _this.headers })
                    .map(function (response) {
                    return __WEBPACK_IMPORTED_MODULE_6__models_household_model__["a" /* Household */].makeHouseholdFromJSON(response.json());
                })
                    .catch(ApiService.handleError)
                    .subscribe(function (data) { return resolve(data); }, function (err) { return reject(err); });
            });
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].fromPromise(tokenPromise);
    };
    ApiService.prototype.addUsertoHousehold = function (household_id) {
        var _this = this;
        var tokenPromise = new Promise(function (resolve, reject) {
            _this.auth.token.then(function (token) {
                _this.headers.set('Firebase-ID-Token', token);
                return _this._http.post(_this.actionUrl + "addusertohousehold", { household_id: household_id }, { headers: _this.headers })
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
    ApiService.prototype.addHousehold = function (name) {
        var _this = this;
        var tokenPromise = new Promise(function (resolve, reject) {
            _this.auth.token.then(function (token) {
                _this.headers.set('Firebase-ID-Token', token);
                return _this._http.post(_this.actionUrl + "addhousehold", { name: name }, { headers: _this.headers })
                    .map(function (response) {
                    return __WEBPACK_IMPORTED_MODULE_6__models_household_model__["a" /* Household */].makeHouseholdFromJSON(response.json());
                })
                    .catch(ApiService.handleError)
                    .subscribe(function (data) { return resolve(data); }, function (err) { return reject(err); });
            });
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].fromPromise(tokenPromise);
    };
    ApiService.prototype.updateUser = function (user) {
        var _this = this;
        var tokenPromise = new Promise(function (resolve, reject) {
            _this.auth.token.then(function (token) {
                _this.headers.set('Firebase-ID-Token', token);
                return _this._http.post(_this.actionUrl + "updateuser", user, { headers: _this.headers })
                    .map(function (res) { return res.json(); })
                    .catch(ApiService.handleError)
                    .subscribe(function (data) { return resolve(data); }, function (err) { return reject(err); });
            });
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].fromPromise(tokenPromise);
    };
    ApiService.prototype.leaveHousehold = function (id) {
        var _this = this;
        var tokenPromise = new Promise(function (resolve, reject) {
            _this.auth.token.then(function (token) {
                _this.headers.set('Firebase-ID-Token', token);
                return _this._http.post(_this.actionUrl + 'leavehousehold', { id: id }, { headers: _this.headers })
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
    ApiService.prototype.addTask = function (task) {
        var _this = this;
        var tokenPromise = new Promise(function (resolve, reject) {
            _this.auth.token.then(function (token) {
                _this.headers.set('Firebase-ID-Token', token);
                return _this._http.post(_this.actionUrl + "addtask", task, { headers: _this.headers })
                    .map(function (res) { return res.json(); })
                    .catch(ApiService.handleError)
                    .subscribe(function (data) { return resolve(data); }, function (err) { return reject(err); });
            });
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].fromPromise(tokenPromise);
    };
    ApiService.prototype.updateTask = function (task) {
        var _this = this;
        var tokenPromise = new Promise(function (resolve, reject) {
            _this.auth.token.then(function (token) {
                _this.headers.set('Firebase-ID-Token', token);
                return _this._http.post(_this.actionUrl + "updatetask", task, { headers: _this.headers })
                    .map(function (res) { return res.json(); })
                    .catch(ApiService.handleError)
                    .subscribe(function (data) { return resolve(data); }, function (err) { return reject(err); });
            });
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].fromPromise(tokenPromise);
    };
    ApiService.prototype.deleteTask = function (id) {
        var _this = this;
        var tokenPromise = new Promise(function (resolve, reject) {
            _this.auth.token.then(function (token) {
                _this.headers.set('Firebase-ID-Token', token);
                return _this._http.get(_this.actionUrl + "deleteTask/" + id, { headers: _this.headers })
                    .catch(ApiService.handleError)
                    .subscribe(function (data) { return resolve(data); }, function (err) { return reject(err); });
            });
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].fromPromise(tokenPromise);
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

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
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
        // task.dueDate = new Date(Date.parse(item.dueDate));
        task.dueDate = __WEBPACK_IMPORTED_MODULE_0_moment__(item.dueDate).format("YYYY-MM-DD");
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

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(1173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contract__ = __webpack_require__(126);
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
    function SocketService(contract) {
        var _this = this;
        this.contract = contract;
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"](contract.Hostname);
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
    SocketService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__contract__["a" /* Contract */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__contract__["a" /* Contract */]) === 'function' && _a) || Object])
    ], SocketService);
    return SocketService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/socket.service.js.map

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UpdateHouseholdOverviewService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UpdateHouseholdOverviewService = (function () {
    function UpdateHouseholdOverviewService() {
        this.updateHouseholdNeededSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.householdUpdated$ = this.updateHouseholdNeededSource.asObservable();
    }
    UpdateHouseholdOverviewService.prototype.updateHouseholdNeeded = function () {
        console.log("request received");
        this.updateHouseholdNeededSource.next(true);
    };
    UpdateHouseholdOverviewService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], UpdateHouseholdOverviewService);
    return UpdateHouseholdOverviewService;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/update-household-overview.service.js.map

/***/ },

/***/ 257:
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

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UpdateTaskListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UpdateTaskListService = (function () {
    function UpdateTaskListService() {
        this.updateListNeededSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.listUpdated$ = this.updateListNeededSource.asObservable();
    }
    UpdateTaskListService.prototype.updateListNeeded = function () {
        this.updateListNeededSource.next(true);
    };
    UpdateTaskListService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], UpdateTaskListService);
    return UpdateTaskListService;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/update-task-list.service.js.map

/***/ },

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
            template: __webpack_require__(873),
            styles: [__webpack_require__(856)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/app.component.js.map

/***/ },

/***/ 395:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard_auth_guard__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_guard_unauth_guard__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_tasks_todo_tasks_todo_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_all_tasks_all_tasks_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_household_household_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__ = __webpack_require__(401);
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

/***/ 396:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_update_task_list_service__ = __webpack_require__(258);
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
    function AllTasksComponent(apiSevice, updateTaskListService) {
        var _this = this;
        this.apiSevice = apiSevice;
        this.updateTaskListService = updateTaskListService;
        this.dialogVisible = false;
        this.loading = true;
        updateTaskListService.listUpdated$.subscribe(function (data) {
            console.log("ooooh boy");
            _this.getUser();
        });
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
            template: __webpack_require__(874),
            styles: [__webpack_require__(857)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_update_task_list_service__["a" /* UpdateTaskListService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_update_task_list_service__["a" /* UpdateTaskListService */]) === 'function' && _b) || Object])
    ], AllTasksComponent);
    return AllTasksComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/all-tasks.component.js.map

/***/ },

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(39);
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
            template: __webpack_require__(883),
            styles: [__webpack_require__(861)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/home.component.js.map

/***/ },

/***/ 398:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_update_household_overview_service__ = __webpack_require__(177);
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
    function HouseholdComponent(apiSevice, updateHouseholdOverviewService) {
        this.apiSevice = apiSevice;
        this.updateHouseholdOverviewService = updateHouseholdOverviewService;
        this.showDialogLeave = false;
        this.loading = true;
    }
    HouseholdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        this.updateHouseholdOverviewService.householdUpdated$.subscribe(function (data) {
            _this.getUser();
        });
    };
    HouseholdComponent.prototype.getUser = function () {
        var _this = this;
        this.apiSevice
            .getEverything()
            .subscribe(function (data) {
            _this.user = data;
            _this.loading = false;
        }, function (error) { return console.log(error); });
    };
    HouseholdComponent.prototype.updateHouseholdComponent = function (user) {
        this.user = user;
    };
    HouseholdComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-household',
            template: __webpack_require__(895),
            styles: [__webpack_require__(849)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_update_household_overview_service__["a" /* UpdateHouseholdOverviewService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_update_household_overview_service__["a" /* UpdateHouseholdOverviewService */]) === 'function' && _b) || Object])
    ], HouseholdComponent);
    return HouseholdComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/household.component.js.map

/***/ },

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_update_household_overview_service__ = __webpack_require__(177);
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
    function TasksTodoComponent(apiSevice, updateHouseholdOverviewService) {
        this.apiSevice = apiSevice;
        this.updateHouseholdOverviewService = updateHouseholdOverviewService;
        this.loading = true;
    }
    TasksTodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        this.updateHouseholdOverviewService.householdUpdated$.subscribe(function (data) {
            _this.getUser();
        });
    };
    TasksTodoComponent.prototype.getUser = function () {
        var _this = this;
        this.apiSevice
            .getEverything()
            .subscribe(function (data) {
            _this.user = data;
            _this.loading = false;
            _this.currentUser = _this.user.uid;
        }, function (error) { return console.log(error); });
    };
    TasksTodoComponent.prototype.receivenewHousehold = function (id) {
        console.log("ReceivenewHousehold" + id);
    };
    TasksTodoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tasks-todo',
            template: __webpack_require__(903),
            styles: [__webpack_require__(868)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_update_household_overview_service__["a" /* UpdateHouseholdOverviewService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_update_household_overview_service__["a" /* UpdateHouseholdOverviewService */]) === 'function' && _b) || Object])
    ], TasksTodoComponent);
    return TasksTodoComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/tasks-todo.component.js.map

/***/ },

/***/ 40:
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

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(39);
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
            template: __webpack_require__(907),
            styles: [__webpack_require__(871)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/login.component.js.map

/***/ },

/***/ 401:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
            template: __webpack_require__(908),
            styles: [__webpack_require__(872)]
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/not-found.component.js.map

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(51);
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

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(51);
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

/***/ 492:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 492;


/***/ },

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(627);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/main.js.map

/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contract__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user_model__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(138);
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

/***/ 52:
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

/***/ 597:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_services_auth_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_guard_auth_guard__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routes__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_guard_unauth_guard__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_module__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__not_found_not_found_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contract__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_api_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_socket_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__service_update_task_list_service__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__service_update_household_overview_service__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_modal__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_modal_plugins_bootstrap__ = __webpack_require__(651);
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
                __WEBPACK_IMPORTED_MODULE_19_angular2_modal__["m" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_20_angular2_modal_plugins_bootstrap__["a" /* BootstrapModalModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__auth_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__auth_guard_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_10__auth_guard_unauth_guard__["a" /* UnauthGuard */], __WEBPACK_IMPORTED_MODULE_14__contract__["a" /* Contract */], __WEBPACK_IMPORTED_MODULE_15__service_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_16__service_socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_17__service_update_task_list_service__["a" /* UpdateTaskListService */], __WEBPACK_IMPORTED_MODULE_18__service_update_household_overview_service__["a" /* UpdateHouseholdOverviewService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/app.module.js.map

/***/ },

/***/ 598:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_task_model__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(89);
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
            template: __webpack_require__(875),
            styles: [__webpack_require__(837)],
        }), 
        __metadata('design:paramtypes', [])
    ], TaskRowComponent);
    return TaskRowComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/task-row.component.js.map

/***/ },

/***/ 599:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(39);
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
    function TasklistComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.showDialog = false;
    }
    TasklistComponent.prototype.listNeedsUpdate = function (data) {
        console.log("oooh boy");
        console.log(data);
    };
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
        var stateObj = { foo: this.router.url };
        history.pushState(stateObj, "popup", "task");
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
            template: __webpack_require__(876),
            styles: [__webpack_require__(858)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], TasklistComponent);
    return TasklistComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/tasklist.component.js.map

/***/ },

/***/ 600:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_household_model__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service__ = __webpack_require__(14);
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
        //this.getHousehold();
    };
    ChatComponent.prototype.toggleChat = function () {
        this.isHidden = !this.isHidden;
    };
    ChatComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(877),
            styles: [__webpack_require__(838)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], ChatComponent);
    return ChatComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/chat.component.js.map

/***/ },

/***/ 601:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_socket_service__ = __webpack_require__(176);
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
            template: __webpack_require__(878),
            styles: [__webpack_require__(839)],
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_socket_service__["a" /* SocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_socket_service__["a" /* SocketService */]) === 'function' && _b) || Object])
    ], MessageFormComponent);
    return MessageFormComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/message-form.component.js.map

/***/ },

/***/ 602:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
            template: __webpack_require__(879),
            styles: [__webpack_require__(840)]
        }), 
        __metadata('design:paramtypes', [])
    ], MessageItemComponent);
    return MessageItemComponent;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/message-item.component.js.map

/***/ },

/***/ 603:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_socket_service__ = __webpack_require__(176);
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
            template: __webpack_require__(880),
            styles: [__webpack_require__(841)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_socket_service__["a" /* SocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_socket_service__["a" /* SocketService */]) === 'function' && _b) || Object])
    ], MessageListComponent);
    return MessageListComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/message-list.component.js.map

/***/ },

/***/ 604:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
            template: __webpack_require__(881),
            styles: [__webpack_require__(859)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/footer.component.js.map

/***/ },

/***/ 605:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
            template: __webpack_require__(882),
            styles: [__webpack_require__(860)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/header.component.js.map

/***/ },

/***/ 606:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_services_auth_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tasks_todo_tasks_todo_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__all_tasks_all_tasks_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__household_household_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navigation_navigation_component__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_api_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contract__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tasks_todo_todolist_todolist_component__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__chat_chat_component__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__chat_message_list_message_list_component__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__chat_message_form_message_form_component__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__chat_message_item_message_item_component__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_forms__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_materialize__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angular2_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__all_tasks_tasklist_tasklist_component__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__taskdetail_taskdetail_component__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__household_overview_household_overview_component__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__loader_small_loader_small_component__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__household_overview_user_img_user_img_component__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__household_overview_user_detail_user_detail_component__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__household_overview_award_award_component__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipe_tasks_filter_pipe__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__footer_footer_component__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__tasks_todo_todolist_tasktodo_row_tasktodo_row_component__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pipe_sort_pipe__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__all_tasks_tasklist_task_row_task_row_component__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__household_overview_award_award_detail_award_detail_component__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__household_overview_award_new_award_new_award_component__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pipe_sort_users_pipe__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__household_new_household_new_household_component__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__household_join_household_join_household_component__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__household_join_household_detail_join_household_detail_component__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__household_charts_charts_component__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_angular2_chartist__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_angular2_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_angular2_chartist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__household_charts_finished_bar_finished_bar_component__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__household_charts_contribution_donut_contribution_donut_component__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__household_charts_evolution_line_evolution_line_component__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__household_charts_tasks_donut_tasks_donut_component__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_ng2_charts__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_44_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__navigation_about_component_about_component_component__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__household_leave_household_leave_household_component__ = __webpack_require__(620);
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
                __WEBPACK_IMPORTED_MODULE_31__all_tasks_tasklist_task_row_task_row_component__["a" /* TaskRowComponent */],
                __WEBPACK_IMPORTED_MODULE_32__household_overview_award_award_detail_award_detail_component__["a" /* AwardDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_34__pipe_sort_users_pipe__["a" /* SortUsersPipe */],
                __WEBPACK_IMPORTED_MODULE_33__household_overview_award_new_award_new_award_component__["a" /* NewAwardComponent */],
                __WEBPACK_IMPORTED_MODULE_35__household_new_household_new_household_component__["a" /* NewHouseholdComponent */],
                __WEBPACK_IMPORTED_MODULE_36__household_join_household_join_household_component__["a" /* JoinHouseholdComponent */],
                __WEBPACK_IMPORTED_MODULE_37__household_join_household_detail_join_household_detail_component__["a" /* JoinHouseholdDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_38__household_charts_charts_component__["a" /* ChartsComponent */],
                __WEBPACK_IMPORTED_MODULE_40__household_charts_finished_bar_finished_bar_component__["a" /* FinishedBarComponent */],
                __WEBPACK_IMPORTED_MODULE_41__household_charts_contribution_donut_contribution_donut_component__["a" /* ContributionDonutComponent */],
                __WEBPACK_IMPORTED_MODULE_42__household_charts_evolution_line_evolution_line_component__["a" /* EvolutionLineComponent */],
                __WEBPACK_IMPORTED_MODULE_43__household_charts_tasks_donut_tasks_donut_component__["a" /* TasksDonutComponent */],
                __WEBPACK_IMPORTED_MODULE_45__navigation_about_component_about_component_component__["a" /* AboutComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_46__household_leave_household_leave_household_component__["a" /* LeaveHouseholdComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_12__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_18__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_39_angular2_chartist__["ChartistModule"], __WEBPACK_IMPORTED_MODULE_44_ng2_charts__["ChartsModule"]
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

/***/ 607:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_award_model__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AwardDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AwardDetailComponent = (function () {
    function AwardDetailComponent() {
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AwardDetailComponent.prototype.ngOnInit = function () {
    };
    // private finduser(id:number){
    //   for(let u in this.users){
    //     if(this.user[u].id==id){
    //       console.log("creator found");
    //
    //       return this.user[u];
    //     }
    //     return new User();
    //   }
    // }
    AwardDetailComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_award_model__["a" /* Award */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_award_model__["a" /* Award */]) === 'function' && _a) || Object)
    ], AwardDetailComponent.prototype, "award", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* User */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* User */]) === 'function' && _b) || Object)
    ], AwardDetailComponent.prototype, "user", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], AwardDetailComponent.prototype, "visible", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _c) || Object)
    ], AwardDetailComponent.prototype, "visibleChange", void 0);
    AwardDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-award-detail',
            template: __webpack_require__(884),
            styles: [__webpack_require__(842)],
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
    ], AwardDetailComponent);
    return AwardDetailComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/award-detail.component.js.map

/***/ },

/***/ 608:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_award_model__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_metadata_directives__ = __webpack_require__(115);
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
        // @Output() showDetail = new EventEmitter();
        // @Output()showNew = new EventEmitter();
        this.addAwardToHousehold = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showDialogAward = false;
        this.showDialogNewAward = false;
    }
    AwardComponent.prototype.findUser = function () {
        for (var user in this.users) {
            if (this.users[user].id == this.award.creator_id) {
                console.log(this.users[user].name);
                this.user = this.users[user];
            }
        }
    };
    AwardComponent.prototype.ngOnInit = function () {
        if (this.award && this.award.creator_id)
            this.findUser();
        else
            this.award = null;
    };
    AwardComponent.prototype.receiveAwardfromDialog = function (award) {
        this.award = award;
        this.findUser();
        this.addAwardToHousehold.emit(award);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_award_model__["a" /* Award */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_award_model__["a" /* Award */]) === 'function' && _a) || Object)
    ], AwardComponent.prototype, "award", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], AwardComponent.prototype, "users", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_metadata_directives__["b" /* Output */])(), 
        __metadata('design:type', Object)
    ], AwardComponent.prototype, "addAwardToHousehold", void 0);
    AwardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-award',
            template: __webpack_require__(885),
            styles: [__webpack_require__(862)]
        }), 
        __metadata('design:paramtypes', [])
    ], AwardComponent);
    return AwardComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/award.component.js.map

/***/ },

/***/ 609:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NewAwardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewAwardComponent = (function () {
    function NewAwardComponent(apiService) {
        this.apiService = apiService;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.awardAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.name = "";
        this.description = "";
    }
    NewAwardComponent.prototype.ngOnInit = function () {
    };
    NewAwardComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    NewAwardComponent.prototype.set = function () {
        var _this = this;
        if (this.name !== "") {
            console.log("test");
            this.apiService.setAward(this.name, this.description).subscribe(function (award) {
                console.log("received");
                _this.awardAdded.emit(award);
                _this.close();
                _this.name = "";
                _this.description = "";
            });
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], NewAwardComponent.prototype, "visible", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], NewAwardComponent.prototype, "visibleChange", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], NewAwardComponent.prototype, "awardAdded", void 0);
    NewAwardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-award',
            template: __webpack_require__(886),
            styles: [__webpack_require__(843)],
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
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]) === 'function' && _c) || Object])
    ], NewAwardComponent);
    return NewAwardComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/new-award.component.js.map

/***/ },

/***/ 610:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_household_model__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_award_model__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(39);
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
    function HouseholdOverviewComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.showDialog = false;
        this.showJoinHouseholdDialog = false;
        this.showMakeHouseholdDialog = false;
        this.receivedHousehold = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    HouseholdOverviewComponent.prototype.openUserPopup = function (user) {
        this.showDialog = !this.showDialog;
        this.selectedUser = user;
        var stateObj = { foo: this.router.url };
        history.pushState(stateObj, "popup", "user");
    };
    HouseholdOverviewComponent.prototype.sendUserToUpper = function (household) {
        this.receivedHousehold.emit(household);
    };
    HouseholdOverviewComponent.prototype.ngOnInit = function () {
        if (this.household && !this.household.award)
            this.household.award = new __WEBPACK_IMPORTED_MODULE_3__models_award_model__["a" /* Award */]();
    };
    HouseholdOverviewComponent.prototype.addAwardToHousehold = function (award) {
        this.household.award = award;
    };
    HouseholdOverviewComponent.prototype.receiveHousehold = function (household) {
        var _this = this;
        this.apiService.getEverything().subscribe(function (data) {
            _this.household = data.household;
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_household_model__["a" /* Household */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__models_household_model__["a" /* Household */]) === 'function' && _a) || Object)
    ], HouseholdOverviewComponent.prototype, "household", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], HouseholdOverviewComponent.prototype, "users", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], HouseholdOverviewComponent.prototype, "receivedHousehold", void 0);
    HouseholdOverviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-household-overview',
            template: __webpack_require__(887),
            styles: [__webpack_require__(863)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], HouseholdOverviewComponent);
    return HouseholdOverviewComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/household-overview.component.js.map

/***/ },

/***/ 611:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_services_auth_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(35);
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
    function UserDetailComponent(apiService, auth, location) {
        var _this = this;
        this.apiService = apiService;
        this.auth = auth;
        this.location = location;
        this.closable = true;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.disabled = "disabled";
        this.currentUser = auth.uid;
        location.onPopState(function (event) {
            _this.back();
        });
    }
    UserDetailComponent.prototype.ngOnInit = function () {
    };
    UserDetailComponent.prototype.back = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    UserDetailComponent.prototype.close = function () {
        var stateObj = { foo: history.state.foo };
        history.replaceState(stateObj, "back", history.state.foo);
        this.back();
    };
    UserDetailComponent.prototype.save = function () {
        var _this = this;
        //Code om update-user uit te voeren
        this.apiService.updateUser(this.user).subscribe(function (user) { console.log(user); _this.close(); });
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
            template: __webpack_require__(888),
            styles: [__webpack_require__(864)],
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
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__auth_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__auth_services_auth_service__["a" /* AuthService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["PlatformLocation"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_common__["PlatformLocation"]) === 'function' && _e) || Object])
    ], UserDetailComponent);
    return UserDetailComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/user-detail.component.js.map

/***/ },

/***/ 612:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__(40);
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
            template: __webpack_require__(889),
            styles: [__webpack_require__(865)]
        }), 
        __metadata('design:paramtypes', [])
    ], UserImgComponent);
    return UserImgComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/user-img.component.js.map

/***/ },

/***/ 613:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_household_model__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChartsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartsComponent = (function () {
    function ChartsComponent() {
    }
    ChartsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_household_model__["a" /* Household */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_household_model__["a" /* Household */]) === 'function' && _a) || Object)
    ], ChartsComponent.prototype, "household", void 0);
    ChartsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-charts',
            template: __webpack_require__(890),
            styles: [__webpack_require__(844)],
        }), 
        __metadata('design:paramtypes', [])
    ], ChartsComponent);
    return ChartsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/charts.component.js.map

/***/ },

/***/ 614:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_household_model__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContributionDonutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




__webpack_require__(418);
var ContributionDonutComponent = (function () {
    function ContributionDonutComponent(apiService) {
        this.apiService = apiService;
        this.data = {
            "labels": [],
            "series": []
        };
        this.draw = function (data) {
            if (data.type === 'slice') {
                // Get the total path length in order to use for dash array animation
                var pathLength = data.element._node.getTotalLength();
                // Set a dasharray that matches the path length as prerequisite to animate dashoffset
                data.element.attr({
                    'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
                });
                // Create animation definition while also assigning an ID to the animation for later sync usage
                var animationDefinition = {
                    'stroke-dashoffset': {
                        id: 'anim' + data.index,
                        dur: 1000,
                        from: -pathLength + 'px',
                        to: '0px',
                        easing: __WEBPACK_IMPORTED_MODULE_1_chartist__["Svg"].Easing.easeOutQuint,
                        // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                        fill: 'freeze'
                    }
                };
                // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
                if (data.index !== 0) {
                    animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
                }
                // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
                data.element.attr({
                    'stroke-dashoffset': -pathLength + 'px'
                });
                // We can't use guided mode as the animations need to rely on setting begin manually
                // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
                data.element.animate(animationDefinition, false);
            }
        };
        this.events = {
            "draw": this.draw
        };
        this.options = {
            donut: true,
            showLabel: true,
            plugins: [__WEBPACK_IMPORTED_MODULE_1_chartist__["plugins"].legend()],
            donutWidth: 30,
            labelOffset: 30,
            labelDirection: 'explode',
            chartPadding: 20,
        };
        this.type = 'Pie';
    }
    ContributionDonutComponent.prototype.ngOnInit = function () {
        this.getContributions();
    };
    ContributionDonutComponent.prototype.getContributions = function () {
        var _this = this;
        this.apiService.getContributions().subscribe(function (data) {
            var result = { "labels": [], "series": [] };
            data.sort(function (d1, d2) {
                console.log(d1._id);
                if (d1._id > d2._id)
                    return -1;
                if (d1._id < d2._id)
                    return 1;
                return 0;
            });
            data.forEach(function (res) {
                result["labels"].push(_this.findUser(res._id));
                result["series"].push(res.count);
            });
            _this.data = result;
        }, function (error) { return console.log(error); });
    };
    ContributionDonutComponent.prototype.findUser = function (id) {
        for (var user in this.household.users)
            if (this.household.users[user].id == id)
                return this.household.users[user].name;
        return "inactive member";
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__models_household_model__["a" /* Household */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__models_household_model__["a" /* Household */]) === 'function' && _a) || Object)
    ], ContributionDonutComponent.prototype, "household", void 0);
    ContributionDonutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contribution-donut',
            template: __webpack_require__(891),
            styles: [__webpack_require__(845)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */]) === 'function' && _b) || Object])
    ], ContributionDonutComponent);
    return ContributionDonutComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/contribution-donut.component.js.map

/***/ },

/***/ 615:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_household_model__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chartist__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chartist__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EvolutionLineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// require('chartist-plugin-legend');
var EvolutionLineComponent = (function () {
    function EvolutionLineComponent(apiService) {
        var _this = this;
        this.apiService = apiService;
        this.draw = function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 200 * data.index,
                        dur: 2000,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: __WEBPACK_IMPORTED_MODULE_4_chartist__["Svg"].Easing.easeOutQuint
                    }
                });
            }
            else if (data.type === 'label') {
                data.element.animate({
                    opacity: {
                        begin: 500,
                        dur: 2000,
                        from: 0.8,
                        to: 0.8,
                        easing: __WEBPACK_IMPORTED_MODULE_4_chartist__["Svg"].Easing.easeOutQuint
                    }
                });
            }
        };
        this.type = 'Line';
        this.data = new Promise(function (resolve) {
            _this.getContributionEvolution(resolve);
        });
        this.options = {
            showArea: false,
            showPoint: false,
            showLine: true,
            plugins: [__WEBPACK_IMPORTED_MODULE_4_chartist__["plugins"].legend()],
            axisX: {
                showGrid: false,
                labelInterpolationFnc: function (value, index) {
                    return index % 2 === 0 ? value : null;
                }
            },
            axisY: {
                showGrid: true,
                showLabel: true
            }
        };
        this.events = {
            "draw": this.draw
        };
    }
    EvolutionLineComponent.prototype.ngOnInit = function () {
    };
    EvolutionLineComponent.prototype.getContributionEvolution = function (resolve) {
        var _this = this;
        this.apiService.getContributionEvolution().subscribe(function (data) {
            var years = [];
            var users = [];
            var series = [];
            var labels = [];
            for (var i = 0; i <= 12; i++) {
                var month = __WEBPACK_IMPORTED_MODULE_3_moment__().subtract(i, 'months').month() + 1;
                var year = __WEBPACK_IMPORTED_MODULE_3_moment__().subtract(i, 'months').year();
                if (!years[year])
                    years[year] = [];
                years[year].push(month);
            }
            data.map(function (year) {
                year.stats.map(function (stats) {
                    if (!users[stats.user])
                        users[stats.user] = [];
                    if (!users[stats.user][stats.year])
                        users[stats.user][stats.year] = [];
                    users[stats.user][stats.year][stats.month] = stats.count;
                });
            });
            Object.keys(years).map(function (y) {
                Object.keys(users).map(function (u) {
                    series[u] = [];
                    if (!users[u][y])
                        users[u][y] = [];
                    years[y].map(function (m) {
                        if (!users[u][y][m])
                            users[u][y][m] = 0;
                    });
                    users[u].map(function (y) {
                        return y.map(function (m) { return series[u].push(m); });
                    });
                });
                years[y].map(function (m) {
                    labels.push(__WEBPACK_IMPORTED_MODULE_3_moment__({ y: parseInt(y), M: m - 1 }));
                    labels.sort(function (l1, l2) {
                        if (l1 < l2)
                            return -1;
                        if (l2 < l1)
                            return 1;
                        return 0;
                    });
                });
            });
            labels = labels.map(function (l) {
                return l.format("MMM");
            });
            var result = { labels: labels, series: [] };
            Object.keys(series).map(function (s) {
                result.series.push({ "id": parseInt(s), "name": _this.findUser(parseInt(s)), "data": series[s] });
            });
            result.series.sort(function (o1, o2) {
                if (o1.id > o2.id)
                    return -1;
                if (o1.id < o2.id)
                    return 1;
                return 0;
            });
            resolve(result);
        }, function (error) { return console.log(error); });
    };
    EvolutionLineComponent.prototype.findUser = function (id) {
        for (var user in this.household.users)
            if (this.household.users[user].id == id)
                return this.household.users[user].name;
        return "inactive member";
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_household_model__["a" /* Household */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_household_model__["a" /* Household */]) === 'function' && _a) || Object)
    ], EvolutionLineComponent.prototype, "household", void 0);
    EvolutionLineComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-evolution-line',
            template: __webpack_require__(892),
            styles: [__webpack_require__(846)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */]) === 'function' && _b) || Object])
    ], EvolutionLineComponent);
    return EvolutionLineComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/evolution-line.component.js.map

/***/ },

/***/ 616:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_household_model__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartist__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chartist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_api_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FinishedBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





__webpack_require__(418);
var FinishedBarComponent = (function () {
    function FinishedBarComponent(apiService) {
        var _this = this;
        this.apiService = apiService;
        this.draw = function (data) {
            if (data.type === 'bar') {
                data.element.attr({
                    style: 'stroke-width: 0px'
                });
                var strokeWidth = 10;
                if (data.seriesIndex === 0) {
                    data.element.animate({
                        y2: {
                            begin: 0,
                            dur: 500,
                            from: data.y1,
                            to: data.y2,
                            easing: __WEBPACK_IMPORTED_MODULE_3_chartist__["Svg"].Easing.easeOutSine,
                        },
                        'stroke-width': {
                            begin: 0,
                            dur: 1,
                            from: 1,
                            to: strokeWidth,
                            fill: 'freeze',
                        }
                    }, false);
                }
                if (data.seriesIndex === 1) {
                    data.element.animate({
                        y2: {
                            begin: 500,
                            dur: 500,
                            from: data.y1,
                            to: data.y2,
                            easing: __WEBPACK_IMPORTED_MODULE_3_chartist__["Svg"].Easing.easeOutSine,
                        },
                        'stroke-width': {
                            begin: 500,
                            dur: 1,
                            from: 0,
                            to: strokeWidth,
                            fill: 'freeze',
                        }
                    }, false);
                }
            }
        };
        this.type = 'Bar';
        this.data = new Promise(function (resolve) {
            _this.getStats(resolve);
        });
        this.options = {
            showArea: false,
            showPoint: false,
            showLine: true,
            plugins: [__WEBPACK_IMPORTED_MODULE_3_chartist__["plugins"].legend()],
            axisX: {
                showGrid: false,
                labelInterpolationFnc: function (value, index) {
                    return index % 2 === 0 ? value : null;
                }
            },
            axisY: {
                showGrid: true,
                showLabel: true
            }
        };
        this.events = {
            "draw": this.draw
        };
    }
    FinishedBarComponent.prototype.ngOnInit = function () {
    };
    FinishedBarComponent.prototype.getStats = function (resolve) {
        this.apiService.getFinishedCanceledStats().subscribe(function (data) {
            var labels = [];
            var series = [{ "name": "canceled", "data": [] }, { "name": "finished", "data": [] }];
            for (var i = 0; i <= 12; i++) {
                labels.push(__WEBPACK_IMPORTED_MODULE_2_moment__().subtract(i, 'months'));
            }
            data = data.map(function (m) {
                return {
                    moment: __WEBPACK_IMPORTED_MODULE_2_moment__({ y: m._id.year, M: m._id.month - 1 }),
                    done: m._id.done,
                    count: m.count
                };
            });
            labels.forEach(function (l) {
                var res = data.filter(function (d) {
                    return d.moment.year() == l.year() && d.moment.month() == l.month();
                });
                if (res.length == 0) {
                    series[0].data.push(0);
                    series[1].data.push(0);
                }
                if (res.length == 1 && !res[0].done) {
                    series[0].data.push(res[0].count);
                    series[1].data.push(0);
                }
                if (res.length == 1 && res[0].done) {
                    series[0].data.push(0);
                    series[1].data.push(res[0].count);
                }
                if (res.length == 2) {
                    res[0].done ? series[1].data.push(res[0].count) : series[0].data.push(res[0].count);
                    res[1].done ? series[1].data.push(res[1].count) : series[0].data.push(res[1].count);
                }
            });
            labels = labels.map(function (l) { return l.format("MMM"); });
            labels.reverse();
            series[0].data.reverse();
            series[1].data.reverse();
            console.log({ labels: labels, series: series });
            resolve({ labels: labels, series: series });
        }, function (error) { return console.log(error); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_household_model__["a" /* Household */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_household_model__["a" /* Household */]) === 'function' && _a) || Object)
    ], FinishedBarComponent.prototype, "household", void 0);
    FinishedBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-finished-bar',
            template: __webpack_require__(893),
            styles: [__webpack_require__(847)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__service_api_service__["a" /* ApiService */]) === 'function' && _b) || Object])
    ], FinishedBarComponent);
    return FinishedBarComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/finished-bar.component.js.map

/***/ },

/***/ 617:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_household_model__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TasksDonutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TasksDonutComponent = (function () {
    function TasksDonutComponent(apiService) {
        this.apiService = apiService;
        this.data = {
            "labels": [],
            "series": []
        };
        this.draw = function (data) {
            if (data.type === 'slice') {
                // Get the total path length in order to use for dash array animation
                var pathLength = data.element._node.getTotalLength();
                // Set a dasharray that matches the path length as prerequisite to animate dashoffset
                data.element.attr({
                    'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
                });
                // Create animation definition while also assigning an ID to the animation for later sync usage
                var animationDefinition = {
                    'stroke-dashoffset': {
                        id: 'anim' + data.index,
                        dur: 500,
                        from: -pathLength + 'px',
                        to: '0px',
                        easing: __WEBPACK_IMPORTED_MODULE_1_chartist__["Svg"].Easing.easeOutQuint,
                        // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                        fill: 'freeze'
                    }
                };
                // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
                if (data.index !== 0) {
                    animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
                }
                // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
                data.element.attr({
                    'stroke-dashoffset': -pathLength + 'px'
                });
                // We can't use guided mode as the animations need to rely on setting begin manually
                // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
                data.element.animate(animationDefinition, false);
            }
        };
        this.events = {
            "draw": this.draw
        };
        this.options = {
            donut: true,
            showLabel: true,
            donutWidth: 30,
            labelOffset: 30,
            labelDirection: 'explode',
            chartPadding: 20,
        };
        this.type = 'Pie';
    }
    TasksDonutComponent.prototype.ngOnInit = function () {
        this.getContributions();
    };
    TasksDonutComponent.prototype.getContributions = function () {
        var _this = this;
        this.apiService.getTaskStats().subscribe(function (data) {
            var result = { "labels": [], "series": [] };
            var index = 0;
            data.forEach(function (res) {
                index++;
                if (index < 9) {
                    result["labels"].push(res.name);
                    result["series"].push(res.count);
                }
                else {
                    result["series"][result["series"].length - 1] += res.count;
                    result["labels"][result["labels"].length - 1] = data.length - 9 + " others";
                }
            });
            _this.data = result;
        }, function (error) { return console.log(error); });
    };
    TasksDonutComponent.prototype.findUser = function (id) {
        for (var user in this.household.users)
            if (this.household.users[user].id == id)
                return this.household.users[user].name;
        console.log(id);
        return "inactive member";
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__models_household_model__["a" /* Household */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__models_household_model__["a" /* Household */]) === 'function' && _a) || Object)
    ], TasksDonutComponent.prototype, "household", void 0);
    TasksDonutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tasks-donut',
            template: __webpack_require__(894),
            styles: [__webpack_require__(848)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */]) === 'function' && _b) || Object])
    ], TasksDonutComponent);
    return TasksDonutComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/tasks-donut.component.js.map

/***/ },

/***/ 618:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_metadata_directives__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_household_model__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_api_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_services_auth_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return JoinHouseholdDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JoinHouseholdDetailComponent = (function () {
    function JoinHouseholdDetailComponent(apiService, auth, _ngZone) {
        this.apiService = apiService;
        this.auth = auth;
        this._ngZone = _ngZone;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.householdjoined = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.user = auth.authState.auth;
    }
    JoinHouseholdDetailComponent.prototype.ngOnInit = function () {
    };
    JoinHouseholdDetailComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    JoinHouseholdDetailComponent.prototype.join = function () {
        var _this = this;
        console.log("Join Household");
        this.apiService.addUsertoHousehold(this.household.id)
            .subscribe(function (user) {
            _this.visible = false;
            _this.visibleChange.emit(_this.visible);
            _this.householdjoined.emit(user);
        }, function (error) { return console.log(error); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_metadata_directives__["a" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_household_model__["a" /* Household */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__models_household_model__["a" /* Household */]) === 'function' && _a) || Object)
    ], JoinHouseholdDetailComponent.prototype, "household", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_metadata_directives__["a" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], JoinHouseholdDetailComponent.prototype, "visible", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_metadata_directives__["b" /* Output */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], JoinHouseholdDetailComponent.prototype, "visibleChange", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_metadata_directives__["b" /* Output */])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _c) || Object)
    ], JoinHouseholdDetailComponent.prototype, "householdjoined", void 0);
    JoinHouseholdDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-join-household-detail',
            template: __webpack_require__(896),
            styles: [__webpack_require__(850)],
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
        __metadata('design:paramtypes', [(typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_api_service__["a" /* ApiService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__auth_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__auth_services_auth_service__["a" /* AuthService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _f) || Object])
    ], JoinHouseholdDetailComponent);
    return JoinHouseholdDetailComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/join-household-detail.component.js.map

/***/ },

/***/ 619:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_metadata_directives__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return JoinHouseholdComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JoinHouseholdComponent = (function () {
    function JoinHouseholdComponent(apiservice) {
        this.apiservice = apiservice;
        this.memberemail = "";
        this.showDialogJoin = false;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.householdtoHouseholdComp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    JoinHouseholdComponent.prototype.ngOnInit = function () {
        this.memberemail = "";
    };
    JoinHouseholdComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    JoinHouseholdComponent.prototype.save = function () {
        var _this = this;
        if (this.memberemail) {
            console.log(this.memberemail);
            this.apiservice.getHouseholdbyEmail(this.memberemail).subscribe(function (data) {
                _this.household = data;
                console.log(_this.household);
            }, function (error) { return console.log(error); });
        }
        this.visible = false;
        this.visibleChange.emit(this.visible);
        this.memberemail = "";
    };
    JoinHouseholdComponent.prototype.receivedhouseholdfromJoinDialog = function (user) {
        this.householdtoHouseholdComp.emit(user);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], JoinHouseholdComponent.prototype, "visible", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_metadata_directives__["b" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], JoinHouseholdComponent.prototype, "visibleChange", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_metadata_directives__["b" /* Output */])(), 
        __metadata('design:type', Object)
    ], JoinHouseholdComponent.prototype, "householdtoHouseholdComp", void 0);
    JoinHouseholdComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-join-household',
            template: __webpack_require__(897),
            styles: [__webpack_require__(851)],
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
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */]) === 'function' && _b) || Object])
    ], JoinHouseholdComponent);
    return JoinHouseholdComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/join-household.component.js.map

/***/ },

/***/ 620:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_household_model__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_api_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LeaveHouseholdComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LeaveHouseholdComponent = (function () {
    function LeaveHouseholdComponent(apiService) {
        this.apiService = apiService;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.updatedUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LeaveHouseholdComponent.prototype.ngOnInit = function () {
    };
    LeaveHouseholdComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    LeaveHouseholdComponent.prototype.leave = function () {
        var _this = this;
        this.apiService.leaveHousehold(this.user.id).subscribe(function (user) {
            _this.visible = false;
            _this.visibleChange.emit(_this.visible);
            _this.updatedUser.emit(user);
            console.log(user);
        }, function (error) { return console.log(error); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], LeaveHouseholdComponent.prototype, "visible", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_household_model__["a" /* Household */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_household_model__["a" /* Household */]) === 'function' && _a) || Object)
    ], LeaveHouseholdComponent.prototype, "household", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* User */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* User */]) === 'function' && _b) || Object)
    ], LeaveHouseholdComponent.prototype, "user", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _c) || Object)
    ], LeaveHouseholdComponent.prototype, "visibleChange", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _d) || Object)
    ], LeaveHouseholdComponent.prototype, "updatedUser", void 0);
    LeaveHouseholdComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-leave-household',
            template: __webpack_require__(898),
            styles: [__webpack_require__(852)],
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
        __metadata('design:paramtypes', [(typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_api_service__["a" /* ApiService */]) === 'function' && _e) || Object])
    ], LeaveHouseholdComponent);
    return LeaveHouseholdComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/leave-household.component.js.map

/***/ },

/***/ 621:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_metadata_directives__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NewHouseholdComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewHouseholdComponent = (function () {
    function NewHouseholdComponent(apiService) {
        this.apiService = apiService;
        this.householdName = "";
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.userReceived = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NewHouseholdComponent.prototype.ngOnInit = function () {
    };
    NewHouseholdComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    NewHouseholdComponent.prototype.create = function () {
        var _this = this;
        if (this.householdName) {
            //api call om household aan te maken
            this.apiService.addHousehold(this.householdName).subscribe(function (household) {
                console.log(household);
                _this.apiService.addUsertoHousehold(household.id).subscribe(function (user) {
                    _this.userReceived.emit(user);
                }, function (error) { return console.log(error); });
            }, function (error) { return console.log(error); });
            //current user toevoegen aan dit household
            //Emitten van nieuwe household naar overview
            //afsluiten van de dialog
            this.visible = false;
            this.visibleChange.emit(this.visible);
        }
        else {
            console.log("no name");
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_metadata_directives__["a" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], NewHouseholdComponent.prototype, "visible", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_metadata_directives__["b" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], NewHouseholdComponent.prototype, "visibleChange", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_metadata_directives__["b" /* Output */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], NewHouseholdComponent.prototype, "userReceived", void 0);
    NewHouseholdComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-household',
            template: __webpack_require__(899),
            styles: [__webpack_require__(853)],
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
    ], NewHouseholdComponent);
    return NewHouseholdComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/new-household.component.js.map

/***/ },

/***/ 622:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponentComponent = (function () {
    function AboutComponentComponent(location) {
        var _this = this;
        this.location = location;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        location.onPopState(function (event) {
            _this.back();
        });
    }
    AboutComponentComponent.prototype.back = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    AboutComponentComponent.prototype.close = function () {
        var stateObj = { foo: history.state.foo };
        history.replaceState(stateObj, "back", history.state.foo);
        this.back();
    };
    AboutComponentComponent.prototype.ngOnInit = function () {
        console.log(this.visible);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], AboutComponentComponent.prototype, "visible", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], AboutComponentComponent.prototype, "visibleChange", void 0);
    AboutComponentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about-component',
            template: __webpack_require__(900),
            styles: [__webpack_require__(854)],
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
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["PlatformLocation"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_common__["PlatformLocation"]) === 'function' && _b) || Object])
    ], AboutComponentComponent);
    return AboutComponentComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/about-component.component.js.map

/***/ },

/***/ 623:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(39);
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
        this.aboutVisible = false;
        this.user = auth.authState.auth;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.openAbout = function (event) {
        this.aboutVisible = !this.aboutVisible;
        event.preventDefault();
        var stateObj = { foo: this.router.url };
        history.pushState(stateObj, "popup", "about");
    };
    NavigationComponent.prototype.logout = function () {
        this.auth.logout();
    };
    NavigationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(901),
            styles: [__webpack_require__(866)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], NavigationComponent);
    return NavigationComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/navigation.component.js.map

/***/ },

/***/ 624:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_task_model__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_api_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_update_task_list_service__ = __webpack_require__(258);
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








var TaskdetailComponent = (function () {
    function TaskdetailComponent(apiService, location, updateTaskListService) {
        var _this = this;
        this.apiService = apiService;
        this.location = location;
        this.updateTaskListService = updateTaskListService;
        this.closable = true;
        this.newTask = false;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        location.onPopState(function (event) {
            _this.back();
        });
    }
    TaskdetailComponent.prototype.ngOnInit = function () {
        if (this.task === undefined)
            this.task = new __WEBPACK_IMPORTED_MODULE_1__models_task_model__["a" /* Task */]();
        this.taskLocal = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.clone(this.task);
        var doMeUserSet = false;
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.id === null)
                doMeUserSet = true;
        }
        if (this.users !== undefined && !doMeUserSet) {
            this.usersLocal = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.map(this.users, __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.clone);
            var doMeUser = new __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* User */];
            doMeUser.name = "everyone";
            doMeUser.id = null;
            this.usersLocal.push(doMeUser);
        }
    };
    TaskdetailComponent.prototype.ngOnChanges = function () {
        if (this.task !== undefined && this.task !== null) {
            this.task.dueDate = __WEBPACK_IMPORTED_MODULE_5_moment__(this.task.dueDate).format("YYYY-MM-DD");
            this.taskLocal = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.clone(this.task);
        }
    };
    TaskdetailComponent.prototype.back = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    TaskdetailComponent.prototype.close = function () {
        // let stateObj = { foo: history.state.foo };
        // history.replaceState(stateObj, "back", history.state.foo);
        this.back();
    };
    TaskdetailComponent.prototype.add = function () {
        var _this = this;
        if (this.taskLocal.name !== undefined && this.taskLocal.dueDate !== undefined && this.taskLocal.assigned_to !== undefined && this.taskLocal.period !== undefined && this.taskLocal.points !== undefined) {
            this.apiService.addTask(this.taskLocal).subscribe(function (data) {
                _this.updateTaskListService.updateListNeeded();
                _this.close();
            });
        }
    };
    TaskdetailComponent.prototype.save = function () {
        var _this = this;
        this.task = this.taskLocal;
        if (this.taskLocal.name !== undefined && this.taskLocal.dueDate !== undefined && this.taskLocal.assigned_to !== undefined && this.taskLocal.period !== undefined && this.taskLocal.points !== undefined) {
            this.apiService.updateTask(this.task).subscribe(function (data) {
                _this.updateTaskListService.updateListNeeded();
                _this.close();
            });
        }
    };
    TaskdetailComponent.prototype.deleteTask = function () {
        var _this = this;
        this.apiService.deleteTask(this.task.id).subscribe(function (data) {
            _this.updateTaskListService.updateListNeeded();
            _this.close();
        });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], TaskdetailComponent.prototype, "newTask", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], TaskdetailComponent.prototype, "visibleChange", void 0);
    TaskdetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-taskdetail',
            template: __webpack_require__(902),
            styles: [__webpack_require__(867)],
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
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_api_service__["a" /* ApiService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common__["PlatformLocation"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_common__["PlatformLocation"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__service_update_task_list_service__["a" /* UpdateTaskListService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__service_update_task_list_service__["a" /* UpdateTaskListService */]) === 'function' && _e) || Object])
    ], TaskdetailComponent);
    return TaskdetailComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/taskdetail.component.js.map

/***/ },

/***/ 625:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_task_model__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_api_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_socket_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_update_household_overview_service__ = __webpack_require__(177);
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
    function TasktodoRowComponent(apiService, socketService, updateHouseholdOverviewService) {
        this.apiService = apiService;
        this.socketService = socketService;
        this.updateHouseholdOverviewService = updateHouseholdOverviewService;
        this.showDetail = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.finish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isDestroyed = false;
    }
    TasktodoRowComponent.prototype.showDetailClick = function () {
        this.showDetail.emit(this.task);
    };
    TasktodoRowComponent.prototype.finishClick = function () {
        console.log("request update");
        this.updateHouseholdOverviewService.updateHouseholdNeeded();
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
                if (data.done) {
                    _this.updateHouseholdOverviewService.updateHouseholdNeeded();
                    _this.state = "finished";
                    _this.finish.emit(_this.task);
                }
                else {
                    _this.state = "canceled";
                    _this.cancel.emit(_this.task);
                }
                _this.isDestroyed = true;
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
            template: __webpack_require__(904),
            styles: [__webpack_require__(855)],
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
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__service_api_service__["a" /* ApiService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__service_socket_service__["a" /* SocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__service_socket_service__["a" /* SocketService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__service_update_household_overview_service__["a" /* UpdateHouseholdOverviewService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__service_update_household_overview_service__["a" /* UpdateHouseholdOverviewService */]) === 'function' && _e) || Object])
    ], TasktodoRowComponent);
    return TasktodoRowComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/tasktodo-row.component.js.map

/***/ },

/***/ 626:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(39);
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
    function TodolistComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
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
        var stateObj = { foo: this.router.url };
        history.pushState(stateObj, "popup", "task");
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
            template: __webpack_require__(905),
            styles: [__webpack_require__(869)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], TodolistComponent);
    return TodolistComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/todolist.component.js.map

/***/ },

/***/ 627:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(597);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/index.js.map

/***/ },

/***/ 628:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
            template: __webpack_require__(906),
            styles: [__webpack_require__(870)]
        }), 
        __metadata('design:paramtypes', [])
    ], LoaderSmallComponent);
    return LoaderSmallComponent;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/loader-small.component.js.map

/***/ },

/***/ 629:
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

/***/ 630:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SortUsersPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortUsersPipe = (function () {
    function SortUsersPipe() {
    }
    SortUsersPipe.prototype.transform = function (value, args) {
        if (value == null)
            return null;
        switch (args) {
            case 'score':
                {
                    value.sort(function (a, b) {
                        if (a.score > b.score) {
                            return -1;
                        }
                        else if (a.score < b.score) {
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
                    if (a.name < b.name) {
                        return -1;
                    }
                    else if (a.name > b.name) {
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
    SortUsersPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'sortUsers'
        }), 
        __metadata('design:paramtypes', [])
    ], SortUsersPipe);
    return SortUsersPipe;
}());
//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/sort-users.pipe.js.map

/***/ },

/***/ 631:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

/***/ 632:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

/***/ 633:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/Nick/OneDrive/KuisAppWeb/backend_kuisApp/src/polyfills.js.map

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

module.exports = ".chat-form {\n  height: 50px; }\n  .chat-form input {\n    width: 92% !important; }\n"

/***/ },

/***/ 840:
/***/ function(module, exports) {

module.exports = ".card-action {\n  font-size: 0.8em;\n  font-style: italic; }\n\n.card-content, .card-action {\n  padding: 10px;\n  font-size: 0.8em; }\n"

/***/ },

/***/ 841:
/***/ function(module, exports) {

module.exports = "::-webkit-scrollbar {\n  width: 0px;\n  /* remove scrollbar space */\n  background: transparent;\n  /* optional: just make scrollbar invisible */ }\n\n/* optional: show position indicator in red */\n::-webkit-scrollbar-thumb {\n  background: #FF0000; }\n\n.chat-list {\n  margin: 20px 0;\n  overflow-y: auto;\n  height: 300px; }\n  .chat-list li:not(:first-of-type) {\n    margin: 20px 0 0 0; }\n"

/***/ },

/***/ 842:
/***/ function(module, exports) {

module.exports = ".overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: transparent;\n  z-index: 999; }\n\n@media (min-width: 993px) {\n  .overlay {\n    left: 300px; } }\n"

/***/ },

/***/ 843:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 844:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 845:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 846:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 847:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 848:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 849:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 850:
/***/ function(module, exports) {

module.exports = ".overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 999; }\n\n.dialog {\n  z-index: 1000;\n  position: fixed;\n  right: 0;\n  left: 0;\n  top: 20px;\n  margin-right: auto;\n  margin-left: auto;\n  width: 90%;\n  max-width: 520px;\n  /*background-color: #fff;*/\n  /*padding: 12px;*/\n  /*box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);*/ }\n\n@media (min-width: 768px) {\n  .dialog {\n    top: 40px; } }\n"

/***/ },

/***/ 851:
/***/ function(module, exports) {

module.exports = ".overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 999; }\n\n.dialog {\n  z-index: 1000;\n  position: fixed;\n  right: 0;\n  left: 0;\n  top: 20px;\n  margin-right: auto;\n  margin-left: auto;\n  width: 90%;\n  max-width: 520px;\n  /*background-color: #fff;*/\n  /*padding: 12px;*/\n  /*box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);*/ }\n\n@media (min-width: 768px) {\n  .dialog {\n    top: 40px; } }\n"

/***/ },

/***/ 852:
/***/ function(module, exports) {

module.exports = ".overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 999; }\n\n.dialog {\n  z-index: 1000;\n  position: fixed;\n  right: 0;\n  left: 0;\n  top: 20px;\n  margin-right: auto;\n  margin-left: auto;\n  width: 90%;\n  max-width: 520px;\n  /*background-color: #fff;*/\n  /*padding: 12px;*/\n  /*box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);*/ }\n\n@media (min-width: 768px) {\n  .dialog {\n    top: 40px; } }\n"

/***/ },

/***/ 853:
/***/ function(module, exports) {

module.exports = ".overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 999; }\n\n.dialog {\n  z-index: 1000;\n  position: fixed;\n  right: 0;\n  left: 0;\n  top: 20px;\n  margin-right: auto;\n  margin-left: auto;\n  width: 90%;\n  max-width: 520px;\n  /*background-color: #fff;*/\n  /*padding: 12px;*/\n  /*box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);*/ }\n\n@media (min-width: 768px) {\n  .dialog {\n    top: 40px; } }\n"

/***/ },

/***/ 854:
/***/ function(module, exports) {

module.exports = ".overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 999; }\n\n.dialog {\n  z-index: 1000;\n  position: fixed;\n  right: 0;\n  left: 0;\n  top: 20px;\n  margin-right: auto;\n  margin-left: auto;\n  width: 90%;\n  max-width: 520px;\n  /*background-color: #fff;*/\n  /*padding: 12px;*/\n  /*box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);*/ }\n\np:not(:last-of-type) {\n  margin-bottom: 1em; }\n\n@media (min-width: 768px) {\n  .dialog {\n    top: 40px; } }\n"

/***/ },

/***/ 855:
/***/ function(module, exports) {

module.exports = "\n"

/***/ },

/***/ 856:
/***/ function(module, exports) {

module.exports = "/*@media all and (min-width: 992px){*/\n/*body{*/\n/*background-color: yellow;*/\n/*}*/\n/*app-header{*/\n/*display: none;*/\n/*}*/\n/*}*/"

/***/ },

/***/ 857:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 858:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 859:
/***/ function(module, exports) {

module.exports = "ul li a:hover i{\r\n  color: indianred;\r\n}\r\ni .material-icons{\r\n  -webkit-transition: color 0.5s ease;\r\n  transition: color 0.5s ease;\r\n  position: relative;\r\n  top:6px;\r\n}\r\n.fa{\r\n  margin-left: 10px;\r\n  position: relative;\r\n  top:-1px;\r\n  float: right;\r\n  right: 40%;\r\n}\r\n.fa-briefcase{\r\n  color: whitesmoke;\r\n}\r\n"

/***/ },

/***/ 860:
/***/ function(module, exports) {

module.exports = "/*.brand-logo{*/\n/*font-family: 'Finger Paint', cursive;*/\n/*font-size: 32px;*/\n/*}*/"

/***/ },

/***/ 861:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 862:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 863:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 864:
/***/ function(module, exports) {

module.exports = ".overlay {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 999;\n}\n\n.dialog {\n    z-index: 1000;\n    position: fixed;\n    right: 0;\n    left: 0;\n    top: 20px;\n    margin-right: auto;\n    margin-left: auto;\n    width: 90%;\n    max-width: 520px;\n    /*background-color: #fff;*/\n    /*padding: 12px;*/\n    /*box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);*/\n}\n\n@media (min-width: 768px) {\n    .dialog {\n        top: 40px;\n    }\n}"

/***/ },

/***/ 865:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 866:
/***/ function(module, exports) {

module.exports = "/*.logo a{*/\n/*font-family: 'Finger Paint', cursive;*/\n/*font-size: 32px;*/\n/*margin-bottom: 5%;*/\n/*margin-top: 5%;*/\n/*}*/\n\n\n"

/***/ },

/***/ 867:
/***/ function(module, exports) {

module.exports = ".overlay {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 999;\n}\n\n.dialog {\n    z-index: 1000;\n    position: fixed;\n    right: 0;\n    left: 0;\n    top: 20px;\n    margin-right: auto;\n    margin-left: auto;\n    width: 90%;\n    max-width: 520px;\n    /*background-color: #fff;*/\n    /*padding: 12px;*/\n    /*box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);*/\n}\n\n@media (min-width: 768px) {\n    .dialog {\n        top: 40px;\n    }\n}"

/***/ },

/***/ 868:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 869:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 870:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 871:
/***/ function(module, exports) {

module.exports = ".container{\r\n  background: url(\"../../assets/login_background.jpg\") no-repeat center;\r\n\r\n  height: 100vh;\r\n  min-width: 100vw;\r\n  max-width: 100vw;\r\n  margin: 0;\r\n  padding: 0;\r\n  top: 0;\r\n  left:0;\r\n  right: 0;\r\n  overflow: hidden;\r\n}\r\nbutton{\r\n  display: block;\r\n  margin: 0 auto;\r\n  margin-bottom: 15px;\r\n\r\n  width: 250px;\r\n}\r\n.row{\r\n\r\n}\r\n"

/***/ },

/***/ 872:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 873:
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ },

/***/ 874:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n    <app-loader-small *ngIf=\"loading\"></app-loader-small>\r\n\r\n    <app-tasklist *ngIf=\"user\"\r\n                  [tasks]=\"user.household? user.household.tasks : []\"\r\n                  [users]=\"user.household? user.household.users : undefined\">\r\n    </app-tasklist>\r\n    <div class=\"fixed-action-btn vertical click-to-toggle\" style=\"margin-bottom: 4em\">\r\n        <a class=\"btn-floating btn-large red\" (click)=\"dialogVisible=!dialogVisible\">\r\n            <i class=\"material-icons\">add</i>\r\n        </a>\r\n    </div>\r\n\r\n</div>\r\n<div *ngIf=\"user && user.household\">\r\n<app-taskdetail *ngIf=\"user\" [(visible)]=\"dialogVisible\" [(users)]=\"user.household.users\" [newTask]=\"true\"></app-taskdetail>\r\n</div>"

/***/ },

/***/ 875:
/***/ function(module, exports) {

module.exports = "<div class=\"row flex-stretch\" style=\"margin-bottom: 0;\">\n    <div class=\"col flex-down-center\">\n\n        <p class=\"text-small\">repeats every</p>\n        <p class=\"text-large\">{{task.period}}</p>\n        <p class=\"text-small \">{{task.period == 1 ? 'day':'days'}}</p>\n\n    </div>\n    <div class=\"col flex-down-spacebetween\" style=\"flex-grow: 1;\">\n        <span class=\"title\">{{task.name}}</span>\n        <p class=\"grey-text truncate\">{{task.description}} </p>\n        <span class=\"\">{{task.points}} points</span>\n    </div>\n    <div class=\"col flex-down-left\" style=\"align-items: flex-end\">\n\n        <a class=\"tooltipped\"\n           (click)=\"showDetailClick()\"\n           materialize=\"tooltip\"\n           data-position=\"bottom\"\n           data-delay=\"20\"\n           data-tooltip=\"edit\">\n            <i class=\"material-icons \">mode_edit</i></a>\n\n\n    </div>\n</div>\n\n"

/***/ },

/***/ 876:
/***/ function(module, exports) {

module.exports = "<h2 class=\"center-align grey-text light text-darken-1\">all our tasks</h2>\n\n<div class=\"collection\" [hidden]=\"tasks.length == 0\" *ngIf=\"tasks.length > 0\">\n\n    <nav class=\"amber\">\n        <div class=\"nav-wrapper\">\n            <form>\n                <div class=\"input-field\">\n                    <input #filterField (keyup)=\"0\" id=\"search\" type=\"search\" name=\"filter\" required>\n                    <label for=\"search\"><i class=\"material-icons\">search</i></label>\n                    <i class=\"material-icons\" (click)=\"filterField.value = ''\">close</i>\n                </div>\n            </form>\n        </div>\n    </nav>\n\n    <div class=\"collection-item\"\n         *ngFor=\"let task of tasks | tasksFilter:filterField.value | sort:'period'; let i = index\">\n\n\n        <app-task-row\n                (showDetail)=\"showDetail($event)\"\n                [task]=\"task\"\n                [user]=\"user(task.assigned_to)\"></app-task-row>\n\n    </div>\n</div>\n\n<div *ngIf=\"tasks.length == 0\">\n\n\n    <div class=\"card\">\n        <div class=\"card-content\">\n            <span class=\"card-title\">No tasks found</span>\n            <p>You have no tasks, what are you even doing!</p>\n        </div>\n        <div class=\"card-action\">\n            <a href=\"#\">Fuck you</a>\n            <a href=\"#\">OK</a>\n        </div>\n    </div>\n</div>\n\n<app-taskdetail [(visible)]=\"showDialog\" [(task)]=\"selectedTask\" [(users)]=\"users\"></app-taskdetail>\n"

/***/ },

/***/ 877:
/***/ function(module, exports) {

module.exports = "<div class=\"no-margin card-panel chat-panel\">\n    <a (click)=\"toggleChat()\">{{isHidden ? 'Announcements' : 'X Close'}}</a>\n\n    <app-message-list [hidden]=\"isHidden\"></app-message-list>\n    <app-message-form [hidden]=\"isHidden\"></app-message-form>\n</div>\n\n\n\n"

/***/ },

/***/ 878:
/***/ function(module, exports) {

module.exports = "<div class=\"chat-form\">\n    <form>\n        <div class=\"row no-margin\">\n            <div class=\"input-field col s10 no-margin no-padding\">\n                <i class=\"prefix mdi-communication-chat\"></i>\n                <input type=\"text\" class=\"no-margin\" placeholder=\"Announcement\" value={{messageContent}} (input)=\"messageContent = $event.target.value\">\n            </div>\n            <div class=\"input-field col s2 no-margin right-align no-padding\">\n                <button type=\"submit\" (click)=\"sendMessage()\"\n                        class=\"waves-effect waves-light btn-floating btn-small blue\">\n                    <i class=\"material-icons\">send</i>\n                </button>\n            </div>\n        </div>\n    </form>\n</div>\n"

/***/ },

/***/ 879:
/***/ function(module, exports) {

module.exports = "<div class=\"row no-margin\">\n    <div class=\"col s12 no-padding\">\n        <div class=\"card blue lighten-4 no-margin\">\n            <div class=\"card-content\">\n                <p>{{message.message}}</p>\n            </div>\n            <div class=\"card-action\">\n                <span>{{message.user.name}} {{message.user.lname}}</span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ },

/***/ 880:
/***/ function(module, exports) {

module.exports = "<!--<p>Messages in Houshold:</p>-->\n<ul class=\"chat-list\" #scrollMe>\n    <li *ngFor=\"let message of messages\"><app-message-item [message]=\"message\"></app-message-item></li>\n</ul>\n\n\n\n"

/***/ },

/***/ 881:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col l6 s12\">\r\n      <h5 class=\"white-text\">Get the App!!</h5>\r\n      <h6 class=\"white-text\">The Cleansing is now available on Google Play for free</h6>\r\n      <a href='https://play.google.com/store/apps/details?id=be.nmct.kuisapp.kuisapp&ah=8zvnTGQYVEygASM8wViDlGrCSnk&hl=nl&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target=\"_blank\"><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png' style=\"width: 30%;height: 30%;\"/></a>\r\n    </div>\r\n    <div class=\"col l4 offset-l2 s12\">\r\n      <h5 class=\"white-text\">Contact Us</h5>\r\n      <ul class=\"white-text\">\r\n        <li>Bart Delrue <a class=\"grey-text text-lighten-3\" href=\"https://be.linkedin.com/in/bart-delrue-040672117\" target=\"_blank\" ><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a><a href=\"http://bart.cf\" target=\"_blank\"><i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i></a> </li>\r\n        <li>Nick Dhondt<a class=\"grey-text text-lighten-3\" href=\"https://be.linkedin.com/in/nick-d-hondt-22958a117\" target=\"_blank\"><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a><a href=\"http://nickdhondt.github.io/\" target=\"_blank\"><i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i></a></li>\r\n        <li>Brent Vanwildemeersch<a class=\"grey-text text-lighten-3\" href=\"\" target=\"_blank\"><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a><a href=\"http://student.howest.be/brent.vanwildemeer1/Portofolio/\" target=\"_blank\"><i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i></a></li>\r\n        <li>Steven Mollie<a class=\"grey-text text-lighten-3\" href=\"https://be.linkedin.com/in/steven-mollie-80668811a\" target=\"_blank\"><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a><a href=\"\" target=\"_blank\"><i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i></a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"footer-copyright center-align\">\r\n  <div class=\"container white-text\">\r\n    © 2016 TheCleansing All Rights Reserved\r\n  </div>\r\n</div>\r\n"

/***/ },

/***/ 882:
/***/ function(module, exports) {

module.exports = "<nav class=\"yellow darken-2\">\n  <div class=\"nav-wrapper\">\n\n      <ul class=\"right hide-on-med-and-down\">\n      <li><a href=\"\">My Account</a> </li>\n      <li><a>Settings</a></li>\n      <li><a>Sign out</a> </li>\n    </ul>\n\n    <ul class=\"side-nav\" id=\"mobile-demo\">\n      <li><a href=\"\">My Account</a> </li>\n      <li><a>Settings</a></li>\n      <li><a>Sign out</a> </li>\n    </ul>\n      <a href=\"home\" class=\"brand-logo center\">The Cleansing</a>\n      <a data-activates=\"mobile-demo\" class=\"\"><i class=\"material-icons\">menu</i></a>\n    <script>\n\n    </script>\n  </div>\n\n\n</nav>\n\n\n"

/***/ },

/***/ 883:
/***/ function(module, exports) {

module.exports = "<header>\r\n    <app-navigation></app-navigation>\r\n</header>\r\n\r\n<main>\r\n    <div class=\"row\">\r\n        <div class=\"col s12 l12\" style=\"min-height: 100vh;\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        <aside class=\"chat-bottom card\">\r\n            <app-chat></app-chat>\r\n        </aside>\r\n    </div>\r\n</main>\r\n\r\n<footer class=\"background yellow darken-3\">\r\n    <app-footer></app-footer>\r\n</footer>\r\n"

/***/ },

/***/ 884:
/***/ function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"card dialog\" >\n  <!--<ng-content></ng-content>-->\n    <div class=\"card-content\">\n        <span class=\"card-title center\">{{award.name}}</span>\n        <div class=\"row no-margin\">\n          <form class=\"col s12\">\n              <div class=\"row no-margin\">\n\n                  <div class=\"input-field col s12 m9\">\n                            <input value=\"{{award.description}}\" id=\"award_description\" type=\"text\" class=\"\" readonly  >\n                            <label for=\"award_description\" class=\"active\">Description</label>\n                       </div>\n                  <div class=\"input-field col s12 m3\">\n                      <input value=\"{{user.name}}\" id=\"award_created_by\" type=\"text\" class=\"\" readonly>\n                        <label for=\"award_created_by\" class=\"active\">Created By</label>\n                    </div>\n                </div>\n          </form>\n    </div>\n  </div>\n    <!--<div class=\"card-action\">-->\n    <!--<a  (click)=\"close()\" class=\"right\"  aria-label=\"Save\" style=\"cursor: default; margin-bottom: 10px\">close</a>-->\n\n    <!--</div>-->\n</div>\n\n<div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>"

/***/ },

/***/ 885:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"award\" [hidden]=\"showDialogAward\" class=\"center\">\n    <a (click)=\"showDialogAward=!showDialogAward;currentaward=award\">{{award.name}}</a></div>\n\n<div *ngIf=\"!award\" [hidden]=\"showDialogNewAward\" class=\"center\">\n    <a class=\"materialize-red-text\" (click)=\"showDialogNewAward=!showDialogNewAward\">Set an award for this month</a>\n</div>\n\n\n<app-award-detail\n        *ngIf=\"award\"\n        [(visible)]=\"showDialogAward\"\n        [(award)]=\"award\"\n        [user]=\"user\"></app-award-detail>\n\n<app-new-award\n        (awardAdded)=\"receiveAwardfromDialog($event)\"\n        [(visible)]=\"showDialogNewAward\"></app-new-award>"

/***/ },

/***/ 886:
/***/ function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"card dialog\">\r\n    <div class=\"card-content\">\r\n        <span class=\"card-title center\">New award of the month</span>\r\n        <a class=\"right\" (click)=\"close()\">X</a>\r\n        <div class=\"row no-margin\">\r\n\r\n            <form class=\"col s12\" #newAwardForm=\"ngForm\">\r\n                <div class=\"row no-margin\">\r\n                    <div class=\"input-field col s12 l3\">\r\n                        <input [(ngModel)]=\"name\" id=\"award_name\" name=\"name\" type=\"text\" class=\"no-margin\">\r\n                        <label for=\"award_name\" class=\"active\">Award Name</label>\r\n                    </div>\r\n                    <div class=\"input-field col s12 l6\">\r\n                        <input [(ngModel)]=\"description\" name=\"description\" id=\"award_description\" type=\"text\" class=\"no-margin\">\r\n                        <label for=\"award_description\" class=\"active\">Description</label>\r\n                    </div>\r\n                    <div class=\"input-field col s12 l2\">\r\n                        <a class=\"waves-effect waves-light red btn\" (click)=\"set()\">Set</a>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },

/***/ 887:
/***/ function(module, exports) {

module.exports = "<!--<app-loader-small *ngIf=\"loading\"></app-loader-small>-->\r\n\r\n<div *ngIf=\"household\">\r\n\r\n    <h2 class=\"truncate center-align grey-text light text-darken-1\">{{household.name}}</h2>\r\n\r\n    <div style=\"padding-bottom: 25px; display: flex; justify-content: center; align-items: flex-end; flex-wrap: wrap\">\r\n\r\n        <app-user-img\r\n                *ngFor=\"let user of household.users | sortUsers:'score'; let i = index;\"\r\n                [user]=\"user\"\r\n                [index]=\"i\"\r\n                (click)=\"openUserPopup(user)\"\r\n        ></app-user-img>\r\n\r\n    </div>\r\n\r\n    <app-award [(award)]=\"household.award\"\r\n               [(users)]=\"household.users\"\r\n               (addawardtohousehold)=\"addAwardToHousehold($event)\"></app-award>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"!household\">\r\n\r\n    <h2 class=\"truncate center-align grey-text light text-darken-1\">my household</h2>\r\n\r\n    <div class=\"card\">\r\n        <div class=\"card-content\">\r\n            <span class=\"card-title\">No household found</span>\r\n            <p>It seems like you don't belong to a household yet.</p>\r\n            <p>A household is where your tasks are ketp and where you can compete with others!</p>\r\n            <p></p>\r\n        </div>\r\n        <div class=\"card-action\">\r\n            <a (click)=\"showJoinHouseholdDialog=!showJoinHouseholdDialog\">Find a household</a>\r\n            <a  (click)=\"showMakeHouseholdDialog=!showMakeHouseholdDialog\">Create a household</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<app-user-detail [(visible)]=\"showDialog\" [(user)]=\"selectedUser\"></app-user-detail>\r\n<app-join-household (householdtoHouseholdComp)=\"sendUserToUpper($event)\"\r\n                    [(visible)]=\"showJoinHouseholdDialog\"></app-join-household>\r\n<app-new-household (userReceived)=\"sendUserToUpper($event)\" [(visible)]=\"showMakeHouseholdDialog\"></app-new-household>\r\n"

/***/ },

/***/ 888:
/***/ function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"card dialog\">\r\n    <!--<ng-content></ng-content>-->\r\n    <div class=\"card-content\">\r\n        <span class=\"card-title center\">Member Details</span>\r\n        <div class=\"row center-align\" >\r\n            <div class=\"hoverable circle z-depth-1\"\r\n                 style=\"max-width: 75px; max-height: 75px; overflow: hidden; margin:auto\">\r\n                <img\r\n                        src=\"{{user.imgsrc || 'https://pbs.twimg.com/profile_images/695211716259549184/SUWgwZwh.jpg'}}\"\r\n                        class=\"responsive-img center\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <form class=\"col s12\" #userDetailForm=\"ngForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"input-field col s6\">\r\n                        <input [disabled] [(ngModel)]=\"user.name\" id=\"first_name\" name=\"name\" type=\"text\" class=\"validate\">\r\n                        <label class=\"active\" for=\"first_name\">First Name</label>\r\n                    </div>\r\n                    <div class=\"input-field col s6\">\r\n                        <input [disabled] [(ngModel)]=\"user.lname\" id=\"last_name\" name=\"lname\" type=\"text\" class=\"validate\">\r\n                        <label class=\"active\" for=\"last_name\">Last Name</label>\r\n                    </div>\r\n                    <div class=\"input-field col s12\">\r\n                        <i class=\"prefix material-icons\">email</i>\r\n                        <input [(ngModel)]=\"user.email\" id=\"email\" name=\"email\" type=\"email\" class=\"validate\">\r\n                        <label class=\"active\" for=\"email\" data-error=\"Email not validated\" data-success=\"Valid Email \">E-mail</label>\r\n                    </div>\r\n                    <div class=\"input-field col s12\">\r\n                        <i class=\"material-icons prefix\">phone</i>\r\n                        <input [(ngModel)]=\"user.phoneNumber\" name=\"phoneNumber\" id=\"phone_number\" type=\"number\" class=\"validate\" >\r\n                        <label class=\"active\" for=\"phone_number\">Phone Number</label>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-action\">\r\n        <a *ngIf=\"closable\" (click)=\"close()\" aria-label=\"Close\" class=\"\">close</a>\r\n        <a *ngIf=\"currentUser === user.uid\" (click)=\"save()\" class=\"right\"  aria-label=\"Save\">save</a>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>"

/***/ },

/***/ 889:
/***/ function(module, exports) {

module.exports = "<figure class=\"\" style=\"margin: 0\">\r\n\r\n    <div style=\"position: relative\">\r\n\r\n        <div class=\"chip\"\r\n             [ngClass]=\"index == 0 ? 'yellow darken-2 white-text':''\"\r\n             style=\"position: absolute; top:-10px; left:0;\">\r\n            {{user.score || '0'}}\r\n        </div>\r\n\r\n        <div class=\"hoverable circle z-depth-1\"\r\n             style=\"max-width: 75px; max-height: 75px; overflow: hidden; margin: 10px\">\r\n            <img src=\"{{user.imgsrc || 'https://pbs.twimg.com/profile_images/695211716259549184/SUWgwZwh.jpg'}}\" class=\"responsive-img\">\r\n        </div>\r\n    </div>\r\n\r\n    <figcaption class=\"center grey-text darken-1\">{{user.name}}</figcaption>\r\n\r\n</figure>\r\n"

/***/ },

/***/ 890:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <app-finished-bar [(household)]=\"household\" class=\"col s12\"></app-finished-bar>\r\n</div>\r\n<div class=\"row\">\r\n    <app-evolution-line [(household)]=\"household\" class=\"col s12\"></app-evolution-line>\r\n</div>\r\n<div class=\"row\">\r\n\r\n    <app-contribution-donut class=\"col s12 m6\" [(household)]=\"household\"></app-contribution-donut>\r\n\r\n    <app-tasks-donut class=\"col s12 m6\" [(household)]=\"household\"></app-tasks-donut>\r\n\r\n</div>\r\n\r\n"

/***/ },

/***/ 891:
/***/ function(module, exports) {

module.exports = "<div class=\"card\">\r\n\r\n    <div class=\"card-content\">\r\n        <span class=\"card-title\">Contribution</span>\r\n        <x-chartist [events]=\"events\"\r\n                    [options]=\"options\"\r\n                    [(data)]=\"data\"\r\n                    [type]=\"type\">\r\n        </x-chartist>\r\n    </div>\r\n</div>"

/***/ },

/***/ 892:
/***/ function(module, exports) {

module.exports = "<div class=\"card\">\r\n\r\n    <div class=\"card-content\">\r\n        <span class=\"card-title\">Contribution evolution</span>\r\n        <x-chartist [events]=\"events\"\r\n                    [options]=\"options\"\r\n                    [(data)]=\"data\"\r\n                    [type]=\"type\">\r\n        </x-chartist>\r\n    </div>\r\n</div>"

/***/ },

/***/ 893:
/***/ function(module, exports) {

module.exports = "<div class=\"card\">\r\n\r\n    <div class=\"card-content\">\r\n        <span class=\"card-title\">Finished vs canceled</span>\r\n        <x-chartist [events]=\"events\"\r\n                    [options]=\"options\"\r\n                    [(data)]=\"data\"\r\n                    [type]=\"type\">\r\n        </x-chartist>\r\n    </div>\r\n</div>"

/***/ },

/***/ 894:
/***/ function(module, exports) {

module.exports = "<div class=\"card\">\r\n\r\n    <div class=\"card-content\">\r\n        <span class=\"card-title\">Finished tasks</span>\r\n\r\n        <x-chartist  [events]=\"events\"\r\n                    [options]=\"options\"\r\n                    [(data)]=\"data\"\r\n                    [type]=\"type\">\r\n        </x-chartist>\r\n\r\n    </div>\r\n</div>"

/***/ },

/***/ 895:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n    <app-loader-small *ngIf=\"loading\"></app-loader-small>\r\n\r\n    <app-household-overview (receivedHousehold)=\"user = $event\" *ngIf=\"user\" [household]=\"user.household\">loading...\r\n    </app-household-overview>\r\n\r\n    <div *ngIf=\"user && user.household\">\r\n        <app-charts [(household)]=\"user.household\"></app-charts>\r\n    </div>\r\n    <div class=\"fixed-action-btn vertical click-to-toggle\" *ngIf=\"user && user.household\" style=\"margin-bottom: 4em\">\r\n  <a class=\"btn-floating btn-large red\">\r\n    <i class=\"material-icons\">menu</i>\r\n  </a>\r\n  <ul>\r\n    <li><a class=\"btn-floating red\" materialize=\"tooltip\" data-position=\"left\" data-delay=\"20\" data-tooltip=\"Edit Household\"><i class=\"material-icons\">mode_edit</i> </a></li>\r\n    <li><a class=\"btn-floating red\" materialize=\"tooltip\" data-position=\"left\" data-delay=\"20\" data-tooltip=\"Leave Household\" (click)=\"showDialogLeave=!showDialogLeave\"><i class=\"material-icons\">exit_to_app</i> </a> </li>\r\n  </ul>\r\n</div>\r\n\r\n</div>\r\n<app-leave-household [(visible)]=\"showDialogLeave\" [(user)]=\"user\" (updatedUser)=\"updateHouseholdComponent($event)\"></app-leave-household>\r\n"

/***/ },

/***/ 896:
/***/ function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"card dialog\" >\r\n  <!--<ng-content></ng-content>-->\r\n  <div *ngIf=\"household\" class=\"card-content\">\r\n    <!--Household found-->\r\n    <span class=\"card-title center\">Join Household</span>\r\n    <div class=\"row no-margin\">\r\n      <form class=\"input-field col s12 l9\">\r\n            <i class=\"material-icons prefix\">home</i>\r\n            <input value=\"{{household.name}}\" name=\"memberemail\"  id=\"houseold_name\"  type=\"text\" class=\"\" readonly >\r\n            <label for=\"houseold_name\" class=\"active\">Household Name</label>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"!household\" class=\"card-content\">\r\n    <!--Household found-->\r\n    <span class=\"card-title center\">Sorry</span>\r\n    <div class=\"row\">\r\n      <form class=\"col s12\">\r\n          <p>We couldn't find a the household you're looking for</p>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card-action\" >\r\n\r\n      <a></a>\r\n      <a  *ngIf=\"household\" (click)=\"close()\" aria-label=\"close\">close</a>\r\n      <a  *ngIf=\"!household\"  (click)=\"close()\" class=\"right\"  aria-label=\"close\">thanks anyway</a>\r\n      <a  *ngIf=\"household\" class=\"right\"  (click)=\"join()\" aria-label=\"Join\">Join</a>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>\r\n"

/***/ },

/***/ 897:
/***/ function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"card dialog\" >\r\n  <!--<ng-content></ng-content>-->\r\n  <div class=\"card-content\">\r\n    <span class=\"card-title center\">Join Household</span>\r\n    <div class=\"row\">\r\n      <form>\r\n          <div class=\"input-field col s12 l9\">\r\n            <i class=\"material-icons prefix\">email</i>\r\n            <input [(ngModel)]=\"memberemail\" name=\"memberemail\"  id=\"household_emaail\"  type=\"email\" class=\"validate\" >\r\n            <label for=\"household_emaail\" class=\"\">Household Member Email</label>\r\n          </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-action\">\r\n  <a  (click)=\"close()\" aria-label=\"close\">close</a>\r\n    <a class=\"right\" (click)=\"save();showDialogJoin=!showDialogJoin;foundhousehold=household\" aria-label=\"Join\">Search</a>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>\r\n\r\n<app-join-household-detail [(household)]=\"household\"  [(visible)]=\"showDialogJoin\" (householdjoined)=\"receivedhouseholdfromJoinDialog($event)\" ></app-join-household-detail>\r\n"

/***/ },

/***/ 898:
/***/ function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"card dialog\" >\r\n  <!--<ng-content></ng-content>-->\r\n  <div class=\"card-content\">\r\n    <span class=\"card-title center\">Please Confirm</span>\r\n    <div class=\"row\">\r\n      <form class=\"col s12\">\r\n            <p>Are youe sure you want to leave?</p>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-action\">\r\n      <a></a>\r\n      <a (click)=\"leave()\" class=\"right\" aria-label=\"Join\">yes</a>\r\n      <a (click)=\"close()\" class=\"right\" aria-label=\"close\">no</a>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>\r\n"

/***/ },

/***/ 899:
/***/ function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"card dialog\" >\r\n  <!--<ng-content></ng-content>-->\r\n  <div class=\"card-content\">\r\n    <span class=\"card-title center\">Make Household</span>\r\n    <form class=\"row no-margin\">\r\n          <div class=\"input-field col s12 l9\">\r\n            <i class=\"material-icons prefix\">home</i>\r\n            <input [(ngModel)]=\"householdName\" name=\"householdname\"  id=\"household_name\"  type=\"text\" class=\"validate\" required >\r\n            <label for=\"household_name\" class=\"\">Household Name</label>\r\n          </div>\r\n  </form>\r\n  </div>\r\n  <div class=\"card-action\">\r\n    <a (click)=\"close()\" aria-label=\"close\" >close</a>\r\n    <a class=\"right\" (click)=\"create();\" aria-label=\"Join\">create household</a>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>\r\n"

/***/ },

/***/ 900:
/***/ function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"card dialog\">\n    <div class=\"card-content\">\n        <span class=\"card-title center\">About</span>\n        <div class=\"row\">\n            <h5>The Cleansing application</h5>\n            <p>Developed by Bart Delrue, Brent Vanwildemeersch, Steven Mollie and Nick D'hondt for web using Angular 2 and Node.js.</p>\n            <h5>Licensing</h5>\n            <p>Licensing Licensed under the Apache License, Version 2.0 (the License); you may not use these files except in compliance with the License. You may obtain a copy of the License at</p>\n            <p><a target=\"_blank\" href=\"http://www.apache.org/licenses/LICENSE-2.0\">http://www.apache.org/licenses/LICENSE-2.0 <i class=\"tiny material-icons\">launch</i></a></p>\n            <p>Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an AS IS BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.</p>\n        </div>\n    </div>\n    <div class=\"card-action\">\n        <a (click)=\"close()\" aria-label=\"Close\" class=\"\" style=\"cursor: default\">close</a>\n    </div>\n</div>\n\n<div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>"

/***/ },

/***/ 901:
/***/ function(module, exports) {

module.exports = "<nav class=\"top-nav yellow darken-2\">\r\n    <div class=\"container\">\r\n        <div class=\"nav-wrapper\">\r\n            <a\r\n                    materialize=\"sideNav\"\r\n                    data-activates=\"nav-mobile\"\r\n                    class=\"button-collapse top-nav full hide-on-large-only\">\r\n                <i class=\"material-icons\">menu</i>\r\n            </a>\r\n            <a href=\"home\" class=\"page-title\">The cleansing</a>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<ul id=\"nav-mobile\" class=\"side-nav fixed\">\r\n    <li>\r\n        <div class=\"userView\">\r\n            <div class=\"background yellow darken-2\">\r\n\r\n            </div>\r\n            <img class=\"circle\" src=\"/assets/web_hi_res_205.png\">\r\n            <span class=\"name white-text\">{{user.displayName}}</span>\r\n            <span class=\"email white-text\">{{user.email}}</span>\r\n        </div>\r\n    </li>\r\n\r\n    <li><a [routerLink]=\"['']\" class=\"waves-effect \"><i class=\"material-icons\">home</i>Home</a></li>\r\n    <li><a [routerLink]=\"['tasks']\" class=\"waves-effect \"><i class=\"material-icons\">assignment</i>Tasks</a></li>\r\n    <li><a [routerLink]=\"['household']\" class=\"waves-effect \"><i class=\"material-icons\">people</i>Household</a></li>\r\n    <li>\r\n        <div class=\"divider\"></div>\r\n    </li>\r\n    <li><a class=\"waves-effect \" (click)=\"logout()\"><i class=\"material-icons\">exit_to_app</i>Sign out</a></li>\r\n    <li><a href=\"\" class=\"waves-effect\" (click)=\"openAbout($event)\"><i class=\"material-icons\">info_outline</i>About</a></li>\r\n    <li>\r\n        <div class=\"divider\"></div>\r\n    </li>\r\n\r\n</ul>\r\n\r\n<app-about-component [(visible)]=\"aboutVisible\"></app-about-component>"

/***/ },

/***/ 902:
/***/ function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"card dialog\">\r\n    <div [@dialog] *ngIf=\"visible\" class=\"card dialog\">\r\n        <!--<ng-content></ng-content>-->\r\n        <div class=\"card-content\">\r\n            <span class=\"card-title\">{{taskLocal.name}}</span>\r\n\r\n            <div class=\"row\">\r\n                <form class=\"col s12\" #taskForm=\"ngForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"input-field col s6\">\r\n                            <div style=\"padding-bottom:10px\">\r\n                                <label for=\"task_name\" class=\"active\">Task Name</label>\r\n                            </div>\r\n                            <input [(ngModel)]=\"taskLocal.name\" name=\"name\" id=\"task_name\" type=\"text\" class=\"validate\">\r\n                        </div>\r\n                        <div class=\"input-field col s6\">\r\n                            <div style=\"padding-bottom:10px\">\r\n                                <label for=\"task_due_date\" class=\"active\">Next Due Date</label>\r\n                            </div>\r\n                            <input\r\n                                    materialize=\"pickadate\" [(ngModel)]=\"taskLocal.dueDate\" name=\"dueDate\" id=\"task_due_date\"\r\n                                   type=\"date\"  class=\"datepicker\">\r\n                        </div>\r\n                        <div class=\"input-field col s12\">\r\n                            <div style=\"padding-bottom:10px\">\r\n                                <label for=\"task_description\" class=\"active\">Description</label>\r\n                            </div>\r\n                            <input [(ngModel)]=\"taskLocal.description\" name=\"description\" id=\"task_description\" type=\"text\"\r\n                                   class=\"\">\r\n\r\n                        </div>\r\n                        <div class=\"input-field col s6\">\r\n                            <div style=\"padding-bottom:10px\">\r\n                                <label for=\"task_periodicity\" class=\"active\">Periodicity (in days)</label>\r\n                            </div>\r\n                            <input [(ngModel)]=\"taskLocal.period\" name=\"period\" id=\"task_periodicity\" type=\"number\"\r\n                                   class=\"validate\">\r\n\r\n                        </div>\r\n                        <div class=\"input-field col s6\">\r\n                            <div style=\"padding-bottom:10px\">\r\n                                <label for=\"task_points\" class=\"active\">Points</label>\r\n                            </div>\r\n                            <input [(ngModel)]=\"taskLocal.points\" name=\"points\" id=\"task_points\" type=\"number\"\r\n                                   class=\"validate\">\r\n\r\n                        </div>\r\n\r\n                        <div class=\"input-field col s6\">\r\n                            <div style=\"padding-bottom:10px\">\r\n                            <label for=\"task_user\" class=\"active\">User</label>\r\n                            </div>\r\n                            <select materialize=\"material_select\"\r\n                                    class=\"validate\" [(ngModel)]=\"taskLocal.assigned_to\" name=\"assigned_to\" id=\"task_user\">\r\n                                <option disabled selected>Select User</option>\r\n                                <option *ngFor=\"let user of usersLocal\" [ngValue]=\"user.id\">{{user.name}}</option>\r\n                            </select>\r\n\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"!newTask\" class=\"card-action\">\r\n            <a *ngIf=\"closable\" (click)=\"close()\" aria-label=\"Close\" class=\"\">close</a>\r\n            <a aria-label=\"Delete Task\" (click)=\"deleteTask()\" class=\"right\">delete task</a>\r\n            <a aria-label=\"Save Task\" (click)=\"save()\" class=\"right\">save task</a>\r\n\r\n        </div>\r\n        <div *ngIf=\"newTask\" class=\"card-action\">\r\n            <a *ngIf=\"closable\" (click)=\"close()\" aria-label=\"Close\" class=\"\">close</a>\r\n            <a aria-label=\"Save Task\" (click)=\"add()\" class=\"right\">add task</a>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>\r\n\r\n"

/***/ },

/***/ 903:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n    <app-loader-small *ngIf=\"loading\"></app-loader-small>\r\n\r\n    <app-household-overview (receivedHousehold)=\"user = $event\" *ngIf=\"user\" [household]=\"user.household\">loading...\r\n    </app-household-overview>\r\n\r\n    <app-todolist *ngIf=\"user\"\r\n                  [tasksTodo]=\"user.household? user.household.taskstodo : []\"\r\n                  [users]=\"user.household? user.household.users : undefined\"\r\n                  (sendNewHousehold)=\"receivenewHousehold($event)\">loading...\r\n    </app-todolist>\r\n\r\n</div>\r\n"

/***/ },

/***/ 904:
/***/ function(module, exports) {

module.exports = "<div class=\"row flex-stretch\" style=\"margin-bottom: 0;\" [@visibleState]=\"(state)\">\n    <div class=\"col flex-down-center\">\n\n        <p [ngClass]=\"{'red-text': dateDiff<=0}\" class=\"text-large\">{{dateDiff}}</p>\n        <p class=\"text-small \">{{dateDiff == 1 ? 'day left' : 'days left'}}</p>\n\n    </div>\n    <div class=\"col\" style=\"flex-grow: 1\">\n        <span class=\"title\">{{task.name}}</span>\n        <p class=\"grey-text\">{{user.name || \"do me!\"}}</p>\n        <p class=\"text-small\">repeats every {{task.period}} days</p>\n\n\n    </div>\n    <div class=\"col flex-down\">\n        <div class=\"flex-wrap-end\"\n             style=\"align-self: flex-start\">\n\n            <a class=\"tooltipped\"\n               (click)=\"finishClick()\"\n               materialize=\"tooltip\" data-position=\"bottom\" data-delay=\"20\" data-tooltip=\"finish\">\n                <i class=\"material-icons\">done</i></a>\n            <a class=\"tooltipped\"\n               (click)=\"showDetailClick()\"\n               materialize=\"tooltip\"\n               data-position=\"bottom\"\n               data-delay=\"20\"\n               data-tooltip=\"edit\">\n                <i class=\"material-icons\">mode_edit</i></a>\n            <a class=\"tooltipped\"\n               (click)=\"cancelClick()\"\n               materialize=\"tooltip\" data-position=\"bottom\" data-delay=\"20\" data-tooltip=\"finish\">\n                <i class=\"material-icons\">cancel</i></a>\n\n        </div>\n        <span class=\"chip\">{{task.points}} points</span>\n    </div>\n</div>"

/***/ },

/***/ 905:
/***/ function(module, exports) {

module.exports = "<!--<app-loader-small *ngIf=\"loading\"></app-loader-small>-->\r\n\r\n\r\n<div class=\"collection\" [hidden]=\"tasksTodo.length == 0\" *ngIf=\"tasksTodo.length > 0\">\r\n\r\n    <div class=\"collection-item\" style=\"\" *ngFor=\"let tasktodo of tasksTodo | sort; let i = index\">\r\n\r\n        <!--<div style=\"position:absolute; z-index: 10\">-->\r\n        <!--<a class=\"btn\">test</a>-->\r\n        <!--</div>-->\r\n\r\n        <app-tasktodo-row\r\n                (cancel)=\"cancel($event, i)\"\r\n                (finish)=\"finish($event, i)\"\r\n                (showDetail)=\"showDetail($event)\"\r\n                [task]=\"tasktodo\"\r\n                [user]=\"user(tasktodo.assigned_to)\"></app-tasktodo-row>\r\n\r\n\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"tasksTodo.length == 0\">\r\n\r\n    <h2 class=\"center-align grey-text light text-darken-1\">my upcoming tasks</h2>\r\n\r\n    <div class=\"card\">\r\n        <div class=\"card-content\">\r\n            <span class=\"card-title\">No tasks found</span>\r\n            <p>You have nothing to do, go make some tasks!</p>\r\n        </div>\r\n        <div class=\"card-action\">\r\n            <a href=\"#\">Fuck you</a>\r\n            <a href=\"#\">OK</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<app-taskdetail *ngIf=\"selectedTask\" [(visible)]=\"showDialog\" [(task)]=\"selectedTask\" [(users)]=\"users\"></app-taskdetail>"

/***/ },

/***/ 906:
/***/ function(module, exports) {

module.exports = "<div class=\"center-align\" style=\"margin-top: 150px\">\n    <div class=\"preloader-wrapper small active\">\n        <div class=\"spinner-layer spinner-blue\">\n            <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n            </div>\n            <div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n            </div>\n            <div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n            </div>\n        </div>\n\n        <div class=\"spinner-layer spinner-red\">\n            <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n            </div>\n            <div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n            </div>\n            <div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n            </div>\n        </div>\n\n        <div class=\"spinner-layer spinner-yellow\">\n            <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n            </div>\n            <div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n            </div>\n            <div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n            </div>\n        </div>\n\n        <div class=\"spinner-layer spinner-green\">\n            <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n            </div>\n            <div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n            </div>\n            <div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ },

/***/ 907:
/***/ function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"container \">\r\n  <div class=\"content-login\">\r\n  <div class=\"row \">\r\n    <div class=\"col s12 m6 l4 offset-m3 offset-l4\">\r\n      <h4 class=\"center-align\">The Cleansing</h4>\r\n      </div>\r\n  </div>\r\n  <div class=\"row \">\r\n  <div class=\"col s12 m6 l4 offset-m4 offset-l4 \">\r\n  <button class=\"btn center-align\" (click)=\"loginFacebook()\">Login With Facebook</button>\r\n  <button class=\"btn center-align\" (click)=\"loginGoogle()\">Login With Google</button>\r\n\r\n\r\n\r\n  </div>\r\n  </div>\r\n  </div>\r\n</div>\r\n"

/***/ },

/***/ 908:
/***/ function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }

},[1183]);
//# sourceMappingURL=main.bundle.map