import React, { useEffect, useState } from "react";
import { GetPosts } from "../api/axiosInstane";

const Card = () => {
  const [data, setData] = useState([]);

  const GetPostsData = async () => {
    try {
      const res = await GetPosts();
      console.log(res);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    GetPostsData();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <div
          key={item.id}
          className="rounded-xl bg-white p-5 shadow-md transition hover:shadow-lg">
          <h2 className="mb-3 text-xl font-semibold text-gray-800">
            {item.title}
          </h2>

          <p className="mb-4 text-gray-600">{item.body}</p>

          <p className="mb-4 text-sm text-gray-500">User ID: {item.userId}</p>

          <div className="flex gap-3">
            <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              Edit
            </button>

            <button className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
