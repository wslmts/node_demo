const dns = require('dns');
dns.resolve('local.com.ui', (err, addresses, family) => {
    console.log('addresses:', addresses);
});
var url=require('url');
console.log(url.parse("http://www.abc.com:8080/p1/a1/index.html?abc=123&b=1"));

console.log('---------------------');
console.log(module)
var fs=require('fs');
fs.exists('test.js', (exists) => {
  console.log(exists ? 'it\'s there' : 'no passwd!');
});
 
/* fs.rename('aa.txt', 'bb.txt', (err) => {
	 console.log('inner', process.cwd())
  if (err) throw err;
  fs.stat('bb.txt', (err, stats) => {
    if (err) throw err;
    console.log(`stats: ${JSON.stringify(stats)}`);
  });
});*/
console.log('outer', process.cwd())
fs.appendFile('bb.txt','   welcome',function(err,f){
    console.log('finish ',err,f)
});
console.log('fs.constants',fs.constants);

