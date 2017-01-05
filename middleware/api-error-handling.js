function apiErrorHandler (err, req, res, next) {
    // set locals, only providing error in development
    let error = req.app.get('env') === 'developmentt' ? err : {};

    //if (error.stack !== undefined) console.log(error.stack);

    res.status(err.status || 500);
    res.json({error: err.message, status: error.status});
}

module.exports = apiErrorHandler;