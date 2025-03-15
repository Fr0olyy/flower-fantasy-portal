
import React from "react";
import FadeIn from "@/components/animations/FadeIn";

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

const Testimonials = () => {
  return (
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
  );
};

export default Testimonials;
