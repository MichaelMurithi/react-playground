import React, { useState, useEffect } from "react";
import axios from "axios";
const DataFetching = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    // return () => {
    //   cleanup;
    // };
  }, [id]);
  return (
    <div>
      <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      <p>{post.title}</p>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default DataFetching;
