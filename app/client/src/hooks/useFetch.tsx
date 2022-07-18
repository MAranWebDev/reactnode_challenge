import { useState, useEffect } from "react";
import axios from "axios";

type PostsType = { id: string; name: string; description: string }[];

const URL = "http://localhost/api/posts";
const client = axios.create({ baseURL: URL });

const useFetch = () => {
  const [originalPosts, setOriginalPosts] = useState<PostsType>([]);
  const [posts, setPosts] = useState<PostsType>([]);

  useEffect(() => {
    listsPosts();
  }, []);

  const listsPosts = async () => {
    const { data } = await client.get("");
    setOriginalPosts(data);
    setPosts(data);
  };

  const filterPosts = (postName: string) => {
    if (postName.trim() === "") return setPosts(originalPosts);
    setPosts(originalPosts.filter(({ name }) => name === postName));
  };

  const createPost = async (postName: string, postDescription: string) => {
    const { data } = await client.post("", {
      name: postName,
      description: postDescription,
    });
    const { id, name, description } = data;
    const result = [...originalPosts, { id, name, description }];
    setOriginalPosts(result);
    setPosts(result);
  };

  const deletePost = async (postId: string) => {
    const { data } = await client.delete(`${postId}`);
    const result = originalPosts.filter(({ id }) => id !== data.id);
    setOriginalPosts(result);
    setPosts(result);
  };

  return [posts, filterPosts, createPost, deletePost] as const;
};

export { useFetch };
