import React, { useState } from 'react';
import { Clock, Calendar, User, Mail, Phone, MapPin, CreditCard, Shield } from 'lucide-react';

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    preferredDate: '',
    travelers: '1',
    specialRequests: ''
  });

  const experiences = [
    'Presidential Endorsement - George Washington',
    'Hollywood Masterclass - Marilyn Monroe', 
    'Historical Dining - Custom Selection',
    'Bespoke Custom Experience'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your interest! Our concierge team will contact you within 24 hours to begin planning your extraordinary journey through time.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-black via-gray-900/80 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Clock className="h-16 w-16 text-amber-400 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Begin Your Journey
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Complete this exclusive application to start your personalized time travel experience. 
            Our concierge team will contact you within 24 hours to discuss your perfect historical adventure.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-900/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-black/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <User className="h-6 w-6 text-amber-400 mr-3" />
                  Personal Information
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/60 border border-amber-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                    placeholder="Enter your first name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/60 border border-amber-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                    placeholder="Enter your last name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/60 border border-amber-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/60 border border-amber-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Experience Details */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Calendar className="h-6 w-6 text-amber-400 mr-3" />
                  Experience Details
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Experience *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/60 border border-amber-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                  >
                    <option value="">Select an experience</option>
                    {experiences.map((exp, index) => (
                      <option key={index} value={exp}>{exp}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Departure Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full bg-gray-900/60 border border-amber-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Number of Travelers
                  </label>
                  <select
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    className="w-full bg-gray-900/60 border border-amber-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                  >
                    {[1,2,3,4,5,6].map(num => (
                      <option key={num} value={num.toString()}>{num}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Special Requests or Questions
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-gray-900/60 border border-amber-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all resize-none"
                    placeholder="Any specific preferences or questions about your journey..."
                  />
                </div>
              </div>
            </div>

            {/* Security & Privacy Notice */}
            <div className="mt-12 p-6 bg-gray-900/50 rounded-lg border border-amber-500/20">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Privacy & Security Guarantee
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Your information is protected with the same security measures we use for temporal navigation. 
                    All data is encrypted and stored securely. We never share client information and maintain 
                    absolute discretion regarding all time travel activities.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-12 text-center">
              <button
                type="submit"
                className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white px-12 py-4 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/25"
              >
                Submit Application
                <Clock className="inline ml-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              </button>
              
              <p className="text-gray-400 text-sm mt-4">
                * Our concierge team will contact you within 24 hours to discuss your application
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Location</h4>
              <p className="text-gray-400">Hill Valley, California</p>
            </div>
            
            <div>
              <Phone className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Phone</h4>
              <p className="text-gray-400">1-800-TIME-LUX</p>
            </div>
            
            <div>
              <Mail className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
              <p className="text-gray-400">concierge@chronoluxe.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}