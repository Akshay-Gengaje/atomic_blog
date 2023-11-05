import React, { useContext } from "react";
import Results from "./Result";
import SearchPosts from "./SearchPosts";
import { usePosts } from "../context/PostContext.jsx";
const Header = () => {
  //3. Consume the context value
  const { onClearPosts } = usePosts();
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
};

export default Header;
