import { Link } from 'react-router-dom';
import { useCart } from '../data/CartContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-lavender-aura/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
          <ShoppingBag size={48} className="text-purple-electric" />
        </div>
        <h1 className="text-3xl font-bold text-indigo-midnight mb-4">Your cart is empty</h1>
        <p className="text-gray-600 mb-8">Looks like you haven't added anything to your vibe yet.</p>
        <Link 
          to="/shop" 
          className="inline-flex items-center bg-purple-electric text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-midnight transition-colors"
        >
          Explore Shop
          <ArrowRight size={20} className="ml-2" />
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-indigo-midnight mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-2 space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center">
              <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="ml-6 flex-grow">
                <h3 className="text-lg font-bold text-indigo-midnight">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{item.category}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 bg-gray-50 rounded-lg p-1">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-white rounded shadow-sm transition-all"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-bold text-indigo-midnight w-8 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-white rounded shadow-sm transition-all"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
              <div className="ml-6 text-right">
                <p className="text-xl font-bold text-indigo-midnight">${(item.price * item.quantity).toFixed(2)}</p>
                <p className="text-xs text-gray-400">${item.price.toFixed(2)} each</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-1">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 sticky top-28">
            <h2 className="text-2xl font-bold text-indigo-midnight mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6 pt-6 border-t border-gray-50">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({cartCount} items)</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Estimated Tax</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between text-2xl font-bold text-indigo-midnight pt-4 border-t border-gray-50">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
            <Link 
              to="/checkout" 
              className="w-full bg-purple-electric text-white py-4 rounded-xl font-bold hover:bg-indigo-midnight transition-colors flex items-center justify-center shadow-lg shadow-purple-electric/20"
            >
              Proceed to Checkout
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <div className="mt-4 text-center">
              <Link to="/shop" className="text-sm text-gray-400 hover:text-purple-electric transition-colors">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
