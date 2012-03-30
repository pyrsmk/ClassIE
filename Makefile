NAME	= ClassIE
VERSION	= grep -m 1 Version src/${NAME}.js | cut -c19-

all: lint minify

lint:
	jshint src/${NAME}.js --config config/jshint.json

minify:
	rm -f ${NAME}*
	uglifyjs -nc src/${NAME}.js > tmp
	cat src/header.js tmp src/footer.js  > ${NAME}-`${VERSION}`.min.js
	rm tmp

instdeps:
	npm install jshint -g
	npm install uglify-js -g
