import axios from "axios";

//this is Instance of Axios for All

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

// get posts from json placeholder

export const GetPosts = () => {
  return api.get("/posts");
};

// delte posts from json placeholder
export const deletePosts = (id) => {
  return api.delete(`/posts/${id}`);
};
