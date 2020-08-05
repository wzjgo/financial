var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
   res.send('financial v2');
})

app.get('/loan', function (req, res) {
  // 使用了superagent来发起请求
  var superagent = require('superagent');
  // 查询本机ip，这里需要根据实际情况选择get还是post
  var sreq = superagent.get('http://loan:8080');
  sreq.pipe(res);
  sreq.on('end', function(){
      console.log('done');
  });
});

app.get('/transfer', function (req, res) {
  // 使用了superagent来发起请求
  var superagent = require('superagent');
  // 查询本机ip，这里需要根据实际情况选择get还是post
  var sreq = superagent.get('http://transfer:8080');
  sreq.pipe(res);
  sreq.on('end', function(){
      console.log('done');
  });
});
 
var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})