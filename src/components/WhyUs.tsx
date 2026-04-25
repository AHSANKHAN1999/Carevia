import React from 'react';
import { Stethoscope, Activity, HeartPulse, Bed, Wind, Syringe, ClipboardList } from 'lucide-react';
import Image from 'next/image';

const Equipment = () => {
  return (
    <section id="equipments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Content Side */}
          <div className="lg:w-1/2 space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-block text-blue-600 font-bold tracking-wider uppercase text-sm bg-blue-50 px-4 py-1 rounded-full">
                Medical Equipment
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e293b] leading-tight">
                Hospital-Grade Equipment at Home
              </h2>
              <p className="text-gray-600 text-lg">
                We provide state-of-the-art medical machinery to ensure your loved ones receive uninterrupted, ICU-level care in the comfort of their home.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              
              {/* Equipment Items based on client list */}
              <div className="flex gap-4 items-start">
                <div className="text-blue-600 bg-blue-50 p-2.5 rounded-lg h-min mt-1">
                  <Wind size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1e293b] mb-1">Oxygen Concentrators</h4>
                  <p className="text-gray-500 text-sm">Continuous and reliable oxygen supply.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-blue-600 bg-blue-50 p-2.5 rounded-lg h-min mt-1">
                  <Activity size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1e293b] mb-1">BiPAP/CPAP</h4>
                  <p className="text-gray-500 text-sm">Advanced respiratory support systems.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-blue-600 bg-blue-50 p-2.5 rounded-lg h-min mt-1">
                  <HeartPulse size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1e293b] mb-1">Cardiac Monitors</h4>
                  <p className="text-gray-500 text-sm">Real-time vital signs monitoring.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-blue-600 bg-blue-50 p-2.5 rounded-lg h-min mt-1">
                  <Bed size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1e293b] mb-1">Hospital Beds</h4>
                  <p className="text-gray-500 text-sm">Motorized beds with Air Mattresses.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-blue-600 bg-blue-50 p-2.5 rounded-lg h-min mt-1">
                  <Syringe size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1e293b] mb-1">Suction Machines</h4>
                  <p className="text-gray-500 text-sm">For effective airway clearance.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-blue-600 bg-blue-50 p-2.5 rounded-lg h-min mt-1">
                  <Stethoscope size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1e293b] mb-1">Nebulizers</h4>
                  <p className="text-gray-500 text-sm">Efficient medication delivery systems.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Image Side */}
          <div className="lg:w-1/2 relative w-full order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-[550px] w-full bg-blue-50 border border-gray-100">
               {/* Make sure to add an appropriate image for equipment in your public folder */}
               <Image 
                 src="/equipment-image.png" 
                 alt="Medical Equipment at Home Carevia"
                 fill
                 className="object-cover"
                 sizes="(max-w-768px) 100vw, 50vw"
               />
               
               {/* Floating Badge */}
               <div className="absolute top-6 right-6 bg-white/90 backdrop-blur p-3 rounded-lg shadow-md border border-blue-100 flex items-center gap-3">
                  <div className="bg-red-50 text-red-500 p-2 rounded flex-shrink-0">
                     <ClipboardList size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Availability</p>
                    <p className="text-sm font-bold text-[#1e293b]">Ready to Dispatch</p>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Equipment;