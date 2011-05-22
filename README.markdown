ClassIE
=======

ClassIE is an unobstrusive tiny library which automates Internet Explorer browser detection.

JS
--

The `IE` variable is available to know under which version of Internet Explorer your script is loaded.

    if(IE<=8){
	// some polyfills
    }

CSS
---

Internet Explorer version is also accessible with CSS classes since ClassIE adds the current IE browser version to the `html` markup as: `<html class="ie8">`.

Then, using ClassIE with your stylesheets is pretty simple:

    .ie6 #contents,
    .ie7 #contents{
	// some specific properties
    }

Overall remarks
---------------

- IE5.5 is supported as IE6 version

License
-------

This library is published under the MIT license (Expat version).

Special thanks
--------------

Thanks to James Padolsey for his wonderful CC IE detection idea: https://gist.github.com/527683
