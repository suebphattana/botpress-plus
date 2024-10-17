import React from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <HomeIcon size={64} className="mb-8" />
      <h1 className="text-5xl font-bold mb-8">Welcome to Our Platform</h1>
      <p className="text-xl mb-12 text-center max-w-2xl">
        Discover a world of possibilities. Connect, collaborate, and create with our innovative tools and vibrant community.
      </p>
      <div className="space-x-4">
        <Link to="/login" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
          Log In
        </Link>
        <Link to="/register" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;