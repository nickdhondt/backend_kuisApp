var assert = require("assert");
var http = require('http');

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
            headers: { 'Firebase-ID-Token': 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjYzNjhiYjg3NzVhYTI3YmI0MzlmNDYwNGZlNDk4Y2Y4YWYyMTQyNDEifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20va3Vpc2FwcCIsIm5hbWUiOiJTdGV2ZW4gTW9sbGllIiwicGljdHVyZSI6Imh0dHBzOi8vc2NvbnRlbnQueHguZmJjZG4ubmV0L3YvbC90MS4wLTEvcDEwMHgxMDAvMTQzNTg2NDhfMTAyMDkxNjA5MzMyOTQyODBfNzU5MDI0MTczMjk5OTUwNTcyOF9uLmpwZz9vaD1lNTA0MjUzNWE4Y2NjZjViZTI1YTVkNGUwNDIyNWM5OSZvZT01OEQyMjNGNSIsImF1ZCI6Imt1aXNhcHAiLCJhdXRoX3RpbWUiOjE0ODMwMDkyOTcsInVzZXJfaWQiOiJHZllBMWhXYmtiZFU4dU93aENENFBXN3N5VVoyIiwic3ViIjoiR2ZZQTFoV2JrYmRVOHVPd2hDRDRQVzdzeVVaMiIsImlhdCI6MTQ4MzU1NzcwNCwiZXhwIjoxNDgzNTYxMzA0LCJlbWFpbCI6InN0ZXZlZGVtb2xsZUBob3RtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJmYWNlYm9vay5jb20iOlsiMTAyMDk2NzQ5NjM1MDQ3MTQiXSwiZW1haWwiOlsic3RldmVkZW1vbGxlQGhvdG1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZmFjZWJvb2suY29tIn19.cAszHOdHJn2OChu1oQhHwjay4adzHeaLAoQpukDaWEfv45Xwx-23HBOq7yY_2NOpe3PVCnTb0jdV28bwEPCCiLzctxq0IRoo-CuUxJb5jl6NUc2x8-NbYvhcurHQZ06WjDiFUJtvOkFn1SwVRvWAWSxEE2ljhKO1i6PhNYNqKhoEnxxfu9gn8BRjI5P0cCbZRrvlguCtYeIWUXlueyMCkPBMGVA8tvNPOcomO9jKrMNk2XqpiZuMwTan1B822lEyHq9K5nCWOsYpMM9_giaWexU_b45inXiem_u90XoLYMdZkB0upSjGJGD2ysOQ2y5WN9OVf_r2BBVR8YUh3L025g'}
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
            path: '/api/userbyuid/dsfk',
            method: 'GET',
            headers: { 'Firebase-ID-Token': 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjYzNjhiYjg3NzVhYTI3YmI0MzlmNDYwNGZlNDk4Y2Y4YWYyMTQyNDEifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20va3Vpc2FwcCIsIm5hbWUiOiJTdGV2ZW4gTW9sbGllIiwicGljdHVyZSI6Imh0dHBzOi8vc2NvbnRlbnQueHguZmJjZG4ubmV0L3YvbC90MS4wLTEvcDEwMHgxMDAvMTQzNTg2NDhfMTAyMDkxNjA5MzMyOTQyODBfNzU5MDI0MTczMjk5OTUwNTcyOF9uLmpwZz9vaD1lNTA0MjUzNWE4Y2NjZjViZTI1YTVkNGUwNDIyNWM5OSZvZT01OEQyMjNGNSIsImF1ZCI6Imt1aXNhcHAiLCJhdXRoX3RpbWUiOjE0ODMwMDkyOTcsInVzZXJfaWQiOiJHZllBMWhXYmtiZFU4dU93aENENFBXN3N5VVoyIiwic3ViIjoiR2ZZQTFoV2JrYmRVOHVPd2hDRDRQVzdzeVVaMiIsImlhdCI6MTQ4MzU1NzcwNCwiZXhwIjoxNDgzNTYxMzA0LCJlbWFpbCI6InN0ZXZlZGVtb2xsZUBob3RtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJmYWNlYm9vay5jb20iOlsiMTAyMDk2NzQ5NjM1MDQ3MTQiXSwiZW1haWwiOlsic3RldmVkZW1vbGxlQGhvdG1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZmFjZWJvb2suY29tIn19.cAszHOdHJn2OChu1oQhHwjay4adzHeaLAoQpukDaWEfv45Xwx-23HBOq7yY_2NOpe3PVCnTb0jdV28bwEPCCiLzctxq0IRoo-CuUxJb5jl6NUc2x8-NbYvhcurHQZ06WjDiFUJtvOkFn1SwVRvWAWSxEE2ljhKO1i6PhNYNqKhoEnxxfu9gn8BRjI5P0cCbZRrvlguCtYeIWUXlueyMCkPBMGVA8tvNPOcomO9jKrMNk2XqpiZuMwTan1B822lEyHq9K5nCWOsYpMM9_giaWexU_b45inXiem_u90XoLYMdZkB0upSjGJGD2ysOQ2y5WN9OVf_r2BBVR8YUh3L025g'}
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
                assert.equal(res.statusCode, 200); //comment
                console.log(result);
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
