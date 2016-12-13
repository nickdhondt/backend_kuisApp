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
    res.json({voorbeeld: 'dit is een voorbeeld: ' + req.params.user})
});

module.exports = router;