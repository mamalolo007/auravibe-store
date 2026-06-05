import { Link, Outlet } from 'react-router-dom';
import { ShoppingBag, Home, Info, ShoppingCart } from 'lucide-react';
import logo from '../assets/logo.svg';
import { useCart } from '../data/CartContext';

const Layout = () => {
  const { cartCount } = useCart();

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="AuraVibe Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold text-indigo-midnight tracking-tight">
              AuraVibe
            </span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link to="/" className="flex items-center text-gray-600 hover:text-purple-electric transition-colors">
              <Home size={20} className="mr-1" />
              <span>Home</span>
            </Link>
            <Link to="/shop" className="flex items-center text-gray-600 hover:text-purple-electric transition-colors">
              <ShoppingBag size={20} className="mr-1" />
              <span>Shop</span>
            </Link>
            <Link to="/about" className="flex items-center text-gray-600 hover:text-purple-electric transition-colors">
              <Info size={20} className="mr-1" />
              <span>About</span>
            </Link>
          </nav>
          <div className="flex items-center">
            <Link 
              to="/cart" 
              className="p-2 text-gray-600 hover:text-purple-electric transition-colors relative"
              aria-label={`Shopping Cart with ${cartCount} items`}
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-purple-electric text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow bg-gray-soft">
        <Outlet />
      </main>

      <footer className="bg-indigo-midnight text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AuraVibe</h3>
            <p className="text-gray-400">
              Curated products for the modern digital lifestyle.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-white">Shop</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-purple-electric flex-grow"
              />
              <button className="bg-purple-electric px-4 py-2 rounded-r-md hover:bg-purple-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} AuraVibe. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
