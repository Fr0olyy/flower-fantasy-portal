
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  isFavorite?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onToggleFavorite?: (productId: number) => void;
}

const ProductCard = ({ 
  product, 
  onAddToCart,
  onToggleFavorite 
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (onAddToCart) {
      onAddToCart(product);
    } else {
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
    }
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (onToggleFavorite) {
      onToggleFavorite(product.id);
    } else {
      toast({
        title: product.isFavorite ? "Removed from favorites" : "Added to favorites",
        description: `${product.name} has been ${product.isFavorite ? "removed from" : "added to"} your favorites.`,
      });
    }
  };

  return (
    <div 
      className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${product.id}`} className="block aspect-square overflow-hidden">
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-floral-100 animate-pulse"></div>
        )}
        <img
          src={product.image}
          alt={product.name}
          className={cn(
            "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
            isImageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsImageLoaded(true)}
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
      
      {/* Quick actions */}
      <div 
        className={cn(
          "absolute right-3 bottom-24 flex flex-col gap-2 transition-all duration-300",
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        )}
      >
        <Button
          variant="secondary"
          size="icon"
          className="h-9 w-9 rounded-full shadow-sm"
          onClick={handleToggleFavorite}
        >
          <Heart 
            className={cn(
              "h-4 w-4 transition-colors", 
              product.isFavorite ? "fill-red-500 text-red-500" : "text-floral-500"
            )} 
          />
        </Button>
        
        <Button
          variant="secondary"
          size="icon"
          className="h-9 w-9 rounded-full shadow-sm"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4 text-floral-500" />
        </Button>
      </div>
      
      <div className="p-4">
        <Link to={`/products/${product.id}`} className="hover:text-floral-500">
          <h3 className="text-lg font-medium leading-tight">{product.name}</h3>
        </Link>
        <div className="mt-2 flex items-center justify-between">
          <p className="font-medium">${product.price.toFixed(2)}</p>
          
          <Button
            variant="ghost"
            size="sm"
            className="text-xs font-medium text-floral-500 hover:bg-floral-100 hover:text-floral-600"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
