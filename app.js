var express = require('express');
var request = require('request');
var app = express();

app.get('/',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    var type = req.query.type;
    var id =req.query.postid;

    console.log(type,id)
    var url = "http://www.kuaidi100.com/query?type="+type+"&postid="+id+"&temp=0.2667807781744884";
    console.log(url)
    request(url,function(err,response,body){
        if(err){
            return console.log(err)
        }
      res.send(response.body)
    });
});

app.listen('5000');