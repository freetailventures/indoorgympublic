import React from 'react';
import { Star } from 'lucide-react';

interface ProductCardProps {
  title: string;
  imageUrl: string;
  price: number;
  rating: number;
  link: string;
}

export default function ProductCard({ title, imageUrl, price, rating, link }: ProductCardProps) {
  const affiliateLink = link.includes('?') ? link : `${link}?tag=kecaanloyocr-21&linkCode=osi&th=1&psc=1`;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="block">
        <div className="aspect-square overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 h-10 mb-2">
            {title}
          </h3>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-lg font-bold text-gray-900">₹{price.toLocaleString()}</p>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Prime
            </span>
          </div>
          <button 
            onClick={(e) => {
              e.preventDefault();
              window.open(affiliateLink, '_blank');
            }}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200 text-sm font-medium"
          >
            Buy Now
          </button>
        </div>
      </a>
    </div>
  );
}