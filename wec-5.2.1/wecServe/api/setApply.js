
const sqlMap = require("../mysql/sqlMap");
const pool = require('./pool')

exports.setApply=function(req, res, next) {
    console.log(" 写入用户申请");
    var    time = req.body.time,name=req.body.name,phone=req.body.phone,
        qq=req.body.qq,email=req.body.email,stuclass=req.body.stuclass
    pool.pool.getConnection((err, connection) => {
        var sql = sqlMap.setApply
        connection.query(sql, [time,name,phone,qq,email,stuclass], (err, result) => {
            res.json(result);
            connection.release();
        })
    })
}