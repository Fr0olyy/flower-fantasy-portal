
import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "@/components/animations/FadeIn";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredProducts = [
  {
    id: 1,
    name: "Rose Elegance",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80",
    category: "Bouquets",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Spring Melody",
    price: 65.99,
    image: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&w=800&q=80",
    category: "Arrangements",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Sunflower Joy",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&w=800&q=80",
    category: "Bouquets",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Orchid Serenity",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1567748157439-651aca2ff064?auto=format&fit=crop&w=800&q=80",
    category: "Plants",
    rating: 5.0,
  },
];

interface ProductCardProps {
  product: typeof featuredProducts[0];
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <FadeIn delay={100 * index} direction="up">
      <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md">
        <Link to={`/products/${product.id}`} className="block aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="absolute top-3 left-3">
          <div className="flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs font-medium backdrop-blur-sm">
            <span className="text-floral-500">{product.category}</span>
          </div>
        </div>
        <div className="absolute top-3 right-3">
          <div className="flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs font-medium backdrop-blur-sm">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span>{product.rating}</span>
          </div>
        </div>
        <div className="p-4">
          <Link to={`/products/${product.id}`} className="hover:text-floral-500">
            <h3 className="text-lg font-medium">{product.name}</h3>
          </Link>
          <div className="mt-2 flex items-center justify-between">
            <p className="font-medium">${product.price.toFixed(2)}</p>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full text-floral-500 hover:bg-floral-100 hover:text-floral-600"
              asChild
            >
              <Link to={`/products/${product.id}`}>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

const Featured = () => {
  return (
    <section className="py-20 bg-floral-100/50">
      <div className="content-wrapper">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Featured Collections</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most loved floral arrangements, carefully crafted for every moment worth celebrating.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <FadeIn delay={400}>
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="group border-floral-300 hover:border-floral-400 hover:bg-floral-100"
              asChild
            >
              <Link to="/products">
                <span className="flex items-center">
                  View All Collections
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Featured;
