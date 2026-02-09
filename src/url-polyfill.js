// Polyfill for node:url in browser environment
// Re-exports everything from 'url' polyfill and adds fileURLToPath
var url = require('../node_modules/url/url.js');

// Simple fileURLToPath polyfill for browser environment
function fileURLToPath(fileUrl) {
  if (typeof fileUrl === 'string') {
    if (fileUrl.startsWith('file:///')) {
      return fileUrl.slice(7);
    }
    if (fileUrl.startsWith('file://')) {
      return fileUrl.slice(5);
    }
    return fileUrl;
  }
  if (fileUrl && fileUrl.pathname) {
    return fileUrl.pathname;
  }
  return String(fileUrl);
}

module.exports = url;
module.exports.fileURLToPath = fileURLToPath;
module.exports.default = url;
