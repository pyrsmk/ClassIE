# npm install smoosh -g
smoosh:
	smoosh -r smoosh.json
	uglifyjs -nc classie.js > classie.min.js
