import React, { useState } from 'react';
import Integerfact from './Fetchquotes';

const Integerinput = () => {
  const [integer, setInteger] = useState('');
  return (
    <div className="integerfact">
      <h2>Magic Number fact</h2>
      <input
        className="integerinput"
        type="number"
        value={integer}
        onChange={(e) => setInteger(e.target.value)}
      />
      <Integerfact  
    </div>
  );
};

export default Integerinput;
