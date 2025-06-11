
export interface State {
  id: string
  name: string
  speciality: string
  image: string
  recipeCount: number
  famousDish: string
}

export const indianStates: State[] = [

   {
    id: 'telangana',
    name: 'Telangana',
    speciality: 'Spicy & Aromatic',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHlkZXJhYmFkJTIwYmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D',
    recipeCount: 35,
    famousDish: 'Hyderabadi Biryani'
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    speciality: 'Temple Traditions',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    recipeCount: 43,
    famousDish: 'Sambar Rice'
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    speciality: 'Street Food Heaven',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    recipeCount: 39,
    famousDish: 'Vada Pav'
  },
  {
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    speciality: 'Fiery Flavors',
    image: 'https://media.istockphoto.com/id/1168154921/photo/comforting-curd-rice-is-a-popular-dish-from-south-india-with-yogurt-and-then-tempered-with.jpg?s=1024x1024&w=is&k=20&c=opnaR2iGkc33kiyVVryNeX0_bcADSb964PXBdCbBa5w=',
    recipeCount: 40,
    famousDish: 'Andhra Chicken Curry'
  },
  {
    id: 'arunachal-pradesh',
    name: 'Arunachal Pradesh',
    speciality: 'Tribal Taste',
    image: 'https://cdn.pixabay.com/photo/2020/09/21/14/06/meal-5590184_1280.jpg',
    recipeCount: 18,
    famousDish: 'Thukpa'
  },
  {
    id: 'assam',
    name: 'Assam',
    speciality: 'Tea & Fish Delights',
    image: 'https://cdn.pixabay.com/photo/2016/10/14/18/21/tee-1740871_640.jpg',
    recipeCount: 28,
    famousDish: 'Masor Tenga'
  },
  {
    id: 'bihar',
    name: 'Bihar',
    speciality: 'Rustic & Rooted',
    image: 'https://cdn.pixabay.com/photo/2015/04/20/12/27/litti-731068_1280.jpg',
    recipeCount: 27,
    famousDish: 'Litti Chokha'
  },
  {
    id: 'chhattisgarh',
    name: 'Chhattisgarh',
    speciality: 'Tribal Essence',
    image: 'https://cdn.pixabay.com/photo/2020/05/10/13/53/naan-5154130_640.jpg',
    recipeCount: 20,
    famousDish: 'Chana Samosa'
  },
  {
    id: 'goa',
    name: 'Goa',
    speciality: 'Beach & Spice',
    image: 'https://cdn.pixabay.com/photo/2018/09/19/12/47/fish-curry-3688482_640.jpg',
    recipeCount: 24,
    famousDish: 'Goan Fish Curry'
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    speciality: 'Sweet & Savory',
    image: 'https://images.unsplash.com/photo-1714799263291-272975db795a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGhva2xhfGVufDB8fDB8fHww',
    recipeCount: 36,
    famousDish: 'Dhokla'
  },
  {
    id: 'haryana',
    name: 'Haryana',
    speciality: 'Rustic Simplicity',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    recipeCount: 22,
    famousDish: 'Bajra Khichdi'
  },
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    speciality: 'Mountain Herbs',
    image: 'https://cdn.pixabay.com/photo/2016/03/21/21/33/chana-masala-1271639_640.jpg',
    recipeCount: 25,
    famousDish: 'Chana Madra'
  },
  {
    id: 'jharkhand',
    name: 'Jharkhand',
    speciality: 'Forest Fresh',
    image: 'https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_640.jpg',
    recipeCount: 19,
    famousDish: 'Thekua'
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    speciality: 'Filter Coffee & Flavors',
    image: 'https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_1280.jpg',
    recipeCount: 41,
    famousDish: 'Bisi Bele Bath'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    speciality: 'Coconut Rich',
    image: 'https://cdn.pixabay.com/photo/2018/09/19/12/46/curry-3688480_640.jpg',
    recipeCount: 38,
    famousDish: 'Appam with Stew'
  },
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    speciality: 'Central Treats',
    image: 'https://cdn.pixabay.com/photo/2022/05/07/16/38/poha-7180676_640.jpg',
    recipeCount: 30,
    famousDish: 'Poha Jalebi'
  },
  {
    id: 'manipur',
    name: 'Manipur',
    speciality: 'Fermented Goodness',
    image: 'https://cdn.pixabay.com/photo/2016/11/18/13/48/food-1834645_640.jpg',
    recipeCount: 18,
    famousDish: 'Eromba'
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    speciality: 'Smoked Flavors',
    image: 'https://cdn.pixabay.com/photo/2022/09/22/04/46/kitchen-7471627_640.jpg',
    recipeCount: 17,
    famousDish: 'Jadoh'
  },
 {
  id: 'mizoram',
  name: 'Mizoram',
  speciality: 'Simple & Steamed',
  image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80', // Bai (vegetable stew)
  recipeCount: 15,
  famousDish: 'Bai'
},
{
  id: 'nagaland',
  name: 'Nagaland',
  speciality: 'Smoky & Spicy',
  image: 'https://images.unsplash.com/photo-1575526854473-e85fdba07b7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGluYSUyMGZvb2R8ZW58MHx8MHx8fDA%3D', // Smoked Pork
  recipeCount: 16,
  famousDish: 'Smoked Pork with Bamboo Shoot'
},
{
  id: 'odisha',
  name: 'Odisha',
  speciality: 'Temple Cuisine',
  image: 'https://images.unsplash.com/photo-1743674453123-93356ade2891?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaW5hJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D', // Dalma
  recipeCount: 29,
  famousDish: 'Dalma'
},
{
  id: 'punjab',
  name: 'Punjab',
  speciality: 'Rich & Creamy',
  image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=500&q=80', // Butter Chicken
  recipeCount: 42,
  famousDish: 'Butter Chicken'
},
{
  id: 'rajasthan',
  name: 'Rajasthan',
  speciality: 'Desert Delights',
  image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80', // Dal Baati Churma
  recipeCount: 37,
  famousDish: 'Dal Baati Churma'
},
{
  id: 'sikkim',
  name: 'Sikkim',
  speciality: 'Fusion of Flavors',
  image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9tb3N8ZW58MHx8MHx8fDA%3D', // Phagshapa (pork with radish)
  recipeCount: 14,
  famousDish: 'Phagshapa'
},
{
  id: 'tripura',
  name: 'Tripura',
  speciality: 'Tribal Traditions',
  image: 'https://images.unsplash.com/photo-1666251214795-a1296307d29c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJpcHVyYSUyMGZhbW91cyUyMGZvb2RkfGVufDB8fDB8fHww', // Mui Borok (fermented fish)
  recipeCount: 13,
  famousDish: 'Mui Borok'
},
{
  id: 'uttar-pradesh',
  name: 'Uttar Pradesh',
  speciality: 'Royal & Street Food',
  image: 'https://images.unsplash.com/photo-1589778655375-3e622a9fc91c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHV0dGFyJTIwcHJhZGVzaCUyMGZvb2R8ZW58MHx8MHx8fDA%3D', // Tunde Kabab
  recipeCount: 45,
  famousDish: 'Tunde Kabab'
},
{
  id: 'uttarakhand',
  name: 'Uttarakhand',
  speciality: 'Mountain Simplicity',
  image: 'https://images.unsplash.com/photo-1746274394124-141a1d1c5af3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFV0dGFyYWtoYW5kaSUyMGZvb2R8ZW58MHx8MHx8fDA%3D', // Kafuli (spinach curry)
  recipeCount: 21,
  famousDish: 'Kafuli'
},
{
  id: 'west-bengal',
  name: 'West Bengal',
  speciality: 'Sweet & Spicy',
  image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=500&q=80', // Machher Jhol (fish curry)
  recipeCount: 44,
  famousDish: 'Machher Jhol'
},
  { 
    id: 'jammu-kashmir',
    name: 'Jammu-Kashmir',
    speciality: 'Spicy',
    image: 'https://media.istockphoto.com/id/1253934130/photo/mutton-masala-curry-in-plastic-container-for-home-delivery.jpg?s=1024x1024&w=is&k=20&c=jmEkMlBqDm_g6GebMr0rPVllP2HOj7MmycSeMPPD8Mg=',
    recipeCount: 45,
    famousDish: 'Rogan Josh'
  }
]
