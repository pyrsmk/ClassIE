var sink=this.sink,
    start=this.start,
    prompt=this.prompt,
    IE=this.IE,
    doc=this.document;

sink('ClassIE',function(test,ok,before,after){
    
    var expected=prompt("What IE version should I expect? (please let empty for other browsers)","");
    if(expected===''){
        expected=undefined;
    }
    
    test('Browser version',2,function(){
        ok(IE==expected,"same JS version");
        var classes=doc.documentElement.className;
        if(classes===undefined){
            classes='';
        }
        var found=classes.match(/\bie(\d+)\b/);
        ok((found?found[1]:undefined)==expected,"same CSS version");
    });
    
});

start();
