let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let mysql = require('mysql');
let conn = require('../helpers/connection')(mysql);

let firebaseAuthenticator = require("../middleware/firebase-authenticator");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

/*




Bedenkingen:

 - werk met models (gelijkaardig aan die uit Android en frontend
 - wees niet bang om zaken in afzonderlijke modeules te plaatsen

Vragen:
 - heb je de Firebase uid nodig?
     - die is te vinden in res.locals.uid (indien je de firebaseAuthenticator middleware niet vergeten bent)




 */

router.get('/', function(req, res) {
    let routes = [];

    for(let route of router.stack) {
        let methods = Object.getOwnPropertyNames(route.route.methods);

        routes.push({
            path: "api" + route.route.path,
            methods: methods
        });
    }

    res.render('routes', { title: 'The Cleansing API routes', routes: routes })
});

router.get('/userbyuid/:user', firebaseAuthenticator, function (req, res) {
    let user = req.params.user;

    //TODO: ben er mee bezig, niet aankomen

    if (res.locals.error !== undefined) {
        if (res.locals.error === false) {
            res.json({params: {user: user}});
            res.end();
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

router.post('/adduser', firebaseAuthenticator, function (req, res) {
    let body = req.body;

    // code

    if (res.locals.error !== undefined) {
        if (res.locals.error === false) {
            res.json({body: body});
            res.end();
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

router.post('/updateuser', function (req, res) {
    let body = req.body;
    res.json({body: body});
});

router.post('/updatehousehold', function (req, res) {
    let body = req.body;
    res.json({body: body});
});

router.post('/addusertohousehold', function (req, res) {
    let body = req.body;
    res.json({body: body});
});

router.get('/householdbyemail/:email', function (req, res) {
    let email;
    res.json({params: req.params})
});

router.post('/leavehousehold', function (req, res) {
    let body = req.body;
    res.json({body: body});
});

router.post('/addhousehold', function (req, res) {
    let body = req.body;
    res.json({body: body});
});

router.get('/taskstodobyhousehold/:household/:term?', function (req, res) {
    let term = 7;
    if (req.params.term !== undefined) term = parseInt(req.params.term);
    let household = parseInt(req.params.household);

    // code

    res.json({params: {household: household, term: term}})
});

router.post('/addtask', function (req, res) {
    let body = req.body;
    res.json({body: body});
});

router.post('/updatetask', function (req, res) {
    let body = req.body;
    res.json({body: body});
});

router.post('/finishtask', function (req, res) {
    let body = req.body;
    res.json({body: body});
});

router.get('/deletetask/:task', function (req, res) {
    res.json({params: req.params})
});

router.post('/addaward', function (req, res) {
    let body = req.body;
    res.json({body: body});
});

router.get('/importtasks/:household/:assignusers?', function (req, res) {
    if (req.params.assignusers === undefined) req.params.assignusers = false;
    res.json({params: req.params})
});

router.post('/addtasks', function (req, res) {
    let body = req.body;
    res.json({body: body});
});

module.exports = router;