import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import SearchResults from './components/SearchResults';
import Sitemap from './components/Sitemap';
import { dumbbellProducts } from './data/dumbbells';
import { barbellProducts } from './data/barbells';
import { cardioCycleProducts } from './data/cardio-cycles';
import { beanBagProducts } from './data/bean-bags';
import { gymBenchProducts } from './data/gym-benches';
import { gymMachineProducts } from './data/gym-machines';
import { weightRackProducts } from './data/weight-racks';
import { punchingBagProducts } from './data/punching-bags';

function App() {
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = (query: string) => {
    const allProducts = [
      ...dumbbellProducts,
      ...barbellProducts,
      ...cardioCycleProducts,
      ...beanBagProducts,
      ...gymBenchProducts,
      ...gymMachineProducts,
      ...weightRackProducts,
      ...punchingBagProducts
    ];

    const results = allProducts.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header onSearch={handleSearch} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/search" element={<SearchResults results={searchResults} />} />
            <Route path="/sitemap" element={<Sitemap />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;