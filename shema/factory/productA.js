var util =require("util");
var Product=require("./product");
function ProductA(){
    Product.call(this);
    this.getProduct = function(){
        console.log('来自ProductA');
    }
}
util.inherits(ProductA,Product);
module.exports=ProductA;
