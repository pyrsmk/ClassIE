OLD		= ls -l | grep .js | sed -r 's/.+\s(\S+)/\1/'
NAME	= ls src | sed -r 's/header\.js|footer\.js|ender\.js|package\.json|\s+//' | sed -nr 's/(.+)\.js/\1/p'
VERSION	= grep -m 1 Version src/\`${NAME}\`.js | sed -r 's/.*:\s*(.+)/\1/'

all: lint minify

lint:
	@jshint src/`${NAME}`.js --config config/jshint.json

minify:
	@rm -f `${OLD}`
	@uglifyjs -nc src/`${NAME}`.js > tmp
	@cat src/header.js tmp src/footer.js  > `${NAME}`-`${VERSION}`.min.js
	@rm tmp

install:
	@npm install jshint -g
	@npm install uglify-js -g