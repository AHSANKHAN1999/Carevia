import React from 'react';
import { CheckCircle2, PhoneCall } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="lg:w-1/2 relative w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] w-full bg-gray-200">
              <div className="relative w-full h-full">
                <Image 
                  src="/about-us.png" // Public folder mein /about-us.png honi chahiye
                  alt="Carevia Professional Home Care and Patient Support"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-2 md:-right-6 bg-accent text-white p-4 md:p-6 rounded-xl shadow-xl flex flex-col items-center justify-center border-4 border-white z-10">
              <span className="text-3xl md:text-4xl font-bold">15+</span>
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">Years Experience</span>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block text-accent font-semibold tracking-wider uppercase text-sm">
              About Carevia
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              We Are Committed To Your Health And Well-Being
            </h2>
            
            <p className="text-muted text-lg">
              Carevia provides professional home nursing and medical health services designed to meet your specific needs. Our dedicated team of certified nurses and caregivers ensures that you or your loved ones receive the highest quality of care in the comfort of your home.
            </p>
            
            <div className="space-y-4 pt-4">
              {[
                "Highly qualified and trained medical professionals",
                "Personalized care plans tailored to individual needs",
                "24/7 availability for emergency and continuous support",
                "Compassionate and dedicated approach to healthcare"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                  <span className="text-primary font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Yahan se Discover More button hata diya gaya hai */}
            <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              
              <div className="flex items-center gap-4">
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  <PhoneCall size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted">Need Help? Call Us</p>
                  <p className="font-bold text-primary">+1 (234) 567-890</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;