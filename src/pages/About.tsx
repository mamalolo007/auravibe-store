import logo from '../assets/logo.svg';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="text-center mb-16">
        <div className="bg-lavender-aura/30 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8">
          <img src={logo} alt="AuraVibe Logo" className="h-12 w-12" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-midnight mb-6">
          About AuraVibe
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed italic">
          "Creating the perfect atmosphere for the modern digital life."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="prose prose-lg text-gray-600">
          <h2 className="text-3xl font-bold text-indigo-midnight mb-4">Our Vision</h2>
          <p>
            AuraVibe was born from a simple observation: the line between our personal lives and our professional workspaces has blurred. As digital natives, we don't just "go to work"—we create, we connect, and we vibe from anywhere.
          </p>
          <p>
            We believe that the tools you use and the environment you create should reflect your personality while enhancing your performance.
          </p>
        </div>
        <div className="bg-purple-electric/5 p-8 rounded-3xl border border-purple-electric/10">
          <h3 className="text-2xl font-bold text-indigo-midnight mb-4">Why AuraVibe?</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-purple-electric text-white rounded-full p-1 mr-3 mt-1">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="font-medium text-indigo-midnight">Hand-Curated Selection</span>
            </li>
            <li className="flex items-start">
              <div className="bg-purple-electric text-white rounded-full p-1 mr-3 mt-1">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="font-medium text-indigo-midnight">Modern & Aesthetic Design</span>
            </li>
            <li className="flex items-start">
              <div className="bg-purple-electric text-white rounded-full p-1 mr-3 mt-1">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="font-medium text-indigo-midnight">Focus on Ergonomics & Productivity</span>
            </li>
            <li className="flex items-start">
              <div className="bg-purple-electric text-white rounded-full p-1 mr-3 mt-1">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="font-medium text-indigo-midnight">Reliable Global Sourcing</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-indigo-midnight text-white p-12 rounded-3xl text-center">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
          To provide a seamless shopping experience with high-demand, high-quality items delivered directly from global suppliers to your doorstep. We focus on the details so you can focus on your life.
        </p>
      </div>
    </div>
  );
};

export default About;
