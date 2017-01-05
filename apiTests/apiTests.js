var assert = require("assert");
var http = require('http');
var should = require('should');
var supertest = require("supertest");
var server = supertest.agent("http://localhost:3000");
var firebaseToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjZkMjhmYWIwMzliZTNjMWNiYTFlZTc3NDRkMjdmYTg2OTNkMTcwZDIifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20va3Vpc2FwcCIsIm5hbWUiOiJTdGV2ZW4gTW9sbGllIiwicGljdHVyZSI6Imh0dHBzOi8vc2NvbnRlbnQueHguZmJjZG4ubmV0L3YvbC90MS4wLTEvcDEwMHgxMDAvMTQzNTg2NDhfMTAyMDkxNjA5MzMyOTQyODBfNzU5MDI0MTczMjk5OTUwNTcyOF9uLmpwZz9vaD1lNTA0MjUzNWE4Y2NjZjViZTI1YTVkNGUwNDIyNWM5OSZvZT01OEQyMjNGNSIsImF1ZCI6Imt1aXNhcHAiLCJhdXRoX3RpbWUiOjE0ODMwMDkyOTcsInVzZXJfaWQiOiJHZllBMWhXYmtiZFU4dU93aENENFBXN3N5VVoyIiwic3ViIjoiR2ZZQTFoV2JrYmRVOHVPd2hDRDRQVzdzeVVaMiIsImlhdCI6MTQ4MzYxNTQzOCwiZXhwIjoxNDgzNjE5MDM4LCJlbWFpbCI6InN0ZXZlZGVtb2xsZUBob3RtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJmYWNlYm9vay5jb20iOlsiMTAyMDk2NzQ5NjM1MDQ3MTQiXSwiZW1haWwiOlsic3RldmVkZW1vbGxlQGhvdG1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZmFjZWJvb2suY29tIn19.K-bbRSFJUzPUL2I49UVXmt9sK9X4C9I8tZFyudYzJ1zRKGftOJJTM1YvZXIL6_iDcSNANnTGMJBsqJJQWgAm3TjhS0CHS-o0s4M0hMeGr8QBndrYp71tisSkIcQuYMn1IPQmYbu7jTDmft62glMMh6TbpMup6tU2rc-YUPESKc3N3v2LZGA4bDxvvDWfjQn3Oob4GkPMUDj1x5JLAodrB4oFBGrNk70RUXhr3DA1Kt-7Lx1zlWXXNo_SrBEG4ndHYfSSN8CvKl99dCAm6P2LRFEYolvvhTeWP8nIfk8VLvJI83cyL4wrGs0kgBBQBvlutv8r_5mA49uVppUosGppVw';

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

    it("should add a task", function (done) {
        var body = {"description":"test api van steven","dueDate":"2016-12-31","household_id":37,"period":7,"points":3,"name":"test api", "assigned_to":37};
        server
            .post('api/addtask')
            .set({"Firebase-ID-Token": firebaseToken})
            .send(body)
            .expect(200)
            .end(function (err,res) {
                console.log(res);
                done();
            });
    });
});
