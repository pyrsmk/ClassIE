this.IE=(function(document){
    var version=3,div=document.createElement('div');
    do{
        div.innerHTML='<!--[if gt IE '+(++version)+']>1<![endif]-->';
    }
    while(div.innerHTML);
    document.documentElement.className+=' ie'+version;
    return version>=5?version:undefined;
})(this.document);
