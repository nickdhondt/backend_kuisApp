let express = require('express');
let router = express.Router();
let mysql = require('mysql');
let conn = require('../helpers/connection')(mysql);

/* GET home page. */
router.get('/', function(req, res, next) {
    let routes = [];

    for(let route of router.stack) {
        //TODO: vind methods. Is jsol in route.methods
        methods = "undefined";
        routes.push({
            path: "api" + route.route.path,
            method: methods
        });
    }

    res.render('routes', { title: 'The Cleansing API routes', routes: routes })
});

router.get('/userbyuid/:user', function (req, res, next) {
    res.json({param: req.params.user})
});

router.post('/adduser', function (req, res, next) {
    res.json({});
});

router.post('/updateuser', function (req, res, next) {
    res.json({});
});

router.post('/updatehousehold', function (req, res, next) {
    res.json({});
});

router.post('/addusertohousehold', function (req, res, next) {
    res.json({});
});

router.get('/householdbyemail/:email', function (req, res, next) {
    res.json({param: req.params.email})
});

router.post('/leavehousehold', function (req, res, next) {
    res.json({});
});

router.post('/addhousehold', function (req, res, next) {
    res.json({});
});

router.get('/taskstodobyhousehold/:household/:term?', function (req, res, next) {
    if (req.params.term === undefined) req.params.term = 7;
    res.json({params: req.params.household + ', ' + req.params.term})
});

router.post('/addtask', function (req, res, next) {
    res.json({});
});

router.post('/updatetask', function (req, res, next) {
    res.json({});
});

router.post('/finishtask', function (req, res, next) {
    res.json({});
});

router.get('/deletetask/:task', function (req, res, next) {
    res.json({param: req.params.task})
});

router.post('/addaward', function (req, res, next) {
    res.json({});
});

router.get('/importtasks/:household/:assignusers?', function (req, res, next) {
    if (req.params.assignusers === undefined) req.params.assignusers = false;
    res.json({params: req.params.household + ', ' + req.params.assignusers})
});

router.post('/addtasks', function (req, res, next) {
    res.json({});
});

module.exports = router;