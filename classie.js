(function(){
    if(mode=document.documentMode)                  version=mode;   // IE>8
    else if(document.all && window.XMLHttpRequest)  version=7;      // IE7
    else if(document.all && !window.XMLHttpRequest) version=6;      // IE<7
    doc=document.documentElement;
    if(doc.className)   classes=doc.className.split(' ');
    else                classes=[];
    doc.className=classes.concat(['ie'+version]).join(' ');
})();
