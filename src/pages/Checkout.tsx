import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../data/CartContext';
import { ArrowLeft, ArrowRight, CheckCircle, CreditCard, Truck, ShieldCheck } from 'lucide-react';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      navigate('/success', { state: { orderId: Math.floor(Math.random() * 1000000), total: cartTotal } });
    }, 2000);
  };

  if (cart.length === 0 && step !== 4) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-indigo-midnight mb-4">Your cart is empty</h1>
        <Link to="/shop" className="text-purple-electric font-bold hover:underline">Go back to shop</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Steps Indicator */}
      <div className="flex items-center justify-between mb-12 relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>
        {[1, 2, 3].map((s) => (
          <div 
            key={s} 
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
              step >= s ? 'bg-purple-electric text-white scale-110 shadow-lg' : 'bg-white text-gray-400 border-2 border-gray-200'
            }`}
          >
            {step > s ? <CheckCircle size={20} /> : s}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {step === 1 && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-indigo-midnight mb-6 flex items-center">
                <Truck className="mr-3 text-purple-electric" /> Shipping Information
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" name="email" value={formData.email} onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-electric/20 focus:border-purple-electric outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input 
                    type="text" name="firstName" value={formData.firstName} onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-electric/20 focus:border-purple-electric outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input 
                    type="text" name="lastName" value={formData.lastName} onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-electric/20 focus:border-purple-electric outline-none transition-all"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input 
                    type="text" name="address" value={formData.address} onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-electric/20 focus:border-purple-electric outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input 
                    type="text" name="city" value={formData.city} onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-electric/20 focus:border-purple-electric outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                  <input 
                    type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-electric/20 focus:border-purple-electric outline-none transition-all"
                  />
                </div>
              </div>
              <button 
                onClick={nextStep}
                className="w-full mt-8 bg-purple-electric text-white py-4 rounded-xl font-bold hover:bg-indigo-midnight transition-colors flex items-center justify-center"
              >
                Continue to Payment <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-indigo-midnight mb-6 flex items-center">
                <CreditCard className="mr-3 text-purple-electric" /> Payment Method
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                  <input 
                    type="text" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-electric/20 focus:border-purple-electric outline-none transition-all"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                    <input 
                      type="text" name="expiry" value={formData.expiry} onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-electric/20 focus:border-purple-electric outline-none transition-all"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                    <input 
                      type="text" name="cvv" value={formData.cvv} onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-electric/20 focus:border-purple-electric outline-none transition-all"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <button 
                  onClick={prevStep}
                  className="flex-1 bg-gray-50 text-indigo-midnight py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <ArrowLeft size={20} className="mr-2" /> Back
                </button>
                <button 
                  onClick={nextStep}
                  className="flex-2 bg-purple-electric text-white py-4 px-8 rounded-xl font-bold hover:bg-indigo-midnight transition-colors flex items-center justify-center"
                >
                  Review Order <ArrowRight size={20} className="ml-2" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-indigo-midnight mb-6 flex items-center">
                <ShieldCheck className="mr-3 text-purple-electric" /> Review Your Order
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex justify-between pb-4 border-b border-gray-50">
                  <div>
                    <h3 className="font-bold text-indigo-midnight">Shipping To</h3>
                    <p className="text-gray-600 text-sm">{formData.firstName} {formData.lastName}</p>
                    <p className="text-gray-600 text-sm">{formData.address}, {formData.city}</p>
                  </div>
                  <button onClick={() => setStep(1)} className="text-purple-electric text-sm font-bold hover:underline">Edit</button>
                </div>
                <div className="flex justify-between pb-4 border-b border-gray-50">
                  <div>
                    <h3 className="font-bold text-indigo-midnight">Payment</h3>
                    <p className="text-gray-600 text-sm">Card ending in {formData.cardNumber.slice(-4)}</p>
                  </div>
                  <button onClick={() => setStep(2)} className="text-purple-electric text-sm font-bold hover:underline">Edit</button>
                </div>
              </div>

              <button 
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className={`w-full bg-purple-electric text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center shadow-lg shadow-purple-electric/20 ${isProcessing ? 'opacity-70 cursor-not-allowed' : 'hover:bg-indigo-midnight'}`}
              >
                {isProcessing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  `Place Order - $${cartTotal.toFixed(2)}`
                )}
              </button>
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-indigo-midnight mb-4">Order Summary</h3>
            <div className="space-y-4 max-h-60 overflow-y-auto mb-4 pr-2 custom-scrollbar">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center text-sm">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="ml-3 flex-grow">
                    <p className="font-bold text-indigo-midnight line-clamp-1">{item.name}</p>
                    <p className="text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-bold text-indigo-midnight">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-gray-50 space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-indigo-midnight">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
