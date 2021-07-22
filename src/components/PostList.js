import React, { useState, useEffect } from 'react';

const  PostList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPosts(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.id} {post.userId} {post.title} {post.body}
          </li>
        ))}
      </ul>
    );
  }
}

export default PostList;