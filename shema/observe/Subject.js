module.exports=function(){
    var eventset=[];
    var self=this;
    //添加观察者
    this.addObserver=function(observer){
        eventset.push(observer);
        console.log(eventset)
    }
    //删除观察者
    this.removeObserver=function(observer){
        console.log('删除观察者'+observer.name);
        delete eventset[observer];
        console.log(eventset)
    }
    //通知所有观察者
    this.doAction=function(){
        console.log('订阅者执行操作');
        self.notifyAllObserver();
    }
    //执行所有观察者方法
    this.notifyAllObserver=function(){
        eventset.forEach(function(v,i){
            eventset[i].update();
        });
    }
}

