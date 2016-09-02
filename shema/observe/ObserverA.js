var Parent=require("./IObserver");
var util=require("util");

function ObserverA(name){
   Parent.call(this);
   util.inherits(ObserverA,Parent);
    this.name=name;
   this.update=function(){
       console.log('this is ObserverA');
   }
}
module.exports=ObserverA;
