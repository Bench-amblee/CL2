import React from 'react';
import { Crown, Star, Utensils, ArrowRight } from 'lucide-react';
import type { Page } from '../App';

interface ExperiencesProps {
  onNavigate: (page: Page) => void;
}

export default function Experiences({ onNavigate }: ExperiencesProps) {
  const experiences = [
    {
      id: 1,
      title: 'Presidential Endorsement',
      subtitle: 'Get endorsed by George Washington',
      description: 'Meet the first President of the United States and receive a personal endorsement that will echo through eternity. Experience the gravitas of Mount Vernon and witness history\'s most influential leader.',
      era: '1789-1797',
      price: '$1,250,000',
      duration: '3 Days',
      icon: Crown,
      features: [
        'Private audience with President Washington',
        'Personal letter of recommendation',
        'Historic Mount Vernon estate tour',
        'Period-appropriate luxury accommodations'
      ],
      highlight: 'Most Popular'
    },
    {
      id: 2,
      title: 'Hollywood Masterclass',
      subtitle: 'Acting lessons from Marilyn Monroe',
      description: 'Learn the art of performance from Hollywood\'s most iconic star. Experience the golden age of cinema with private coaching sessions in the glamorous 1950s.',
      era: '1950-1962',
      price: '$950,000',
      duration: '5 Days',
      icon: Star,
      features: [
        'One-on-one coaching sessions',
        'Studio lot exclusive access',
        'Golden Age Hollywood immersion',
        'Luxury Beverly Hills accommodations'
      ],
      highlight: 'Exclusive'
    },
    {
      id: 3,
      title: 'Historical Dining',
      subtitle: 'Dinner with legendary figures',
      description: 'Choose from our curated list of history\'s most fascinating personalities. Dine with Renaissance masters, ancient philosophers, or revolutionary leaders in their own era.',
      era: 'Any Era',
      price: 'From $750,000',
      duration: '2-7 Days',
      icon: Utensils,
      features: [
        'Choose your historical figure',
        'Authentic period cuisine',
        'Cultural immersion experience',
        'Multiple era options available'
      ],
      highlight: 'Customizable'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900/80 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Signature Experiences
          </h1>
          <p className="text-2xl text-amber-400 italic font-light mb-8">
            Curated journeys through history's most extraordinary moments
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-12"></div>
          
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Each Chronoluxe experience is meticulously designed to offer unprecedented access to history's 
            most remarkable figures and moments. Our signature packages represent the pinnacle of temporal tourism.
          </p>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-20 bg-gray-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className="group bg-black/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl overflow-hidden hover:bg-black/70 hover:border-amber-500/40 transition-all duration-500 hover:transform hover:scale-[1.02]"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-amber-500/20 p-4 rounded-xl">
                          <experience.icon className="h-8 w-8 text-amber-400" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            {experience.title}
                          </h3>
                          <p className="text-lg text-amber-400 font-medium">
                            {experience.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      {experience.highlight && (
                        <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {experience.highlight}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white mb-1">
                          {experience.price}
                        </div>
                        <div className="text-sm text-gray-400">Price</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white mb-1">
                          {experience.duration}
                        </div>
                        <div className="text-sm text-gray-400">Duration</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white mb-1">
                          {experience.era}
                        </div>
                        <div className="text-sm text-gray-400">Era</div>
                      </div>
                    </div>

                    <button
                      onClick={() => onNavigate('signup')}
                      className="group/btn w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-amber-500/25"
                    >
                      Book This Experience
                      <ArrowRight className="inline ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="bg-black/70 p-8 lg:p-12 border-l border-amber-500/20">
                    <h4 className="text-xl font-semibold text-white mb-6">
                      Experience Includes:
                    </h4>
                    <ul className="space-y-4">
                      {experience.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 pt-8 border-t border-amber-500/20">
                      <p className="text-sm text-gray-400 italic">
                        All experiences include luxury accommodations, period-appropriate attire, 
                        temporal insurance, and 24/7 concierge support throughout your journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Experience CTA */}
      <section className="py-24 bg-gradient-to-r from-black to-gray-900/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dream Beyond Our Catalog
          </h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Have a specific historical figure or era in mind? Our bespoke experience team 
            can craft a completely personalized journey tailored to your interests and desires.
          </p>
          
          <button
            onClick={() => onNavigate('signup')}
            className="group bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white px-12 py-4 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/25"
          >
            Design Your Journey
            <ArrowRight className="inline ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}