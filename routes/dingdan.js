var express = require('express');
var router = express.Router();

const {  addDD,chaxun }  = require("../service/dingdan_Service.js")

// 增加订单
router.post('/addDD',async function(req, res, next) {
    // console.log(req.body)
    res.send(await addDD(req.body) )
});

router.post('/chaxun',async function(req, res, next) {
    res.send(await chaxun(req.body) )
});

module.exports = router;
