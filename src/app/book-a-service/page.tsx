"use client";
import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';

const BookService = () => {
  // 1. Yahan (e) ke aage uski proper Type laga di gai hai
  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Page ko reload hone se rokega

    // 2. TypeScript mein form ka data nikalne ka sab se clean tareeqa (FormData)
    const formData = new FormData(e.currentTarget);
    
    const name = formData.get('patientName');
    const phone = formData.get('phoneNumber');
    const service = formData.get('serviceType');
    const address = formData.get('address');
    const notes = formData.get('notes');

    // WhatsApp ke liye message banana (URL encoded format mein)
    const message = `Hello Carevia! 🏥%0A%0AMera naam *${name}* hai.%0AMera contact number *${phone}* hai.%0A%0AMujhe *${service}* ki zaroorat hai.%0A%0A*Address:* ${address}%0A*Medical Notes:* ${notes ? notes : "No specific notes."}`;
    
    // Aapka WhatsApp number
    const targetNumber = "923022096374"; 

    // Naye tab mein WhatsApp ka link open karna
    window.open(`https://wa.me/${targetNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Main Container */}
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side - Contact Info & Trust Signals (Primary Color) */}
        <div className="md:w-2/5 bg-primary text-white p-10 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">Let's Care For<br/>Your Loved Ones</h2>
            <p className="text-primary-light text-gray-300 mb-8 mt-4 text-sm leading-relaxed">
              Book a certified home nurse, physiotherapist, or patient attendant in just a few clicks. Our team will contact you within 60 minutes.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="text-accent mt-1" size={20} />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">24/7 Helpline</p>
                  <a href="https://wa.me/923022096374" target="_blank" rel="noreferrer" className="text-lg font-medium hover:text-accent transition-colors">+92 302 2096374</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="text-accent mt-1" size={20} />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Email Us</p>
                  <a href="mailto:careviahomenursing@gmail.com" className="text-base font-medium hover:text-accent transition-colors break-all">careviahomenursing@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-accent mt-1" size={20} />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Service Areas</p>
                  <p className="text-base font-medium">Sindh, Pakistan<br/>Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Badges */}
          <div className="relative z-10 mt-12 pt-8 border-t border-white/20 space-y-3">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-accent" size={20} />
              <span className="text-sm font-medium">Verified & Certified Staff</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-accent" size={20} />
              <span className="text-sm font-medium">Fast Dispatch System</span>
            </div>
          </div>
        </div>

        {/* Right Side - Booking Form (Clean White) */}
        <div className="md:w-3/5 p-10 lg:p-12">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Request a Service</h3>
            <p className="text-gray-500 text-sm mt-1">Fill out the form below and it will be sent directly to our WhatsApp.</p>
          </div>

          <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Patient's Name *</label>
                <input 
                  type="text" 
                  name="patientName"
                  placeholder="e.g. Ahmed Khan" 
                  className="w-full border-b-2 border-gray-200 bg-transparent py-2 focus:border-accent focus:outline-none transition-colors text-gray-800 placeholder-gray-400"
                  required 
                />
              </div>
              
              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phoneNumber"
                  placeholder="+92 3XX XXXXXXX" 
                  className="w-full border-b-2 border-gray-200 bg-transparent py-2 focus:border-accent focus:outline-none transition-colors text-gray-800 placeholder-gray-400"
                  required 
                />
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Required Service *</label>
              <select 
                name="serviceType"
                defaultValue=""
                className="w-full border-b-2 border-gray-200 bg-transparent py-2 focus:border-accent focus:outline-none transition-colors text-gray-800 appearance-none cursor-pointer"
                required
              >
                <option value="" disabled>Select a service...</option>
                <option value="Registered Nurse">Registered Nurse</option>
                <option value="ICU-Trained Nurse">ICU-Trained Nurse</option>
                <option value="Physiotherapy">Physiotherapy</option>
                <option value="Patient Attendant">Patient Attendant</option>
                <option value="Doctor Home Visit">Doctor Home Visit</option>
                <option value="Post-Surgery Care">Post-Surgery Care</option>
                <option value="Elderly Care">Elderly Care</option>
              </select>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Address *</label>
              <input 
                type="text" 
                name="address"
                placeholder="House No, Street, Area, City" 
                className="w-full border-b-2 border-gray-200 bg-transparent py-2 focus:border-accent focus:outline-none transition-colors text-gray-800 placeholder-gray-400"
                required 
              />
            </div>

            {/* Additional Details */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Brief Medical History / Notes</label>
              <textarea 
                name="notes"
                rows={2}
                placeholder="Any specific requirements or patient condition we should know about..." 
                className="w-full border-b-2 border-gray-200 bg-transparent py-2 focus:border-accent focus:outline-none transition-colors text-gray-800 placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2 space-y-4">
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-gray-900 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg text-lg"
              >
                <CheckCircle2 size={20} /> Submit via WhatsApp
              </button>

              <p className="text-center text-xs text-gray-400 mt-4">
                By submitting, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default BookService;