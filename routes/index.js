let express = require('express');
let path = require('path');
let router = express.Router();
let dist = path.join(__dirname,'../public/');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'The Cleansing API' });
});


router.get('/login', function(req, res, next) {
    res.render('login');
});


module.exports = router;
