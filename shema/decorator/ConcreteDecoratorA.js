//为Component类的operation提供一些额外操作+
var Decorator=require('./Decorator');
var util = require("util")
function ConcreteDecoratorA(){
    Decorator.call(this);
    this.operation = function(){
        new Decorator().operation()
        console.log('ConcreteDecoratorA::operation---负责给构件对象“贴上”附加的责任');
    }
}
util.inherits(ConcreteDecoratorA,Decorator)
module.exports =ConcreteDecoratorA;

