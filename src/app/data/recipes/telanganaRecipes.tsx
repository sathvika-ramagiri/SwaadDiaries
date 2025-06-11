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
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FydmElMjBwaW5kaXxlbnwwfHwwfDB8MA%3D%3D",
    difficulty: "moderate",
    isVeg: true,
    type: "snack",
    isInstant: false,
    isSpicy: true,
    ingredients: ["rice flour", "peanuts", "onion", "spices"],
    stateId: "telangana"
  },
  {
    id: "4",
    name: "Gongura Pachadi",
    image: "https://images.unsplash.com/photo-1617196038433-5b8b3c5e6c4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z29uZ3VyYSUyMHBhY2hhZGklMjB0ZWxhbmdhbmF8ZW58MHx8MHx8MA%3D%3D",
    difficulty: "easy",
    isVeg: true,
    type: "dinner",
    isInstant: false,
    isSpicy: true,
    ingredients: ["gongura leaves", "green chilies", "tamarind", "spices"],
    stateId: "telangana"
  },{
  id: "5",
  name: "Qubani Ka Meetha",
  image: "https://images.unsplash.com/photo-1617196038433-5b8b3c5e6c4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cXVibWFuaSUyMGthJTIwbWVldGhhfGVufDB8fDB8fHww",
  difficulty: "easy",
  isVeg: true,
  type: "sweet",
  isInstant: false,
  isSpicy: false,
  ingredients: ["apricots", "sugar", "almonds", "cream"],
  stateId: "telangana"
},{
  id: "6",
  name: "Gongura Mutton",
  image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z29uZ3VyYSUyMG11dHRvbnxlbnwwfHwwfHx8MA%3D%3D",
  difficulty: "hard",
  isVeg: false,
  type: "dinner",
  isInstant: false,
  isSpicy: true,
  ingredients: ["mutton", "gongura leaves", "spices", "onions"],
  stateId: "telangana"
}
  // ... other recipes
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