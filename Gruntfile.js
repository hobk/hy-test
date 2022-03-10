module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    uglify: {
      options: {
        banner:
          '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      build: {
        src: "app/app.js",
        dest: "dist/app.min.js",
      },
    },
    copy: {
      server: {
        files: [
          {
            expand: true,
            cwd: "app",
            src: ["**/*.html", "**/*.css"],
            dest: "dist",
          },
        ],
      },
      static: {
        files: [
          {
            expand: true,
            cwd: "app/static",
            src: ["**/*.ico", "**/*.jpg", "**/*.png",],
            dest: "dist/static",
          },
        ],
      },
    },
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-copy");

  // 默认被执行的任务列表。
  grunt.registerTask("default", ["uglify", "copy"]);
};
