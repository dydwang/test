const sqlMap = require("../mysql/sqlMap");
const pool = require('./pool')

exports.getUsername=function(req, res, next) {
    var username = req.query.username;
    pool.pool.getConnection((err, connection) => {
        var sql = sqlMap.getUsername;
        connection.query(sql, [username], (err, result) => {
            res.json(result);
            connection.release();
        })
    })
}