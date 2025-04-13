import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/messages">Messages</Link>
      <Link to="/reels">Reels</Link>
      <Link to="/notifications">Notifications</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/imageupload">Image Upload</Link>
      <Link to="/services">Services</Link>
    </nav>
  );
}

export default NavBar;