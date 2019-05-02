const pool = require('./pool')


exports.setZhujian=function(req, res, next) {
    var tableName=req.body.tableName;
    var    type=req.body.type,infor=req.body.infor,src=req.body.src;
    pool.pool.getConnection((err, connection) => {
        var sql = "INSERT INTO ZHUJIAN SET type=?,infor=?,src=?";
        connection.query(sql, [type,infor,src], (err, result) => {
            console.log(type);
            res.json(result);
            connection.release();
        })
    })
    // var tableName=req.body.tableName;
    // var    index = req.body.index,type=req.body.index,infor=req.body.infor,src=req.body.src;
    // console.log(tableName)
    // pool.pool.getConnection((err, connection) => {
    //     var sql = "INSERT INTO zhujian SET index= ?,type=?,infor=?,src=?";
    //     connection.query(sql, [index,type,infor,src], (err, result) => {
    //         console.log("写入组件");
    //         res.json(result);
    //         connection.release();
    //     })
    // })
}