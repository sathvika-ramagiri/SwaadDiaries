// components/MoodBasedRecipes.js
import { useState } from 'react';
import RecipeCard from './RecipeCard';
import styles from '@/styles/MoodBasedRecipes.module.css';

const MoodBasedRecipes = () => {
  const [visibleMoods, setVisibleMoods] = useState(4);

  const moodRecipes = [
    {
      id: 1,
      mood: "Comfort Food",
      emoji: "🤗",
      description: "When you need warm, cozy meals",
      recipes: [
        { name: "Mac and Cheese", image: "/images/mac-cheese.jpg", cookTime: "25 min", difficulty: "Easy" },
        { name: "Khichdi", image: "/images/khichdi.jpg", cookTime: "30 min", difficulty: "Easy" },
        { name: "Tomato Soup", image: "/images/tomato-soup.jpg", cookTime: "20 min", difficulty: "Easy" }
      ]
    },
    {
      id: 2,
      mood: "Spicy & Energetic",
      emoji: "🌶️",
      description: "When you want to spice things up",
      recipes: [
        { name: "Vindaloo", image: "/images/vindaloo.jpg", cookTime: "60 min", difficulty: "Hard" },
        { name: "Spicy Ramen", image: "/images/spicy-ramen.jpg", cookTime: "35 min", difficulty: "Medium" },
        { name: "Chili Paneer", image: "/images/chili-paneer.jpg", cookTime: "25 min", difficulty: "Medium" }
      ]
    },
    {
      id: 3,
      mood: "Light & Fresh",
      emoji: "🥗",
      description: "When you want something healthy and light",
      recipes: [
        { name: "Greek Salad", image: "/images/greek-salad.jpg", cookTime: "15 min", difficulty: "Easy" },
        { name: "Poha", image: "/images/poha.jpg", cookTime: "20 min", difficulty: "Easy" },
        { name: "Fruit Bowl", image: "/images/fruit-bowl.jpg", cookTime: "10 min", difficulty: "Easy" }
      ]
    },
    {
      id: 4,
      mood: "Sweet & Indulgent",
      emoji: "🍰",
      description: "When you're craving something sweet",
      recipes: [
        { name: "Chocolate Cake", image: "/images/chocolate-cake.jpg", cookTime: "90 min", difficulty: "Hard" },
        { name: "Gulab Jamun", image: "/images/gulab-jamun.jpg", cookTime: "45 min", difficulty: "Medium" },
        { name: "Ice Cream Sundae", image: "/images/ice-cream.jpg", cookTime: "5 min", difficulty: "Easy" }
      ]
    },
    {
      id: 5,
      mood: "Party & Social",
      emoji: "🎉",
      description: "Perfect for gatherings and celebrations",
      recipes: [
        { name: "Samosa", image: "/images/samosa.jpg", cookTime: "60 min", difficulty: "Medium" },
        { name: "Pizza", image: "/images/pizza.jpg", cookTime: "45 min", difficulty: "Medium" },
        { name: "Biryani", image: "/images/biryani.jpg", cookTime: "120 min", difficulty: "Hard" }
      ]
    },
    {
      id: 6,
      mood: "Quick & Easy",
      emoji: "⚡",
      description: "When you're short on time",
      recipes: [
        { name: "Maggi Noodles", image: "/images/maggi.jpg", cookTime: "5 min", difficulty: "Easy" },
        { name: "Sandwich", image: "/images/sandwich.jpg", cookTime: "10 min", difficulty: "Easy" },
        { name: "Upma", image: "/images/upma.jpg", cookTime: "15 min", difficulty: "Easy" }
      ]
    },
    {
      id: 7,
      mood: "Exotic & Adventurous",
      emoji: "🌍",
      description: "When you want to try something new",
      recipes: [
        { name: "Sushi", image: "/images/sushi.jpg", cookTime: "60 min", difficulty: "Hard" },
        { name: "Thai Curry", image: "/images/thai-curry.jpg", cookTime: "40 min", difficulty: "Medium" },
        { name: "Pasta Primavera", image: "/images/pasta-primavera.jpg", cookTime: "30 min", difficulty: "Medium" }
      ]
    },
    {
      id: 8,
      mood: "Nostalgic",
      emoji: "💭",
      description: "Recipes that bring back memories",
      recipes: [
        { name: "Mom's Dal", image: "/images/mom-dal.jpg", cookTime: "35 min", difficulty: "Easy" },
        { name: "Grandma's Pickle", image: "/images/pickle.jpg", cookTime: "24 hours", difficulty: "Medium" },
        { name: "Childhood Paratha", image: "/images/paratha.jpg", cookTime: "25 min", difficulty: "Easy" }
      ]
    }
  ];

  const showMoreMoods = () => {
    setVisibleMoods(prev => Math.min(prev + 4, moodRecipes.length));
  };

  const showLessMoods = () => {
    setVisibleMoods(4);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Recipes by Mood</h2>
      <div className={styles.moodsGrid}>
        {moodRecipes.slice(0, visibleMoods).map(moodData => (
          <div key={moodData.id} className={styles.moodSection}>
            <div className={styles.moodHeader}>
              <span className={styles.moodEmoji}>{moodData.emoji}</span>
              <div>
                <h3 className={styles.moodName}>{moodData.mood}</h3>
                <p className={styles.moodDescription}>{moodData.description}</p>
              </div>
            </div>
            <div className={styles.recipesGrid}>
              {moodData.recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.navigationButtons}>
        {visibleMoods < moodRecipes.length && (
          <button className={styles.showMoreBtn} onClick={showMoreMoods}>
            Show More Moods
            <span className={styles.arrow}>→</span>
          </button>
        )}
        {visibleMoods > 4 && (
          <button className={styles.showLessBtn} onClick={showLessMoods}>
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default MoodBasedRecipes;