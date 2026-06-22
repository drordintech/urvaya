import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'

// Placeholder Pages
const Collection = () => <div style={{paddingTop: '100px', minHeight: '100vh'}}><h1 className="text-hero" style={{textAlign: 'center'}}>Collection</h1></div>;
const ProductDetail = () => <div style={{paddingTop: '100px', minHeight: '100vh'}}><h1 className="text-hero" style={{textAlign: 'center'}}>Product Detail</h1></div>;
const About = () => <div style={{paddingTop: '100px', minHeight: '100vh'}}><h1 className="text-hero" style={{textAlign: 'center'}}>Our Craft</h1></div>;
const Contact = () => <div style={{paddingTop: '100px', minHeight: '100vh'}}><h1 className="text-hero" style={{textAlign: 'center'}}>Contact Us</h1></div>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="collections" element={<Collection />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
