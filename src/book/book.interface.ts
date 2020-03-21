import * as mongoose from 'mongoose';

export interface IBook extends mongoose.Document {
  name: string;
  author: string;
}
