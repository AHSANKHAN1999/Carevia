import React from 'react';
import { 
  HeartPulse, Activity, Stethoscope, Syringe, Baby, Users, 
  ShieldAlert, Plane, Wind, Bone, Bandage, UserPlus 
} from 'lucide-react';

// Core Services Data
const coreServices = [
  {
    icon: <Activity size={32} strokeWidth={1.5} />,
    title: "ICU/HDU at Home",
    description: "Complete setup including Ventilator, BiPAP/CPAP, Tracheostomy care, and strict Infection Control.",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    icon: <ShieldAlert size={32} strokeWidth={1.5} />,
    title: "Emergency Response",
    description: "Immediate dispatch of medical professionals along with continuous patient monitoring.",
    bgColor: "bg-red-50",
    iconColor: "text-red-500"
  },
  {
    icon: <Baby size={32} strokeWidth={1.5} />,
    title: "Pediatric Care",
    description: "Specialized care for PICU & CP cases, ensuring safety and comfort for your little ones.",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    icon: <Users size={32} strokeWidth={1.5} />,
    title: "Geriatric Care",
    description: "Compassionate support for bedridden patients, pressure sore management, and daily hygiene.",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    icon: <HeartPulse size={32} strokeWidth={1.5} />,
    title: "Post-Operative Care",
    description: "Professional recovery assistance, precise dressing changes, and expert wound care.",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    icon: <Plane size={32} strokeWidth={1.5} />,
    title: "Global Travel Companion",
    description: "Qualified RN accompanying patients for international travel, including Umrah journeys.",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  }
];

// Ongoing Services List
const ongoingServicesList = [
  "IV Injections & Drips",
  "Infection Management",
  "Hygiene Care",
  "Dressing & Wound Care",
  "Fracture Care",
  "Physiotherapy (Specialist)",
  "Doctor Consultation",
  "Respiratory Therapy",
  "Midwife Services",
  "Patient Attendants"
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-blue-600 font-bold tracking-wider uppercase text-sm bg-blue-100/50 px-4 py-1 rounded-full">
            Core Medical Services
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e293b]">
            Expert Care You Can Trust
          </h2>
          <p className="text-gray-500 text-lg">
            Delivering hospital-level medical protocols and continuous care safely at your home.
          </p>
        </div>

        {/* Core Services Grid (Portea Style Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {coreServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 ${service.bgColor} ${service.iconColor} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1e293b] mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed"> 
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Section: Ongoing Services & Staffing */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Ongoing Services List */}
          <div className="lg:col-span-2 bg-white rounded-xl p-8 shadow-sm border border-gray-100">
             <h3 className="text-2xl font-bold text-[#1e293b] mb-6 flex items-center gap-2">
                <Wind className="text-blue-600" /> Ongoing Services
             </h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {ongoingServicesList.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                     <span className="text-gray-600 font-medium">{item}</span>
                  </div>
                ))}
             </div>
          </div>

          {/* Professional Staff Box */}
          <div className="bg-gradient-to-br from-[#1e293b] to-gray-800 rounded-xl p-8 shadow-md text-white flex flex-col justify-center">
             <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-300">
                <UserPlus size={24} /> Our Expert Staff
             </h3>
             <p className="text-gray-300 mb-6 text-sm leading-relaxed">
               Carevia provides a highly qualified team to meet all your medical requirements.
             </p>
             <ul className="space-y-3 font-medium text-sm">
                <li className="flex items-center gap-2">✔ BSN Nurses (Male/Female)</li>
                <li className="flex items-center gap-2">✔ ICU Staff & RNs</li>
                <li className="flex items-center gap-2">✔ RT Staff & Consultants</li>
                <li className="flex items-center gap-2">✔ Trained Caregivers</li>
             </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;