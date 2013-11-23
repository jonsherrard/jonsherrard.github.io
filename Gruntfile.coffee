module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    jade:
      dev:
        options:
          pretty: true
          data: (dest, src) ->
            require './config.json'
        files: [
          expand: true
          cwd: 'src/jade/'
          src: ['index.jade']
          dest: ''
          ext: '.html'
        ]

    stylus:
      compile:
        options:
          use: [ require('nib'), require('normalize') ]
          compress: false
        files:
          'css/main.css' : 'src/stylus/main.styl'

    coffee:
      compile:
        files:
          'js/script.js' : 'src/coffee/script.coffee'

    rsync:
      options:
        recursive: true
      fonts:
        options:
          src: 'src/fonts/'
          dest: './fonts'
        

  grunt.loadNpmTasks 'grunt-contrib-jade'
  grunt.loadNpmTasks 'grunt-contrib-stylus'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-rsync'
  grunt.registerTask 'default', [
    'rsync:fonts',
    'stylus',
    'coffee',
    'jade'
  ]

