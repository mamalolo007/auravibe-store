import { useState } from 'react';
import { products } from '../data/products';
import type { Product } from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { useCart } from '../data/CartContext';

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addToCart, cartCount } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-midnight mb-4">
          The Curated Collection
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Functional, modern, and trending products for your digital life. 
          Each item is hand-selected to elevate your home-office and lifestyle.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={handleAddToCart}
            onViewDetails={(p) => setSelectedProduct(p)}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}
      
      {/* Visual indicator of cart if needed, though Layout handles it */}
      {cartCount > 0 && (
         <div className="fixed bottom-8 right-8 bg-purple-electric text-white px-6 py-3 rounded-full shadow-2xl font-bold z-40 animate-bounce">
           Cart: {cartCount} items
         </div>
      )}
    </div>
  );
};

export default Shop;
