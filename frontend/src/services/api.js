// Mock API for products

const importedImages = import.meta.glob('../assets/collections/sarees/*.jpeg', { eager: true, import: 'default' });
const productImages = Object.values(importedImages);

// If no images are found (e.g. wrong path), fallback to a placeholder
if (productImages.length === 0) {
  productImages.push("https://images.unsplash.com/photo-1610030469983-98e550d615ef?q=80&w=800&auto=format&fit=crop");
}

// Generate 24 mock products per collection
export const fetchProducts = async (collectionSlug, page = 1) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));

  const itemsPerPage = 9;
  const totalItems = 24;
  
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  
  if (startIndex >= totalItems) {
    return { products: [], hasMore: false, total: totalItems };
  }

  const products = [];
  for (let i = startIndex; i < endIndex; i++) {
    const isGICertified = i % 3 === 0;
    const price = 15000 + (Math.floor(Math.random() * 50) * 1000); // Random price between 15k and 65k
    
    products.push({
      id: `${collectionSlug}-product-${i}`,
      name: `${collectionSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Heirloom ${i + 1}`,
      image: productImages[i % productImages.length],
      price: `₹${price.toLocaleString()}`,
      collection: collectionSlug,
      isGICertified,
      weaveType: isGICertified ? "Kadwa Weave" : "Handloom",
      salesMetric: Math.random() > 0.5 ? "1000+ units sold" : "Best Seller"
    });
  }

  return {
    products,
    hasMore: endIndex < totalItems,
    total: totalItems
  };
};
