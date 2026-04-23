import React from 'react';
import { HeartPulse, UserCheck, ShieldCheck, ArrowRight } from 'lucide-react';
import Image from 'next/image'; // 1. Ye import zaroori hai

const Hero = () => {
  return (
    <section id="home" className="relative bg-light pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full border border-accent/20">
              <span className="flex items-center gap-2">
                <HeartPulse size={16} /> 
                Professional Health Care Services
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Exceptional <span className="text-accent">Home Nursing</span> <br />& Medical Care
            </h1>
            
            <p className="text-lg text-muted max-w-lg">
              Providing compassionate, professional, and personalized medical care in the comfort of your own home. Our certified nurses are dedicated to your well-being and recovery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-full flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-2xl">
                Our Services <ArrowRight size={18} />
              </button>
              <button className="bg-white border-2 border-primary text-primary hover:bg-light font-bold py-3 px-8 rounded-full transition-all">
                Learn More
              </button>
            </div>

            {/* Quick stats/features */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-gray-200 mt-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted">Availability Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted">Certified Experts</div>
              </div>
              <div className="hidden md:block">
                <div className="text-3xl font-bold text-primary mb-1">10k+</div>
                <div className="text-sm text-muted">Happy Patients</div>
              </div>
            </div>
          </div>

          {/* Image/Visual Content - UPDATED AREA */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              {/* 2. Placeholder div ko hata kar humne Image lagayi hai */}
              <div className="relative w-full h-[400px] md:h-[500px]">
                <Image 
                  src="/hero-image.png" // 3. Apni image ka sahi path yahan likhein
                  alt="Professional Home Nursing"
                  fill // Container ko fill karne ke liye
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -left-8 top-1/4 bg-white p-4 rounded-xl shadow-xl z-20 hidden md:flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <UserCheck size={24} />
              </div>
              <div>
                <p className="text-sm text-muted font-medium">Expert</p>
                <p className="font-bold text-primary">Caregivers</p>
              </div>
            </div>

            <div className="absolute -right-8 bottom-1/4 bg-white p-4 rounded-xl shadow-xl z-20 hidden md:flex items-center gap-4 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <div className="bg-accent/10 p-3 rounded-full text-accent">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-sm text-muted font-medium">Certified</p>
                <p className="font-bold text-primary">Services</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;