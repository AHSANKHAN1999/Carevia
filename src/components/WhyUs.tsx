import React from 'react';
import { ShieldCheck, Clock, Users, Award } from 'lucide-react';
import Image from 'next/image';

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Content Side */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="inline-block text-accent font-semibold tracking-wider uppercase text-sm">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                Why People Trust Carevia For Their Health
              </h2>
              <p className="text-muted text-lg">
                We believe that healing at home is not just about medical care, but about restoring independence and quality of life. Our commitment to excellence sets us apart.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="flex gap-4">
                <div className="text-accent bg-accent/10 p-3 rounded-lg h-min">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Certified Experts</h4>
                  <p className="text-muted text-sm">Highly trained, vetted, and certified medical professionals.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-accent bg-accent/10 p-3 rounded-lg h-min">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">24/7 Support</h4>
                  <p className="text-muted text-sm">Round-the-clock availability for your peace of mind.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-accent bg-accent/10 p-3 rounded-lg h-min">
                  <Users size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Personalized Care</h4>
                  <p className="text-muted text-sm">Tailored treatment plans matching specific patient needs.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-accent bg-accent/10 p-3 rounded-lg h-min">
                  <Award size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Quality Standards</h4>
                  <p className="text-muted text-sm">Adherence to the highest medical and ethical standards.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side - YAHAN CHANGES KIYI HAIN */}
          <div className="lg:w-1/2 relative w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] w-full bg-gray-100">
               {/* Yahan src mein apni image ka naam likhein jo public folder mein hai */}
               <Image 
                 src="/care-image.png" 
                 alt="Why Choose Carevia"
                 fill
                 className="object-cover"
                 sizes="(max-w-768px) 100vw, 50vw"
               />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;