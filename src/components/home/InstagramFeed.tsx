
import React from "react";
import { Heart, Instagram } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";

const InstagramFeed = () => {
  const instagramImages = [
    "https://images.unsplash.com/photo-1558697524-5a309432c09f?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1508610048659-a06b669e3b5a?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1587715178509-9b172b0f031d?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1567748157439-651aca2ff064?auto=format&fit=crop&w=400&q=80",
  ];

  return (
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
          {instagramImages.map((image, i) => (
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
          <Button 
            variant="outline" 
            className="border-floral-300 hover:border-floral-400 hover:bg-floral-100"
          >
            <Instagram className="h-4 w-4 mr-2" />
            Follow @floristica
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
