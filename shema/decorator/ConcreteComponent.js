//展示装饰之前的类中属性和方法
var Component=require("./Component");
var util = require("util");
function ConcreteComponent(){
    Component.call(this);
    this.operation=function(){
        console.log('ConcreteComponent::operation---定义一个将要接收附加责任的类');
    }
}
util.inherits(ConcreteComponent,Component);
module.exports=ConcreteComponent;