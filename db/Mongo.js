var util=require("./util");
var mongo = require('mongodb');
var db;

module.exports=function(){
    var self = this;
    this.insert=function(tableName, rowInfo, callback){
        connection(function(db){
            db.collection(tableName,function(err, collection){
                if(err) console.log('gettable err '+err);
                collection.insert(rowInfo,function(err,result){
                    if(err) console.log('insert err '+err);
                    console.log(result);
                })
            })
        })
    }
    this.update=function(tableName, rowInfo,id, callback){
        connection(function(db){
            db.collection(tableName,function(err, collection){
                if(err) console.log('gettable err '+err);
                var mongoId = new mongo.ObjectID(id);
                collection.update({"_id":mongoId},rowInfo,function(err,result){
                    if(err) console.log('update err '+err);
                    console.log(result);
                })
            })
        })
    }
    this.findById=function(tableName, id, callback){
        connection(function(db){
            db.collection(tableName,function(err, collection){
                if(err) console.log('gettable err '+err);
                var mongoId = new mongo.ObjectID(id);
                var cursor = collection.find({'_id':mongoId});
                cursor.toArray(function(err, docs) {
                    if(err){
                        callback(false);
                    } else {
                        var row = {};
                        if(docs){
                            row = self.filterSelfRow(docs.shift());
                        }
                        callback(row);
                    }
                });
                cursor.rewind();
            })
        })
    }
    this.find = function(tableName, whereJson, orderByJson, limitJson, fieldsJson, callback){
        if(whereJson['id']){
            whereJson['_id'] = new mongo.ObjectID(whereJson['id']);
            delete whereJson['id'];
        }
        var retArr = [];
        connection(function(db){
            db.collection(tableName, function (err, collection) {
                var cursor = collection.find(whereJson, fieldsJson);
                if(orderByJson){
                    cursor.sort(orderByJson);
                }
                if(limitJson){
                    var skip = limitJson['skip'] ? limitJson['skip'] : 0;
                    cursor.limit(limitJson['num']).skip(skip);
                }
                cursor.toArray(function(err, docs) {
                    if(err){
                        callback(false);
                    } else {
                        if(docs){
                            for(var i=0; i<docs.length; i++){
                                var row = self.filterSelfRow(docs[i]);
                                retArr.push(row);
                            }
                        }
                        callback(retArr);
                    }
                });
                cursor.rewind();
            });
        });
    };
    this.remove=function(tableName, id, callback){
        connection(function(db){
            db.collection(tableName,function(err, collection){
                if(err) console.log('gettable err '+err);
                var mongoId = new mongo.ObjectID(id);
                collection.remove({"_id":mongoId},function(err,result){
                    if(err) console.log('remove err '+err);
                    console.log(result);
                });
            })
        })
    }
    this.filterSelfRow = function(rowInfo){
        if(rowInfo['_id']){
            rowInfo['id'] = rowInfo['_id'];
            delete rowInfo['_id'];
        }
        return rowInfo;
    };
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
                callback(db);
                console.log('connection success'+db);
            });
        }else{
            callback(db);
        }

    }
}
