var watch = require('node-watch'),
    cp = require('child_process'),
    compile = require('concise-cli/lib/compile'),
    fs = require('fs'),
    fse = require('fs-extra'),
    args = process.argv.slice(2),
    concat = require('concat-files')


// By default, run both
copyUtils();
copyVars();
compileCss();


/**
 * Watch for changes in the src/lib directory
 */
if (args.length > 0 && args[0] === 'watch') {
  console.log('Watching ./src/lib diretory for changes...');
  watch('./src/lib', function(filename) {
    if (filename.match(/.*\/utils\/.*/)) {
      copyUtils();
    } else 
    if(filename.match(/.*\/vars\/.*/)){
      copyVars();
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
      .writeFile('./dist/suprematism.css', compile('./src/lib/suprematism.scss'), function (err) {
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
    .copy('./src/lib/utils', './dist/utils', function (err) {
      if (err) throw err;
      console.log('Success: Copied utils to dist');
    });
}


/**
 * Copy the Utils to the dist folder
 */
function copyVars() {
  fse
    .copy('./src/lib/vars', './dist/vars', function (err) {
      if (err) throw err;
      console.log('Success: Copied vars to dist');
    });
}


/**
 * Concat the Basscss files
 */
function concatBasscss() {
  concat([
    './dist/suprematism.css',
    './node_modules/basscss-flexbox/css/flexbox.css',
    './node_modules/basscss-layout/css/layout.css'
  ], './dist/suprematism.css', function(err) {
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

