import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";
import Endpoints from "../../Services/Endpoints";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios({
          method: "GET",
          baseURL: Endpoints.baseUrl,
          url: Endpoints.posts + search,
        });
        setPosts(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}