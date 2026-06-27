import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { collectionsData } from '../data/collectionsData';
import { fetchProducts } from '../services/api';
import './CollectionDetail.css';

// Subcomponents (we will create these inline or in separate files)
import CollectionHero from '../components/collections/CollectionHero';
import ThemeInspiration from '../components/collections/ThemeInspiration';
import WeaverStory from '../components/collections/WeaverStory';
import ArchitectureReference from '../components/collections/ArchitectureReference';
import ProductGrid from '../components/collections/ProductGrid';
import StylingCare from '../components/collections/StylingCare';

import Loader from '../components/common/Loader';

const CollectionDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  // Define the ordered array of slugs for "Next Collection" navigation
  const collectionSlugs = ['banarasi-silk', 'kanjeevaram', 'lucknowi'];

  useEffect(() => {
    // Reset scroll on navigation
    window.scrollTo(0, 0);

    if (collectionsData[slug]) {
      setData(collectionsData[slug]);
    } else {
      // If slug not found, go back home
      navigate('/');
    }
  }, [slug, navigate]);

  if (!data) return <Loader fullScreen={true} />;

  const currentIndex = collectionSlugs.indexOf(slug);
  const nextSlug = collectionSlugs[(currentIndex + 1) % collectionSlugs.length];
  const nextCollection = collectionsData[nextSlug];

  return (
    <div className="collection-detail-page fade-in">
      {/* Back Navigation */}
      <div className="back-nav">
        <Link to="/" style={{ color: data.accentColor }}>
          &larr; All Collections
        </Link>
      </div>

      <CollectionHero data={data} />
      <ThemeInspiration data={data} />
      <ProductGrid collectionSlug={slug} data={data} />
      <WeaverStory data={data} />
      <ArchitectureReference data={data} />
      <StylingCare data={data} />

      {/* Next Collection Strip */}
      <div className="next-collection-strip">
        <Link to={`/collections/${nextSlug}`} className="next-collection-link">
          <span className="next-label" style={{ color: data.accentColor }}>Explore next collection &rarr;</span>
          <h2 className="next-title">{nextCollection.name}</h2>
        </Link>
      </div>
    </div>
  );
};

export default CollectionDetail;
