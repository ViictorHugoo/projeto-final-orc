//chama o database na constante Users
const Users = require('../models/UsersData')


//exporta tudo
module.exports = {

    

    //find pega todos os dados do database
    //findOne pega apenas um dado do database (não sei usar - victor)
    //cria uma constante que recebe todos os objetos(conjunto de dados - email e password) do database
    async read(request, response) {
        
        const usersList = await Users.find();

        return response.json(usersList);
    },

    //função para criar novo usuário
    async create(request, response) {
        const { email, password } = request.body;

        //se email ou password estiver vazio, retorna erro
        if(!email || !password) {
            return response.status(400).json({error: "Necessário email e senha"})
        }

        //.create é a função do mongoose que cria um objeto com dados no database
        const userCreated = await Users.create({
            email,
            password
        });

        return response.json(userCreated);

    },


    
    async delete(request, response) {
        const { id } = request.params;

        const userDeleted = await Users.findOneAndDelete({_id : id});
        
        
        if(userDeleted) {
            return response.json(userDeleted)
        } 

        return response.status(401).json({ error: "Não foi possivel deletar o usuário"});
    }







}