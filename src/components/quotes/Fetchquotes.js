import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Integerinput from './Integerinput';

const Integerfact = () => {
  const [posts, setPosts] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://numbersapi.p.rapidapi.com/1729/math',
    params: { fragment: 'true', json: 'true' },
    headers: {
      'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
      'X-RapidAPI-Key': '1c2dbed2c0msh712d1a24a6a2a42p1f3b5bjsn3e87ab501e69',
    },
  };

  const fetchPost = async () => {
    const response = await axios.request(options);
    console.log(response);
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="integerfact">
      <h2>Magic Number fact</h2>
      <Integerinput />
      <p>{posts.text}</p>
      <button type="button" onClick={fetchPost}> Get number fact </button>
    </div>
  );
};

export default Integerfact;
// const options = {
//   method: 'GET',
//   url: 'https://numbersapi.p.rapidapi.com/1729/math',
//   params: {fragment: 'true', json: 'true'},
//   headers: {
//     'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
//     'X-RapidAPI-Key': '1c2dbed2c0msh712d1a24a6a2a42p1f3b5bjsn3e87ab501e69'
//   }
// };

// axios.request(options).then(function (response) {
// console.log(response.data);
// }).catch(function (error) {
// console.error(error);
// });
