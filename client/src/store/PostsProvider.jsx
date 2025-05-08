import { useState, useEffect } from "react";
import { PostContext, useAuth } from ".";
import { getAllPosts } from "../api/post";
import useFetch from "../hooks/useFetch";

export default function PostsProvider({ children }) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { accessToken } = useAuth();
  const { data, setData, loading, error } = useFetch({
    apiCall: getAllPosts,
    params: [page, limit, accessToken],
  });
  const [posts, setPosts] = useState([]);
  //this is to set limit for how many upload comes on our feed before a new one, we will be creating a new array so the prev uploads get saved on our db while we get new feed

  useEffect(() => {
    if (data.success) {
      setPosts(data.posts);
    }
  }, [data.posts, data.success]);

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts,
        setPage,
        setLimit,
        setData,
        loading,
        data,
        page,
        error,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
