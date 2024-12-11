import React from 'react';
import { Link } from 'react-router-dom';
import { dumbbellProducts } from '../data/dumbbells';
import { barbellProducts } from '../data/barbells';
import { cardioCycleProducts } from '../data/cardio-cycles';
import { beanBagProducts } from '../data/bean-bags';
import { gymBenchProducts } from '../data/gym-benches';
import { gymMachineProducts } from '../data/gym-machines';
import { weightRackProducts } from '../data/weight-racks';
import { punchingBagProducts } from '../data/punching-bags';

export default function Sitemap() {
  const categories = [
    { name: 'Dumbbells', products: dumbbellProducts, path: '/category/dumbbells' },
    { name: 'Barbells', products: barbellProducts, path: '/category/barbells' },
    { name: 'Cardio Cycles', products: cardioCycleProducts, path: '/category/cardio-cycles' },
    { name: 'Bean Bags', products: beanBagProducts, path: '/category/bean-bags' },
    { name: 'Gym Benches', products: gymBenchProducts, path: '/category/gym-benches' },
    { name: 'Gym Machines', products: gymMachineProducts, path: '/category/gym-machines' },
    { name: 'Weight Racks', products: weightRackProducts, path: '/category/weight-racks' },
    { name: 'Punching Bags', products: punchingBagProducts, path: '/category/punching-bags' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Sitemap</h1>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Main Pages</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><Link to="/" className="text-indigo-600 hover:text-indigo-800">Home</Link></li>
              {categories.map(category => (
                <li key={category.path}>
                  <Link to={category.path} className="text-indigo-600 hover:text-indigo-800">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {categories.map(category => (
            <div key={category.name}>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{category.name} Products</h2>
              <ul className="list-disc pl-5 space-y-2">
                {category.products.map(product => (
                  <li key={product.id}>
                    <a 
                      href={`${product.link}?tag=kecaanloyocr-21&linkCode=osi&th=1&psc=1`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      {product.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}