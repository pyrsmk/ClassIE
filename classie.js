/*
    ClassIE 20110522
    Aurélien Delogu <dev@dreamysource.fr>
    <https://github.com/pyrsmk/classie>
    MIT license
*/
this.IE=(function(document){
    var version=3,div=document.createElement('div');
    // Consider IE5.5 as IE6, not IE5
    div.innerHTML='<!--[if IE 5.5000]>1<![endif]-->';
    if(div.innerHTML==1){
        version=6;
    }
    else{
        // IE loop, here's all the magic
        do{
            div.innerHTML='<!--[if gt IE '+(++version)+']>1<![endif]-->';
        }
        while(div.innerHTML==1);    
        document.documentElement.className+=' ie'+version;
    }
    // 4 = others, >=5 = IE
    return version>=5?version:undefined;
})(this.document);
