 import biryani1 from '../Images/images/biryani1.jpeg';
import biryani2 from '../Images/images/biryani2.jpeg';
import biryani3 from '../Images/images/biryani3.jpeg';
import biryani4 from '../Images/images/biryani4.jpeg';
import biryani5 from '../Images/images/biryani5.jpeg';
import biryani6 from '../Images/images/biryani6.jpeg';
import biryani7 from '../Images/images/biryani7.jpeg';
import pizza1 from '../Images/images/pizza1.jpeg';
import pizza2 from '../Images/images/pizza2.jpeg';
import pizza3 from '../Images/images/pizza3.jpeg';
import bf1 from '../Images/images/bf1.jpeg';
import bf2 from '../Images/images/bf2.jpeg';
import bf3 from '../Images/images/bf3.jpeg';
import bf4 from '../Images/images/bf4.jpeg';
import bf5 from '../Images/images/bf5.jpeg';
import bf6 from '../Images/images/bf6.jpeg';
import bf7 from '../Images/images/bf7.jpeg';
import starter1 from '../Images/images/starter1.jpeg';
import starter2 from '../Images/images/starter2.jpeg';
import starter3 from '../Images/images/starteer3.jpeg';
import starter4 from '../Images/images/starter4.jpeg';
import starter5 from '../Images/images/starter5.jpeg';

 const products = [
    {
      "id": "1",
      "name": " Pot Biryani",
      "price": 220,
      "image": biryani1,
      "description": "Delicious Hyderabadi Biryani",
      "category": "Main Course",
      "rating": 4.5
    },
    {
      "id": "2",
      "name": "Dum Biryani",
      "price": 230,
      "image": biryani2,
      "description": "Spicy Andhra Biryani",
      "category": "Main Course",
      "rating": 4.3
    },
    {
      "id": "3",
      "name": " Joint Biryani",
      "price": 210,
      "image": biryani3,
      "description": "Aromatic Lucknowi Biryani",
      "category": "Main Course",
      "rating": 4.4
    },
    {
      "id": "4",
      "name": " Chicken Biryani",
      "price": 250,
      "image": biryani4,
      "description": "Traditional Kolkata Biryani",
      "category": "Main Course",
      "rating": 4.2
    },
    {
      "id": "5",
      "name": " Special Biryani",
      "price": 240,
      "image": biryani5,
      "description": "Classic Mughlai Biryani",
      "category": "Main Course",
      "rating": 4.6
    },
    {
      "id": "6",
      "name": "Veg Pulav",
      "price": 235,
      "image": biryani6,
      "description": "Rich Malabar Biryani",
      "category": "Main Course",
      "rating": 4.1
    },
    {
      "id": "7",
      "name": "veg Pizza",
      "price": 225,
      "image": biryani7,
      "description": "Special Veg Pizza with fresh vegetables and cheese.",
      "category": "Main Course",
      "rating": 4
    },
    {
      "id": "8",
      "name": "idli",
      "price": 50,
      "image": bf1,
      "description": "Soft and fluffy South Indian idlis served with coconut chutney and sambar.",
      "category": "Breakfast",
      "rating": 4.5
    },
    {
      "id": "9",
      "name": "Dosa",
      "price": 60,
      "image": bf2,
      "description": "Crispy dosa served with a side of tangy tomato chutney and sambar.",
      "category": "Breakfast",
      "rating": 4.6
    },
    {
      "id": "10",
      "name": "Masala Dosa",
      "price": 40,
      "image": bf3,
      "description": "Masala Dosa cooked with high quality spices.",
      "category": "Breakfast",
      "rating": 4.2
    },
    {
      "id": "11",
      "name": "Poori",
      "price": 45,
      "image": bf4,
      "description": "Light and fluffy poori made with flattened wheat flour, served with a side of spicy potato curry.",
      "category": "Breakfast",
      "rating": 4.3
    },
    {
      "id": "12",
      "name": "Poori",
      "price": 55,
      "image": bf5,
      "description": "Comforting South Indian poori.",
      "category": "Breakfast",
      "rating": 4.4
    },
    {
      "id": "13",
      "name": "Vada & idly",
      "price": 30,
      "image": bf6,
      "description": "Crispy and golden vada and idly served with coconut chutney.",
      "category": "Breakfast",
      "rating": 4.1
    },
    {
      "id": "14",
      "name": "Vada",
      "price": 70,
      "image": bf7,
      "description": "Fluffy vada served with coconut chutney.",
      "category": "Breakfast",
      "rating": 4.7
    },
    {
      "id": "15",
      "name": "Margherita Pizza",
      "price": 180,
      "image": pizza1,
      "description": "Classic margherita pizza with fresh mozzarella and basil.",
      "category": "Pizza",
      "rating": 4.5
    },
    {
      "id": "16",
      "name": "Veggie Delight Pizza",
      "price": 200,
      "image": pizza2,
      "description": "Loaded with fresh vegetables and cheese.",
      "category": "Pizza",
      "rating": 4.6
    },
    {
      "id": "17",
      "name": "Paneer Tikka Pizza",
      "price": 220,
      "image": pizza3,
      "description": "Topped with spicy paneer tikka and onions.",
      "category": "Pizza",
      "rating": 4.7
    },
    {
      "id": "18",
      "name": "Chicken 65",
      "price": 140,
      "image": starter3,
      "description": "Spicy deep-fried chicken pieces tossed with curry leaves and chilies.",
      "category": "Starters",
      "rating": 4.6
    },
    {
      "id": "19",
      "name": "Chicken Lollipop",
      "price": 160,
      "image": starter1,
      "description": "Crispy chicken lollipops served with spicy sauce.",
      "category": "Starters",
      "rating": 4.7
    },
    {
      "id": "20",
      "name": "Chicken kabab",
      "price": 150,
      "image": starter2,
      "description": "Fried chicken  in tangy Indo-Chinese sauce.",
      "category": "Starters",
      "rating": 4.5
    },
    {
      "id": "21",
      "name": "Chicken Popcorn",
      "price": 130,
      "image": starter3,
      "description": "crispy chicken opcorn made with spices.",
      "category": "Starters",
      "rating": 4.8
    },
    {
      "id": "22",
      "name": " Grilled Chicken",
      "price": 180,
      "image": starter5,
      "description": "Juicy minced chicken skewers grilled to perfection.",
      "category": "Starters",
      "rating": 4.6
    },
    {
      "id": "23",
      "name": "Chicken Seekh Kebab",
      "price": 180,
      "image": starter4,
      "description": "Juicy minced chicken skewers grilled to perfection.",
      "category": "Starters",
      "rating": 4.6
    }
  ]
  export default products;