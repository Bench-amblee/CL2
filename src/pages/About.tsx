import React from 'react';
import { MapPin, Award, Users, Clock } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Clock, value: '10,000+', label: 'Successful Journeys' },
    { icon: Users, value: '500+', label: 'Satisfied Clients' },
    { icon: Award, value: '50+', label: 'Historical Eras Accessed' },
    { icon: MapPin, value: '1', label: 'Headquarters Location' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900/80 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              About Chronoluxe
            </h1>
            <p className="text-2xl text-amber-400 italic font-light mb-8">
              Where luxury meets legacy
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pioneering Temporal Tourism
              </h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Founded in Hill Valley, California, Chronoluxe represents the pinnacle of luxury time travel experiences. 
                Our revolutionary time travel watches don't just transport you through time—they elevate every moment 
                of your historical journey.
              </p>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Combining Swiss precision engineering with cutting-edge temporal technology, we offer an 
                exclusive gateway to history's most extraordinary moments. Each journey is meticulously 
                crafted to ensure not just your safety, but your absolute comfort and wonder.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                At Chronoluxe, we believe that experiencing history shouldn't compromise on luxury. 
                That's why every aspect of your temporal journey—from departure to return—is 
                designed with the same attention to detail that defines the world's finest timepieces.
              </p>
            </div>

            <div className="relative">
              <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <Clock className="h-20 w-20 text-amber-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Our Mission</h3>
                  <div className="w-16 h-0.5 bg-amber-400 mx-auto"></div>
                </div>
                <p className="text-gray-400 text-center leading-relaxed">
                  To make the impossible possible, the historical accessible, and the extraordinary routine. 
                  We transform time travel from science fiction into the ultimate luxury experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Excellence in Numbers
            </h2>
            <p className="text-xl text-gray-400">
              Our commitment to luxury and precision speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8 hover:bg-black/80 hover:border-amber-500/40 transition-colors">
                  <stat.icon className="h-12 w-12 text-amber-400 mx-auto mb-4 group-hover:text-amber-300 transition-colors" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-gradient-to-r from-black to-gray-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Located in Hill Valley
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our headquarters in Hill Valley, California, sits at the temporal crossroads of innovation and history. 
              This iconic location has been chosen not just for its symbolic significance, but for its unique 
              temporal properties that make it the perfect departure point for your journey through time.
            </p>
          </div>

          <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <MapPin className="h-16 w-16 text-amber-400" />
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Chronoluxe Headquarters
              </h3>
              <p className="text-xl text-amber-400 mb-6 font-medium">
                Hill Valley, California
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Visit our state-of-the-art facility where the future meets the past. 
                Our showroom features our complete collection of time travel watches, 
                and our expert consultants are available to help you plan your perfect historical adventure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}