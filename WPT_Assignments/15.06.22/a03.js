const { response } = require("express");
let http = require("http");
let url = require("url");
http.createServer((req,res)=>{

    let r = url.parse(req.url,true).query;
    let d = 4 * r.radius;
    res.write("Diameter = "+d);
    res.end();

}).listen(800);