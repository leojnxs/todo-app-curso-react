/*
    Set MongoDB access configuration
*/
const mongoose = require('mongoose')

// Set mongoose to use the node promise library, cause mongoose promise library is deprecated
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo')