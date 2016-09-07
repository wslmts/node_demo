var http         = require('http'),
    fs           = require('fs'),
    url   	      = require('url'),
    querystring  = require('querystring'),
    httpParam    = require('./http_param'),
    staticModule = require('./static_module'),
    jade         = require('jade'),
    socket       = require('socket.io');
var BASE_DIR      = __dirname,
    filePath = BASE_DIR + '/test.txt';
var app = http.createServer(function(req, res) {
    res.render = function(template, options){
        var str = fs.readFileSync(template, 'utf8');
        var fn = jade.compile(str, { filename: template, pretty: true });
        var page = fn(options);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(page);
    }
    var pathname = decodeURI(url.parse(req.url).pathname);
    httpParam.init(req, res);
    if(pathname == '/favicon.ico'){
        return;
    }
    switch(pathname){
        case '/'       :  defaultIndex(res);
            break;
        case '/index'  :  defaultIndex(res);
            break;
        default        :  staticModule.getStaticFile(pathname, res, req);
            break;
    }
}).listen(1337);

var io = require('socket.io').listen(app);
io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});

function writeFile(msg, callback){
    fs.writeFile(filePath, msg, function(err){
        if (err) throw err;
        callback();
    });
}

function defaultIndex(res){
    res.render('index.jade',{'user':'danhuang'});
}

