import { useLocation, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShoppingBag, Download } from 'lucide-react';

const Success = () => {
  const location = useLocation();
  const { orderId, total } = location.state || { orderId: 'N/A', total: 0 };

  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 animate-in zoom-in duration-500">
          <CheckCircle2 size={48} className="text-green-600" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-midnight mb-4">
          Thank You for Your Order!
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Your vibe is on its way. We've sent a confirmation email with all the details.
        </p>

        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm mb-12 text-left">
          <h2 className="text-xl font-bold text-indigo-midnight mb-6 pb-6 border-b border-gray-50">
            Order Information
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-500">Order Number</span>
              <span className="font-bold text-indigo-midnight">#{orderId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Amount Paid</span>
              <span className="font-bold text-indigo-midnight">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Status</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Processing
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link 
            to="/shop" 
            className="w-full sm:w-auto bg-purple-electric text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-midnight transition-colors flex items-center justify-center shadow-lg shadow-purple-electric/20"
          >
            Continue Shopping
            <ArrowRight size={20} className="ml-2" />
          </Link>
          <button className="w-full sm:w-auto bg-white border-2 border-gray-100 text-indigo-midnight px-8 py-4 rounded-xl font-bold hover:border-purple-electric transition-all flex items-center justify-center">
            <Download size={20} className="mr-2" />
            Download Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
