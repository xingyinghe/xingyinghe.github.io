var xiaomi = {};
xiaomi.taap= function(obj, callback){

    obj.addEventListener('touchstart', function(){

    });
    obj.addEventListener('touchmove', function(){

    });
    obj.addEventListener('touchend', function(){
        callback();
    });
};

