var ProductA=require("./productA");
var ProductB=require("./ProductB");

exports.createProduct=function(type){
   switch (type){
       case 'ProductA':return new ProductA();break;
       case 'ProductB':return new ProductB();break;
   }
};


