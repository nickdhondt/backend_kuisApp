var assert = require("assert");
var http = require('http');
var should = require('should');
var supertest = require("supertest");
var server = supertest.agent("http://localhost:3000");
var firebaseToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjZkMjhmYWIwMzliZTNjMWNiYTFlZTc3NDRkMjdmYTg2OTNkMTcwZDIifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20va3Vpc2FwcCIsIm5hbWUiOiJTdGV2ZW4gTW9sbGllIiwicGljdHVyZSI6Imh0dHBzOi8vc2NvbnRlbnQueHguZmJjZG4ubmV0L3YvbC90MS4wLTEvcDEwMHgxMDAvMTQzNTg2NDhfMTAyMDkxNjA5MzMyOTQyODBfNzU5MDI0MTczMjk5OTUwNTcyOF9uLmpwZz9vaD1lNTA0MjUzNWE4Y2NjZjViZTI1YTVkNGUwNDIyNWM5OSZvZT01OEQyMjNGNSIsImF1ZCI6Imt1aXNhcHAiLCJhdXRoX3RpbWUiOjE0ODMwMDkyOTcsInVzZXJfaWQiOiJHZllBMWhXYmtiZFU4dU93aENENFBXN3N5VVoyIiwic3ViIjoiR2ZZQTFoV2JrYmRVOHVPd2hDRDRQVzdzeVVaMiIsImlhdCI6MTQ4MzYyMDk4NSwiZXhwIjoxNDgzNjI0NTg1LCJlbWFpbCI6InN0ZXZlZGVtb2xsZUBob3RtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJmYWNlYm9vay5jb20iOlsiMTAyMDk2NzQ5NjM1MDQ3MTQiXSwiZW1haWwiOlsic3RldmVkZW1vbGxlQGhvdG1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZmFjZWJvb2suY29tIn19.QyOUgDNSX8_BvJU2_Gc7g-Hi3myA3E_1_95-VoQF5_UTHrz0iKMYmFnj0lNqr23XEbng5DsLU_IyEfAcvygeAgUuSk2aXLq0Q_DopMzFgUkRJYJUuN003uK-G2QdTsyNoCxYJYJeXZEF7kp4-tR7XwAEPaY5gc7ir0gOLWW-_i49QdqI2EBGa4llxcdaPv9EKM3qceszI_HXXVjebt71Omh9djamCvzLi6QUn9Dg6UuTWo1zFj1PunBOHgK3dze7i4fFOcAypCQFYY5Pgpn-rxMc4XmszHoi7StQFKlJAr9Miah7PmOsBg4_ElBp3yuQyryneyozUQdSqOGjyc8PyQ';

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

    it("should update a user", function (done) {
        var body = {"email":"stevedemolle@hotmail.com","household_id":37,"imgsrc":"https://scontent.xx.fbcdn.net/v/l/t1.0-1/p100x100/14358648_10209160933294280_7590241732999505728_n.jpg?oh=e5042535a8cccf5be25a5d4e04225c99&oe=58D223F5","lname":"andere naam","phoneNumber":"0476525906","score":20,"uid":"GfYA1hWbkbdU8uOwhCD4PW7syUZ2","id":71,"isSynced":true,"name":"Steven"};
        server
            .post('/api/updateuser')
            .set({"Firebase-ID-Token": firebaseToken})
            .send(body)
            .expect(200)
            .end(function (err,res) {
                res.status.should.equal(200);
                res.body.household_id.should.equal(37);
                done();
            });
    })

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

    it('should get a household by uid', function (done) {
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

    it("should add a household", function (done) {
        var body = {"id":0,"isSynced":true,"name":"test from test"};
        server
            .post('/api/addhousehold')
            .set({"Firebase-ID-Token": firebaseToken})
            .send(body)
            .expect(200)
            .end(function (err,res) {
                res.status.should.equal(200);
                res.body.name.should.equal(body.name);
                done();
            });
    });

    it("should update a household", function (done) {
        var body = {"id":135,"name":"test update","phoneNumber":"0453737376","address":"wijnbergstraat 56"};
        server
            .post('/api/addhousehold')
            .set({"Firebase-ID-Token": firebaseToken})
            .send(body)
            .expect(200)
            .end(function (err,res) {
                res.status.should.equal(200);
                res.body.name.should.equal(body.name);
                done();
            });
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
            .post('/api/addtask')
            .set({"Firebase-ID-Token": firebaseToken})
            .send(body)
            .expect(200)
            .end(function (err,res) {
                res.status.should.equal(200);
                done();
            });
    });

    it("should update a task", function (done) {
        var body = {"description":"updateTest","dueDate":"2016-12-31","household_id":37,"period":7,"points":3,"name":"test api", "assigned_to":37};
        server
            .post('/api/updatetask')
            .set({"Firebase-ID-Token": firebaseToken})
            .send(body)
            .expect(200)
            .end(function (err,res) {
                res.status.should.equal(200);
                assert.equal(err,null);
                done();
            });
    });
});

describe("award tests", function () {
   it("should add an award", function (done) {
       var body = {"description":"update award","month":"2016-12-25","household_id":135,"winner_id":null,"name":"new award test", "creator_id":71};
       server
           .post('/api/addaward')
           .set({"Firebase-ID-Token": firebaseToken})
           .send(body)
           .expect(200)
           .end(function (err,res) {
               res.status.should.equal(200);
               res.body.household_id.should.equal(37);
               done();
           });
   }) 
});