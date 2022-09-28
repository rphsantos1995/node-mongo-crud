import axios from 'axios';
import {UniversityModel} from '../models/UniversityModel';
import  { endpoints }  from './endpoints';
import mongoose, { connection, connections } from 'mongoose';
import { University } from '../interfaces/UniversityInterface';

export const connectToDatabase = async (
  mongoDatabaseURI = 'mongodb://localhost:27017/docker-node-mongo',
) => await mongoose.connect(mongoDatabaseURI)
.catch(err => console.error('Erro na conexão ->', err));

connectToDatabase();

const getFromAxios = async (url: string) => {

  try {
      const response = await axios.get(url);
      return response;
  } catch (exception) {
      process.stderr.write(`ERROR received from ${url}: ${exception}\n`);
  }
}

const getDbInfo = async () => {

   try {
    const getRegisters = await UniversityModel.find();
    return getRegisters;
   } catch (error) {
      console.error(error);
   }
}

const populateDb = async (data: any) => {

  try {
    const newRegisters = await UniversityModel.insertMany(data);
    return newRegisters;
   } catch (error) {
      console.error(error);
   }

};

const getAllUniversities = async (endpoints: string[]) =>  {

  try {
    const response = await Promise.all(endpoints.map(endpoint => getFromAxios(endpoint)));
    const data =  response.map(data => data?.data);
    return data.flat();
  } catch (err) {
      console.error(err);
  }
};


export const clearDatabase = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
}

export async function resetCollection() {

  await getDbInfo()
    .then(() => clearDatabase())
    .then(() => getAllUniversities(endpoints))
    .then((universities) =>  populateDb(universities))
    .then((dbinfo) => console.log( `successfully reset with new ${dbinfo?.length} values`))
    .then(()=> setInterval(()=> process.exit(), 1000));

};

resetCollection();