import React from 'react';
import { ShoppingBag, Search, Menu, Image as ImageIcon } from 'lucide-react';

const featuredProducts = [
  {
    id: 1,
    name: "Diamond Eternity Ring",
    price: "$1,299"
  },
  {
    id: 2,
    name: "Pearl Necklace",
    price: "$899"
  },
  {
    id: 3,
    name: "Sapphire Earrings",
    price: "$749"
  },
  {
    id: 4,
    name: "Gold Bracelet",
    price: "$599"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Menu className="h-6 w-6 mr-4 lg:hidden" />
              <h1 className="text-2xl font-bold text-gray-900">Forever_jewels_gallore</h1>
            </div>
            <div className="hidden lg:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Collections</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">New Arrivals</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Sale</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            </div>
            <div className="flex items-center space-x-4">
              <Search className="h-6 w-6 text-gray-600" />
              <ShoppingBag className="h-6 w-6 text-gray-600" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="h-[600px] bg-gradient-to-r from-gray-800 to-gray-600 flex items-center justify-center">
          <div className="flex flex-col items-center text-gray-300">
            <ImageIcon className="h-16 w-16 mb-4" />
            <p className="text-lg">Hero Image Here</p>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Timeless Elegance
            </h1>
            <p className="mt-6 text-xl text-white max-w-3xl">
              Discover our curated collection of fine jewelry, where each piece tells a unique story of beauty and craftsmanship.
            </p>
            <div className="mt-10">
              <a href="#" className="inline-block bg-white px-8 py-3 border border-transparent text-base font-medium text-gray-900 hover:bg-gray-100">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Featured Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <ImageIcon className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Product Image</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Rings', 'Necklaces', 'Earrings'].map((category) => (
              <div key={category} className="relative rounded-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-gray-700 to-gray-500 flex items-center justify-center">
                  <div className="text-center text-gray-300">
                    <ImageIcon className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-lg">{category} Image</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{category}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">New Arrivals</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Best Sellers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Sale</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Our Story</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Craftmanship</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Shipping & Returns</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Instagram</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Facebook</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Pinterest</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-center">© 2025 Forever_jewels_gallore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}