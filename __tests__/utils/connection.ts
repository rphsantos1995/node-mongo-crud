
import mongoose from 'mongoose';

export const connectToDatabase = async (
  mongoDatabaseURI = 'mongodb://localhost:27017/docker-node-mongo',
) => await mongoose.connect(mongoDatabaseURI)
.catch(err => console.error('Erro na conexão ->', err));