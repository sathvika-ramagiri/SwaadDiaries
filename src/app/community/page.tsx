'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Heart, MessageCircle, Share2, Trash2, Users, Camera, BookOpen, Upload, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SignupPage from '@/app/auth/SignupPage';

interface CommunityPost {
  _id: string;
  userName: string;
  recipeName: string;
  recipeDescription: string;
  recipeImage?: string;
  stateId?: string;
  difficulty?: string;
  createdAt: string;
  userId?: string;
  likes?: number;
}

export default function Community() {
  const [user, setUser] = useState<any>(null);
  const [showPostForm, setShowPostForm] = useState(false);
  const [recipeName, setRecipeName] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');
  const [recipeImage, setRecipeImage] = useState('');
  const [stateId, setStateId] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [postingRecipe, setPostingRecipe] = useState(false);
  const [communityPosts, setCommunityPosts] = useState<CommunityPost[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [showSignup, setShowSignup] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const footerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) setUser(JSON.parse(userData));
    
    const liked = localStorage.getItem('likedPosts');
    if (liked) setLikedPosts(new Set(JSON.parse(liked)));
    
    fetchCommunityPosts();
  }, []);

  // Fetch posts from your backend
  const fetchCommunityPosts = async () => {
    setLoadingPosts(true);
    try {
      const res = await fetch('/api/community');
      if (res.ok) {
        const data = await res.json();
        setCommunityPosts(data);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoadingPosts(false);
    }
  };

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please select a valid image file (JPEG, JPG, PNG, or WebP)');
        return;
      }

      // Validate file size (5MB limit)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        alert('File size should be less than 5MB');
        return;
      }

      setImageFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove selected image
  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Post a new recipe
  const handlePostRecipe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert('Please login to post a recipe.');
      return;
    }
    
    if (!recipeName.trim() || !recipeDescription.trim()) {
      alert('Recipe name and description are required.');
      return;
    }

    setPostingRecipe(true);
    let uploadedImageUrl = '';

    // Upload image if selected
    if (imageFile) {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', imageFile);
      
      try {
        const uploadRes = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });
        
        if (uploadRes.ok) {
          const { url } = await uploadRes.json();
          uploadedImageUrl = url;
        } else {
          const error = await uploadRes.json();
          alert(error.error || 'Image upload failed.');
          setPostingRecipe(false);
          setUploading(false);
          return;
        }
      } catch (err) {
        console.error('Upload error:', err);
        alert('Error uploading image.');
        setPostingRecipe(false);
        setUploading(false);
        return;
      }
      setUploading(false);
    }

    // Create post
    try {
      const res = await fetch('/api/community', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.email,
          userName: user.name,
          recipeName: recipeName.trim(),
          recipeDescription: recipeDescription.trim(),
          recipeImage: uploadedImageUrl,
          stateId: stateId.trim(),
          difficulty,
        }),
      });

      if (res.ok) {
        // Reset form
        setRecipeName('');
        setRecipeDescription('');
        setStateId('');
        setDifficulty('');
        setImageFile(null);
        setImagePreview(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        setShowPostForm(false);
        fetchCommunityPosts();
        alert('Recipe posted successfully!');
      } else {
        const error = await res.json();
        alert(error.error || 'Failed to post recipe.');
      }
    } catch (err) {
      console.error('Post error:', err);
      alert('Error posting recipe.');
    } finally {
      setPostingRecipe(false);
    }
  };

  // Handle like/unlike
  const handleLike = async (postId: string) => {
    if (!user) {
      alert('Please login to like posts.');
      return;
    }

    const isLiked = likedPosts.has(postId);
    const action = isLiked ? 'unlike' : 'like';

    try {
      const res = await fetch('/api/community', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId, action }),
      });

      if (res.ok) {
        // Update local state
        setCommunityPosts(posts =>
          posts.map(post =>
            post._id === postId 
              ? { ...post, likes: (post.likes || 0) + (isLiked ? -1 : 1) }
              : post
          )
        );

        // Update liked posts
        const newLikedPosts = new Set(likedPosts);
        if (isLiked) {
          newLikedPosts.delete(postId);
        } else {
          newLikedPosts.add(postId);
        }
        setLikedPosts(newLikedPosts);
        localStorage.setItem('likedPosts', JSON.stringify([...newLikedPosts]));
      } else {
        alert('Failed to update like.');
      }
    } catch (error) {
      console.error('Like error:', error);
      alert('Error updating like.');
    }
  };

  // Share a post
  const handleShare = async (post: CommunityPost) => {
    const shareData = {
      title: `${post.recipeName} - SwaadDiaries`,
      text: `Check out this amazing recipe: ${post.recipeName}\n\n${post.recipeDescription}`,
      url: window.location.href,
    };

    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        // Fallback to clipboard
        await navigator.clipboard.writeText(
          `${shareData.title}\n\n${shareData.text}\n\n${shareData.url}`
        );
        alert('Recipe details copied to clipboard!');
      }
    } catch (error) {
      console.error('Share error:', error);
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (clipboardError) {
        console.error('Clipboard error:', clipboardError);
        alert('Unable to share. Please copy the link manually.');
      }
    }
  };

  // Delete a post
  const handleDeletePost = async (postId: string) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;
    
    try {
      const res = await fetch(`/api/community?id=${postId}`, { 
        method: 'DELETE' 
      });
      
      if (res.ok) {
        setCommunityPosts(posts => posts.filter(p => p._id !== postId));
        alert('Post deleted successfully!');
      } else {
        const error = await res.json();
        alert(error.error || 'Failed to delete post.');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Error deleting post.');
    }
  };

  // Scroll to footer
  const handleLearnMore = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to the <span className="text-orange-600">
              <span style={{ color: '#ffb80e' }}>Swaad</span>
              <span style={{ color: '#ff6e0e' }}>Diaries</span>
            </span> Community
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of food lovers sharing their culinary adventures, family recipes, and cultural stories from across India
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">50K+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Camera className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">25K+</div>
              <div className="text-gray-600">Recipes Shared</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <BookOpen className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Food Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Post New Recipe Section */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          {user ? (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Share Your Recipe!</h2>
              <button
                onClick={() => setShowPostForm(!showPostForm)}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold mb-4"
              >
                {showPostForm ? 'Hide Form' : 'Post a New Recipe'}
              </button>
              
              {showPostForm && (
                <form onSubmit={handlePostRecipe} className="space-y-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Recipe Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter recipe name"
                      value={recipeName}
                      onChange={e => setRecipeName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Recipe Description *
                    </label>
                    <textarea
                      placeholder="Describe your recipe, ingredients, and cooking method..."
                      value={recipeDescription}
                      onChange={e => setRecipeDescription(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      rows={4}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Recipe Image (JPEG, JPG, PNG, WebP - Max 5MB)
                    </label>
                    <div className="flex items-center space-x-4">
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/jpeg,image/jpg,image/png,image/webp"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Choose Image
                      </button>
                      {imageFile && (
                        <span className="text-sm text-gray-600">
                          {imageFile.name}
                        </span>
                      )}
                    </div>
                    
                    {imagePreview && (
                      <div className="mt-4 relative inline-block">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-32 h-32 object-cover rounded-lg border-2 border-gray-200"
                        />
                        <button
                          type="button"
                          onClick={removeImage}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Maharashtra, Punjab, etc."
                      value={stateId}
                      onChange={e => setStateId(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Difficulty Level
                    </label>
                    <select
                      value={difficulty}
                      onChange={e => setDifficulty(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">Select Difficulty</option>
                      <option value="easy">Easy</option>
                      <option value="moderate">Moderate</option>
                      <option value="hard">Hard</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={postingRecipe}
                  >
                    {postingRecipe ? (
                      <span className="flex items-center">
                        {uploading ? 'Uploading image...' : 'Posting recipe...'}
                      </span>
                    ) : (
                      'Submit Recipe'
                    )}
                  </button>
                </form>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <p className="text-gray-600 text-lg mb-4">
                Please login to share your recipes with the community!
              </p>
              <button
                onClick={() => setShowSignup(true)}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Sign Up / Login
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Community Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            What Makes Our Community Special
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-orange-50">
              <Heart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Share Your Heritage</h3>
              <p className="text-gray-600">
                Connect with your roots by sharing traditional family recipes and the stories behind them
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-green-50">
              <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Learn & Discuss</h3>
              <p className="text-gray-600">
                Get cooking tips, ask questions, and learn from experienced home cooks across India
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-blue-50">
              <Share2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Discover New Flavors</h3>
              <p className="text-gray-600">
                Explore regional cuisines and discover hidden gems from every corner of the country
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Posts Display */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Community Recipes
          </h2>
          {loadingPosts ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
              <p className="text-gray-500">Loading community recipes...</p>
            </div>
          ) : communityPosts.length === 0 ? (
            <div className="text-center py-12">
              <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No community recipes posted yet.</p>
              <p className="text-gray-400">Be the first to share your delicious recipe!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {communityPosts.map((post) => (
                <div key={post._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 w-full relative">
                    <Image
                      src={
                        post.recipeImage &&
                        /^\/uploads\/[^\/]+\.(jpg|jpeg|png|webp)$/i.test(post.recipeImage)
                          ? post.recipeImage
                          : '/images/placeholder-recipe.jpg'
                      }
                      alt={post.recipeName}
                      fill
                      className="object-cover"
                      priority={false}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center mr-3">
                        <span className="text-orange-800 font-semibold">
                          {post.userName.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{post.userName}</h4>
                        <p className="text-sm text-gray-500">
                          {post.stateId && `${post.stateId.charAt(0).toUpperCase() + post.stateId.slice(1)}, `}
                          {new Date(post.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{post.recipeName}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.recipeDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button
                          className={`flex items-center transition-colors ${
                            likedPosts.has(post._id)
                              ? 'text-red-600 hover:text-red-700'
                              : 'text-gray-400 hover:text-red-600'
                          }`}
                          onClick={() => handleLike(post._id)}
                          title={likedPosts.has(post._id) ? 'Unlike' : 'Like'}
                        >
                          <Heart 
                            className={`w-5 h-5 mr-1 ${
                              likedPosts.has(post._id) ? 'fill-current' : ''
                            }`} 
                          />
                          <span className="font-medium">{post.likes || 0}</span>
                        </button>
                        <button
                          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                          onClick={() => handleShare(post)}
                          title="Share"
                        >
                          <Share2 className="w-5 h-5 mr-1" />
                          <span className="font-medium">Share</span>
                        </button>
                        {user && (user.email === post.userId || user.name === post.userName) && (
                          <button
                            className="flex items-center text-gray-400 hover:text-red-600 transition-colors"
                            title="Delete"
                            onClick={() => handleDeletePost(post._id)}
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                      {post.difficulty && (
                        <div className={`text-sm font-medium px-2 py-1 rounded-full ${
                          post.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                          post.difficulty === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {post.difficulty.charAt(0).toUpperCase() + post.difficulty.slice(1)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Join Community CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Food Family?</h2>
          <p className="text-xl mb-8">
            Share your recipes, learn from others, and be part of India's largest food community
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              onClick={() => setShowSignup(true)}
            >
              Sign Up Free
            </button>
            <button
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors"
              onClick={handleLearnMore}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Signup Modal */}
      {showSignup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <SignupPage onClose={() => setShowSignup(false)} onSwitch={() => setShowSignup(false)} />
          </div>
        </div>
      )}

     <Footer id="footer" />
      
    </main>
  );
}