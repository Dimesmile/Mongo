module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				sub: true,
				undef: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true,
					$: true,
					console: true,
				}
			},
			'<%= pkg.name %>': {
				src: ['src/js/**/*.js']
			}
		},

		concat: {
			dist: {
				src: ['src/js/easing.js', 'src/js/jquery.countdown.js', 'src/js/jquery.ui.totop.min.js', 'src/js/lightbox-plus-jquery.min.js', 'src/js/owl.carousel.min.js', 'src/js/script.countdown.js', 'src/js/script.js', 'src/js/script.totop.js'],
				dest: 'dest/build.js'
			}
		},

		uglify: {
			options: {
				stripBanners: true,
				banner: '/* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>*/\n'
			},
			build: {
				src: 'dest/build.js',
				dest: 'dest/build.min.js'
			}
		},

		cssmin: {
			with_banner: {
				options: {
					banner: '/* My minified css */'
				},

				files: {
					'dest/style.min.css' : ['src/css/lightbox.css', 'src/css/owl.carousel.css', 'src/css/style.css', 'src/css/ui.totop.css']
				}
			}
		},

		watch: {
			scripts: {
				files: ['src/js/*.js'],
				tasks: ['jshint', 'concat', 'uglify']
			},
			css: {
				files: ['src/css/*.css'],
				tasks: ['cssmin']
			},
		}
	});

	//grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'watch']);
};