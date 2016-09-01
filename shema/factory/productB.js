var util =require("util");
var Product=require("./product");
function ProductB(){
    Product.call(this);
    this.getProduct = function(){
        console.log('来自ProductB');
    }
}
util.inherits(ProductB,Product);
module.exports=ProductB;

