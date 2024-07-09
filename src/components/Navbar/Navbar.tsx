import LogoIcon from "src/components/Icons/LogoIcon";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import NotificationIcon from "src/components/Icons/NotificationIcon";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <LogoIcon
            width={40}
            height={40}
          ></LogoIcon>
        </div>
        <h2 className="navbar-name">Airtrav</h2>
      </div>
      <div className="navbar-middle">
        <Link
          className="navbar-link"
          to="/"
        >
          Things To Do
        </Link>
        <Link
          className="navbar-link"
          to="/"
        >
          Tour
        </Link>
        <Link
          className="navbar-link"
          to="/"
        >
          Blog
        </Link>
      </div>
      <div className="navbar-right">
        <div className="navbar-settings">
          <span className="navbar-text">USD</span>
          <span className="navbar-text">FAQ</span>
          <span className="navbar-text">
            <NotificationIcon></NotificationIcon>
          </span>
        </div>
        <div className="navbar-avatar">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
