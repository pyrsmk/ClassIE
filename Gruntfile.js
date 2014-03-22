module.exports = function(grunt) {

	grunt.initConfig({
		// Load bower file
		bower: grunt.file.readJSON('bower.json'),
		// Remove obsolete files
		clean: {
			old: ['*.min.js'],
			work: ['ClassIE.min.js']
		},
		// Lint
		jshint: {
			library: ['src/ClassIE.js'],
			options: {
				browser		: true,
				predef		: ['define', 'module', 'ActiveXObject', 'console', 'log'],
				boss		: true,
				curly		: true,
				eqnull		: true,
				newcap		: true,
				undef		: true,
				loopfunc	: true,
				evil		: true,
				proto		: true,
				es3			: true,
			}
		},
		// Minify
		uglify: {
			library: {
				files: {
					'ClassIE.min.js': ['src/ClassIE.js']
				}
			}
		},
		// Concatenate
		concat: {
			library: {
				src: ['src/header.js', 'ClassIE.min.js', 'src/footer.js'],
				dest: 'ClassIE-<%= bower.version %>.min.js'
			}
		},
	});

	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// Define tasks
	grunt.registerTask('default', ['clean:old', 'jshint', 'uglify', 'concat', 'clean:work']);

};