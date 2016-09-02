var Parent=require("./IObserver");
var util=require("util");

function ObserverB(name){
    Parent.call(this);
    util.inherits(ObserverB,Parent);
    this.name=name;
    this.update=function(){
        console.log('this is ObserverB');
    }
}
module.exports=ObserverB;

