// components/RecipeCard.js
import Image from 'next/image';
import styles from '@/styles/RecipeCard.module.css';

const RecipeCard = ({ recipe }) => {
  if (!recipe || !recipe.image) {
  return null; // or a fallback UI
}
  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return '#4CAF50';
      case 'medium': return '#FF9800';
      case 'hard': return '#F44336';
      default: return '#757575';
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={recipe.image || '/images/placeholder-recipe.jpg'}
          alt={recipe.name}
          width={300}
          height={200}
          className={styles.recipeImage}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PC9zdmc+"
        />
        <div className={styles.overlay}>
          <button className={styles.viewRecipeBtn}>View Recipe</button>
        </div>
      </div>
      
      <div className={styles.cardContent}>
        <h4 className={styles.recipeName}>{recipe.name}</h4>
        <div className={styles.recipeDetails}>
          <div className={styles.detailItem}>
            <span className={styles.icon}>⏱️</span>
            <span className={styles.detailText}>{recipe.cookTime || 'N/A'}</span>
            <span className={styles.detailText}>{recipe.cookTime}</span>
          </div>
          <div className={styles.detailItem}>
            <span 
              className={styles.difficultyBadge}
              style={{ backgroundColor: getDifficultyColor(recipe.difficulty) }}
            >
              {recipe.difficulty}
            </span>
          </div>
        </div>
        
        <div className={styles.actions}>
          <button className={styles.saveBtn}>
            <span className={styles.icon}>❤️</span>
            Save
          </button>
          <button className={styles.shareBtn}>
            <span className={styles.icon}>📤</span>
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;