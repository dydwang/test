const getusername = require("./getUsername");
const setapply = require("./setApply");

const getdownload = require("./getDownload");
const setdownload = require("./setDownload");

const getzhujian = require("./getZhujian");
const setzhujian = require("./setZhujian");



module.exports={
    getUsername(req, res, next) {getusername.getUsername(req, res, next)},
    setApply(req, res, next) {setapply.setApply(req, res, next)},
    getDownload(req, res, next) {getdownload.getDownload(req, res, next)},
    setDownload(req, res, next) {setdownload.setDownload(req, res, next)},
    getZhujian(req, res, next) {getzhujian.getZhujian(req, res, next)},
    setZhujian(req, res, next) {setzhujian.setZhujian(req, res, next)},

}