"use client";
import React from 'react';

const JoinOurTeam = () => {

  // WhatsApp Submit Function for Job Application
  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Section 1: Personal Info
    const fullName = formData.get('fullName');
    const fatherName = formData.get('fatherName');
    const cnic = formData.get('cnic');
    const dob = formData.get('dob');
    const gender = formData.get('gender');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const address = formData.get('address');

    // Section 2: Qualifications
    const role = formData.get('role');
    const pnc = formData.get('pnc');
    const degree = formData.get('degree');
    const institute = formData.get('institute');

    // Section 3: Experience & Skills
    const experience = formData.get('experience');
    const currentOrg = formData.get('currentOrg');
    const designation = formData.get('designation');
    // Checkboxes ka data nikalna
    const coreSkills = formData.getAll('coreSkills').join(', ');
    const specialExp = formData.get('specialExp');

    // Section 4: Shifts
    const shifts = formData.getAll('shiftAvailability').join(', ');

    // Section 5: Emergency Contact
    const emgName = formData.get('emgName');
    const emgRelation = formData.get('emgRelation');
    const emgPhone = formData.get('emgPhone');

    // WhatsApp Message Format (Bohat properly structured)
    const message = `*NEW JOB APPLICATION - CAREVIA*%0A%0A*1. Personal Info*%0AName: ${fullName}%0AFather/Husband: ${fatherName}%0ACNIC: ${cnic}%0ADOB: ${dob} | Gender: ${gender}%0APhone: ${phone}%0AEmail: ${email}%0AAddress: ${address}%0A%0A*2. Qualifications*%0ARole: ${role}%0APNC Registered: ${pnc}%0ADegree: ${degree} (${institute})%0A%0A*3. Experience & Skills*%0ATotal Experience: ${experience} Years%0ACurrent Org: ${currentOrg || 'N/A'} (${designation || 'N/A'})%0ACore Skills: ${coreSkills || 'None selected'}%0ASpecialized Exp: ${specialExp ? specialExp : 'N/A'}%0A%0A*4. Shift Availability*%0A${shifts || 'None selected'}%0A%0A*5. Emergency Contact*%0A${emgName} (${emgRelation}) - ${emgPhone}`;

    const targetNumber = "923022096374"; 
    window.open(`https://wa.me/${targetNumber}?text=${message}`, '_blank');
  };

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

        {/* Form pe onSubmit laga diya gaya hai */}
        <form onSubmit={handleWhatsAppSubmit} className="space-y-10">
          
          {/* SECTION 1: PERSONAL INFORMATION */}
          <div>
            <div className="bg-accent/5 border-l-4 border-accent text-primary px-4 py-3 font-bold text-sm mb-6 uppercase tracking-wider rounded-r-lg">
              Section 1: Personal Information
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Full Name*</label>
                <input type="text" name="fullName" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Father/Husband Name*</label>
                <input type="text" name="fatherName" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">CNIC Number*</label>
                <input type="text" name="cnic" placeholder="XXXXX-XXXXXXX-X" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Date of Birth*</label>
                <input type="date" name="dob" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Gender*</label>
                <select name="gender" defaultValue="" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-white" required>
                  <option value="" disabled>Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Contact Number*</label>
                <input type="tel" name="phone" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" required />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-primary mb-1">Email Address*</label>
                <input type="email" name="email" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" required />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-primary mb-1">Residential Address*</label>
                <textarea name="address" rows={3} className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" required></textarea>
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
                <select name="role" defaultValue="" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-white" required>
                  <option value="" disabled>Select Role</option>
                  <option value="Caregiver">Caregiver</option>
                  <option value="Registered Nurse (RN)">Registered Nurse (RN)</option>
                  <option value="Physiotherapist">Physiotherapist</option>
                  <option value="Patient Attendant">Patient Attendant</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">PNC Registration*</label>
                <select name="pnc" defaultValue="No" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-white" required>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-primary mb-1">Highest Degree*</label>
                <input type="text" name="degree" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" required />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-primary mb-1">Institute / University*</label>
                <input type="text" name="institute" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" required />
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
                <input type="number" name="experience" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Current Organization</label>
                <input type="text" name="currentOrg" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Designation</label>
                <input type="text" name="designation" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-primary mb-4">Core Skills</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['ICU Care', 'Vital Signs', 'Wound Care', 'IV Cannulation', 'Catheterization', 'NG Tube', 'Tracheostomy', 'Post-Op Care', 'Elderly Care', 'Medication Admin'].map((skill) => (
                  <label key={skill} className="flex items-center space-x-3 cursor-pointer group">
                    {/* name aur value add kiya gaya hai */}
                    <input type="checkbox" name="coreSkills" value={skill} className="rounded border-gray-300 text-accent focus:ring-accent w-5 h-5 transition-colors" />
                    <span className="text-sm text-muted group-hover:text-primary transition-colors">{skill}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-1">Specialized Experience</label>
              <textarea name="specialExp" rows={3} className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"></textarea>
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
                  {/* name aur value add kiya gaya hai */}
                  <input type="checkbox" name="shiftAvailability" value={shift} className="rounded border-gray-300 text-accent focus:ring-accent w-5 h-5 transition-colors" />
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
                <input type="text" name="emgName" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Relationship*</label>
                <input type="text" name="emgRelation" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Emergency Phone*</label>
                <input type="tel" name="emgPhone" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" required />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-8">
            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 px-8 rounded-full transition-all shadow-xl hover:shadow-2xl text-lg flex items-center justify-center gap-2"
            >
              Submit Application via WhatsApp
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default JoinOurTeam;