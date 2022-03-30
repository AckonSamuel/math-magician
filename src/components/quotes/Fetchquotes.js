import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './fetchquotes.css';

const Integerfact = ({ vlad }) => {
  const [posts, setPosts] = useState([]);

  const options = {
    method: 'GET',
    url: `https://numbersapi.p.rapidapi.com/${vlad}/math`,
    params: { fragment: 'true', json: 'true' },
    headers: {
      'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
      'X-RapidAPI-Key': '1c2dbed2c0msh712d1a24a6a2a42p1f3b5bjsn3e87ab501e69',
    },
  };

  const fetchPost = async () => {
    const response = await axios.request(options);
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="post">
      <button type="button" onClick={fetchPost}> Get number fact </button>
      <hr />
      <p>
        {posts.text}
      </p>
    </div>
  );
};

Integerfact.propTypes = {
  vlad: PropTypes.string.isRequired,
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
