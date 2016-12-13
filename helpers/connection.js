module.exports = function(mysql) {
    mysql.createConnection({
        host: 'bart.cf',
        user: 'kuisapp_user',
        password: 'Th3Cl3@ns1ng',
        database: 'kuisapp'
    })
};