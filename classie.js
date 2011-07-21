/*
    ClassIE
    
    Version:    0.2.0
    Author:     Aurélien Delogu <dev@dreamysource.fr>
    URL:        <https://github.com/pyrsmk/classie>
    License:    MIT
*/
IE=(function(document){
    var div=document.createElement('div'),
    is=function(version){
        div.innerHTML='<!--[if IE '+version+']>1<![endif]-->';
        return div.innerHTML==1;
    };
    // Consider IE5.5 as IE6
    version=6;
    if(!is('5.5000')){
        // Let's find the current IE version
        // IE>=10 will be recognized as IE10: http://blogs.msdn.com/b/ie/archive/2011/07/06/html5-parsing-in-ie10.aspx
        while(!is(version) && version++<9){}
    }
    // CSS side
    document.documentElement.className+=' ie'+version;
    // JS side
    return version;
})(this.document);
