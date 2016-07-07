const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://localhost/clase-2')

module.exports = mongoose

