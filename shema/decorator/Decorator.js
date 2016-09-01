var Component=require("./Component");
var util = require("util");
function Decorator(){
  Component.call(this);
}
util.inherits(Decorator,Component);
module.exports=Decorator;