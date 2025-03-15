
import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="content-wrapper relative z-10 pt-20">
        <div className="max-w-3xl">
          <FadeIn delay={100} direction="up">
            <p className="text-floral-500 font-medium mb-2">Welcome to Floristica</p>
          </FadeIn>
          
          <FadeIn delay={200} direction="up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium leading-tight mb-6 text-balance">
              Blooming Beauty for Every Occasion
            </h1>
          </FadeIn>
          
          <FadeIn delay={300} direction="up">
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              Discover our curated collection of exquisite floral arrangements, 
              designed to bring natural elegance into your space and brighten someone's day.
            </p>
          </FadeIn>
          
          <FadeIn delay={400} direction="up">
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="default"
                className="bg-floral-400 text-white hover:bg-floral-500 transition-all duration-300 py-3 px-8 w-full sm:w-auto min-w-40"
              >
                <Link to="/products">
                  Shop Collections
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                className="group py-3 px-8 w-full sm:w-auto min-w-40"
              >
                <Link to="/about" className="flex items-center">
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
