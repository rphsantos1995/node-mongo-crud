import {UniversityModel} from '../models/UniversityModel';
import { University, universitySchema, updateSchema, Update } from '../interfaces/UniversityInterface'
//
interface IGet {
  code: number,
  data: University[]
}
export class universityService {

  static async getAll(): Promise<IGet> {
    const allUniversities = await UniversityModel.find();
    return { code: 200, data: allUniversities };
  }

  static async getOne(id: string): Promise<any> {
    
    try {
      if (id.length !== 24) return { code: 404, data: 'invalid id' }
      const university = await UniversityModel.findOne({_id: id});

      if (!university) return { code: 404, data: 'not found' }
      return { code: 200, data: university };

    } catch (err) {
      console.error(err);
      return { code: 404, data: 'not found' };
    }

  };

  static async checkIfExists(data: University) {
    const { country, name } = data;
    const unv = await UniversityModel.find({country, name})
    return unv;
  }

  static async create(data: University): Promise<any> {

    const response = universitySchema.safeParse(data);
    if (!response.success) {
      return { code: 401, data: response.error };
    }
    
    const alreadyExists = await this.checkIfExists(data);
    
    if(alreadyExists.length) return { code: 409, data: 'Already created' };

    try {
      const newUnv = await UniversityModel.create(data)
      return { code: 201, data: newUnv };

    } catch (err) {
      console.error(err);
    }

  };

  static async update(id: string, data: Update): Promise<any> {

    const response = updateSchema.safeParse(data);
    if (!response.success) {
      return { code: 401, data: response.error };
    }
    
    try {
      const updateUnv = await UniversityModel.findOneAndUpdate({_id: id}, data, {new: true})

      if(!updateUnv) return {code: 404, data: 'not found'};
      return {code: 204, data: 'sucessfully updated'}
    } catch (err) {
      console.error(err);
    }

  }

  static async delete(id: string): Promise<any> {
    
    try {
      
      const deleteUnv = await UniversityModel.findOneAndRemove({_id: id});
      if(!deleteUnv) return {code: 404, data: 'not found'};
      return { code: 204, data: 'sucessfully deleted'}

    } catch (err) {
        console.error(err);
    }

  }

};