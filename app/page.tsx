// app/page.js
import React from 'react';
import { ShoppingBag, Search, Menu } from 'lucide-react';

const featuredProducts = [
  {
    id: 1,
    name: "Diamond Eternity Ring",
    price: "$1,299",
    image: "/api/placeholder/300/300"
  },
  {
    id: 2,
    name: "Pearl Necklace",
    price: "$899",
    image: "/api/placeholder/300/300"
  },
  {
    id: 3,
    name: "Sapphire Earrings",
    price: "$749",
    image: "/api/placeholder/300/300"
  },
  {
    id: 4,
    name: "Gold Bracelet",
    price: "$599",
    image: "/api/placeholder/300/300"
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
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover"
            src="/api/placeholder/1920/600"
            alt="Jewelry collection"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
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

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Featured Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
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
            <div className="relative rounded-lg overflow-hidden">
              <img src="/api/placeholder/600/400" alt="Rings" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Rings</h3>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <img src="/api/placeholder/600/400" alt="Necklaces" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Necklaces</h3>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <img src="/api/placeholder/600/400" alt="Earrings" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Earrings</h3>
              </div>
            </div>
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