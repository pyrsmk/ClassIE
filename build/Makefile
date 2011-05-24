# npm install smoosh -g
smoosh:
	smoosh -r classie.json
	echo "/*@cc_on `uglifyjs -nc ../classie.js` @*/" > ../classie.min.js
	smoosh -r unit.json
