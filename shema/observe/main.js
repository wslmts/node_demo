var ObserverA=require("./ObserverA");
var ObserverB=require("./ObserverB");
var Subject=require("./Subject");

var oa=new ObserverA('oa');
var ob=new ObserverB('ob');
var s=new Subject();
s.addObserver(oa);
s.addObserver(ob);
s.doAction();
s.removeObserver(oa);
s.doAction();
