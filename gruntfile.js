module.exports = function(grunt){
	var gc = {
		imageNotyfy: __dirname+'\\src\\notify.png',
		minifyHtml: false,
		minifyCss: false
	};
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);
	grunt.initConfig({
		globalConfig : gc,
		pkg : grunt.file.readJSON('package.json'),
		modernizr: {
			dist: {
				"crawl": false,
				"customTests": [],
				"dest": "docs/bitrix/templates/frontpage/js/modernizr.js",
				"tests": [
					"customelements",
					"customevent",
					"history",
					"inputtypes",
					"json",
					"svg",
					"video",
					"animation",
					"adownload",
					"csscalc",
					"flexbox",
					"objectfit",
					"csspointerevents",
					"filereader",
					"filesystem"
				],
				"options": [
					"domPrefixes",
					"prefixes",
					"addTest",
					"atRule",
					"hasEvent",
					"mq",
					"prefixed",
					"prefixedCSS",
					"prefixedCSSValue",
					"testAllProps",
					"testProp",
					"testStyles",
					"html5printshiv",
					"html5shiv",
					"setClasses"
				],
				"uglify": true
			}
		},
		less: {
			css: {
				files : {
					'test/css/main.css' : [
						'src/less/main.less',
					]
				},
				options : {
					compress: gc.minifyCss,
					ieCompat: false
				}
			},
		},
		autoprefixer:{
			options: {
				browsers: ['> 1%', 'last 2 versions', 'Firefox 16.0', 'Opera 12.1', "Chrome 26.0"],
				cascade: false
			},
			css: {
				expand: true,
				flatten: true,
				src: [
					'test/css/main.css'
				],
				dest: 'docs/bitrix/templates/frontpage/css/'
			}
		},
		requirejs: {
			ui: {
				options: {
					baseUrl: __dirname+"/bower_components/jquery-ui/ui/widgets/",//"./",
					paths: {
						jquery: __dirname+'/bower_components/jquery/dist/jquery'
					},
					preserveLicenseComments: false,
					optimize: "none",
					findNestedDependencies: true,
					skipModuleInsertion: true,
					exclude: [ "jquery" ],
					include: [ 
								"../disable-selection.js",
								"slider.js",
							],
					out: "test/js/jquery.custom-ui.js",
					done: function(done, output) {
						grunt.log.writeln(output.magenta);
						grunt.log.writeln("jQueryUI Custom Build ".cyan + "done!\n");
						grunt.log.writeln("File " + (__dirname +"/test/js/jquery.custom-ui.js").cyan + " created.\n");
						done();
					},
					error: function(done, err) {
						grunt.log.warn(err);
						done();
					}
				}
			}
		},
		uglify : {
			options: {
				ASCIIOnly: true,
				//beautify: true
			},
			main: {
				files: {
					'docs/bitrix/templates/frontpage/js/main.js': [
						'src/js/main.js'
					]
				}
			},
			app: {
				files: {
					'docs/bitrix/templates/frontpage/js/app.js' : [
						'src/js/utilites.js',
						'bower_components/jquery/dist/jquery.js',
						'bower_components/bootstrap/dist/js/bootstrap.js',
						//'test/js/jquery.custom-ui.js',
						'bower_components/jquery-mousewheel/jquery.mousewheel.js',
						'bower_components/jqueryui-touch-punch/jquery.ui.touch-punch.js',
						'bower_components/jquery_lazyload/jquery.lazyload.js',
						'bower_components/jquery.maskedinput/dist/jquery.maskedinput.js',
						'bower_components/fancybox/source/jquery.fancybox.js',
						'bower_components/fancybox/source/helpers/jquery.fancybox-buttons.js',
						'bower_components/fancybox/source/helpers/jquery.fancybox-media.js',
						'bower_components/fancybox/source/helpers/jquery.fancybox-thumbs.js',
						'bower_components/slick-carousel/slick/slick.js',
						'bower_components/datetimepicker/jquery.datetimepicker.js'
						//'bower_components/jarallax/jarallax/jarallax.js',
						//'bower_components/jarallax/jarallax/jarallax-video.js',
						//'bower_components/arcticModal/arcticmodal/jquery.arcticmodal.js',
						//'bower_components/mixitup/dist/mixitup.js',
					]
				}
			},
			hypher: {
				files: {
					'docs/bitrix/templates/frontpage/js/hypher.js' : [
						'bower_components/hyphernationRUru/dist/jquery.hypher.js',
						'bower_components/hyphernationRUru/dist/en-us.js',
						'bower_components/hyphernationRUru/dist/ru-ru.js',
					]
				}
			},
		},
		imagemin: {
			base: {
				options: {
					optimizationLevel: 5,
					//progressive: true,
					//interlaced: true,
					svgoPlugins: [
						{
							removeViewBox: false
						}
					]
				},
				files: [
					{
						expand: true,
						flatten : true,
						src: [
							'src/images/*.{png,jpg,gif,svg}'
						],
						dest: 'docs/bitrix/templates/frontpage/images/',
						filter: 'isFile'
					}
				]
			},
			css: {
				options: {
					optimizationLevel: 3,
					svgoPlugins: [
						{
							removeViewBox: false
						}
					]
				},
				files: [
					{
						expand: true,
						flatten : true,
						src: [
							'src/images/css/*.{png,jpg,gif,svg}'
						],
						dest: 'src/images/bin/',
						filter: 'isFile'
					}
				]
			}
		},
		jade: {
			index: {
				options: {
					pretty: !gc.minifyHtml,
					data: {
						debug: false
					}
				},
				files: [
					{
						expand: true,
						cwd: 'src/jade',
						src: ['index.jade'],
						dest: 'docs',
						ext: '.html'
					}
				]
			}
		},
		copy: {
			main: {
				expand: true,
				cwd: 'src/fonts',
				src: '**',
				dest: 'docs/bitrix/templates/frontpage/fonts/',
			},
			bootstrap: {
				expand: true,
				cwd: 'bower_components/bootstrap/dist/fonts',
				src: '**',
				dest: 'docs/bitrix/templates/frontpage/fonts/',
			},
			slick: {
				expand: true,
				cwd: 'bower_components/slick-carousel/slick/fonts',
				src: '**',
				dest: 'docs/bitrix/templates/frontpage/fonts/',
			},
		},
		clean: {
			test : {
				src: [
					'test'
				]
			},
		},
		watch: {
			options: {
				livereload: true,
			},
			html: {
				files: [
					'src/jade/**/*.jade',
				],
				tasks: ["clean:test","jade","notify:done"]
			},
			font: {
				files: [
					'src/fonts/**/*.*',
				],
				tasks: ["copy:main","copy:bootstrap","copy:slick","notify:done"]
			},
			js: {
				files: [
					'src/js/**/*.js'
				],
				tasks: ['notify:watch','uglify:main', 'notify:done']
			},
			css: {
				files: [
					'src/less/**/*.{css,less}',
				],
				tasks: ['notify:watch',"clean:test",'less', 'autoprefixer','notify:done']
			},
			images: {
				files: [
					'src/images/*.{png,jpg,gif,svg}',
					'src/images/css/*.{png,jpg,gif,svg}'
				],
				tasks: ['notify:watch','newer:imagemin', 'less', 'autoprefixer', 'notify:done']
			}
		},
		notify: {
			watch: {
				options: {
					title: "<%= pkg.name %> v<%= pkg.version %>",
					message: 'Запуск',
					image: '<%= globalConfig.imageNotyfy %>'
				}
			},
			done: {
				options: { 
					title: "<%= pkg.name %> v<%= pkg.version %>",
					message: "Успешно Завершено",
					image: '<%= globalConfig.imageNotyfy %>'
				}
			}
		}
	});
	grunt.registerTask('default', 	['notify:watch','clean','imagemin','less','autoprefixer','jade','copy','modernizr','requirejs','uglify','notify:done']);
	grunt.registerTask('dev', 		['watch']);
}