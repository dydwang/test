var sqlMap = {
    getUsername:'SELECT * FROM username WHERE username = ?',  //登录获取密码
    setValue: 'UPDATE test SET name = ? WHERE id = ?',
    setApply:"INSERT INTO applyform SET time= ?,name=?,phone=?,qq=?,email=?,stuclass=?",

    getDownload:"SELECT *from download",
    setDownload:"INSERT INTO download SET icon= ?,name=?,introduce=?,src=?",

    getZhujian:"SELECT *from " +" tablename",
    setZhujian:"INSERT INTO zhujian SET index= ?,type=?,infor=?,src=?",

}

module.exports = sqlMap;