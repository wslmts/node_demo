var fs=require("fs");
/*console.log(fs.openSync('jsTest.txt','r'));*/
var fpath='jsTest.txt';
fs.open(fpath,'r',function(err,fd){
    console.log('fd ',fd);
    fs.stat(fpath,function(err,stat){
        if(err) throw  err;
        fs.read(fd,new Buffer(stat.size),0,stat.size,null,function(err,bytesread,buf){
            if(err) throw  err;
            if(!bytesread) return;
            console.log('bytesread ',bytesread);
            console.log(buf.toString());
        })
    })
});
var wbuf=new Buffer('write buf');
fs.open('./bb.txt','w',function(err,fd){
    console.log('fd ',fd);
    if(err) throw  err;
    fs.write(fd,wbuf,0,wbuf.length,null,function(err,byteswrite,buf){
        if(err) throw  err;
        if(!byteswrite) return;
        console.log('byteswrite ',byteswrite);
        console.log(buf.toString());
    })
});