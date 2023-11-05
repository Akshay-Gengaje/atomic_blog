import React, { useContext } from "react";
import { PostContext } from "../context/PostContext.jsx";

const Result = () => {
  //3. Consume the context value
  const { posts } = useContext(PostContext);
  return <p>🚀 {posts.length} atomic posts found</p>;
};

export default Result;
