import 'jest';
import request from 'supertest';
import {UniversityModel} from '../src/models/UniversityModel';
import { universityService } from '../src/services/universityService';
import {  closeDatabase } from './utils/dbs';
import { UnvRouter } from '../src/controllers/universityController';
import {connectToDatabase} from './utils/connection';
import { app } from '../src/app';


let unvRouter = new UnvRouter();

app.use('/universities', unvRouter.router);

describe('Testes de Model, Service e Rotas',  ()=>{
  
  beforeAll(async () => {
    await connectToDatabase();
  });

  afterAll(async () => {
      await closeDatabase(); 
  });

  describe('Teste Model universities',  ()=> {

    it('Espera-se que todas as universidades estejam no banco', async () => {
      const response = await UniversityModel.find();
      expect(response.length).toBeGreaterThanOrEqual(1020);
      expect(response[0]).toHaveProperty("id");
      expect(response[0]).toHaveProperty("domains");
    })
    
  })

  describe('Teste Service Universities', ()=>{

    it('Espera-se que retorne uma mensagem para id invalido', async ()=> {
      const response = await universityService.getOne('d3224');
      expect(response.data).toBeDefined();
      expect(response.data).toEqual('invalid id');
    })

  })

  describe('Teste Rotas Universities',  ()=> {

    it('GET /universities', async ()=>{
      const res = await request(app).get('/universities');
      expect(res.statusCode).toBe(200);
    })

  })

})