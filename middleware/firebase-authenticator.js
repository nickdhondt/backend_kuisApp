let admin = require("firebase-admin");

function firebaseAuthenticator(req, res, next) {
    let firebaseIDToken = req.get("Firebase-ID-Token");

    res.locals.error = false;

    if(firebaseIDToken === undefined) {
        let err = new Error("Firebase ID Token not sent");
        return next(err);
    } else {
        admin.auth().verifyIdToken(firebaseIDToken)
            .then(function(decodedToken) {
                res.locals.uid = decodedToken.uid;
                next();
            }).catch(function(error) {
                return next(error);
        });
    }
}

module.exports = firebaseAuthenticator;