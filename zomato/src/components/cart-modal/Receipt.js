import { useState} from 'react';

const Receipt = ({ address, cartItems,setCartCount,setCartItems }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal * 0.2;
  const gst = (subtotal - discount) * 0.05;
  const finalTotal = (subtotal - discount) + gst;


  return (
    <div style={{
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
    }}>
      {showSuccess ? (
        <div>
          <h3>🧾 Order Summary</h3>
          <p><strong>Delivery Address:</strong> {address}</p>
          <hr />
          <p>Subtotal: ₹{subtotal}</p>
          <p>Discount: ₹{discount.toFixed(2)}</p>
          <p>GST: ₹{gst.toFixed(2)}</p>
          <h4>Total: ₹{finalTotal.toFixed(2)}</h4>
          <button
            onClick={() => {setShowSuccess(true)
              setCartItems([]);
              setCartCount(0)
            }
            }
            style={{
              padding: '10px 20px',
              backgroundColor: '#e53935',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
            Confirm
          </button>
        </div>
      ) : (
        <div style={{
          textAlign: 'center',
          backgroundColor: '#fffde7',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
        }}>
          <h2>🎉 Thank You!</h2>
          <p>Your order has been placed successfully.</p>
          <p>Please keep ₹{finalTotal.toFixed(2)} ready for payment upon delivery.</p>
          <p>🚚 Estimated delivery: within 45 minutes</p>
        </div>
      )}
    </div>
  );
};

export default Receipt;