import * as dotenv from 'dotenv'
dotenv.config()

import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.URI);

async function connectDB() {
    await mongoose.connect(client, {},
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