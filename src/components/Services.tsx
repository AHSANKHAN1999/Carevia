import React from 'react';
import { HeartPulse, Activity, Stethoscope, Pill, Brain, Baby } from 'lucide-react';

const services = [
  {
    icon: <HeartPulse size={40} />,
    title: "Home Nursing",
    description: "Professional and compassionate nursing care provided in the comfort of your home for various medical needs."
  },
  {
    icon: <Activity size={40} />,
    title: "Post-Surgical Care",
    description: "Dedicated assistance and monitoring to ensure a smooth, safe, and speedy recovery after surgical procedures."
  },
  {
    icon: <Stethoscope size={40} />,
    title: "Elderly Care",
    description: "Specialized care and daily living assistance to help seniors maintain their independence and quality of life."
  },
  {
    icon: <Pill size={40} />,
    title: "Medication Management",
    description: "Careful monitoring and administration of prescribed medications to ensure adherence and safety."
  },
  {
    icon: <Brain size={40} />,
    title: "Physiotherapy",
    description: "In-home physical therapy sessions to restore mobility, strength, and function after injury or illness."
  },
  {
    icon: <Baby size={40} />,
    title: "Mother & Baby Care",
    description: "Expert support and guidance for new mothers and their newborns during the critical post-partum period."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-accent font-semibold tracking-wider uppercase text-sm">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Comprehensive Medical Care <br className="hidden md:block"/> At Your Doorstep
          </h2>
          <p className="text-muted text-lg">
            We offer a wide range of specialized home healthcare services designed to meet the unique needs of every patient, ensuring comfort, safety, and optimal recovery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted mb-6">
                {service.description}
              </p>
              <a href="#" className="inline-flex items-center text-primary font-semibold group-hover:text-accent transition-colors">
                Read More 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
