//为Component类的operation提供一些额外操作，并添加方法
var Decorator=require('./Decorator');
var util = require("util")
function ConcreteDecoratorB(){
    Decorator.call(this);
    this.operation = function(){
        new Decorator().operation()
        console.log('ConcreteDecoratorA::operation---负责给构件对象“贴上”附加的责任');
    }
    this.addedBehavior=function(){
        console.log('add new method by ConcreteDecoratorB');
    }
}
util.inherits(ConcreteDecoratorB,Decorator)
module.exports =ConcreteDecoratorB;

