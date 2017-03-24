/*
    Arquivo para condiguração do acesso ao MongoDB
*/
const mongoose = require('mongoose')

// Faz com que o mongoose utilize a biblioteca de Promise do node, pois a do mongoose está depreciada.
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo')