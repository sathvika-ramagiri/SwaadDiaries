// FileName: MultipleFiles/route.ts
// FileContents:
import { connectDB } from '@/lib/mongodb';
import RecipePost from '@/models/RecipePost';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { userId, userName, recipeName, recipeDescription, recipeImage, stateId, difficulty } = await req.json();

    if (!userId || !userName || !recipeName || !recipeDescription) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const newRecipePost = await RecipePost.create({
      userId,
      userName,
      recipeName,
      recipeDescription,
      recipeImage,
      stateId,
      difficulty,
    });

    return NextResponse.json({ message: 'Recipe posted successfully', post: newRecipePost }, { status: 201 });
  } catch (error) {
    console.error('Error posting recipe:', error);
    return NextResponse.json({ message: 'Error posting recipe' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const posts = await RecipePost.find({}).sort({ createdAt: -1 });
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching community posts:', error);
    return NextResponse.json({ message: 'Error fetching community posts' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    await connectDB();
    const { postId, action } = await req.json();

    if (!postId || !action) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const post = await RecipePost.findById(postId);
    if (!post) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }

    // Ensure 'likes' field exists in your RecipePost model
    if (action === 'like') {
      post.likes = (post.likes || 0) + 1;
    } else if (action === 'unlike') {
      post.likes = Math.max(0, (post.likes || 0) - 1);
    } else {
      return NextResponse.json({ message: 'Invalid action' }, { status: 400 });
    }

    await post.save();
    return NextResponse.json({ message: 'Like updated successfully', post }, { status: 200 });
  } catch (error) {
    console.error('Error updating like:', error);
    return NextResponse.json({ message: 'Error updating like' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const postId = searchParams.get('id');

    if (!postId) {
      return NextResponse.json({ message: 'Missing post ID' }, { status: 400 });
    }

    const deletedPost = await RecipePost.findByIdAndDelete(postId);

    if (!deletedPost) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Post deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json({ message: 'Error deleting post' }, { status: 500 });
  }
}
