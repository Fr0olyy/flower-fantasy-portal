
import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "@/components/animations/FadeIn";

const categories = [
  {
    name: "Bouquets",
    image: "https://images.unsplash.com/photo-1558697524-5a309432c09f?auto=format&fit=crop&w=800&q=80",
    description: "Stunning bouquets for every occasion",
    path: "/products?category=bouquets",
  },
  {
    name: "Arrangements",
    image: "https://images.unsplash.com/photo-1540254597053-3049a9a39fe7?auto=format&fit=crop&w=800&q=80",
    description: "Artistic floral arrangements",
    path: "/products?category=arrangements",
  },
  {
    name: "Plants",
    image: "https://images.unsplash.com/photo-1591454371758-644f9d123a81?auto=format&fit=crop&w=800&q=80",
    description: "Beautiful indoor & outdoor plants",
    path: "/products?category=plants",
  },
];

const Categories = () => {
  return (
    <section className="py-16">
      <div className="content-wrapper">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Shop by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse categories of floral creations, each crafted with passion and expertise.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, i) => (
            <FadeIn key={category.name} delay={i * 150} className="relative group">
              <Link to={category.path} className="block overflow-hidden rounded-lg h-80 relative">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <h3 className="text-2xl font-serif font-medium mb-2">{category.name}</h3>
                  <p className="text-sm text-white/80 mb-4 text-center">{category.description}</p>
                  <div className="relative overflow-hidden">
                    <span className="bg-white/20 border border-white/30 backdrop-blur-sm rounded-full py-2 px-4 text-sm font-medium">
                      Explore Collection
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
