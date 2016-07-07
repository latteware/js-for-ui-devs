// document.write("It works.");
// document.write("It works again.");
const content = require("./content.js")
const _ = require('underscore')

window._ = _

console.log('underscore',_)
document.write(content.body)
