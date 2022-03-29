import React, { useState } from 'react';
import Integerfact from './Fetchquotes';

const Integerinput = () => {
  const [integer, setInteger] = useState('');
  return (
    <input
      className="integerinput"
      type="number"
      value={integer}
      onChange={(e) => setInteger(e.target.value)}
    />
  );
};

export default Integerinput;
