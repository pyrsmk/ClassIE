sink('ClassIE',function(test,ok,before,after){
    
    var expected=prompt("What IE version should I expect? (please let empty for other browsers)","");
    
    test('Browser version',2,function(){
        try{
            ok(IE==expected,"same JS version");
        }
        catch(e){
            if(expected===''){
                ok(true,"same JS version");
            }
            else{
                ok(false,"same JS version");
            }
        }
        var classes=document.documentElement.className;
        if(classes===undefined){
            classes='';
        }
        var found=classes.match(/\bie(\d+(\.5)?)\b/);
        ok((found?found[1]:'')==expected,"same CSS version");
    });
    
});

start();
