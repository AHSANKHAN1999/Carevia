import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'; 
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#1e293b] text-white pt-20 pb-8 mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Top Section - Floating CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-20 -mt-36 relative z-20 shadow-2xl border border-blue-500/30">
          <div className="md:w-2/3">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-white tracking-tight">Need Professional Home Care?</h3>
            <p className="text-blue-100 text-lg font-medium">Contact us today to schedule a consultation or learn more about our specialized medical services.</p>
          </div>
          <div className="md:w-1/3 flex justify-end w-full">
            <Link 
              href="/contact" 
              className="bg-white text-blue-700 hover:bg-gray-50 font-bold py-4 px-8 rounded flex items-center justify-center gap-2 transition-all w-full sm:w-auto shadow-lg"
            >
              Book Appointment <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* About Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 text-white p-2 rounded shrink-0">
                <span className="font-bold text-xl">C</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold leading-tight tracking-tight">Carevia</h2>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering hospital-level care with global standards at home. Patient safety, dignity, and confidentiality are strictly followed.
            </p>
            
            {/* FACEBOOK SVG ICON */}
            <div className="flex gap-4 pt-2">
              <a 
                href="https://www.facebook.com/profile.php?id=61567667787669" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-gray-800 hover:bg-[#1877F2] text-gray-400 hover:text-white p-2.5 rounded-full transition-colors flex items-center justify-center group"
                aria-label="Facebook"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="group-hover:fill-current"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-4 inline-block text-gray-100">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 text-sm font-medium"><ArrowRight size={14} /> Home</Link></li>
              <li><Link href="/#about-us" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 text-sm font-medium"><ArrowRight size={14} /> About Us</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 text-sm font-medium"><ArrowRight size={14} /> Services</Link></li>
              <li><Link href="/#equipments" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 text-sm font-medium"><ArrowRight size={14} /> Equipments</Link></li>
              <li><Link href="/#testimonials" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 text-sm font-medium"><ArrowRight size={14} /> Testimonials</Link></li>
            </ul>
          </div>

          {/* Services Column (Updated with Client's Core Services) */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-4 inline-block text-gray-100">Core Services</h4>
            <ul className="space-y-4">
              <li><Link href="/#services" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 text-sm font-medium"><ArrowRight size={14} /> ICU/HDU at Home</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 text-sm font-medium"><ArrowRight size={14} /> Emergency Response</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 text-sm font-medium"><ArrowRight size={14} /> Pediatric Care</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 text-sm font-medium"><ArrowRight size={14} /> Geriatric Care</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 text-sm font-medium"><ArrowRight size={14} /> Post-Operative Care</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-4 inline-block text-gray-100">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <MapPin className="text-blue-500 shrink-0 mt-1" size={20} />
                <span className="text-gray-400 text-sm font-medium leading-relaxed">
                  Karachi, Sindh, Pakistan<br/>
                  Dubai, UAE
                </span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="text-blue-500 shrink-0 mt-1" size={20} />
                <div className="flex flex-col">
                  <a href="tel:+923022096374" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium">
                    +92 302 2096374
                  </a>
                  <a href="tel:+923122460994" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium mt-1">
                    +92 312 2460994
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="text-blue-500 shrink-0 mt-1" size={20} />
                <a href="mailto:careviahomenursing@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors break-all text-sm font-medium">
                  careviahomenursing@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} Carevia Global Care-Link. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <span className="text-gray-700">|</span>
            <Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;