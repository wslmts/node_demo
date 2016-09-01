var fs=require("fs"),
    http=require('http'),
    url=require('url'),
    dns=require('dns'),
    querystring=require('querystring');

http.createServer(function(req,rep){
    req.setEncoding("utf8");
    rep.writeHead(200,{'Content-Type':"text/html"});
    var pathname=url.parse(req.url).pathname;
    console.log(pathname)
    router(req,rep,pathname);
}).listen(3000,'127.0.0.1');

function  router(req,rep,pathname){
   switch (pathname){
       case "/parse":
           parseDns(req, rep)
           break;
       default:
           goIndex(req, rep)
   }
}
function  parseDns(req, rep){
   var data="";
    req.addListener('data',function(e){
        data+=e;
    });
    req.addListener('end',function(e){
        getDNS(data ,function(domain,addresses){
            rep.writeHead(200, { 'Content-Type': 'text/html' });
            rep.end("<html><head><meta http-equiv='content-type' content='text/html;charset=utf-8'></head><div style='text-align:center'>Domain:<span style='color:red'>" + domain + "</span> IP:<span style='color:red'>" + addresses.join(',') + "</span></div></html>");
        });
        return;
    });
}
function goIndex(req, rep,pathname){
   var fp=__dirname+"/index.html";
   var f=fs.readFileSync(fp);
   rep.end(f);
}
function  getDNS(data,callback){
  var domain=querystring.parse(data).search_dns;
    dns.resolve(domain,function(err, addresses){
        if(!addresses){
            addresses=['²»´æÔÚÓòÃû']
        }
        callback(domain, addresses);
    });
}