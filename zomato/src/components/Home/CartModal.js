import {useState}from 'react';
import Login from '../Images/Login.mp4';
import LocationMap from './LocationMap';
import poster from '../Images/poster.jpeg';
const CartModal = ({ cartItems, onClose, onRemove ,setCartItems,setCartCount}) => {
const [showMap, setShowMap] = useState(false);
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backdropFilter: 'blur(5px)',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '12px',
          maxWidth: '600px',
          width: '90%',
          maxHeight: '80vh',
          overflowY: 'auto',
          boxShadow: '0 0 15px rgba(0,0,0,0.3)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{
  position: 'absolute',
  top: '10px',
  right: '10px',
  textAlign: 'center'
}}>
 <video
    poster={poster}
     width="150"
     height="80"
     style={{ borderRadius: '10px', objectFit: 'cover' }}
     autoPlay
     loop
     muted>
     <source src={Login} type="video/mp4" /></video>
  <div style={{
    fontSize: '0.85rem',
    color: '#ff7043',
    fontWeight: 'bold',
    marginTop: '5px'
  }}>
    Don’t scroll hungry! 🍛
  </div>
</div>
        {/* <h3>🛒</h3> */}
        {cartItems.length === 0 ? (
          <div style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: '10px', color: '#888' }}>Your cart is empty.</p>
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: '#ff7043',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
              onClick={onClose}
            >
              Add Items
            </button>
          </div>
        ) : (
          cartItems.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
                borderBottom: '1px solid #eee',
                paddingBottom: '10px'
              }}
            >
              <img
               src={`${process.env.PUBLIC_URL}${item.image}`}
                alt={item.name}
                style={{
                  width: '180px',
                  height: '180px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginRight: '10px'
                }}
              />
              <div style={{ flexGrow: 1 }}>
                <h4 style={{ margin: '0 0 5px' }}>{item.name}</h4>
                <p style={{ margin: '0 0 5px', color: '#666' }}>{item.description}</p>
                <strong style={{ color: '#2e7d32' }}> ₹{(item.price * item.quantity).toFixed(2)}</strong>    

<div style={{
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  margin: '5px 0'
}}>
  <button
    style={{
      padding: '4px 10px',
      fontSize: '1rem',
      backgroundColor: '#eee',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }}
    onClick={() => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
      setCartCount(prev => prev - 1);
    } else {
      const filteredCart = cartItems.filter((_, i) => i !== index);
      setCartItems(filteredCart);
      setCartCount(prev => prev - 1);
    }
  }}

  >
    −
  </button>
  <span style={{ minWidth: '24px', textAlign: 'center' }}>{item.quantity}</span>
  <button
    style={{
      padding: '4px 10px',
      fontSize: '1rem',
      backgroundColor: '#eee',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }}
    onClick={() => {
      const updatedCart = [...cartItems];
      updatedCart[index].quantity += 1;
      setCartItems(updatedCart);
      setCartCount(prev => prev + 1);
    }}
  >
    ＋
  </button>
</div>                
          </div>
              <button
                style={{
                  padding: '6px 12px',
                  backgroundColor: '#e53935',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginTop: '80px',
                }}
                onClick={() => onRemove(index)}
              >
                Remove
              </button>
              
            
            </div>
            
          
        ))
          
        )}
       {cartItems.length > 0 && (
  <div style={{ display: "flex", flexDirection: "column"}}>
    <div style={{
      paddingTop: '10px',
      borderTop: '1px solid #ddd',
      textAlign: 'right',
      fontWeight: 'bold',
      fontSize: '1.1rem',
      color: '#2e7d32'
    }}>
      Total Price: ₹{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
    </div>
 <div style={{ textAlign: 'right', color: '#f57c00' }}>
      Discount (20%): ₹{(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) * 0.2).toFixed(2)}
    </div>
   <div style={{
      textAlign: 'right',
      fontSize: '1rem',
      color: '#00796b'
    }}>
      GST (5%): ₹{(cartItems.reduce((acc, item) => acc + item.price*item.quantity, 0) * 0.8 * 0.05).toFixed(2)}
    </div>

    {/* Final Total */}
    <div style={{
      textAlign: 'right',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      color: '#388e3c',
      borderTop: '1px solid #ccc',
      marginTop: '10px',
      paddingTop: '8px'
    }}>
      Final Price: ₹{(cartItems.reduce((acc, item) => acc + item.price*item.quantity, 0) * 0.8 * 1.05).toFixed(2)}
    </div>


    <div style={{
      marginTop: '16px',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '12px'
    }}>
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#4caf50',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
        onClick={() => {
          setShowMap(true);
        }}
      >
        Place Order
      </button>
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#e53935',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
        onClick={onClose}
      >
        Cancel
      </button>
    </div>
  </div>
)}
{showMap && <LocationMap onClose={() => setShowMap(false)} />}

      </div>
      
    </div>
  );
};

export default CartModal;