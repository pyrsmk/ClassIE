ClassIE 0.3.2
=============

Following a H5BP's commit discussion (https://github.com/paulirish/html5-boilerplate/commit/e5e057e53815ed55f4ecfaef3057bf2940c7c0b2), I've decided to write an unobstrusive tiny library to automatically detect Internet Explorer version and bring us a sure way to use polyfills and IE CSS fixes.

Overall remarks
---------------

- IE5.5 is supported as IE6 version since they're quite the same
- IE10 and ulterior don't support conditional comments anymore (http://blogs.msdn.com/b/ie/archive/2011/07/06/html5-parsing-in-ie10.aspx), it will be seen as a regular browser by ClassIE

Install
-------

You can pick the minified library or install it with :

```
jam install pyrsmk-classie
bower install pyrsmk-classie
npm install pyrsmk-classie --save-dev
```

JS
--

The `IE` variable is available to know under which version of Internet Explorer your script is loaded.

```javascript
if(IE<=8){
    // some polyfills
}
```

For browsers other than IE or ulterior to 9, `IE` variable will return `-1`.

CSS
---

Internet Explorer version is also accessible with CSS classes since ClassIE adds the current IE browser version to the `html` markup like: `<html class="ie8">`.

Then, using ClassIE with your stylesheets is pretty simple:

```css
.ie6 #contents,
.ie7 #contents{
    // some specific properties
}
```

Special thanks
--------------

Thanks to James Padolsey for his wonderful CC IE detection idea: https://gist.github.com/527683

License
-------

This library is published under the [MIT license](http://dreamysource.mit-license.org).
