require('babel-register')();

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'nagivator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  } 
});

global.nagivator = {
  userAgent: 'node.js'
}

documentRef = document;
