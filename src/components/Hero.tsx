import React from 'react';
import { ShieldPlus, Activity, Clock, PhoneCall, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50/50 to-white pt-16 pb-16 md:pt-24 md:pb-24 overflow-hidden min-h-[85vh] flex items-center">
      
      {/* Subtle Background Pattern (Portea style dot grid or soft shape) */}
      <div className="absolute top-0 right-0 w-full md:w-2/3 h-full bg-[#f8fafc] rounded-bl-[150px] -z-10 opacity-70"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-[55%] space-y-6 md:space-y-8 z-10">
            
            {/* Top Badge */}
            <div className="inline-block bg-blue-100/80 text-blue-800 font-semibold px-4 py-1.5 rounded-full border border-blue-200">
              <span className="flex items-center gap-2 text-sm tracking-wide">
                <ShieldPlus size={16} /> 
                Delivering Global Standards at Home
              </span>
            </div>
            
            {/* Headline & Sub-headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1e293b] leading-[1.15] tracking-tight">
                Hospital-Level <br/>
                <span className="text-red-500">ICU & Medical Care</span> <br/>
                at Your Doorstep
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 font-medium max-w-lg leading-relaxed">
                24/7 Emergency Response | Professional Care in Minutes
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/book-service" className="bg-[#1e293b] hover:bg-gray-800 text-white font-bold py-3.5 px-8 rounded flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto">
                Book a Professional Nurse <ArrowRight size={18} />
              </Link>
              <Link href="tel:+920000000000" className="bg-red-50 hover:bg-red-100 border-2 border-red-100 text-red-600 hover:text-red-700 font-bold py-3.5 px-8 rounded flex items-center justify-center gap-2 transition-all w-full sm:w-auto">
                <PhoneCall size={18} /> Emergency Support
              </Link>
            </div>

            {/* Trust Indicators (Below Buttons) */}
            <div className="flex flex-wrap items-center gap-4 md:gap-8 pt-6 border-t border-gray-100 mt-8">
               <div className="flex items-center gap-2 text-gray-600">
                  <Activity size={18} className="text-green-500" />
                  <span className="text-sm font-semibold">Hospital Protocols</span>
               </div>
               <div className="flex items-center gap-2 text-gray-600">
                  <ShieldPlus size={18} className="text-green-500" />
                  <span className="text-sm font-semibold">Verified RN/BSN</span>
               </div>
               <div className="flex items-center gap-2 text-gray-600">
                  <Clock size={18} className="text-green-500" />
                  <span className="text-sm font-semibold">24/7 Monitoring</span>
               </div>
            </div>

          </div>

          {/* Right Image/Visual Content */}
          <div className="w-full lg:w-[45%] relative mt-8 lg:mt-0 flex justify-end">
             {/* Decorative Background Element (Circle) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-red-500/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative z-10 rounded-tl-[80px] rounded-br-[80px] rounded-tr-xl rounded-bl-xl overflow-hidden shadow-2xl border-4 border-white max-w-[500px] w-full">
              <div className="relative w-full h-[400px] sm:h-[450px] md:h-[550px] bg-gray-100">
                <Image 
                  src="/hero-image.png" 
                  alt="Professional ICU and Home Nursing Care"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Floating Info Box (Portea Style) */}
            <div className="absolute -left-4 md:-left-12 bottom-12 bg-white p-4 md:p-5 rounded-xl shadow-2xl z-20 flex items-center gap-4 border-l-4 border-red-500">
              <div className="bg-red-50 p-3 rounded-full text-red-500">
                <Clock size={24} />
              </div>
              <div>
                <p className="font-bold text-[#1e293b] text-base md:text-lg">Fast Response</p>
                <p className="text-xs md:text-sm text-gray-500 font-medium">Karachi & Dubai</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;