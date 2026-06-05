import type { Product } from '../data/products';
import { X, ShoppingCart, ExternalLink, ShieldCheck, Truck, Zap } from 'lucide-react';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductModal = ({ product, onClose, onAddToCart }: ProductModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-indigo-midnight/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors"
        >
          <X size={24} className="text-indigo-midnight" />
        </button>

        <div className="md:w-1/2 h-64 md:h-auto overflow-hidden bg-gray-100">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-1/2 p-8 overflow-y-auto">
          <div className="mb-6">
            <span className="text-sm font-semibold text-purple-electric uppercase tracking-wider">
              {product.category}
            </span>
            <h2 className="text-3xl font-bold text-indigo-midnight mt-2 leading-tight">
              {product.name}
            </h2>
            <div className="flex items-center mt-4">
              <span className="text-3xl font-bold text-indigo-midnight">
                ${product.price}
              </span>
              <span className="ml-4 px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded uppercase">
                In Stock
              </span>
            </div>
          </div>

          <div className="prose prose-sm text-gray-600 mb-8">
            <p className="text-lg font-medium text-indigo-midnight mb-2">
              Why you'll love it:
            </p>
            <p className="bg-lavender-aura/30 p-4 rounded-xl border-l-4 border-purple-electric italic">
              "{product.valueProposition}"
            </p>
            <p className="mt-4">
              {product.description}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-50 p-3 rounded-full mb-2">
                <Truck size={20} className="text-purple-electric" />
              </div>
              <span className="text-[10px] font-semibold text-gray-500 uppercase">Fast Shipping</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-50 p-3 rounded-full mb-2">
                <ShieldCheck size={20} className="text-purple-electric" />
              </div>
              <span className="text-[10px] font-semibold text-gray-500 uppercase">Secure Payment</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-50 p-3 rounded-full mb-2">
                <Zap size={20} className="text-purple-electric" />
              </div>
              <span className="text-[10px] font-semibold text-gray-500 uppercase">Quality Build</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="flex-1 bg-purple-electric hover:bg-indigo-midnight text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center transition-colors shadow-lg shadow-purple-electric/20"
            >
              <ShoppingCart size={20} className="mr-2" />
              Add to Cart
            </button>
            <a 
              href={product.supplierUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-gray-200 hover:border-purple-electric text-indigo-midnight font-bold py-4 px-6 rounded-xl flex items-center justify-center transition-all"
            >
              <ExternalLink size={20} className="mr-2" />
              Supplier Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
