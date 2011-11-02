smoosh:
	@smoosh run project.json
	@uglifyjs -nc ../src/classie.js > tmp
	@cat ../src/header.js tmp ../src/footer.js  > ../classie.min.js
	@rm tmp
	@smoosh run unit.json

install:
	@npm install smoosh -g
	@npm install uglify-js -g
