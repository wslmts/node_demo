var Person=require("./person");
var util=require("util");
//��ȫ�̳�person
function Student(){
    //��������һ���������޷�ʵ�ּ̳�,����������෽��������ԭ���ϣ�����û����һ����
   Person.call(this)
}
util.inherits(Student,Person);
Student.prototype.study=function(){
    console.log('student learn')
}
module.exports=Student;
