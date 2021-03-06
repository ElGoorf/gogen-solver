const fs = require("fs");
const normalizedPath = require("path").join(__dirname);

function getAvailableSamples() {
  return fs.readdirSync(normalizedPath);
}

function generateExportObj() {
  return getAvailableSamples().reduce((arr, fileName) => {
    if (fileName.match(/.json/)) {
      arr[fileName] = JSON.parse(fs.readFileSync(`${normalizedPath}\\${fileName}`));
    }
    return arr;
  }, {})
}

function generateExportList() {
  return getAvailableSamples().map(fileName => `${normalizedPath}\\${fileName}`)
}

module.exports = generateExportObj();
