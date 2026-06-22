import HeroSection from '../components/home/HeroSection';
import CollectionsGrid from '../components/home/CollectionsGrid';
import FeaturedProducts from '../components/home/FeaturedProducts';
import BrandNarrative from '../components/home/BrandNarrative';
import JewellerySection from '../components/home/JewellerySection';
import LookbookGrid from '../components/home/LookbookGrid';
import FeatureWall from '../components/home/FeatureWall';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <CollectionsGrid />
      <FeaturedProducts />
      <BrandNarrative />
      <JewellerySection />
      <LookbookGrid />
      <FeatureWall />
    </div>
  );
};

export default Home;
