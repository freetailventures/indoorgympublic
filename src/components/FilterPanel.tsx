import React from 'react';

interface FilterPanelProps {
  filters: {
    priceRange: [number, number];
    rating: number | null;
    sortBy: string;
  };
  setFilters: (filters: any) => void;
}

export default function FilterPanel({ filters, setFilters }: FilterPanelProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-lg font-medium mb-4">Filters</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Price Range</label>
          <div className="mt-2 flex items-center space-x-4">
            <input
              type="range"
              min="0"
              max="100000"
              value={filters.priceRange[1]}
              onChange={(e) => setFilters({
                ...filters,
                priceRange: [filters.priceRange[0], parseInt(e.target.value)]
              })}
              className="w-full"
            />
            <span className="text-sm text-gray-500 whitespace-nowrap">
              ₹{filters.priceRange[0]} - ₹{filters.priceRange[1]}
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Rating</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {[5,4,3,2,1].map((rating) => (
              <button
                key={rating}
                onClick={() => setFilters({ ...filters, rating })}
                className={`px-3 py-1 rounded ${
                  filters.rating === rating
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {rating}★
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}