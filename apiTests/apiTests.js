var assert = require("assert");
var http = require('http');
var should = require('should');
var firebaseToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjYzNjhiYjg3NzVhYTI3YmI0MzlmNDYwNGZlNDk4Y2Y4YWYyMTQyNDEifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20va3Vpc2FwcCIsIm5hbWUiOiJTdGV2ZW4gTW9sbGllIiwicGljdHVyZSI6Imh0dHBzOi8vc2NvbnRlbnQueHguZmJjZG4ubmV0L3YvbC90MS4wLTEvcDEwMHgxMDAvMTQzNTg2NDhfMTAyMDkxNjA5MzMyOTQyODBfNzU5MDI0MTczMjk5OTUwNTcyOF9uLmpwZz9vaD1lNTA0MjUzNWE4Y2NjZjViZTI1YTVkNGUwNDIyNWM5OSZvZT01OEQyMjNGNSIsImF1ZCI6Imt1aXNhcHAiLCJhdXRoX3RpbWUiOjE0ODMwMDkyOTcsInVzZXJfaWQiOiJHZllBMWhXYmtiZFU4dU93aENENFBXN3N5VVoyIiwic3ViIjoiR2ZZQTFoV2JrYmRVOHVPd2hDRDRQVzdzeVVaMiIsImlhdCI6MTQ4MzU2MjkxNSwiZXhwIjoxNDgzNTY2NTE1LCJlbWFpbCI6InN0ZXZlZGVtb2xsZUBob3RtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJmYWNlYm9vay5jb20iOlsiMTAyMDk2NzQ5NjM1MDQ3MTQiXSwiZW1haWwiOlsic3RldmVkZW1vbGxlQGhvdG1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZmFjZWJvb2suY29tIn19.TBUGBYMItZ2SMZZmd114FyWsDU5yAP9eQ0RyShCb9uPsNd9foXlFvL0SSiGOaJDA1O7PHp_hiA5GpAYoxJeW3libFExRcRR_CP5J2eVmYRet_9X44S7QWBPBChd8FNSvIpmtJ05zDBq9AY7EWlj_Prtt7a30XMgTKLC-fp-vqRgOjX38sbUj5bDX6gA8RHSzPCRyW_Rh4jxftQG9O8kRNlE69yetMWI3C11RoxZqFqt5oidocezklKnrm2_hn1hXyZKoDNI5kIXUpk0QfVduB7LVgREno1z7uDDOOWCcWbhtkH2wQPjETsoVONSYp41h41NIq_GHRciq87PyXC3QOw';

describe("user tests", function () {
    var lengthOfObject = function (obj) {
        var count = 0;
        for(var item in obj){
            count++;
        }

        return count;
    };
    it("should return the users", function (done) {
        var opts = {
            host: '127.0.0.1',
            port: process.env.PORT || 3000,
            path: '/api/userlimited',
            method: 'GET',
            headers: { 'Firebase-ID-Token': firebaseToken}
        };

        var req = http.request(opts, function (res) {
            res.setEncoding('utf8');
            var result = "";
            res.on('data', function (d) {
                console.log(d);
                result += d;
            });
            res.on('end', function (err) {
                assert.equal(err,null);
                assert.equal(res.statusCode, 200);
                var data = JSON.parse(result);
                assert.notEqual(lengthOfObject(data),0);
                done();

                if(err){
                    throw err;
                }
            })
        });
        req.end();
    });

    it('should return the user by uid', function (done) {
        var opts = {
            host: '127.0.0.1',
            port: process.env.PORT || 3000,
            path: '/api/userbyuid/GfYA1hWbkbdU8uOwhCD4PW7syUZ2',
            method: 'GET',
            headers: { 'Firebase-ID-Token': firebaseToken}
        };

        var req = http.request(opts, function (res) {
            res.setEncoding('utf8');
            var result = "";
            res.on('data', function (d) {
                console.log(d);
                result += d;
            });
            res.on('end', function (err) {
                assert.equal(err,null);
                assert.equal(res.statusCode, 200);
                var data = JSON.parse(result);
                assert.notEqual(lengthOfObject(data),0);
                done();

                if(err){
                    throw err;
                }
            })
        });
        req.end();
    });

});

describe("household tests", function () {
    var lengthOfObject = function (obj) {
        var count = 0;
        for(var item in obj){
            count++;
        }

        return count;
    };
    it('should get a household by email', function (done) {
        var opts = {
            host: '127.0.0.1',
            port: process.env.PORT || 3000,
            path: '/api/householdbyemail/mordicus_87@hotmail.com',
            method: 'GET',
            headers: { 'Firebase-ID-Token': firebaseToken}
        };

        var req = http.request(opts, function (res) {
            res.setEncoding('utf8');
            var result = "";
            res.on('data', function (d) {
                console.log(d);
                result += d;
            });
            res.on('end', function (err) {
                assert.equal(err,null);
                assert.equal(res.statusCode, 200);
                var data = JSON.parse(result);
                assert.notEqual(lengthOfObject(data),0);
                done();

                if(err){
                    throw err;
                }
            })
        });
        req.end();
    });

    it('should get a household by email', function (done) {
        var opts = {
            host: '127.0.0.1',
            port: process.env.PORT || 3000,
            path: '/api/household',
            method: 'GET',
            headers: { 'Firebase-ID-Token': firebaseToken}
        };

        var req = http.request(opts, function (res) {
            res.setEncoding('utf8');
            var result = "";
            res.on('data', function (d) {
                console.log(d);
                result += d;
            });
            res.on('end', function (err) {
                assert.equal(err,null);
                assert.equal(res.statusCode, 200);
                var data = JSON.parse(result);
                assert.notEqual(lengthOfObject(data),0);
                done();

                if(err){
                    throw err;
                }
            })
        });
        req.end();
    });

});

describe("task tests", function () {
    var lengthOfObject = function (obj) {
        var count = 0;
        for(var item in obj){
            count++;
        }

        return count;
    };
    it('should return the tasks todo', function (done) {
        var opts = {
            host: '127.0.0.1',
            port: process.env.PORT || 3000,
            path: '/api/taskstodobyhousehold/37',
            method: 'GET',
            headers: { 'Firebase-ID-Token': firebaseToken}
        };

        var req = http.request(opts, function (res) {
            res.setEncoding('utf8'); //comment
            var result = "";
            res.on('data', function (d) {
                console.log(d);
                result += d;
            });
            res.on('end', function (err) {
                assert.equal(err,null);
                assert.equal(res.statusCode, 200);
                var data = JSON.parse(result);
                assert.notEqual(lengthOfObject(data),0);
                done();

                if(err){
                    throw err;
                }
            })
        });
        req.end();
    });

    it('should return the task for a user', function (done) {
        var opts = {
            host: '127.0.0.1',
            port: process.env.PORT || 3000,
            path: '/api/tasksbytoken',
            method: 'GET',
            headers: { 'Firebase-ID-Token': firebaseToken}
        };

        var req = http.request(opts, function (res) {
            res.setEncoding('utf8'); //comment
            var result = "";
            res.on('data', function (d) {
                console.log(d);
                result += d;
            });
            res.on('end', function (err) {
                assert.equal(err,null);
                assert.equal(res.statusCode, 200);
                var data = JSON.parse(result);
                assert.notEqual(lengthOfObject(data),0);
                done();

                if(err){
                    throw err;
                }
            })
        });
        req.end();
    });

    it('should delete a task', function (done) {
        var opts = {
            host: '127.0.0.1',
            port: process.env.PORT || 3000,
            path: '/api/deletetask/2941',
            method: 'GET',
            headers: { 'Firebase-ID-Token': firebaseToken }
            };

        var req = http.request(opts, function (res) {
            res.setEncoding('utf8'); //comment
            var result = "";
            res.on('data', function (d) {
                console.log(d);
                result += d;
            });
            res.on('end', function (err) {
                assert.equal(err,null);
                assert.equal(res.statusCode, 200);
                var data = JSON.parse(result);
                assert.notEqual(lengthOfObject(data),0);
                done();

                if(err){
                    throw err;
                }
            })
        });
        req.end();
    });

    it('should import all tasks', function (done) {
        var opts = {
            host: '127.0.0.1',
            port: process.env.PORT || 3000,
            path: '/api/importtasks/37/true',
            method: 'GET',
            headers: { 'Firebase-ID-Token': firebaseToken}
        };

        var req = http.request(opts, function (res) {
            res.setEncoding('utf8'); //comment
            var result = "";
            res.on('data', function (d) {
                console.log(d);
                result += d;
            });
            res.on('end', function (err) {
                assert.equal(err,null);
                assert.equal(res.statusCode, 200);
                var data = JSON.parse(result);
                assert.notEqual(lengthOfObject(data),0);
                done();

                if(err){
                    throw err;
                }
            })
        });
        req.end();
    });
});
