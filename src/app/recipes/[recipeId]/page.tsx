'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import allRecipes from '@/app/api/data/allRecipes.json';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Recipe {
  id: string;
  name: string;
  image: string;
  difficulty: string;
  isVeg: boolean;
  type: string;
  isInstant: boolean;
  isSpicy: boolean;
  ingredients: string[];
  procedure: string[];
  stateId: string;
  description?: string;
  time?: string;
  servings?: string;
  tags?: string[];
}

interface Comment {
  _id: string;
  userName: string;
  text: string;
  createdAt: string;
}

export default function SingleRecipePage() {
  const params = useParams();
  const recipeId = params.recipeId as string;

  const [user, setUser] = useState<any>(null);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);
  const [loadingComments, setLoadingComments] = useState(true);
  const [postingComment, setPostingComment] = useState(false);

  const recipe: Recipe | undefined = (allRecipes as Recipe[]).find((r) => r.id === recipeId);
  const fallbackImage = '/images/chef.svg';
  const isFallbackImage = !recipe?.image;

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
    fetchComments();
  }, [recipeId]);

  const fetchComments = async () => {
    setLoadingComments(true);
    try {
      const res = await fetch(`/api/comments?recipeId=${recipeId}`);
      if (res.ok) {
        const data = await res.json();
        setComments(data);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoadingComments(false);
    }
  };

  const handlePostComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert('Please login to post a comment.');
      return;
    }
    if (!commentText.trim()) {
      alert('Comment cannot be empty.');
      return;
    }

    setPostingComment(true);
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipeId,
          userId: user.email,
          userName: user.name,
          text: commentText,
        }),
      });

      if (res.ok) {
        setCommentText('');
        fetchComments();
      } else {
        const errorData = await res.json();
        alert(errorData.error || 'Failed to post comment.');
      }
    } catch (error) {
      console.error('Error posting comment:', error);
      alert('An error occurred while posting your comment.');
    } finally {
      setPostingComment(false);
    }
  };

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <Navbar />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Recipe Not Found</h1>
        <p className="text-gray-600">The recipe you are looking for does not exist.</p>
        <Footer id="footer" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-18 flex-1">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Recipe Card */}
          <div className="md:w-2/3 w-full">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Image */}
              <div className="relative h-64 w-full bg-gray-50">
                <Image
                  src={recipe.image || fallbackImage}
                  alt={recipe.name || 'Recipe Image'}
                  fill
                  className={`w-full h-full ${isFallbackImage ? 'object-cover p-4' : 'object-contain'}`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== window.location.origin + fallbackImage) {
                      target.src = fallbackImage;
                    }
                  }}
                  unoptimized
                  priority
                />
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {recipe.isVeg && (
                    <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
                      Vegetarian
                    </span>
                  )}
                  {recipe.isSpicy && (
                    <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
                      Spicy
                    </span>
                  )}
                  {recipe.isInstant && (
                    <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
                      Instant
                    </span>
                  )}
                </div>
                <span className="absolute top-4 right-4 bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {recipe.difficulty?.charAt(0).toUpperCase() + recipe.difficulty?.slice(1) || 'Medium'}
                </span>
                <span className="absolute bottom-4 left-4 bg-white/80 text-gray-800 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1 shadow">
                  <svg className="w-4 h-4 text-orange-500 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 12.414a2 2 0 0 0-2.828 0l-4.243 4.243a8 8 0 1 1 11.314 0z"/><circle cx="12" cy="12" r="3"/></svg>
                  {recipe.stateId?.charAt(0).toUpperCase() + recipe.stateId?.slice(1)}
                </span>
              </div>

              {/* Details */}
              <div className="p-8">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">{recipe.name}</h1>
                <p className="text-gray-600 mb-4 text-lg">{recipe.description || 'A delicious traditional recipe.'}</p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-6 mb-6 text-gray-700 text-sm">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    {recipe.time || '1.5 hours'}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-3-3.87"/><path d="M9 21v-2a4 4 0 0 1 3-3.87"/><circle cx="12" cy="7" r="4"/></svg>
                    {recipe.servings || 'Serves 4'}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M12 4v16"/><path d="M4 4v16"/></svg>
                    {recipe.type.charAt(0).toUpperCase() + recipe.type.slice(1)}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {(recipe.tags || ['comfort', 'festive']).map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>

                {/* Ingredients */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-orange-700 mb-3">Ingredients</h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>

                {/* Procedure */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-orange-700 mb-3">Procedure</h2>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2 pl-2">
                    {recipe.procedure.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>

                {/* Tips */}
                <div className="bg-orange-50 rounded-lg p-4 text-gray-700">
                  <h3 className="font-semibold mb-2">Chef's Tip</h3>
                  <p>For best results, use fresh ingredients and serve hot. Share your own tips and photos with the community!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="md:w-1/3 w-full">
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
              <h2 className="text-xl font-bold text-orange-700 mb-4">Comments & Discussion</h2>
              {user ? (
                <form onSubmit={handlePostComment} className="mb-4">
                  <textarea
                    className="w-full border border-gray-300 rounded-lg p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-orange-200"
                    rows={3}
                    placeholder="Share your thoughts, tips, or questions..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    disabled={postingComment}
                  />
                  <button
                    type="submit"
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
                    disabled={postingComment}
                  >
                    {postingComment ? 'Posting...' : 'Post Comment'}
                  </button>
                </form>
              ) : (
                <p className="text-gray-600 mb-4">Please login to post a comment.</p>
              )}
              {loadingComments ? (
                <p className="text-gray-500">Loading comments...</p>
              ) : comments.length === 0 ? (
                <p className="text-gray-500">No comments yet. Be the first to comment!</p>
              ) : (
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment._id} className="border-b pb-2 last:border-b-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-800">{comment.userName}</span>
                        <span className="text-xs text-gray-400">
                          {new Date(comment.createdAt).toLocaleString()}
                        </span>
                      </div>
                      <p className="text-gray-700">{comment.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer id="footer" />
    </div>
  );
}
