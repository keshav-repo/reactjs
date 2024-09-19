import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <ul className="r">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}
