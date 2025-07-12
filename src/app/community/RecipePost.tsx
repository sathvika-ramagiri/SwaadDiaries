// FileName: MultipleFiles/RecipePost.ts
// FileContents:
import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IRecipePost extends Document {
  userId: string;
  userName: string;
  recipeName: string;
  recipeDescription: string;
  recipeImage?: string;
  stateId?: string;
  difficulty?: string;
  createdAt: Date;
  likes?: number; // Add this line for the likes count
}

const RecipePostSchema = new Schema<IRecipePost>({
  userId: { type: String, required: true },
  userName: { type: String, required: true },
  recipeName: { type: String, required: true },
  recipeDescription: { type: String, required: true },
  recipeImage: { type: String },
  stateId: { type: String },
  difficulty: { type: String },
  createdAt: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 }, // Add this line to the schema
});

export default models.RecipePost || model<IRecipePost>('RecipePost', RecipePostSchema);
