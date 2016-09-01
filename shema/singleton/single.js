var instance=null;
module.exports=function(name){
    function Single(name){
      this.name=name;
    }
    Single.prototype={
      constructor:Single,
      show:function(){
          console.log(name)
      }
   }
    this.getInstance=function(){
        if(instance==null){
            instance=new Single(name);
        }
        return instance;
    }
}
