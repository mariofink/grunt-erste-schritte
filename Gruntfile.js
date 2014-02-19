module.exports = function(grunt) {
  // Grunt Konfiguration:
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Konfigurieren des concat Tasks
    concat: {
      js: {
        src: [
          // Alle JavaScript Dateien in diesem Ordner
          'js/*.js',
        ],
        // werden in dieser Datei zusammengeführt
        dest: 'scripts.js',
      },
      css: {
        src: [
          // Alle CSS Dateien in diesem Ordner
          'css/*.css',
        ],
        // werden in dieser Datei zusammengeführt
        dest: 'styles.css',
      }
    }

  });
  // Diese Plugins sollen geladen werden:
  grunt.loadNpmTasks('grunt-contrib-concat');
  // Was beim Aufruf von "grunt" passieren soll:
  grunt.registerTask('default', ['concat']);
};