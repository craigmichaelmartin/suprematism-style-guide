var watch = require('node-watch'),
    cp = require('child_process'),
    compile = require('concise-cli/lib/compile'),
    fs = require('fs'),
    fse = require('fs-extra'),
    args = process.argv.slice(2);

// By default, run both
copyUtils();
compileCss();

/**
 * Watch for changes in the src directory
 */
if (args.length > 0 && args[0] === 'watch') {
  console.log('Watching ./src diretory for changes...');
  watch('./src', function(filename) {
    // console.log(filename, ' changed.');
    if (filename.match(/.*\/utils\/.*/)) {
      copyUtils();
    } else {
      compileCss();
    }
  });
}


/**
 * Complie the ConciseCSS using their library
 */
function compileCss() {
  try {
    fs
      .writeFile('./dist/suprematism.scss', compile('./src/suprematism.scss'), function (err) {
        if (err) console.error(err);
        console.log("Success: CSS Compiled");
      });
  }
  catch(err){
    console.error(err);
  }
}


/**
 * Copy the Utils to the dist folder
 */
function copyUtils() {
  fse
    .copy('./src/utils', './dist/utils', function (err) {
      if (err) return console.error(err);
      console.log('Success: Copied utils to dist');
    });
}
