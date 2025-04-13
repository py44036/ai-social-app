import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import Messages from './pages/Messages';
import Reels from './pages/Reels';
import Notification from './pages/Notification';
import Settings from './pages/Settings';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ImageUpload from './pages/ImageUpload';
import Services from './pages/Services';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/imageupload" element={<ImageUpload />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;