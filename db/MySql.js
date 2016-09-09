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
            if (err) {
                console.log('GetData Error: ' + err.message);
                dbClient.end();
            }
            console.log(data);
        })
    }
    /**
     *
     * @desc ������ѯ����
     * @param tableName string
     * @param whereJson json desc(and��or�������е�����Ϊkeyֵ�����ӷ�����С�ڻ��ǵ��ڡ�valueֵ)
     * @param orderByJson json desc({'key' : 'time', 'type':'desc'})
     * @param limitArr array desc����һ��Ԫ���Ƿ���ƫ�������ڶ����Ƿ����������շ���ȫ����
     * @param fieldsArr array desc��������Щ�ֶΣ�
     * @param callback function
     * @return null
     */
    this.find = function(tableName, whereJson, orderByJson, limitArr, fieldsArr, callback){
        var andWhere   = whereJson['and']
            , orWhere    = whereJson['or']
            , andArr = []
            , orArr  = [];
        /* ������ת��Ϊwhere and����array */
        for(var i=0; i<andWhere.length; i++){
            andArr.push(andWhere[i]['key'] + andWhere[i]['opts'] + andWhere[i]['value']);
        }
        /* ������ת��Ϊwhere or����array */
        for(var i=0; i<orWhere.length; i++){
            orArr.push(orWhere[i]['key'] + orWhere[i]['opts'] +orWhere[i]['value']);
        }
        /* �ж������Ƿ���ڣ����������ת����Ӧ�������� */
        var filedsStr = fieldsArr.length>0 ? fieldsArr.join(',') : '*'
            , andStr    = andArr.length>0    ? andArr.join(' and ') : ''
            , orStr     = orArr.length>0     ? ' or '+orArr.join(' or ') : ''
            , limitStr  = limitArr.length>0  ? ' limit ' + limitArr.join(',') : ''
            , orderStr  = orderByJson ? ' order by ' + orderByJson['key'] + ' ' + orderByJson['type'] : '';
        /* ִ��mysql��� */
        dbClient.query('SELECT ' + filedsStr + ' FROM ' + tableName + ' where ' + andStr + orStr + orderStr + limitStr,
            function(error, results) {
                if (error) {
                    console.log('GetData Error: ' + error.message);
                    dbClient.end();
                    callback(false);
                } else {
                    callback(results);
                }
            });
    };
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
