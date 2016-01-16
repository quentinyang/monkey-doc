var dest = './built',
  src = './';

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + '/**'
    ]
  },
  markup: {
    src: src + "src/**",
    dest: dest
  },
  browserify: {
    // Enable source maps
    debug: false,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/react/app.js',
      dest: dest + '/js',
      outputName: 'app.js'
    }]
  }
};
