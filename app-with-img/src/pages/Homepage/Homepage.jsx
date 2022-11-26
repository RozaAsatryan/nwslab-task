import { Link } from "react-router-dom";
import "./Homepage.css";
const Homepage = () => {
  return (
    <div className="homepage-wrapper">
      <h1 className="head-text">Welcome to cat world</h1>
      <Link className="start-link" to="./5">
        Go to pics
      </Link>
    </div>
  );
};

export default Homepage;
