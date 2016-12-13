function firebaseAuthenticator(req, res, next) {
    let firebaseIDToken = req.get("Firebase-ID-Token");

    if(firebaseIDToken === undefined) {
        res.json({error: "Firebase ID Token not sent"});
        res.end();
    }
}

module.exports = firebaseAuthenticator;