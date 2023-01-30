const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ResponsavelSchema = new Schema({
    nome: String,
    cargo: String,
    telefone: Number,
    email: String,
});

let responsavel = mongoose.model('User', ResponsavelSchema);

module.exports = responsavel;