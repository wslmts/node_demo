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
sql.findById(tableName,{'book_id':6})