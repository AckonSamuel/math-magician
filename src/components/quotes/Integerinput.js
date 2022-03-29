import React, { useState } from 'react';

const Integerinput = () => {
  const [integer, setInteger] = useState('');

  return (
    <input
      type="number"
      value={integer}
      onChange={(e) => setInteger(e.target.value)}
    />
  );
};

export default Integerinput;
