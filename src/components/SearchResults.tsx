import React from 'react';
import ProductCard from './ProductCard';

interface SearchResultsProps {
  results: Array<{
    id: string;
    title: string;
    imageUrl: string;
    price: number;
    rating: number;
    link: string;
  }>;
}

export default function SearchResults({ results }: SearchResultsProps) {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Search Results ({results.length} items)
        </h2>
        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {results.map((product) => (
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
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}