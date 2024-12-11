import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex items-center space-x-2">
            <Dumbbell className="h-6 w-6 text-indigo-400" />
            <span className="text-xl font-bold">indoorgym.in</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><Link to="/category/dumbbells" className="hover:text-indigo-400">Dumbbells</Link></li>
                <li><Link to="/category/barbells" className="hover:text-indigo-400">Barbells</Link></li>
                <li><Link to="/category/cardio-cycles" className="hover:text-indigo-400">Cardio Cycles</Link></li>
                <li><Link to="/category/bean-bags" className="hover:text-indigo-400">Bean Bags</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">More Categories</h3>
              <ul className="space-y-2">
                <li><Link to="/category/gym-benches" className="hover:text-indigo-400">Gym Benches</Link></li>
                <li><Link to="/category/gym-machines" className="hover:text-indigo-400">Gym Machines</Link></li>
                <li><Link to="/category/weight-racks" className="hover:text-indigo-400">Weight Racks</Link></li>
                <li><Link to="/category/punching-bags" className="hover:text-indigo-400">Punching Bags</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Information</h3>
              <ul className="space-y-2">
                <li><Link to="/sitemap" className="hover:text-indigo-400">Sitemap</Link></li>
                <li><a href="#" className="hover:text-indigo-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-indigo-400">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400 text-sm">
                IndoorGym.in is your one-stop destination for all home gym equipment needs. We carefully curate and recommend the best fitness products available on Amazon India.
              </p>
            </div>
          </div>

          <div className="text-center space-y-4 w-full border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              This website is a participant in the Amazon Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.in
            </p>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} indoorgym.in. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}