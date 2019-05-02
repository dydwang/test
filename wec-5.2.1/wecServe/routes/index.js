var express = require('express');
var router = express.Router();
const api = require('../api/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getUsername', (req, res, next) => {
  //res.render("index", { title: "Expressgetusername" });
  api.getUsername(req, res, next);
});

//写入申请join us
router.post('/setApply', (req, res, next) => {
  api.setApply(req, res, next);
});


//推荐软件
router.get('/getDownload', (req, res, next) => {
  api.getDownload(req, res, next);
});

router.post('/setDownload', (req, res, next) => {
  api.setDownload(req, res, next);
});

router.get('/getZhujian', (req, res, next) => {
  api.getZhujian(req, res, next);
});

router.post('/setZhujian', (req, res, next) => {
  api.setZhujian(req, res, next);
});
module.exports = router;
