import { useContext } from "react";
import { PostContext } from "../context/PostContext.jsx";

const SearchPost = () => {
  const { searchQuery, setSearchQuery } = useContext(PostContext);
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
};

export default SearchPost;
