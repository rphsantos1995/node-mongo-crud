import { Document, Schema, model as createModel } from 'mongoose';
import { University } from '../interfaces/UniversityInterface';


export interface UniversityDocument extends University, Document { }


export const universitySchema = new Schema<UniversityDocument>({
  alpha_two_code: String,
  web_pages: [String],
  name: String,
  country: String,
  domains: [String],
  state_province: {
    type: String
  },
}, { versionKey: false });



export const UniversityModel = createModel('Universities', universitySchema )

