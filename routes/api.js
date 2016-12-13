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

router.get('/userbyuid/:user', firebaseAuthenticator, function (req, res) {
    let user = req.params.user;

    //TODO: ben er mee bezig, niet aankomen




    // IMPORTANT: if you want to send your own error, you can do so by dong the following before the block of code below:
    /*

     res.locals.error = true;
     res.json({error: "Custom error message."});
     res.end();


     */

    // Send own error before this block of code:
    // Check if the error property exists. If not, no checks have been executed and firebaseAuthenticator probably wasn't called.
    if (res.locals.error !== undefined) {
        // Check if the firebaseAuthenticator returned errors. If not, proceed and return json.
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


    // IMPORTANT: if you want to send your own error, you can do so by dong the following before the block of code below:
    /*

     res.locals.error = true;
     res.json({error: "Custom error message."});
     res.end();


     */

    // Send own error before this block of code:
    // Check if the error property exists. If not, no checks have been executed and firebaseAuthenticator probably wasn't called.
    if (res.locals.error !== undefined) {
        // Check if the firebaseAuthenticator returned errors. If not, proceed and return json.
        if (res.locals.error === false) {
            res.json({body: body});
            res.end();
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

router.post('/updateuser', firebaseAuthenticator, function (req, res) {
    let body = req.body;

    // code


    // IMPORTANT: if you want to send your own error, you can do so by dong the following before the block of code below:
    /*

     res.locals.error = true;
     res.json({error: "Custom error message."});
     res.end();


     */

    // Send own error before this block of code:
    // Check if the error property exists. If not, no checks have been executed and firebaseAuthenticator probably wasn't called.
    if (res.locals.error !== undefined) {
        // Check if the firebaseAuthenticator returned errors. If not, proceed and return json.
        if (res.locals.error === false) {
            res.json({body: body});
            res.end();
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

router.post('/updatehousehold', firebaseAuthenticator, function (req, res) {
    let body = req.body;

    // code


    // IMPORTANT: if you want to send your own error, you can do so by dong the following before the block of code below:
    /*

     res.locals.error = true;
     res.json({error: "Custom error message."});
     res.end();


     */

    // Send own error before this block of code:
    // Check if the error property exists. If not, no checks have been executed and firebaseAuthenticator probably wasn't called.
    if (res.locals.error !== undefined) {
        // Check if the firebaseAuthenticator returned errors. If not, proceed and return json.
        if (res.locals.error === false) {
            res.json({body: body});
            res.end();
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

router.post('/addusertohousehold', firebaseAuthenticator, function (req, res) {
    let body = req.body;

    // code


    // IMPORTANT: if you want to send your own error, you can do so by dong the following before the block of code below:
    /*

     res.locals.error = true;
     res.json({error: "Custom error message."});
     res.end();


     */

    // Send own error before this block of code:
    // Check if the error property exists. If not, no checks have been executed and firebaseAuthenticator probably wasn't called.
    if (res.locals.error !== undefined) {
        // Check if the firebaseAuthenticator returned errors. If not, proceed and return json.
        if (res.locals.error === false) {
            res.json({body: body});
            res.end();
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

router.get('/householdbyemail/:email', function (req, res) {
    let email;
    res.json({params: req.params})
});

router.post('/leavehousehold', firebaseAuthenticator, function (req, res) {
    let body = req.body;

    // code


    // IMPORTANT: if you want to send your own error, you can do so by dong the following before the block of code below:
    /*

     res.locals.error = true;
     res.json({error: "Custom error message."});
     res.end();


     */

    // Send own error before this block of code:
    // Check if the error property exists. If not, no checks have been executed and firebaseAuthenticator probably wasn't called.
    if (res.locals.error !== undefined) {
        // Check if the firebaseAuthenticator returned errors. If not, proceed and return json.
        if (res.locals.error === false) {
            res.json({body: body});
            res.end();
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

router.post('/addhousehold', firebaseAuthenticator, function (req, res) {
    let body = req.body;

    // code


    // IMPORTANT: if you want to send your own error, you can do so by dong the following before the block of code below:
    /*

     res.locals.error = true;
     res.json({error: "Custom error message."});
     res.end();


     */

    // Send own error before this block of code:
    // Check if the error property exists. If not, no checks have been executed and firebaseAuthenticator probably wasn't called.
    if (res.locals.error !== undefined) {
        // Check if the firebaseAuthenticator returned errors. If not, proceed and return json.
        if (res.locals.error === false) {
            res.json({body: body});
            res.end();
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

router.get('/taskstodobyhousehold/:household/:term?', firebaseAuthenticator, function (req, res) {
    let term = 7;
    if (req.params.term !== undefined) term = parseInt(req.params.term);
    let household = parseInt(req.params.household);

    // code

    res.json({params: {household: household, term: term}})
});

router.post('/addtask', firebaseAuthenticator, function (req, res) {
    let body = req.body;

    // code


    // IMPORTANT: if you want to send your own error, you can do so by dong the following before the block of code below:
    /*

     res.locals.error = true;
     res.json({error: "Custom error message."});
     res.end();


     */

    // Send own error before this block of code:
    // Check if the error property exists. If not, no checks have been executed and firebaseAuthenticator probably wasn't called.
    if (res.locals.error !== undefined) {
        // Check if the firebaseAuthenticator returned errors. If not, proceed and return json.
        if (res.locals.error === false) {
            res.json({body: body});
            res.end();
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

router.post('/updatetask', firebaseAuthenticator, function (req, res) {
    let body = req.body;

    // code


    // IMPORTANT: if you want to send your own error, you can do so by dong the following before the block of code below:
    /*

     res.locals.error = true;
     res.json({error: "Custom error message."});
     res.end();


     */

    // Send own error before this block of code:
    // Check if the error property exists. If not, no checks have been executed and firebaseAuthenticator probably wasn't called.
    if (res.locals.error !== undefined) {
        // Check if the firebaseAuthenticator returned errors. If not, proceed and return json.
        if (res.locals.error === false) {
            res.json({body: body});
            res.end();
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

router.post('/finishtask', firebaseAuthenticator, function (req, res) {
    let body = req.body;

    // code


    // IMPORTANT: if you want to send your own error, you can do so by dong the following before the block of code below:
    /*

     res.locals.error = true;
     res.json({error: "Custom error message."});
     res.end();


     */

    // Send own error before this block of code:
    // Check if the error property exists. If not, no checks have been executed and firebaseAuthenticator probably wasn't called.
    if (res.locals.error !== undefined) {
        // Check if the firebaseAuthenticator returned errors. If not, proceed and return json.
        if (res.locals.error === false) {
            res.json({body: body});
            res.end();
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

router.get('/deletetask/:task', firebaseAuthenticator, function (req, res) {
    let task = req.params.task;

    // code


    // IMPORTANT: if you want to send your own error, you can do so by dong the following before the block of code below:
    /*

     res.locals.error = true;
     res.json({error: "Custom error message."});
     res.end();


     */

    // Send own error before this block of code:
    // Check if the error property exists. If not, no checks have been executed and firebaseAuthenticator probably wasn't called.
    if (res.locals.error !== undefined) {
        // Check if the firebaseAuthenticator returned errors. If not, proceed and return json.
        if (res.locals.error === false) {
            res.json({params: {task: task}});
            res.end();
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

router.post('/addaward', firebaseAuthenticator, function (req, res) {
    let body = req.body;

    // code


    // IMPORTANT: if you want to send your own error, you can do so by dong the following before the block of code below:
    /*

     res.locals.error = true;
     res.json({error: "Custom error message."});
     res.end();


     */

    // Send own error before this block of code:
    // Check if the error property exists. If not, no checks have been executed and firebaseAuthenticator probably wasn't called.
    if (res.locals.error !== undefined) {
        // Check if the firebaseAuthenticator returned errors. If not, proceed and return json.
        if (res.locals.error === false) {
            res.json({body: body});
            res.end();
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

router.get('/importtasks/:household/:assignusers?', firebaseAuthenticator, function (req, res) {
    if (req.params.assignusers === undefined) req.params.assignusers = false;
    res.json({params: req.params})
});

router.post('/addtasks', firebaseAuthenticator, function (req, res) {
    let body = req.body;

    // code


    // IMPORTANT: if you want to send your own error, you can do so by dong the following before the block of code below:
    /*

     res.locals.error = true;
     res.json({error: "Custom error message."});
     res.end();


     */

    // Send own error before this block of code:
    // Check if the error property exists. If not, no checks have been executed and firebaseAuthenticator probably wasn't called.
    if (res.locals.error !== undefined) {
        // Check if the firebaseAuthenticator returned errors. If not, proceed and return json.
        if (res.locals.error === false) {
            res.json({body: body});
            res.end();
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

module.exports = router;