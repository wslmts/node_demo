/*const dns = require('dns');
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
});*/
 
/* fs.rename('aa.txt', 'bb.txt', (err) => {
	 console.log('inner', process.cwd())
  if (err) throw err;
  fs.stat('bb.txt', (err, stats) => {
    if (err) throw err;
    console.log(`stats: ${JSON.stringify(stats)}`);
  });
});*/
/*console.log('outer', process.cwd())
fs.appendFile('bb.txt','   welcome',function(err,f){
    console.log('finish ',err,f)
});
console.log('fs.constants',fs.constants);*/

/*var path=require("path");
var str="http://www.daj.com/a/b/c/index.css";
console.log(path.extname(str));
console.log(path.basename(str,'.css'));
console.log(path.dirname(str));*//*console.log(path.extname(str));
console.log(path.basename(str,'.css'));
console.log(path.dirname(str));
console.log(path.delimiter);
console.log(path.normalize('C:\\temp\\\\foo\\bar\\.\\index.css'));
console.log(path.parse('C:\\temp\\\\foo\\bar\\index.css'));//base=name+ext
console.log('C:\\temp\\foo\\bar\\index.css'.split(path.sep))*/

/*var url=require("url");
var str="http://user:pass@host.com:8080/p/a/t/h?query=string#hash";
console.log(url.parse(str))*/

var crypto=require("crypto");
const mm=crypto.createHash('md5');
var str="need to be crypted";
console.log(mm.update(str));//º”√‹
console.log(mm.digest('hex'));// ‰≥ˆ

var hmac = crypto.createHmac("sha1", 'miyao');
hmac.update(str);
var encode = hmac.digest('hex');
console.log("string sha1:" + encode);

var crypto = require('crypto')
    , key = 'salt_from'
    , plaintext = 'danhuang'
    , cipher = crypto.createCipher('aes-256-cbc', key)
    , decipher = crypto.createDecipher('aes-256-cbc', key);

cipher.update(plaintext, 'utf8', 'hex');
var encryptedPassword = cipher.final('hex')

decipher.update(encryptedPassword, 'hex', 'utf8');
var decryptedPassword = decipher.final('utf8');

console.log('encrypted :', encryptedPassword);
console.log('decrypted :', decryptedPassword);