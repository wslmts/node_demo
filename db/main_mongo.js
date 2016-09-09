var Mongo = require('./Mongo');
var rowInfo = {}, tableName = 'node_book';
rowInfo.book_name = 'nodejs book';
rowInfo.author = 'danhuang';


var mongo=new Mongo();
//mongo.insert(tableName,rowInfo);
//mongo.remove(tableName,'57d28b28979e6613806a736b')
