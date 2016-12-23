let express = require('express');
let path = require('path');
let router = express.Router();
let dist = path.join(__dirname,'../public/');

/* GET home page. */
router.get('*', function(req, res, next) {
    res.sendFile(dist + 'index.html');
    //res.render('index', { title: 'The Cleansing API' });
});




module.exports = router;
