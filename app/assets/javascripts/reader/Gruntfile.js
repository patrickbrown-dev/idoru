module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    srcFiles: ["src/**/*.purs"],

    psc: {
      options: {
        main: "Reader",
        modules: ["Reader"]
      },
      all: {
        src: ["<%=srcFiles%>"],
        dest: "dist/Main.js"
      }
    }
  });

  grunt.loadNpmTasks("grunt-purescript");

  grunt.registerTask("default", ["psc:all"]);
};
