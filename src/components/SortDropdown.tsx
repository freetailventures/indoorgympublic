import React from 'react';

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-8 py-4 bg-white rounded-lg shadow-sm hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-200 font-medium cursor-pointer appearance-none min-h-[3.5rem] transition-all duration-300"
    >
      <option value="featured">Featured</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
      <option value="rating">Highest Rated</option>
    </select>
  );
}