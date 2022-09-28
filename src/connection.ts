import mongoose from 'mongoose';

const MONGO_DB_URL = 'mongodb://mongodb:27017/docker-node-mongo';

const connectToDatabase = (
  mongoDatabaseURI = MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURI)
.then(()=> console.log('conectado com sucesso!'))
.catch(err => console.error('Erro na conexão ->', err));

export default connectToDatabase;
