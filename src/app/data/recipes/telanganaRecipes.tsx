export const stateRecipes = [
  {
    id: "1",
    name: "Hyderabadi Biryani",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbiUyMGJpcnlhbml8ZW58MHx8MHx8fDA%3D",
    difficulty: "moderate",
    isVeg: false,
    type: "dinner",
    isInstant: false,
    isSpicy: true,
    ingredients: ["rice", "chicken", "yogurt", "spices"],
    stateId: "telangana"
  },
  {
    id: "2",
    name: "Pesarattu",
    image: "https://images.unsplash.com/photo-1617196038433-5b8b3c5e6c4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVzYXJhdHR1fGVufDB8fDB8fHww",
    difficulty: "easy",
    isVeg: true,
    type: "snack",
    isInstant: false,
    isSpicy: false,
    ingredients: ["green gram", "ginger", "green chilies", "rice flour"],
    stateId: "telangana"
  },
  {
    id: "3",
    name: "Sarva Pindi",
    image: "https://images.unsplash.com/photo-1601314164705-0c7c4f8c7b3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FydmElMjBwaW5kaXxlbnwwfHwwfHx8MA%3D%3D",
    difficulty: "moderate",
    isVeg: true,
    type: "snack",
    isInstant: false,
    isSpicy: true,
    ingredients: ["rice flour", "chana dal", "green chilies", "curry leaves"],
    stateId: "telangana"
  },
  {
    id: "4",
    name: "Double Ka Meetha",
    image: "https://images.unsplash.com/photo-1617196038433-5b8b3c5e6c4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG91YmxlJTIwa2ElMjBtZWV0aGF8ZW58MHx8MHx8fDA%3D",
    difficulty: "easy",
    isVeg: true,
    type: "sweet",
    isInstant: false,
    isSpicy: false,
    ingredients: ["bread", "milk", "sugar", "dry fruits"],
    stateId: "telangana"
  },
  {
    id: "5",
    name: "Gongura Mutton",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z29uZ3VyYSUyMG11dHRvbnxlbnwwfHwwfHx8MA%3D%3D",
    difficulty: "hard",
    isVeg: false,
    type: "dinner",
    isInstant: false,
    isSpicy: true,
    ingredients: ["mutton", "gongura leaves", "spices", "onions"],
    stateId: "telangana"
  },
  {
    id: "6",
    name: "Kodi Kura",
    image: "https://images.unsplash.com/photo-1601314164705-0c7c4f8c7b3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMGN1cnJ5fGVufDB8fDB8fHww",
    difficulty: "moderate",
    isVeg: false,
    type: "dinner",
    isInstant: false,
    isSpicy: true,
    ingredients: ["chicken", "onions", "spices", "curry leaves"],
    stateId: "telangana"
  },
  {
    id: "7",
    name: "Bobbatlu",
    image: "https://images.unsplash.com/photo-1617196038433-5b8b3c5e6c4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3dlZXQlMjBmbGF0YnJlYWR8ZW58MHx8MHx8fDA%3D",
    difficulty: "easy",
    isVeg: true,
    type: "sweet",
    isInstant: false,
    isSpicy: false,
    ingredients: ["wheat flour", "jaggery", "cardamom", "ghee"],
    stateId: "telangana"
  },
  {
    id: "8",
    name: "Mirchi Bajji",
    image: "https://images.unsplash.com/photo-1601314164705-0c7c4f8c7b3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BpY3klMjBzbmlja3xlbnwwfHwwfHx8MA%3D%3D",
    difficulty: "easy",
    isVeg: true,
    type: "snack",
    isInstant: true,
    isSpicy: true,
    ingredients: ["green chilies", "gram flour", "spices", "oil"],
    stateId: "telangana"
  }
] as const;

// Update the Recipe type to match the readonly structure
export type Recipe = {
  id: string;
  name: string;
  image: string;
  difficulty: "easy" | "moderate" | "hard";
  isVeg: boolean;
  type: "dinner" | "snack" | "sweet";
  isInstant: boolean;
  isSpicy: boolean;
  ingredients: readonly string[]; // Use readonly here
  stateId: string;
};