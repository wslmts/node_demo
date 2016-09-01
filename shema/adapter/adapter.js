var Target=require("./target");
var Adaptee=require("./adaptee");
var util=require("util");
function Adapter(){
    Target.call(this);
    this.request=function(){
        var a=new Adaptee();
        a.specialRequest();
    }
}
util.inherits(Adapter,Target);
module.exports=Adapter;

