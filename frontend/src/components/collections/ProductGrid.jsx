import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import Loader from '../common/Loader';
import './CollectionSections.css';

const ProductCard = ({ product, accentColor }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="product-card collection-product-card" 
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="product-image-container">
        <img src={product.image} alt={product.name} />
        {product.isGICertified && (
          <div className="gi-badge" title="GI Certified">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg>
          </div>
        )}
      </div>
      <div className="product-info">
        <div className="product-tags">
          <span className="collection-tag" style={{ color: accentColor }}>{product.collection.toUpperCase().replace('-', ' ')}</span>
          <span className="weave-tag">{product.weaveType}</span>
        </div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
        <p className="sales-metric">{product.salesMetric}</p>
      </div>
    </div>
  );
};

const ProductGrid = ({ collectionSlug, data }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(prev => prev === dropdownName ? null : dropdownName);
  };

  // Close dropdown when clicking outside (simple implementation by clicking anywhere on the grid)
  const closeDropdown = () => setActiveDropdown(null);

  useEffect(() => {
    // Reset when collection changes
    setProducts([]);
    setPage(1);
    setHasMore(true);
    loadProducts(1, true);
  }, [collectionSlug]);

  const loadProducts = async (pageNum, isReset = false) => {
    setLoading(true);
    try {
      const result = await fetchProducts(collectionSlug, pageNum);
      if (isReset) {
        setProducts(result.products);
      } else {
        setProducts(prev => [...prev, ...result.products]);
      }
      setHasMore(result.hasMore);
      setTotal(result.total);
    } catch (error) {
      console.error("Failed to load products", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      loadProducts(nextPage);
    }
  };

  return (
    <section className="collection-product-grid" onClick={closeDropdown}>
      <div className="grid-header fade-up-element is-visible">
        <div className="section-eyebrow" style={{ color: 'var(--color-gold-accent)' }}>THE COLLECTION</div>
        <h2 className="grid-heading" style={{ color: data.accentColor }}>{data.name} Sarees</h2>
        <div className="product-count">{total} sarees</div>
        <div className="section-divider"><div className="divider-line"></div></div>
      </div>

      <div className="sticky-filter-bar" onClick={e => e.stopPropagation()}>
        <div className={`filter-pill-container ${activeDropdown === 'occasion' ? 'active' : ''}`}>
          <div className="filter-pill" onClick={() => toggleDropdown('occasion')}>
            Occasion <span className="caret">▾</span>
          </div>
          {activeDropdown === 'occasion' && (
            <div className="filter-dropdown">
              <ul>
                <li>Wedding</li>
                <li>Festive</li>
                <li>Casual</li>
              </ul>
            </div>
          )}
        </div>

        <div className={`filter-pill-container ${activeDropdown === 'price' ? 'active' : ''}`}>
          <div className="filter-pill" onClick={() => toggleDropdown('price')}>
            Price <span className="caret">▾</span>
          </div>
          {activeDropdown === 'price' && (
            <div className="filter-dropdown">
              <ul>
                <li>Under ₹20,000</li>
                <li>₹20,000 - ₹50,000</li>
                <li>Above ₹50,000</li>
              </ul>
            </div>
          )}
        </div>

        <div className={`filter-pill-container ${activeDropdown === 'colour' ? 'active' : ''}`}>
          <div className="filter-pill" onClick={() => toggleDropdown('colour')}>
            Colour <span className="caret">▾</span>
          </div>
          {activeDropdown === 'colour' && (
            <div className="filter-dropdown">
              <ul>
                <li>Red</li>
                <li>Gold</li>
                <li>Ivory</li>
                <li>Emerald</li>
              </ul>
            </div>
          )}
        </div>

        <div className={`filter-pill-container sort-pill ${activeDropdown === 'sort' ? 'active' : ''}`}>
          <div className="filter-pill" onClick={() => toggleDropdown('sort')}>
            Sort: Newest <span className="caret">▾</span>
          </div>
          {activeDropdown === 'sort' && (
            <div className="filter-dropdown right-aligned">
              <ul>
                <li>Newest</li>
                <li>Price: Low to High</li>
                <li>Price: High to Low</li>
                <li>Popularity</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="grid-container">
        {products.map(product => (
          <ProductCard key={product.id} product={product} accentColor={data.accentColor} />
        ))}
      </div>

      {loading && <Loader />}
      
      {!loading && hasMore && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={handleLoadMore} style={{ borderColor: data.accentColor, color: data.accentColor }}>
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
