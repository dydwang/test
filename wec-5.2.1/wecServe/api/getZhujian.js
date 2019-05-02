const sqlMap = require("../mysql/sqlMap");
const pool = require('./pool')


exports.getZhujian = function(req, res, next) {
    pool.pool.getConnection((err, connection) => {
        var tableName=req.query.tableName
        console.error(tableName)
        var sql = "SELECT *from "+tableName
        connection.query(sql, [tableName], (err, result) => {
            res.json(result);
            connection.release();
        })
    })
}