//conexão do banco de dados 

const mongoose = require('mongoose')

const dbConfig = 'mongodb+srv://usuario:usuario@orcproject.fdiw8zw.mongodb.net/Users?retryWrites=true&w=majority'

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true

});

module.exports = connection;