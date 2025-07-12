import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Comment from '@/models/Comments';

export async function POST(req: NextRequest) {
  await connectDB();

  const { recipeId, userId, userName, text } = await req.json();

  if (!recipeId || !userId || !userName || !text) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  try {
    const comment = await Comment.create({ recipeId, userId, userName, text });
    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    console.error('Error creating comment:', error);
    return NextResponse.json({ error: 'Failed to post comment.' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const recipeId = searchParams.get('recipeId');

  if (!recipeId) {
    return NextResponse.json({ error: 'Missing recipe ID' }, { status: 400 });
  }

  try {
    const comments = await Comment.find({ recipeId }).sort({ createdAt: -1 });
    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json({ error: 'Failed to fetch comments.' }, { status: 500 });
  }
}
