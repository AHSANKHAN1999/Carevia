import React from 'react';
import { HeartPulse, UserCheck, ShieldCheck, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    // Padding bottom ko kam kiya gaya hai taake gap na bane mobile par
    <section id="home" className="relative bg-light pt-12 pb-12 md:pt-20 md:pb-20 overflow-hidden min-h-fit">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* flex-col aur gap ko adjust kiya gaya hai */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            <div className="inline-block bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full border border-accent/20">
              <span className="flex items-center gap-2 text-sm md:text-base">
                <HeartPulse size={16} /> 
                Professional Health Care Services
              </span>
            </div>
            
            {/* Text size mobile ke liye thoda chota rakha gaya hai taake fit aye */}
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary leading-tight">
              Exceptional <span className="text-accent">Home Nursing</span> <br />& Medical Care
            </h1>
            
            <p className="text-base md:text-lg text-muted max-w-lg">
              Providing compassionate, professional, and personalized medical care in the comfort of your own home. Our certified nurses are dedicated to your well-being and recovery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-2xl">
                Our Services <ArrowRight size={18} />
              </button>
              <button className="bg-white border-2 border-primary text-primary hover:bg-light font-bold py-3 px-6 rounded-full transition-all">
                Learn More
              </button>
            </div>

            {/* Quick stats/features - Mobile par space theek ki gai hai */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 border-t border-gray-200 mt-6">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-xs md:text-sm text-muted">Availability Support</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-xs md:text-sm text-muted">Certified Experts</div>
              </div>
              <div className="col-span-2 md:col-span-1 md:block">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">10k+</div>
                <div className="text-xs md:text-sm text-muted">Happy Patients</div>
              </div>
            </div>
          </div>

          {/* Image/Visual Content - Mobile view ko fix kiya gaya hai */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 md:border-8 border-white">
              {/* Image Container ki height mobile aur desktop dono ke liye set ki gai hai */}
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
                <Image 
                  src="/hero-image.png" // Yaad rahe: public folder mein is naam ki image honi chahiye, jaise humne abhi HD generate ki
                  alt="Professional Home Nursing"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating badges - Animations delay adjust ki gai hain */}
            <div className="absolute -left-4 md:-left-8 top-1/4 bg-white p-3 md:p-4 rounded-xl shadow-xl z-20 hidden md:flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="bg-green-100 p-2 md:p-3 rounded-full text-green-600">
                <UserCheck size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <p className="text-xs md:text-sm text-muted font-medium">Expert</p>
                <p className="font-bold text-primary text-sm md:text-base">Caregivers</p>
              </div>
            </div>

            <div className="absolute -right-4 md:-right-8 bottom-1/4 bg-white p-3 md:p-4 rounded-xl shadow-xl z-20 hidden md:flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <div className="bg-accent/10 p-2 md:p-3 rounded-full text-accent">
                <ShieldCheck size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <p className="text-xs md:text-sm text-muted font-medium">Certified</p>
                <p className="font-bold text-primary text-sm md:text-base">Services</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;