import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IComment extends Document {
  recipeId: string;
  userId: string;
  userName: string;
  text: string;
  createdAt: Date;
}

const CommentSchema = new Schema<IComment>({
  recipeId: { type: String, required: true },
  userId: { type: String, required: true },
  userName: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default models.Comment || model<IComment>('Comment', CommentSchema);