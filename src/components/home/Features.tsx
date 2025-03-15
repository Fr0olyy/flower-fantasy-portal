
import React from "react";
import { Truck, RefreshCw, ShieldCheck, Award } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const Features = () => {
  const features = [
    { icon: <Truck className="h-6 w-6" />, title: "Free Delivery", description: "On orders over $100" },
    { icon: <RefreshCw className="h-6 w-6" />, title: "Easy Returns", description: "30-day return policy" },
    { icon: <ShieldCheck className="h-6 w-6" />, title: "Secure Payments", description: "100% secure checkout" },
    { icon: <Award className="h-6 w-6" />, title: "Quality Promise", description: "Always fresh flowers" },
  ];

  return (
    <section className="py-16">
      <div className="content-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
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
  );
};

export default Features;
