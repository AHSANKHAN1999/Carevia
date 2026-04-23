"use client";
import React from 'react';

const JoinOurTeam = () => {
  return (
    <div className="min-h-screen bg-light py-12 px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative overflow-hidden">
      
      {/* Background decoration matching original theme */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-primary/5 rounded-br-[100px] -z-10"></div>

      {/* Form Container */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-12 border border-gray-100 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block text-accent font-semibold tracking-wider uppercase text-sm mb-2 bg-accent/10 px-4 py-1 rounded-full">
            Staff Registration
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Join <span className="text-accent">Carevia</span> Team
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Trusted Home Healthcare Professionals Network. Become a part of our certified and compassionate caregiving team.
          </p>
        </div>

        <form className="space-y-10">
          
          {/* SECTION 1: PERSONAL INFORMATION */}
          <div>
            <div className="bg-accent/5 border-l-4 border-accent text-primary px-4 py-3 font-bold text-sm mb-6 uppercase tracking-wider rounded-r-lg">
              Section 1: Personal Information
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Full Name*</label>
                <input type="text" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Father/Husband Name*</label>
                <input type="text" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">CNIC Number*</label>
                <input type="text" placeholder="XXXXX-XXXXXXX-X" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Date of Birth*</label>
                <input type="date" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Gender*</label>
                <select className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-white" required>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Contact Number*</label>
                <input type="tel" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" required />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-primary mb-1">Email Address*</label>
                <input type="email" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" required />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-primary mb-1">Residential Address*</label>
                <textarea rows={3} className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" required></textarea>
              </div>
            </div>
          </div>

          {/* SECTION 2: PROFESSIONAL QUALIFICATIONS */}
          <div>
            <div className="bg-accent/5 border-l-4 border-accent text-primary px-4 py-3 font-bold text-sm mb-6 uppercase tracking-wider rounded-r-lg">
              Section 2: Professional Qualifications
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Professional Role*</label>
                <select className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-white" required>
                  <option value="">Select Role</option>
                  <option value="caregiver">Caregiver</option>
                  <option value="registered_nurse">Registered Nurse (RN)</option>
                  <option value="physiotherapist">Physiotherapist</option>
                  <option value="attendant">Patient Attendant</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">PNC Registration*</label>
                <select className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-white" required>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-primary mb-1">Highest Degree*</label>
                <input type="text" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" required />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-primary mb-1">Institute / University*</label>
                <input type="text" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" required />
              </div>
            </div>
          </div>

          {/* SECTION 3: EXPERIENCE & SKILLS */}
          <div>
            <div className="bg-accent/5 border-l-4 border-accent text-primary px-4 py-3 font-bold text-sm mb-6 uppercase tracking-wider rounded-r-lg">
              Section 3: Experience & Skills
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Total Experience (Years)*</label>
                <input type="number" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Current Organization</label>
                <input type="text" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Designation</label>
                <input type="text" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-primary mb-4">Core Skills</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['ICU Care', 'Vital Signs', 'Wound Care', 'IV Cannulation', 'Catheterization', 'NG Tube', 'Tracheostomy', 'Post-Op Care', 'Elderly Care', 'Medication Admin'].map((skill) => (
                  <label key={skill} className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="rounded border-gray-300 text-accent focus:ring-accent w-5 h-5 transition-colors" />
                    <span className="text-sm text-muted group-hover:text-primary transition-colors">{skill}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-1">Specialized Experience</label>
              <textarea rows={3} className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"></textarea>
            </div>
          </div>

          {/* SECTION 4: SHIFT AVAILABILITY */}
          <div>
            <div className="bg-accent/5 border-l-4 border-accent text-primary px-4 py-3 font-bold text-sm mb-6 uppercase tracking-wider rounded-r-lg">
              Section 4: Shift Availability
            </div>
            <div className="flex flex-wrap gap-6">
              {['Morning', 'Evening', 'Night', '24 Hours', 'Weekend Only'].map((shift) => (
                <label key={shift} className="flex items-center space-x-3 cursor-pointer group">
                  <input type="checkbox" className="rounded border-gray-300 text-accent focus:ring-accent w-5 h-5 transition-colors" />
                  <span className="text-sm text-muted group-hover:text-primary transition-colors">{shift}</span>
                </label>
              ))}
            </div>
          </div>

          {/* SECTION 5: EMERGENCY CONTACT */}
          <div>
            <div className="bg-accent/5 border-l-4 border-accent text-primary px-4 py-3 font-bold text-sm mb-6 uppercase tracking-wider rounded-r-lg">
              Section 5: Emergency Contact
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Contact Name*</label>
                <input type="text" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Relationship*</label>
                <input type="text" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Emergency Phone*</label>
                <input type="tel" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" required />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-8">
            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 px-8 rounded-full transition-all shadow-xl hover:shadow-2xl text-lg flex items-center justify-center gap-2"
            >
              Submit Application
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default JoinOurTeam;