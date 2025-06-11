// pages/recipes/index.js
import { useState } from 'react';
import Head from 'next/head';
import StateBasedRecipes from '@/app/recipe/components/StateBasedRecipes.module'
import MoodBasedRecipes from '@/app/recipe/components/MoodBasedRecipes.module';
import styles from '@/styles/StateBasedRecipes.module.css';


const RecipePage = () => {
  const [activeTab, setActiveTab] = useState('states');

  return (
    <>
      <Head>
        <title>Recipe Collection - State & Mood Based Food</title>
        <meta name="description" content="Discover recipes based on Indian states and your current mood" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Recipe Collection</h1>
          <p className={styles.subtitle}>Discover flavors from across India and match your mood</p>
        </header>

        <nav className={styles.tabNavigation}>
          <button 
            className={`${styles.tab} ${activeTab === 'states' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('states')}
          >
            State-Based Recipes
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'moods' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('moods')}
          >
            Mood-Based Recipes
          </button>
        </nav>

        <main className={styles.main}>
          {activeTab === 'states' ? <StateBasedRecipes /> : <MoodBasedRecipes />}
        </main>
      </div>
    </>
  );
};

export default RecipePage;