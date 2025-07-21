import React, { useState } from 'react';
const AddressForm = ({ onSubmit, onClose }) => {
  const [input, setInput] = useState("");

  return (
    <div style={{   position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backdropFilter: 'blur(5px)',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000}} onClick={onClose}>
      <div style={{ /* form styles */ }} onClick={e => e.stopPropagation()}>
        <h3>📮 Enter Delivery Address</h3>
        <textarea
          placeholder="House No, Street, Area, City..."
          value={input}
          onChange={e => setInput(e.target.value)}
          style={{ width: '100%', borderRadius: '8px', padding: '10px' }}
        />
        <button
          onClick={() => {
            if (input.trim()) {
              onSubmit(input);
            }
          }}
             style={{
          padding: '10px 20px',
          backgroundColor: '#e53935',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default AddressForm;