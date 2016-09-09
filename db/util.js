var fs=require("fs");
exports.get=function get(fname,key){
    var configJson = {};
    try{
        var str = fs.readFileSync(fname,'utf8');
        console.log(typeof str)
        configJson = JSON.parse(str);
        console.log(configJson)
    }catch(e){
        console.error("JSON parse fails");
    }
    return configJson[key];
};
