const mongoose = require('mongoose')

async function connectDB() {
    await mongoose.connect('', {},
        (error) => {
            if (error) {
                console.log('Falha ao autenticar com mongodb');
                console.log(error);
                return;
            }
            console.log('Conexão com mongodb estável')
        })
}

mongoose.Promise = global.Promise;

module.exports = connectDB