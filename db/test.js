var util=require("./util");
/*util.get('config.json','db');*/
var mongo = require('mongodb');
var db;

function connection(callback){
    if(!db){
        var cf=util.get('configo.json','db');
        var host = cf['host'],
            port = cf['port'],
            dbName = cf['dbName'];
        var server=new mongo.Server(host,port);
        var dbClient=new mongo.Db(dbName,server,{safe:false});
        dbClient.open(function(err,dbobj){
            if(err) console.log('connect err '+err);
            db=dbobj;
            console.log('connection success');
        });
    }
    callback(db);
}
connection(function(db){
    console.log(db);
})