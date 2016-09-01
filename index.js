var fs=require('fs');
//console.log(fs.readdirSync(__dirname));
//列出当前目录下的文件，然后等待用户输入
//
fs.readdir(process.cwd(),function(err,files){
  console.log(files);
    if(!files.length){
        return console.log('\033[31m no files to show\033[39m\n');
    }
    console.log("select a file or directory you want to see\n");
    function file(i){
       var filename=files[i];
       fs.stat(__dirname+"/"+filename,function(err,stat){
           console.log(stat)
           if(stat.isDirectory()){
               return console.log(' '+i+'\033[36m' +filename+'/\033[39m');
           }else{
               return console.log(' '+i+'\033[90m' +filename+'\033[39m');
           }
           i++;
           if(i==files.length){
               process.stdout.write(' \033[33m enter your choice: \033[39m')
               process.stdin.resume();
               process.stdin.setEncoding("utf8");
           }else{
               file(i);
           }
       })
    }
    file(0)
});
