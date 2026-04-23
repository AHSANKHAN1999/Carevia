"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Tariq Mehmood",
    location: "Patient's Son - Karachi",
    content: "Carevia ki service ne waqai dil khush kar diya. Ammi ki surgery ke baad hum bohot pareshan thay, but their nursing staff was incredibly professional and caring. Ghar pe hospital jaisa mahol mil gaya.",
    rating: 5
  },
  {
    name: "Ayesha Malik",
    location: "New Mother - Lahore",
    content: "As a first-time mom, I was very nervous. Carevia ki post-partum team was a blessing! Unhon ne baby care se le kar meri recovery tak sab bohot achay se handle kiya. Highly recommended!",
    rating: 5
  },
  {
    name: "Farhan Ali",
    location: "Recovering Patient - Islamabad",
    content: "Accident ke baad movement completely zero thi. Carevia ke physiotherapist ne daily sessions diye. Unki mehnat aur proper guidance ki wajah se main expect kiye baghair jaldi theek ho raha hoon. Great work!",
    rating: 5
  },
  {
    name: "Zainab Raza",
    location: "Patient's Wife - Rawalpindi",
    content: "My husband needed 24/7 care after his stroke. Raat ki shifts ke liye unka staff hamesha time par aata hai. Bohat tameez dar aur well-trained log hain. Allah inko ajar de is naik kaam ka.",
    rating: 5
  },
  {
    name: "Kamran Shah",
    location: "Elderly Care - Peshawar",
    content: "Dada abu ki age kafi ziyada hai and he needs constant attention. The attendant from Carevia is very polite and handles him with so much patience. It's a huge relief for our family.",
    rating: 4
  },
  {
    name: "Dr. Nida Khalid",
    location: "Medical Professional - Karachi",
    content: "Being a doctor myself, main standards ko ly kar bohot strict hoon. But I must say, the hygiene and protocols followed by Carevia's nursing staff are top-notch. Unki services waqai exceptional hain.",
    rating: 5
  }
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatic Scroll Logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const cardWidth = scrollRef.current.children[0].clientWidth;

        // Agar end par pounch gaye hain
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          setActiveIndex(0);
        } else {
          // Aage scroll karein
          scrollRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
          setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0].clientWidth;
      scrollRef.current.scrollTo({ left: (cardWidth + 24) * index, behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-light relative overflow-hidden">
      {/* Original Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Original Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-accent font-semibold tracking-wider uppercase text-sm">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            What Our Patients Say
          </h2>
          <p className="text-muted text-lg">
            Read the experiences of families who have trusted Carevia with their health and well-being.
          </p>
        </div>

        {/* Scrollable Container with Original Card Theme */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style dangerouslySetInnerHTML={{__html: `
              div::-webkit-scrollbar { display: none; }
            `}} />

            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative flex flex-col justify-between"
              >
                {/* Original Quote Icon */}
                <div className="absolute -top-6 left-8 bg-accent text-white p-3 rounded-full shadow-lg z-10">
                  <Quote size={24} fill="currentColor" />
                </div>
                
                <div>
                  <div className="flex gap-1 mb-6 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-muted mb-8 italic leading-relaxed min-h-[140px]">
                    "{testimonial.content}"
                  </p>
                </div>
                
                {/* Original Profile Info Layout */}
                <div className="flex items-center gap-4 border-t border-gray-50 pt-4 mt-auto">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-500 overflow-hidden shrink-0">
                     {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-accent">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots (Matching Theme Colors) */}
        <div className="flex justify-center gap-2 mt-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-accent w-6' : 'bg-accent/20 w-2 hover:bg-accent/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;