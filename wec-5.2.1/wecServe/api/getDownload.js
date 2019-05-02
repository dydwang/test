const sqlMap = require("../mysql/sqlMap");
const pool = require('./pool')


exports.getDownload = function(req, res, next) {
    pool.pool.getConnection((err, connection) => {
        var sql = sqlMap.getDownload
        connection.query(sql, [], (err, result) => {
            res.json(result);
            connection.release();
        })
    })
}