var Mock = require("mockjs");
const Random = Mock.Random;

let i;var y;
var lists = function() {
    let date = new Date();
    let articles = [];
    let sports=["旅游","篮球","足球","乒乓球","游泳","象棋","画画",
        "爬山","网球","跳舞","健身","排球",]
    i = Random.natural(50, 70);
    for (let x = 0; x < i; x++) {
        let m = date.getTime() + Random.natural(1000 * 60, 1000 * 60 * 60 * 24 * 15); //一月内
        let nowdate =new Date(m)
        let futureYear = nowdate.getFullYear()
        let futureMonth = nowdate.getMonth()+1
        let futureday = nowdate.getDate()
        let futureHourse =nowdate.getHours()
        let futureMinutes =nowdate.getMinutes()
        let now=futureYear+"-"+futureMonth +"-"+ futureday+" "+futureHourse +":"+futureMinutes
        y = Random.natural(0, 11)
        let listData = {
            newtime:m-date.getTime(),
            time:now,
            place:Random.cword(3,5),
            details:Random.cword(3,5),
            sport:sports[y],
            humanmax:Random.natural(0, 50),
            humannow:Random.natural(0, 100),
            thumbnail_pic_s: Random.image('371x240','#FFF','png','mock.js(random data/photo)') // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
        };
        articles.push(listData);
    }
    return {
        data: articles
    };
};


Mock.mock("/lists", /post|get/i, lists);


