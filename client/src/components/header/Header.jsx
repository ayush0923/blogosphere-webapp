import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Create a unique and beautiful blog</span>
        <span className="headerTitleLg">Blogosphere</span>
      </div>
      <img
        className="headerImg"
        // src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        src="https://wallpaperaccess.com/full/1535047.jpg"
        alt=""
      />
    </div>
  );
}