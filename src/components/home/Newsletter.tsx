
import React, { FormEvent } from "react";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add form handling logic here
  };

  return (
    <section className="py-16 bg-floral-500 text-white">
      <div className="content-wrapper">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="section-title text-white mb-4">Join Our Newsletter</h2>
            <p className="mb-8 opacity-80">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 w-full rounded-md text-foreground"
                required
              />
              <Button type="submit" className="bg-white text-floral-500 hover:bg-floral-100">
                Subscribe
              </Button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
