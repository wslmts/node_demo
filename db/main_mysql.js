var MySql = require('./MySql');
var rowInfo = {},
    tableName = 'node_book';
//rowInfo.book_name = 'nodejs book';
rowInfo.author = 'danhuang';

var sql=new MySql();
//sql.remove(tableName,{book_id:5});
//sql.insert(tableName,rowInfo);
rowInfo.book_name="javascript server";
//sql.update(tableName,rowInfo,{'book_id':6});
//sql.findById(tableName,{'book_id':6});
var whereJson = {
    'and' : [{'key':'book_name', 'opts':'=', 'value' : '"nodejs"'}, {'key':'author', 'opts':'=', 'value' : '"danhuang"'}],
    'or' : [{'key':'book_id', 'opts':'<', 'value' : 10}]
};
var fieldsArr = ['book_name', 'author', 'time'];
var orderByJson = {'key':'time', 'type':'desc'};
var limitArr = [0, 10];
sql.find(tableName, whereJson, orderByJson, limitArr, fieldsArr, function(ret){
    console.log(ret);
});