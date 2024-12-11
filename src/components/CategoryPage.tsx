import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronUp, SlidersHorizontal } from 'lucide-react';
import ProductCard from './ProductCard';
import FilterPanel from './FilterPanel';
import SortDropdown from './SortDropdown';
import { dumbbellProducts } from '../data/dumbbells';
import { barbellProducts } from '../data/barbells';
import { cardioCycleProducts } from '../data/cardio-cycles';
import { beanBagProducts } from '../data/bean-bags';
import { gymBenchProducts } from '../data/gym-benches';
import { gymMachineProducts } from '../data/gym-machines';
import { weightRackProducts } from '../data/weight-racks';
import { punchingBagProducts } from '../data/punching-bags';

interface FilterState {
  priceRange: [number, number];
  rating: number | null;
  sortBy: string;
}

interface Product {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  rating: number;
  link: string;
}

export default function CategoryPage() {
  const { category } = useParams();
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 100000],
    rating: null,
    sortBy: 'featured'
  });
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const filterPanelRef = useRef<HTMLDivElement>(null);
  const filterButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterPanelRef.current && 
        !filterPanelRef.current.contains(event.target as Node) &&
        filterButtonRef.current &&
        !filterButtonRef.current.contains(event.target as Node)
      ) {
        setShowFilters(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getProducts = () => {
    switch (category) {
      case 'dumbbells':
        return dumbbellProducts;
      case 'barbells':
        return barbellProducts;
      case 'cardio-cycles':
        return cardioCycleProducts;
      case 'bean-bags':
        return beanBagProducts;
      case 'gym-benches':
        return gymBenchProducts;
      case 'gym-machines':
        return gymMachineProducts;
      case 'weight-racks':
        return weightRackProducts;
      case 'punching-bags':
        return punchingBagProducts;
      default:
        return [];
    }
  };

  useEffect(() => {
    setFilteredProducts(getProducts());
  }, [category]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let result = [...getProducts()];

    if (filters.rating) {
      result = result.filter(product => product.rating >= filters.rating!);
    }

    result = result.filter(
      product => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );

    switch (filters.sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
    }

    setFilteredProducts(result);
  }, [filters, category]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categoryTitle = category
    ?.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm mb-6">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="/" className="text-gray-400 hover:text-gray-500 transition-colors duration-300">Home</a>
              <span className="mx-2 text-gray-400">/</span>
            </li>
            <li className="text-indigo-600 font-medium">{categoryTitle}</li>
          </ol>
        </nav>

        <div className="sticky top-20 z-10 bg-gray-50 py-4 px-4 sm:px-0 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-stretch gap-4">
            <button
              ref={filterButtonRef}
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center space-x-2 px-8 py-4 bg-white rounded-lg shadow-sm hover:bg-indigo-600 hover:text-white w-full sm:w-auto border border-gray-200 min-h-[3.5rem] transition-all duration-300 transform hover:scale-105"
            >
              <SlidersHorizontal className="h-5 w-5" />
              <span className="font-medium">Filters</span>
            </button>
            
            <div className="w-full sm:w-auto min-h-[3.5rem]">
              <SortDropdown
                value={filters.sortBy}
                onChange={(value) => setFilters({ ...filters, sortBy: value })}
              />
            </div>
          </div>
        </div>

        {showFilters && (
          <div ref={filterPanelRef} className="mb-6">
            <FilterPanel
              filters={filters}
              setFilters={setFilters}
            />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              imageUrl={product.imageUrl}
              price={product.price}
              rating={product.rating}
              link={product.link}
            />
          ))}
        </div>

        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-800 transition-all duration-300 transform hover:scale-110"
          >
            <ChevronUp className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
}