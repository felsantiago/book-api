import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);
