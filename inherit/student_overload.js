var Person=require("./person");
var util=require("util");
//��дperson���ַ���
function Student_1(){
    Person.call(this);
    this.eat=function(){
        console.log(this.name+"eat food and drink milk");
    }
}
util.inherits(Student_1,Person);
module.exports=Student_1;
