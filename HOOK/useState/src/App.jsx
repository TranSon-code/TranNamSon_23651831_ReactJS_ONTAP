import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState('red');

  const handleToggle = () => {
    const nextColor = color === 'red' ? 'blue' : 'red';
    setColor(nextColor); 
    
    console.log("Giá trị state hiện tại:", nextColor);
  };

  return (
    <div>
      <button 
        onClick={handleToggle} 
        style={{ backgroundColor: color, color: 'white' }}
      >
        Màu hiện tại là: {color}
      </button>
    </div>
  );
}

export default App;