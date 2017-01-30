var watch = require('node-watch'),
    cp = require('child_process'),
    compile = require('concise-cli/lib/compile'),
    fs = require('fs'),
    fse = require('fs-extra'),
    args = process.argv.slice(2),
    concat = require('concat-files')


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
        if (err) throw err;
        console.log("Success: CSS Compiled");
        concatBasscss();
        console.log("Success: Concat\' all additional thirdparty CSS");
        copyAudriFonts();
        console.log("Success: Copied additional files");
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
      if (err) throw err;
      console.log('Success: Copied utils to dist');
    });
}


/**
 * Concat the Basscss files
 */
function concatBasscss() {
  concat([
    './dist/suprematism.scss',
    './node_modules/basscss-flexbox/css/flexbox.css',
    './node_modules/basscss-layout/css/layout.css'
  ], './dist/suprematism.scss', function(err) {
    if (err) throw err;
    console.log('Concat\'d: Basscss flexbox utility');
    console.log('Concat\'d: Basscss layout utility');
  });
}
 
/**
 * Copy Icon fonts
 */
function copyAudriFonts() {
  fse
    .copy('./node_modules/suprematism-font-icons/fonts', './dist/fonts', function (err) {
      if (err) throw err;
      console.log('Copied: Audri Icons')
    });
}

