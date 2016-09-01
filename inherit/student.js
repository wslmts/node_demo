var Person=require("./person");
var util=require("util");
//完全继承person
function Student(){
    //必须有这一步，否则无法实现继承,但是如果父类方法定义在原型上，可以没有这一步；
   Person.call(this)
}
util.inherits(Student,Person);
Student.prototype.study=function(){
    console.log('student learn')
}
module.exports=Student;
