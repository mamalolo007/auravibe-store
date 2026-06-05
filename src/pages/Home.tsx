import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Monitor, Layout as LayoutIcon, Laptop } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-lavender-aura/50 border border-purple-electric/20 text-purple-electric text-sm font-bold mb-6">
              <Sparkles size={16} />
              <span>Trending for Summer 2025</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-indigo-midnight mb-8 leading-[1.1]">
              Elevate Your <br />
              <span className="text-purple-electric italic">Digital Lifestyle</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              Discover a curated selection of functional, modern, and aesthetic products 
              designed for the way you work and live today.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/shop" 
                className="bg-purple-electric hover:bg-indigo-midnight text-white font-bold py-4 px-10 rounded-xl flex items-center justify-center transition-all shadow-lg shadow-purple-electric/20 text-lg"
              >
                Shop Collection
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="bg-gray-soft hover:bg-gray-100 text-indigo-midnight font-bold py-4 px-10 rounded-xl flex items-center justify-center transition-all text-lg"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
        
        {/* Abstract shapes/Aura effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lavender-aura rounded-full filter blur-[100px] opacity-40 animate-pulse"></div>
          <div className="absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-electric rounded-full filter blur-[120px] opacity-20"></div>
        </div>
      </section>

      {/* Categories / Features */}
      <section className="bg-gray-soft py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-purple-electric/30 transition-colors">
              <div className="bg-lavender-aura/40 p-4 rounded-xl w-fit mb-6">
                <Monitor className="text-purple-electric" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-indigo-midnight mb-4">Workspace</h3>
              <p className="text-gray-600 mb-6">
                Ergonomic stands, monitor arms, and lighting to optimize your productivity.
              </p>
              <Link to="/shop" className="text-purple-electric font-bold flex items-center hover:underline">
                Explore <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-purple-electric/30 transition-colors">
              <div className="bg-lavender-aura/40 p-4 rounded-xl w-fit mb-6">
                <LayoutIcon className="text-purple-electric" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-indigo-midnight mb-4">Organization</h3>
              <p className="text-gray-600 mb-6">
                Keep your desk clean and focused with our premium cable management and organizers.
              </p>
              <Link to="/shop" className="text-purple-electric font-bold flex items-center hover:underline">
                Explore <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-purple-electric/30 transition-colors">
              <div className="bg-lavender-aura/40 p-4 rounded-xl w-fit mb-6">
                <Laptop className="text-purple-electric" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-indigo-midnight mb-4">On-the-go</h3>
              <p className="text-gray-600 mb-6">
                Portable solutions for the modern digital nomad and hybrid worker.
              </p>
              <Link to="/shop" className="text-purple-electric font-bold flex items-center hover:underline">
                Explore <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Teaser */}
      <section className="py-24 bg-indigo-midnight text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to vibe?</h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
            Our summer collection is now live. Get free standard shipping on your first order.
          </p>
          <Link 
            to="/shop" 
            className="bg-white text-indigo-midnight hover:bg-purple-electric hover:text-white font-bold py-4 px-12 rounded-xl inline-flex items-center transition-all text-lg"
          >
            Go to Shop
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
