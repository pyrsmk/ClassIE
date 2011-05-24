/*
    ClassIE
    
    Version:    0.1.5
    Author:     Aurélien Delogu <dev@dreamysource.fr>
    URL:        <https://github.com/pyrsmk/classie>
    License:    MIT
*/
var IE=(function(document){
    var version=4,div=document.createElement('div');
    // Consider IE5.5 as IE6
    div.innerHTML='<!--[if IE 5.5000]>1<![endif]-->';
    if(div.innerHTML==1){
        version=6;
    }
    else{
        // Let's find the current IE version
        do{
            div.innerHTML='<!--[if gt IE '+(++version)+']>1<![endif]-->';
        }
        while(div.innerHTML==1);
    }
    // CSS side
    document.documentElement.className+=' ie'+version;
    // JS side
    return version;
})(this.document);
