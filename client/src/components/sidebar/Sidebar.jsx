import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Endpoints from "../../Services/Endpoints";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  const getCats = async () => {
    const res = await axios({
      method: "GET",
      baseURL: Endpoints.baseUrl,
      url: Endpoints.categories,
    });
    setCats(res.data);
  };
  useEffect(() => {
    getCats();
  }, []);
 
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
        className="siderbarimg"
          src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""  
        />
        <p>
        I'm Ayush Goutam, an undergraduate student from IIT(ISM) Dhanbad. I have developed this blog Website using MERN stack. 
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-linkedin"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}