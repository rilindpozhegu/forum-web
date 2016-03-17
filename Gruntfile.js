 module.exports = function(grunt)

 {

   // Project configuration.
  grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: [ "bower_components/jquery/dist/jquery.js" ,"bower_components/bootstrap/dist/js/bootstrap.js"],
        dest: "library.js"
      }
    },

   concat_css: {
     options: {
                
       // Task-specific options go here. 
     },
     all: {
       src: ["assets/styles/index.css", "assets/styles/socialnetwork.css"],
       dest: "assets/styles/styles.css"
     },
   },

   watch: {
    styles: {
      files: ['**/*.css'],
      tasks: ['concat_css']
    }
  }
});
  

   // Load the plugin that provides the "uglify" task.

  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

   // Default task(s). 

  grunt.registerTask('default', ['uglify','concat_css']);
  
 };
