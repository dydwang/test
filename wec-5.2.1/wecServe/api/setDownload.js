const sqlMap = require("../mysql/sqlMap");
const pool = require('./pool')


exports.setDownload=function(req, res, next) {
    console.log("写入下载");
    var    icon = req.body.icon,name=req.body.name,introduce=req.body.introduce, src=req.body.src;
    pool.pool.getConnection((err, connection) => {
        var sql = sqlMap.setDownload
        connection.query(sql, [icon,name,introduce,src], (err, result) => {
            console.log("写入用户加入申请成功");
            res.json(result);
            connection.release();
        })
    })
}