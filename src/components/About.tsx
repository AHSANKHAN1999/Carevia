import React from 'react';
import { CheckCircle2, PhoneCall, ShieldCheck, Award, UserCheck } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image & Leadership Side */}
          <div className="lg:w-1/2 w-full space-y-8">
            
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[350px] md:h-[450px] w-full bg-blue-50 border border-gray-100">
              <Image 
                src="/about-us.png" 
                alt="Carevia Hospital Protocol Home Care"
                fill
                className="object-cover"
              />
              
              {/* Trust Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-blue-100 flex items-center gap-4">
                 <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                    <ShieldCheck size={28} />
                 </div>
                 <div>
                    <span className="block text-xl font-bold text-[#1e293b]">100%</span>
                    <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">Hospital Protocols</span>
                 </div>
              </div>
            </div>

            {/* Leadership Box (Portea Style Clean Cards) */}
            <div className="bg-[#f8fafc] rounded-xl p-6 border border-gray-100 shadow-sm">
               <h3 className="text-xl font-bold text-[#1e293b] mb-4 flex items-center gap-2">
                  <Award className="text-blue-600" /> Our Leadership
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Gulzar Ali */}
                  <div className="space-y-1">
                     <p className="font-bold text-[#1e293b] text-lg">Gulzar Ali</p>
                     <p className="text-blue-600 text-sm font-semibold">Founder & CIO</p>
                     <p className="text-gray-500 text-xs">BSN, Dow University</p>
                     <p className="text-gray-500 text-xs">Critical Care Specialist (Karachi)</p>
                  </div>
                  {/* Muhammad Sumair */}
                  <div className="space-y-1">
                     <p className="font-bold text-[#1e293b] text-lg">Muhammad Sumair</p>
                     <p className="text-blue-600 text-sm font-semibold">Co-Founder / Ops Manager</p>
                     <p className="text-gray-500 text-xs mt-1">Expert in International Healthcare Coordination</p>
                  </div>
               </div>
            </div>

          </div>

          {/* Content Side (Safety & Ethics) */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block text-blue-600 font-bold tracking-wider uppercase text-sm bg-blue-50 px-4 py-1 rounded-full">
              About Carevia
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e293b] leading-tight">
              Uncompromising Safety, Ethics & Global Standards
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Patient safety, dignity, confidentiality, and strict hospital-grade protocols are at the core of everything we do. We ensure ethical, reliable, and professional care at home, bridging the gap between hospital ICU standards and home comfort.
            </p>
            
            <div className="space-y-4 pt-4">
              {[
                "Strict Hospital Protocols Applied",
                "Karachi & Dubai Operations",
                "Fast Emergency Response System",
                "Verified RN/BSN Certified Staff",
                "24/7 Patient Monitoring & Support"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-blue-50/50 p-3 rounded-lg border border-blue-50">
                  <CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={20} />
                  <span className="text-[#1e293b] font-semibold">{item}</span>
                </div>
              ))}
            </div>

            {/* Contact Action */}
            <div className="pt-6 mt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-red-50 p-3 rounded-full text-red-500">
                  <PhoneCall size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Require Immediate Assistance?</p>
                  <a href="tel:+923022096374" className="font-bold text-xl text-[#1e293b] hover:text-red-500 transition-colors">
                    +92 302 2096374
                  </a>
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