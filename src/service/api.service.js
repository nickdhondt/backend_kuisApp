"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
var task_model_1 = require("../models/task.model");
var household_model_1 = require("../models/household.model");
var user_model_1 = require("../models/user.model");
var ApiService = (function () {
    function ApiService(_http, _contract, auth) {
        this._http = _http;
        this._contract = _contract;
        this.auth = auth;
        //this.actionUrl = _contract.ServerWithApiUrl;
        this.actionUrl = _contract.LocalhostWithApiUrl;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    ApiService.handleError = function (error) {
        console.error(error);
        return rxjs_1.Observable.throw(error.json().error || 'server error...');
    };
    ApiService.prototype.getTasks = function () {
        var _this = this;
        var tokenPromise = new Promise(function (resolve, reject) {
            _this.auth.token.then(function (token) {
                _this.headers.set('Firebase-ID-Token', token);
                return _this._http.get(_this.actionUrl + "tasksbytoken", { headers: _this.headers })
                    .map(function (response) {
                    var tasks = [];
                    response.json().forEach(function (item) { return tasks.push(task_model_1.Task.makeTaskFromJSON(item)); });
                    return tasks;
                })
                    .catch(ApiService.handleError)
                    .subscribe(function (data) { return resolve(data); }, function (err) { return reject(err); });
            });
        });
        return rxjs_1.Observable.fromPromise(tokenPromise);
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
                    response.json().forEach(function (item) { return tasks.push(task_model_1.Task.makeTaskFromJSON(item)); });
                    return tasks;
                })
                    .catch(ApiService.handleError)
                    .subscribe(function (data) { return resolve(data); }, function (err) { return reject(err); });
            });
        });
        return rxjs_1.Observable.fromPromise(tokenPromise);
    };
    ApiService.prototype.getHousehold = function () {
        var _this = this;
        var tokenPromise = new Promise(function (resolve, reject) {
            _this.auth.token.then(function (token) {
                _this.headers.set('Firebase-ID-Token', token);
                return _this._http.get(_this.actionUrl + "household", { headers: _this.headers })
                    .map(function (response) {
                    return household_model_1.Household.makeHouseholdFromJSON(response.json());
                })
                    .catch(ApiService.handleError)
                    .subscribe(function (data) { return resolve(data); }, function (err) { return reject(err); });
            });
        });
        return rxjs_1.Observable.fromPromise(tokenPromise);
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
                            user.household.users[u] = user_model_1.User.makeUserFromJSON(user.household.users[u]);
                        }
                        for (var t in user.household.tasks) {
                            user.household.tasks[t] = task_model_1.Task.makeTaskFromJSON(user.household.tasks[t]);
                        }
                        for (var t in user.household.taskstodo) {
                            user.household.taskstodo[t] = task_model_1.Task.makeTaskFromJSON(user.household.taskstodo[t]);
                        }
                    }
                    return user;
                })
                    .catch(ApiService.handleError)
                    .subscribe(function (data) { return resolve(data); }, function (err) { return reject(err); });
            });
        });
        return rxjs_1.Observable.fromPromise(tokenPromise);
    };
    ApiService.prototype.addFinishedTask = function (name, id) {
        var _this = this;
        var data;
        data = [name, id];
        console.log(data);
        var tokenPromise = new Promise(function (resolve, reject) {
            _this.auth.token.then(function (token) {
                _this.headers.set('Firebase-ID-Token', token);
                return _this._http.post(_this.actionUrl + "finishtask", data, { headers: _this.headers })
                    .catch(ApiService.handleError);
            });
        });
        return rxjs_1.Observable.fromPromise(tokenPromise);
    };
    ApiService.prototype.addFinishedAward = function () {
        var _this = this;
        var tokenPromise = new Promise(function (resolve, reject) {
            _this.auth.token.then(function (token) {
                _this.headers.set('Firebase-ID-Token', token);
                return _this._http.post(_this.actionUrl + "finishtask", console.log(_this.actionUrl), { headers: _this.headers })
                    .catch(ApiService.handleError);
            });
        });
        return rxjs_1.Observable.fromPromise(tokenPromise);
    };
    ApiService = __decorate([
        core_1.Injectable()
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
