module.exports=function(){
    this.name='person';
    this.eat=function(){
        console.log(this.name+"eat food");
    };
    this.sleep=function(){
        console.log(this.name+"sleep at night");
    }
}
