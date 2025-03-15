
import React from "react";
import Hero from "@/components/home/Hero";
import Featured from "@/components/home/Featured";
import { 
  Truck,
  RefreshCw,
  ShieldCheck,
  Heart,
  Instagram,
  Award
} from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Link } from "react-router-dom";
import CustomButton from "@/components/ui/CustomButton";

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

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Regular Customer",
    content: "The flowers I ordered were absolutely stunning and stayed fresh for weeks. Their attention to detail and customer service is outstanding!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    name: "Michael Torres",
    role: "Event Planner",
    content: "I've been using Floristica for all my events. Their arrangements are always breathtaking and exactly what we envisioned. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    name: "Emma Parker",
    role: "Wedding Client",
    content: "Floristica made my wedding day magical. The bouquets and centerpieces exceeded my expectations. I couldn't be happier with their service.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <section className="py-16">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Truck className="h-6 w-6" />, title: "Free Delivery", description: "On orders over $100" },
              { icon: <RefreshCw className="h-6 w-6" />, title: "Easy Returns", description: "30-day return policy" },
              { icon: <ShieldCheck className="h-6 w-6" />, title: "Secure Payments", description: "100% secure checkout" },
              { icon: <Award className="h-6 w-6" />, title: "Quality Promise", description: "Always fresh flowers" },
            ].map((feature, i) => (
              <FadeIn key={i} delay={i * 100} className="p-6 bg-white rounded-lg shadow-sm border border-floral-100">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-floral-100 text-floral-500 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <Featured />
      
      {/* Categories Section */}
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
      
      {/* Testimonials */}
      <section className="py-16 bg-floral-100/50">
        <div className="content-wrapper">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="section-title mb-4">What Our Customers Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Read about the experiences of our valued customers with Floristica.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <FadeIn key={testimonial.id} delay={i * 150} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm italic">"{testimonial.content}"</p>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h3 className="font-medium text-sm">{testimonial.name}</h3>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Instagram Section */}
      <section className="py-16">
        <div className="content-wrapper">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="section-title mb-4">Follow Us on Instagram</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get inspired and share your Floristica experience with us.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              "https://images.unsplash.com/photo-1558697524-5a309432c09f?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1508610048659-a06b669e3b5a?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1587715178509-9b172b0f031d?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1567748157439-651aca2ff064?auto=format&fit=crop&w=400&q=80",
            ].map((image, i) => (
              <FadeIn key={i} delay={i * 50} className="relative group aspect-square">
                <a 
                  href="#" 
                  className="block w-full h-full overflow-hidden"
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <Heart className="text-white h-6 w-6" />
                  </div>
                  <img
                    src={image}
                    alt="Instagram post"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </a>
              </FadeIn>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <CustomButton 
              variant="outline" 
              size="wide"
              className="border-floral-300 hover:border-floral-400 hover:bg-floral-100"
              icon={<Instagram className="h-4 w-4" />}
            >
              Follow @floristica
            </CustomButton>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-floral-500 text-white">
        <div className="content-wrapper">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="section-title text-white mb-4">Join Our Newsletter</h2>
              <p className="mb-8 opacity-80">
                Subscribe to receive updates, access to exclusive deals, and more.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 w-full rounded-md text-foreground"
                  required
                />
                <CustomButton type="submit" className="bg-white text-floral-500 hover:bg-floral-100">
                  Subscribe
                </CustomButton>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
