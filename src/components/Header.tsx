import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header({ onSearch }: { onSearch: (query: string) => void }) {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      navigate('/search');
    }
  };

  const categoryColors = {
    'dumbbells': 'hover:bg-red-500 hover:text-white',
    'barbells': 'hover:bg-blue-500 hover:text-white',
    'cardio-cycles': 'hover:bg-green-500 hover:text-white',
    'bean-bags': 'hover:bg-purple-500 hover:text-white',
    'gym-benches': 'hover:bg-yellow-500 hover:text-white',
    'gym-machines': 'hover:bg-pink-500 hover:text-white',
    'weight-racks': 'hover:bg-indigo-500 hover:text-white',
    'punching-bags': 'hover:bg-orange-500 hover:text-white'
  };

  const getActiveColor = (path: string) => {
    const category = path.split('/').pop();
    switch (category) {
      case 'dumbbells': return 'bg-red-500 text-white';
      case 'barbells': return 'bg-blue-500 text-white';
      case 'cardio-cycles': return 'bg-green-500 text-white';
      case 'bean-bags': return 'bg-purple-500 text-white';
      case 'gym-benches': return 'bg-yellow-500 text-white';
      case 'gym-machines': return 'bg-pink-500 text-white';
      case 'weight-racks': return 'bg-indigo-500 text-white';
      case 'punching-bags': return 'bg-orange-500 text-white';
      default: return 'text-gray-600 hover:bg-gray-100';
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-orange-100 via-white to-green-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-24 py-4 md:py-0">
          <div className="flex items-center w-full md:w-auto justify-center md:justify-start mb-4 md:mb-0">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/1/17/Ashoka_Chakra.svg"
                alt="Ashoka Chakra"
                className="h-10 w-10"
                style={{ filter: 'invert(23%) sepia(90%) saturate(1960%) hue-rotate(213deg) brightness(97%) contrast(88%)' }}
              />
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl md:text-3xl font-extrabold text-indigo-600 tracking-tight hover:text-indigo-800 transition-colors duration-300">
                  IndoorGym.in
                </span>
                <span className="text-sm font-bold text-gray-600 text-center md:text-left">
                  Best home gym products filtered for you
                </span>
                <span className="text-xs italic text-indigo-500">
                  Making Bharat fit at home
                </span>
              </div>
            </Link>
          </div>

          <div className="w-full md:w-auto">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full md:w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
              />
              <button 
                type="submit" 
                className="absolute right-3 top-2.5 text-gray-400 hover:text-indigo-600 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <nav className="hidden md:flex space-x-4 py-3 overflow-x-auto">
          {[
            { name: 'Dumbbells', path: '/category/dumbbells' },
            { name: 'Barbells', path: '/category/barbells' },
            { name: 'Cardio Cycles', path: '/category/cardio-cycles' },
            { name: 'Bean Bags', path: '/category/bean-bags' },
            { name: 'Home Gym Benches', path: '/category/gym-benches' },
            { name: 'Home Gym Machines', path: '/category/gym-machines' },
            { name: 'Weight Racks', path: '/category/weight-racks' },
            { name: 'Punching Bags', path: '/category/punching-bags' }
          ].map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                location.pathname === category.path
                  ? getActiveColor(category.path)
                  : `${categoryColors[category.path.split('/').pop() as keyof typeof categoryColors]}`
              }`}
            >
              {category.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex overflow-x-auto py-3 space-x-4">
          {[
            { name: 'Dumbbells', path: '/category/dumbbells' },
            { name: 'Barbells', path: '/category/barbells' },
            { name: 'Cardio Cycles', path: '/category/cardio-cycles' },
            { name: 'Bean Bags', path: '/category/bean-bags' },
            { name: 'Home Gym Benches', path: '/category/gym-benches' },
            { name: 'Home Gym Machines', path: '/category/gym-machines' },
            { name: 'Weight Racks', path: '/category/weight-racks' },
            { name: 'Punching Bags', path: '/category/punching-bags' }
          ].map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                location.pathname === category.path
                  ? getActiveColor(category.path)
                  : `${categoryColors[category.path.split('/').pop() as keyof typeof categoryColors]}`
              }`}
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}