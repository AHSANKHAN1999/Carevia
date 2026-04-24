import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'; // Facebook yahan se nikal diya
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Top Section - CTA */}
        <div className="bg-accent rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-20 -mt-32 relative z-20 shadow-2xl">
          <div className="md:w-2/3">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Need Professional Home Care?</h3>
            <p className="text-white/90 text-lg">Contact us today to schedule a consultation or learn more about our specialized medical services.</p>
          </div>
          <div className="md:w-1/3 flex justify-end w-full">
            <Link 
              href="/book-a-service" 
              className="bg-white text-accent hover:bg-gray-100 font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-all w-full sm:w-auto shadow-lg"
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
              <div className="bg-accent text-white p-2 rounded-lg">
                <span className="font-bold text-xl">C</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold leading-tight">Carevia</h2>
              </div>
            </div>
            <p className="text-gray-400">
              Providing compassionate, professional, and personalized medical care in the comfort of your own home.
            </p>
            
            {/* FACEBOOK SVG ICON */}
            <div className="flex gap-4 pt-2">
              <a 
                href="https://www.facebook.com/profile.php?id=61567667787669" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-white/10 hover:bg-[#1877F2] hover:text-white p-2.5 rounded-full transition-colors flex items-center justify-center group"
                aria-label="Facebook"
              >
                {/* Asli Facebook jaisa SVG icon */}
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
            <h4 className="text-xl font-bold mb-6 border-b border-white/20 pb-4 inline-block">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#home" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14} /> Home</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14} /> About Us</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14} /> Services</Link></li>
              <li><Link href="#why-us" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14} /> Why Choose Us</Link></li>
              <li><Link href="#testimonials" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14} /> Testimonials</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xl font-bold mb-6 border-b border-white/20 pb-4 inline-block">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14} /> Home Nursing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14} /> Post-Surgical Care</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14} /> Elderly Care</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14} /> Physiotherapy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14} /> Mother & Baby Care</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-xl font-bold mb-6 border-b border-white/20 pb-4 inline-block">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-accent shrink-0 mt-1" size={24} />
                <span className="text-gray-400">
                  Sindh, Pakistan<br/>
                  Dubai, UAE
                </span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="text-accent shrink-0 mt-1" size={24} />
                <div className="flex flex-col">
                  <a href="tel:+923022096374" className="text-gray-400 hover:text-accent transition-colors">
                    +92 302 2096374
                  </a>
                  <a href="tel:+923122460994" className="text-gray-400 hover:text-accent transition-colors">
                    +92 312 2460994
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="text-accent shrink-0 mt-1" size={24} />
                <a href="mailto:careviahomenursing@gmail.com" className="text-gray-400 hover:text-accent transition-colors break-all">
                  careviahomenursing@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Carevia Home Nursing. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;