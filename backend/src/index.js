const express = require('express')
const routes = require('./routes')


const app = express();

//conexão com o banco de dados
require('./config/dbConfig');

app.use(express.json());
app.use(routes);

//porta de execução no localhost
app.listen(5000);