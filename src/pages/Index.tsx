
import React from "react";
import Hero from "@/components/home/Hero";
import Featured from "@/components/home/Featured";
import Features from "@/components/home/Features";
import Categories from "@/components/home/Categories";
import Testimonials from "@/components/home/Testimonials";
import InstagramFeed from "@/components/home/InstagramFeed";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <Features />
      
      {/* Featured Products */}
      <Featured />
      
      {/* Categories Section */}
      <Categories />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Instagram Section */}
      <InstagramFeed />
      
      {/* Newsletter */}
      <Newsletter />
      
      <Footer />
    </div>
  );
};

export default Index;
