import React from "react";
import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.data?.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}