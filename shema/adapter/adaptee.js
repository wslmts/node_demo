function Adaptee(){
    this.specialRequest = function(){
        console.log('Adaptee::special request');
    }
}
module.exports=Adaptee;

