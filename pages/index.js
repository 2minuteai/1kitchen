import { ChefHat, TrendingUp, BarChart2 } from 'lucide-react';
import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">1 Kitchen</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#benefits" className="hover:underline">Benefits</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto mt-8 p-4">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Revolutionize Your Restaurant with AI-Powered POS</h2>
          <p className="text-xl mb-8">1 Kitchen: Your all-in-one solution for POS, KOT, and business analytics</p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
            Get Started
          </button>
        </section>

        <section id="features" className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ChefHat size={24} />}
              title="Smart POS & KOT"
              description="Streamline your kitchen operations with our intuitive POS and KOT system."
            />
            <FeatureCard
              icon={<TrendingUp size={24} />}
              title="AI-Driven Analytics"
              description="Gain valuable insights to boost your revenue and optimize your business."
            />
            <FeatureCard
              icon={<BarChart2 size={24} />}
              title="Real-time Reporting"
              description="Access up-to-the-minute data on sales, inventory, and performance."
            />
          </div>
        </section>

        <section id="benefits" className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Benefits</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Increase efficiency and reduce errors in order processing</li>
            <li>Make data-driven decisions to optimize your menu and pricing</li>
            <li>Improve customer satisfaction with faster service</li>
            <li>Minimize food waste and control inventory costs</li>
            <li>Focus on what matters: creating great food and experiences</li>
          </ul>
        </section>

        <section id="contact" className="text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to transform your restaurant?</h3>
          <p className="mb-4">Contact us for a free demo and see how 1 Kitchen can revolutionize your business.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Request Demo
          </button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 1 Kitchen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p>{description}</p>
  </div>
);

export default Home;