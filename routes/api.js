let express = require('express');
let router = express.Router();

let bodyParser = require('body-parser');

let mysql = require('mysql');
let conn = require('../helpers/connection')(mysql);

let firebaseAuthenticator = require("../middleware/firebase-authenticator");

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

    // TODO: ben met deze methode bezig, niet aankomen

    res.json({params: {user: user}});
    res.end();
});

router.post('/adduser', firebaseAuthenticator, function (req, res) {
    // IMPORTANT: if you want to send your own error, you can do so by doing the following before the block of code below:
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
            let body = req.body;


            // TODO: code hier


            res.json({body: body});
            res.end();
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

router.post('/updateuser', firebaseAuthenticator, function (req, res) {
    // IMPORTANT: if you want to send your own error, you can do so by doing the following before the block of code below:
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
            let body = req.body;


            // TODO: code hier


            res.json({body: body});
            res.end();
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

router.post('/updatehousehold', firebaseAuthenticator, function (req, res) {
    // IMPORTANT: if you want to send your own error, you can do so by doing the following before the block of code below:
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
            let body = req.body;


            // TODO: code hier


            res.json({body: body});
            res.end();
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

router.post('/addusertohousehold', firebaseAuthenticator, function (req, res) {
    // IMPORTANT: if you want to send your own error, you can do so by doing the following before the block of code below:
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
            let body = req.body;


            // TODO: code hier


            res.json({body: body});
            res.end();
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

//af: bart
//controle door: (is maar een ideetje hoor)
router.get('/householdbyemail/:email', firebaseAuthenticator, function (req, res) {

    //parameter
    let email = req.params.email;

    //query
    //opletten voor sqlinjection! gebruik '?' !
    conn.query("select `households`.* from `households` " +
        "inner join `users` on `users`.`household_id` = `households`.`id`" +
        "where `email` = ? limit 1", [email],
        function (err, rows, fields) {

            if(err)throw err;

            let result = rows[0];

            res.json(result);
            res.end();
    });

});

router.post('/leavehousehold', firebaseAuthenticator, function (req, res) {
    // IMPORTANT: if you want to send your own error, you can do so by doing the following before the block of code below:
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
            let body = req.body;


            // TODO: code hier


            res.json({body: body});
            res.end();
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

router.post('/addhousehold', firebaseAuthenticator, function (req, res) {
    // IMPORTANT: if you want to send your own error, you can do so by doing the following before the block of code below:
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
            let body = req.body;


            // TODO: code hier


            res.json({body: body});
            res.end();
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

//af: bart
//controle door:
router.get('/taskstodobyhousehold/:household/:term?', firebaseAuthenticator, function (req, res) {

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
            if(err){
                //console.log(err); //throw err;
                result = {'error': err.message};
            }
            else{
                result = rows;

            }
            res.json(result);
            res.end();
        });

});

router.post('/addtask', firebaseAuthenticator, function (req, res) {
    // IMPORTANT: if you want to send your own error, you can do so by doing the following before the block of code below:
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
            let body = req.body;


            // TODO: code hier


            res.json({body: body});
            res.end();
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

router.post('/updatetask', firebaseAuthenticator, function (req, res) {
    // IMPORTANT: if you want to send your own error, you can do so by doing the following before the block of code below:
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
            let body = req.body;


            // TODO: code hier


            res.json({body: body});
            res.end();
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

router.post('/finishtask', firebaseAuthenticator, function (req, res) {
    // IMPORTANT: if you want to send your own error, you can do so by doing the following before the block of code below:
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
            let body = req.body;


            // TODO: code hier


            res.json({body: body});
            res.end();
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

router.get('/deletetask/:task', firebaseAuthenticator, function (req, res) {
    // IMPORTANT: if you want to send your own error, you can do so by doing the following before the block of code below:
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
            let task = req.params.task;
            conn.query("delete * from tasks" +
                        "where id = ? ", [task.id],
            function (err,result) {
               if(err) throw err;
                res.json(result.rowsAffected);
                res.end();
            });
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

router.post('/addaward', firebaseAuthenticator, function (req, res) {
    // IMPORTANT: if you want to send your own error, you can do so by doing the following before the block of code below:
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
            let body = req.body;


            // TODO: steven hier bezig met code


            res.json({body: body});
            res.end();
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

router.get('/importtasks/:household/:assignusers?', firebaseAuthenticator, function (req, res) {
    // IMPORTANT: if you want to send your own error, you can do so by doing the following before the block of code below:
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
            let assignUsers = 7;
            if (req.params.term !== undefined) assignUsers = parseB(req.params.assignusers.toLowerCase() === "true");
            let household = parseInt(req.params.household);


            // TODO: code hier


            res.json({params: {household: household, assignUsers: assignUsers}});
            res.end();
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

router.post('/addtasks', firebaseAuthenticator, function (req, res) {
    // IMPORTANT: if you want to send your own error, you can do so by doing the following before the block of code below:
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
            let body = req.body;


            // TODO: steven hier bezig met code


            res.json({body: body});
            res.end();
        }
    } else {
        res.json({error: "Could not verify for errors (did you forget the firebaseAuthenticator?)"});
        res.end();
    }
});

module.exports = router;