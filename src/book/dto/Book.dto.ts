import * as mongoose from 'mongoose';
import { IsNotEmpty } from 'class-validator';

export class BookDTO extends mongoose.Document {
  name: string;

  @IsNotEmpty()
  author: string;
}
