/*
    ClassIE
    
    Version:    20110522
    Author:     Aurélien Delogu <dev@dreamysource.fr>
    URL:        <https://github.com/pyrsmk/classie>
    License:    MIT
*/
this.IE=(function(document){
    var version=3,div=document.createElement('div');
    // Consider IE5.5 as IE6, not IE5
    div.innerHTML='<!--[if IE 5.5000]>1<![endif]-->';
    if(div.innerHTML==1){
        version=6;
    }
    // Find loop
    else{
        do{
            div.innerHTML='<!--[if gt IE '+(++version)+']>1<![endif]-->';
        }
        while(div.innerHTML==1);
    }
    // IE version found
    if(version>=5){
        document.documentElement.className+=' ie'+version;
        return version;
    }
    // Other browsers
    return undefined;
})(this.document);
