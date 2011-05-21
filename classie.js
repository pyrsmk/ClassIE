(function(){
    var version=5,div=document.createElement('div');
    do{div.innerHTML='<!--[if gt IE '+(++version)+']>1<![endif]-->'}
    while(div.innerHTML);
    document.documentElement.className+=' ie'+version;
})();
