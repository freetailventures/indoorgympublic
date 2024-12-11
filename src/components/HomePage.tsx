import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { dumbbellProducts } from '../data/dumbbells';
import { barbellProducts } from '../data/barbells';
import { cardioCycleProducts } from '../data/cardio-cycles';
import { beanBagProducts } from '../data/bean-bags';
import { gymBenchProducts } from '../data/gym-benches';
import { gymMachineProducts } from '../data/gym-machines';
import { weightRackProducts } from '../data/weight-racks';
import { punchingBagProducts } from '../data/punching-bags';

export default function HomePage() {
  const categories = [
    { name: 'Dumbbells', products: dumbbellProducts, path: '/category/dumbbells', color: 'bg-red-100' },
    { name: 'Barbells', products: barbellProducts, path: '/category/barbells', color: 'bg-blue-100' },
    { name: 'Cardio Cycles', products: cardioCycleProducts, path: '/category/cardio-cycles', color: 'bg-green-100' },
    { name: 'Bean Bags', products: beanBagProducts, path: '/category/bean-bags', color: 'bg-purple-100' },
    { name: 'Home Gym Benches', products: gymBenchProducts, path: '/category/gym-benches', color: 'bg-yellow-100' },
    { name: 'Home Gym Machines', products: gymMachineProducts, path: '/category/gym-machines', color: 'bg-pink-100' },
    { name: 'Weight Racks', products: weightRackProducts, path: '/category/weight-racks', color: 'bg-indigo-100' },
    { name: 'Punching Bags', products: punchingBagProducts, path: '/category/punching-bags', color: 'bg-orange-100' }
  ];

  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome to indoorgym.in</h1>
          <p className="text-xl text-gray-600">Best home gym products filtered for you</p>
        </div>

        {categories.map((category) => (
          <div key={category.path} className={`mb-12 p-6 rounded-lg ${category.color}`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
              <Link
                to={category.path}
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.products.slice(0, 4).map((product) => (
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
          </div>
        ))}
      </div>
    </div>
  );
}