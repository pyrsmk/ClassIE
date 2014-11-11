(function(){
	var div=document.createElement('div'),
		is=function(version){
			div.innerHTML='<!--[if IE '+version+']>1<![endif]-->';
			return div.innerHTML==1;
		},
		version=6;
	// Consider IE5.5 as IE6
	if(!is('5.5000')){
		// Let's find the current IE version
		while(!is(version) && ++version<10){}
	}
	// CSS side
	document.documentElement.className+=' ie'+version;
	// JS side
	this.IE=version;
}());