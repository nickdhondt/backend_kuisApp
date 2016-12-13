let admin = require("firebase-admin");

function firebaseAuthenticator(req, res, next) {
    let firebaseIDToken = req.get("Firebase-ID-Token");

    res.locals.error = false;

    if(firebaseIDToken === undefined) {
        res.locals.error = true;
        res.json({error: "Firebase ID Token not sent"});
        res.end();
        next();
    } else {
        admin.auth().verifyIdToken(firebaseIDToken)
            .then(function(decodedToken) {
                res.locals.uid = decodedToken.uid;
                next();
            }).catch(function(error) {
                res.locals.error = true;
                res.json({error: "Error while verifying ID Token (token could be wrong)", firebaseError: error});
                res.end();
                next();
        });

    }
}

module.exports = firebaseAuthenticator;