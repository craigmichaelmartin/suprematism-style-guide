var cheerio = require('cheerio'),
    fs = require('fs');

// read the file in
fs.readFile('./node_modules/suprematism-font-icons/demo.html', dataLoaded);

function dataLoaded(err, data) {
  var htmlFile = `<h1><a id="top"></a>Icons</h1>`;
  $ = cheerio.load('' + data + '');
  htmlFile += '<div id="all-icons" class="_pbs _pts _mtxl _mbxl flex flex-wrap">';
  $('.glyph span.u-supre-icon')
    .each(function(i, elem) {
      htmlFile += `<div class="${elem.attribs.class}"></div>`;
    });
  htmlFile += '</div>';
  htmlFile += '<div id="all-icon-list" class="_bt1 border-active-stroke flex flex-wrap _mrxl _ptl">';
  $('.glyph span.u-supre-icon')
    .each(function(i, elem) {
      htmlFile += `
<div class="_pbs _pts ">
    <span class="${elem.attribs.class}"></span>
    &nbsp;
    ${elem.attribs.class.split(' ')[1]}
</div>
`;
    });
  htmlFile += '</div>';
  
  // write the file
  fs
    .writeFile(
      './src/docs/src/app/sections/icons/icons.component.html',
      htmlFile, 
      function(err) {
        console.log('Written html to: ./src/docs/src/app/sections/icons/icons.component.html');
      }
    );

}
