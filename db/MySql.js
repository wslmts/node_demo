var util=require("./util");
var mysql = require('mysql');
var dbClient;

module.exports=function(){
    __constructor();
    this.insert=function(tableName, rowInfo, callback){
        dbClient.query("insert into "+tableName+" set ?",rowInfo,function(err,data){
            console.log(data);
        })

    }
    this.update=function(tableName, rowInfo,idJson,  callback){
          dbClient.query("update "+tableName+" set ? where ? ",[rowInfo,idJson],function(err,data){
              console.log(data);
          })
    }
    this.findById=function(tableName, idJson, callback){
        dbClient.query("select * from "+tableName+" where ? ",idJson,function(err,data){
            console.log(data);
        })
    }
    this.find=function(tableName, whereJson, orderByJson, limitArr, fieldsArr, callback){
        dbClient.query("select * from "+tableName+" where ? ",whereJson,function(err,data){
            console.log(data);
        })
    }
    this.remove=function(tableName, idJson, callback){
        dbClient.query("delete from "+tableName+" where ? ",idJson,function(err,data){
            console.log(data);
        });
    }
    function __constructor(){
        var cf=util.get('config.json','db');
        var options={};
        options["host"]=cf["host"];
        options["port"] =cf["port"];
        options["user"]  =cf["user"];
        options["password"] =cf["password"];
        dbClient=mysql.createConnection(options);
        dbClient.connect();
        dbClient.query('use '+cf['dbName'],function(error,result){
            if(error) {
                console.log('ClientConnectionReady Error: ' + error.message);
                dbClient.end();
            }
            console.log('connection local mysql success'+result);
        });

    }
}
