// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function App() {
//   const [posts, setPosts] = useState([]);
//   // using the FETCH API method

//   // const fetchPost = async () => {
//   //   const response = await fetch(
//   //     "https://api.chucknorris.io/jokes/random"
//   //   );
//   //   const postData = await response.json();
//   //   setPosts(postData);
//   // };

//   // using Axios
//   const fetchPost = async () => {
//     const response = await axios('https://api.chucknorris.io/jokes/random');
//     console.log(response);
//     setPosts(response.data);
//   };
//   useEffect(() => {
//     fetchPost();
//   }, []);
//   return (
//     <div className="App">
//       <h2> Random joke generator😂 </h2>
//       <p>{posts.value}</p>
//       <button onClick={fetchPost}>Get new joke</button>
//     </div>
//   );
// }
