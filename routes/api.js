let express = require('express');
let router = express.Router();

let bodyParser = require('body-parser');

let mysql = require('mysql');
let conn = require('../helpers/connection')(mysql);

let firebaseAuthenticator = require("../middleware/firebase-authenticator");
let apiNotFound = require("../middleware/api-not-found");
let apiErrorHandling = require("../middleware/api-error-handling");

let User = require("../models/User");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

/*




Bedenkingen:

 - werk met models (gelijkaardig aan die uit Android en frontend
 - wees niet bang om zaken in afzonderlijke modules te plaatsen

Vragen:
 - heb je de Firebase uid nodig?
     - die is te vinden in res.locals.uid (indien je de firebaseAuthenticator middleware niet vergeten bent)




 */

router.get('/', function (req, res) {
    let routes = [];

    for(let route of router.stack) {
        let methods;
        let path;


        if (route.route !== undefined) {
            path = route.route.path;
            methods = Object.getOwnPropertyNames(route.route.methods);

            routes.push({
                path: "api" + path,
                methods: methods
            });
        }
    }

    res.render('routes', { title: 'The Cleansing API routes', routes: routes })
});

router.get('/userbyuid/:user', firebaseAuthenticator, function (req, res, next) {
    let user = req.params.user;

    // TODO: ben met deze methode bezig, niet aankomen

    conn.query("select `id`, `name`, `lname`, `email`, `household_id`, `score`, `phoneNumber`, `uid`, `imgsrc` from `users` where `uid` = ? limit 1", [user],
        function (err, rows, fields) {
            if(err) return next(err);

            let result = rows[0];

            res.json(result);
            res.end();
        });
});

router.post('/adduser', firebaseAuthenticator, function (req, res, next) {


            // TODO: code hier



});

router.post('/updateuser', firebaseAuthenticator, function (req, res, next) {



            // TODO: code hier


});

router.post('/updatehousehold', firebaseAuthenticator, function (req, res, next) {



            // TODO: code hier


});

router.post('/addusertohousehold', firebaseAuthenticator, function (req, res, next) {



            // TODO: code hier


});

//af: bart
//controle door: (is maar een ideetje hoor)
router.get('/householdbyemail/:email', firebaseAuthenticator, function (req, res, next) {

    //parameter
    let email = req.params.email;

    //query
    //opletten voor sqlinjection! gebruik '?' !
    conn.query("select `households`.* from `households` " +
        "inner join `users` on `users`.`household_id` = `households`.`id`" +
        "where `email` = ? limit 1", [email],
        function (err, rows, fields) {
            if(err) return next(err);

            let result = rows[0];

            res.json(result);
            res.end();
    });

});

router.post('/leavehousehold', firebaseAuthenticator, function (req, res) {



            // TODO: code hier



});

router.post('/addhousehold', firebaseAuthenticator, function (req, res) {



            // TODO: code hier



});

//af: bart
//controle door:
router.get('/taskstodobyhousehold/:household/:term?', firebaseAuthenticator, function (req, res, next) {
    let term = 7;
    if (req.params.term !== undefined) term = parseInt(req.params.term);
    let household = parseInt(req.params.household);

    let termDate = new Date();
    termDate.setDate(termDate.getDate() + term);

    let result;

    conn.query("select * from `tasks` " +
        "where duedate < ? " +
        "and household_id = ?" , [termDate, household],

        function (err, rows, fields) {
        //TODO: onze error handling uitleggen op de examens
            if(err) return next(err);

            result = rows;

            res.json(result);
            res.end();
        });

});

router.post('/addtask', firebaseAuthenticator, function (req, res, next) {
            //query: insert ... into tasks


            // TODO: code hier


});

router.post('/updatetask', firebaseAuthenticator, function (req, res, next) {



            // TODO: code hier


});

router.post('/finishtask', firebaseAuthenticator, function (req, res, next) {



            // TODO: code hier


});

router.get('/deletetask/:task', firebaseAuthenticator, function (req, res, next) {

    let task = req.params.task;
    conn.query("delete * from tasks" +
                 "where id = ? limit 1", [task],
    function (err,result) {
        if(err) return next(err);
        res.json(result.rowsAffected);
        res.end();
    });

});

router.post('/addaward', firebaseAuthenticator, function (req, res, next) {
    let body = req.body;
    // TODO: steven hier bezig met code
    res.json({body: body});
    res.end();

});

router.get('/importtasks/:household/:assignusers?', firebaseAuthenticator, function (req, res, next) {

            let assignUsers = 7;
            if (req.params.term !== undefined) assignUsers = parseB(req.params.assignusers.toLowerCase() === "true");
            let household = parseInt(req.params.household);


            // TODO: code hier


            res.json({params: {household: household, assignUsers: assignUsers}});
            res.end();

});

router.post('/addtasks', firebaseAuthenticator, function (req, res, next) {

            let body = req.body;


            // TODO: steven hier bezig met code


            res.json({body: body});
            res.end();

});

router.use(apiNotFound);
router.use(apiErrorHandling);

module.exports = router;