import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Input, InputAdornment,Badge,IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Login from '../Images/Loginbg.mp4';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartModal from './CartModal'; 
const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

const funnyCaptions = [
  "Currying favor with good taste 🍛",
  "Samosa squad activated 😎",
  "Thali goals ✔️",
  "Serving up joy one bite at a time 🥄",
  "Keep calm and eat pav bhaji 🍞",
  "Daal yeah! 🌱",
  "Ready to rice and shine 🍚",
  "Butter chicken dreams 🧈🐔",
  "No drama, just dosa 🥰",
  "Tikka me seriously 🌟",
  "Welcome to the naaniverse 🌌",
  "Masala mission accepted 🔥",
  "Biryani is my spirit animal 🐯",
  "Just chapati-ning around 😆",
  "More chaat, less chat 😜",
  "This cart’s got soul (and spice) 🎶🌶️",
  "The snack life chose me 🍟",
  "Zero regrets, full plate 🤌",
   "Biryani loaded! 🔥",
  "Don’t scroll hungry 🍛",
  "Chaat happens 😋",
  "Paneer for your thoughts 🧠🧀",
  "Stay calm & curry on 🍛",
  "Naan-stop cravings 🍞",
  "You had me at masala ❤️",
  "Rolling with my rotis 🫓",
  "Welcome to Snackistan 🇮🇳",
  "Zero regrets, full plate 🤌",
  "Butter chicken dreams 🧈🐔"

];
const [captionIndex, setCaptionIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCaptionIndex(prev => (prev + 1) % funnyCaptions.length);
  }, 5000); // rotate every 5 seconds

  return () => clearInterval(interval); // cleanup
}, []);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => {
        setProducts(response.data);
        console.log('Products fetched:', response.data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

 // Filter products only by search term
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
   <video
   
    width="1550"
    height="400"
    style={{ borderRadius: '10px', objectFit: 'cover' }}
    autoPlay
    loop
    muted>
    <source src={Login} type="video/mp4" /></video>
    <div style={{marginBottom: '5px',justifyItems:"left"}}>
           <Input
           type="text"
        placeholder="Search Biryani..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        style={{
          margin: ' 0',
          padding: '8px',
          width: '600px',
          borderRadius: '14px',
         
        }}
      />
       {/* <div style={{ display: 'flex',  gap: '12px' }}> */}
  <IconButton onClick={() => setShowCart(!showCart)}>
    <Badge badgeContent={cartCount} color="error">
      <ShoppingCartIcon fontSize="large" />
    </Badge>
  </IconButton>

  {/* Funny Caption */}
  <span style={{
    fontSize: '0.9rem',
    color: '#ff7043',
    fontWeight: 'bold',
    animation: 'fadeInOut 5s ease-in-out infinite',
    whiteSpace: 'nowrap'
  }}>
    {funnyCaptions[captionIndex]}
  </span>

      </div>
{showCart && (
  <CartModal
  setCartCount={setCartCount}
    setCartItems={setCartItems}
  
    cartItems={cartItems}
    onClose={() => setShowCart(false)}
    onRemove={(index) => {
      const updatedCart = cartItems.filter((_, i) => i !== index);
      setCartItems(updatedCart);
      setCartCount(updatedCart.length);
    }}
  />
)}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' ,textAlign: 'center', justifyContent: 'center', marginTop: '20px'  }}>
        {filteredProducts.length === 0 && (
          <div style={{ color: 'red', margin: '20px' ,fontWeight: 'bold',fontSize: '1.2rem'}}>
            Oops...No results....try again!
          </div>
        )}
      {filteredProducts.map(product => {
  const existingIndex = cartItems.findIndex(item => item.id === product.id);

  return (
    <div
      key={product.id}
      style={{
        width: '200px',
        height: '340px',
        overflow: 'hidden',
        border: '1px solid #ccc',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: '#fff',
        padding: '10px',
        boxSizing: 'border-box'
      }}
    >
      <img
        src={`http://localhost:3000${product.image}`}
        alt={product.name}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <h3 style={{ margin: '10px 0 5px 0', fontSize: '1.1rem', textAlign: 'center' }}>{product.name}</h3>
      <p style={{ margin: '0', fontWeight: 'bold', color: '#2e7d32', textAlign: 'center' }}>₹{product.price}</p>
      <p style={{ margin: '5px 0 0 0', fontSize: '0.95rem', color: '#555', textAlign: 'center' }}>{product.description}</p>

      {existingIndex !== -1 ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px' }}>
          <button
            style={{
              padding: '4px 10px',
              backgroundColor: '#eee',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          onClick={() => {
  const updatedCart = [...cartItems];
  if (updatedCart[existingIndex].quantity > 1) {
    updatedCart[existingIndex].quantity -= 1;
    setCartItems(updatedCart);
    setCartCount(prev => prev - 1);
  } else {
    const filteredCart = cartItems.filter((_, i) => i !== existingIndex);
    setCartItems(filteredCart);
    setCartCount(prev => prev - 1);
  }
}}
          >
            −
          </button>
          <span>{cartItems[existingIndex].quantity}</span>
          <button
            style={{
              padding: '4px 10px',
              backgroundColor: '#eee',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
            onClick={() => {
              const updatedCart = [...cartItems];
              updatedCart[existingIndex].quantity += 1;
              setCartItems(updatedCart);
              setCartCount(prev => prev + 1);
            }}
          >
            ＋
          </button>
        </div>
      ) : (
        <button
          style={{
            marginTop: '10px',
            padding: '6px 16px',
            background: '#ff7043',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
          onClick={() => {
            const existingIndex = cartItems.findIndex(item => item.id === product.id);
            if (existingIndex !== -1) {
              const updatedCart = [...cartItems];
              updatedCart[existingIndex].quantity += 1;
              setCartItems(updatedCart);
            } else {
              setCartItems(prev => [...prev, { ...product, quantity: 1 }]);
            }
            setCartCount(cartCount + 1);
            alert(`Added ${product.name} to cart!`);
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
})}
      
       
    </div>
    </div>
  );
};

export default Home;