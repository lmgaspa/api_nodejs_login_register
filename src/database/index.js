const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const start = process.env.URI;

if (!start) {
    console.error('A variável de ambiente URI não está definida.');
    process.exit(1);
}

async function connectDB() {
    try {
        await mongoose.connect(start, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexão com mongodb estável');
    } catch (error) {
        console.log('Falha ao autenticar com mongodb');
        console.log(error);
    }
}

mongoose.Promise = global.Promise;

module.exports = connectDB;
