import type { Product } from '../data/products';
import { ShoppingCart, ExternalLink } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart, onViewDetails }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group flex flex-col h-full">
      <div 
        className="relative h-64 overflow-hidden cursor-pointer"
        onClick={() => onViewDetails(product)}
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-indigo-midnight shadow-sm">
          {product.category}
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <h3 
          className="text-lg font-bold text-indigo-midnight mb-2 cursor-pointer hover:text-purple-electric transition-colors line-clamp-1"
          onClick={() => onViewDetails(product)}
        >
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
          <span className="text-xl font-bold text-indigo-midnight">
            ${product.price}
          </span>
          <div className="flex space-x-2">
            <button 
              onClick={() => onAddToCart(product)}
              className="bg-purple-electric text-white p-2 rounded-lg hover:bg-indigo-midnight transition-colors"
              title="Add to Cart"
            >
              <ShoppingCart size={20} />
            </button>
            <a 
              href={product.supplierUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-lavender-aura text-indigo-midnight p-2 rounded-lg hover:bg-purple-electric hover:text-white transition-colors"
              title="View on Supplier Site"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
