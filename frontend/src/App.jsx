import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import CollectionDetail from './pages/CollectionDetail';
import Wishlist from './pages/Wishlist';
import { WishlistProvider } from './context/WishlistContext';

// Placeholder Pages
const ProductDetail = () => <div style={{paddingTop: '100px', minHeight: '100vh'}}><h1 className="text-hero" style={{textAlign: 'center'}}>Product Detail</h1></div>;
const About = () => <div style={{paddingTop: '100px', minHeight: '100vh'}}><h1 className="text-hero" style={{textAlign: 'center'}}>Our Craft</h1></div>;
const Contact = () => <div style={{paddingTop: '100px', minHeight: '100vh'}}><h1 className="text-hero" style={{textAlign: 'center'}}>Contact Us</h1></div>;

function App() {
  return (
    <WishlistProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="collections/:slug" element={<CollectionDetail />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </WishlistProvider>
  );
}

export default App;
