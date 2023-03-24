const mongoose = require('mongoose');

//modo de organização dos dados no database
const UsersDataSchema = new mongoose.Schema({
    email: String,
    password: String,
});

//cria o collection no mongo para armazenamento de dados
module.exports = mongoose.model('UsersSchema', UsersDataSchema);