import React, { useState } from 'react';
import { Hourglass, ArrowRight, Star, Shield, Zap } from 'lucide-react';
import type { Page } from '../App';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [videoError, setVideoError] = useState(false);
  
  const features = [
    {
      icon: Hourglass,
      title: 'Precision Timekeeping',
      description: 'Swiss-engineered temporal navigation with nanosecond accuracy'
    },
    {
      icon: Shield,
      title: 'Safety Guaranteed',
      description: 'Paradox-proof technology ensures your timeline remains intact'
    },
    {
      icon: Star,
      title: 'Luxury Experience',
      description: 'First-class accommodations throughout history'
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background - Video or Gradient Fallback */}
        {!videoError ? (
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              onError={() => {
                console.log('Video failed to load, falling back to gradient background');
                setVideoError(true);
              }}
            >
              <source src="/chronoluxe-vid2.mp4" type="video/mp4" />
              <source src="/chronoluxe-bg.webm" type="video/webm" />
            </video>
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        ) : (
          /* Fallback Gradient Background */
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/80 to-amber-900/20"></div>
        )}

        {/* Animated Background Effects */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Hourglass className="h-24 w-24 text-amber-400 mx-auto mb-6 animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
            CHRONOLUXE
          </h1>
          
          <p className="text-2xl md:text-3xl text-amber-400 mb-4 italic font-light drop-shadow-lg">
            Where luxury meets legacy
          </p>
          
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Experience history like never before with our precision-engineered time travel watches. 
            Journey through the ages in unparalleled luxury and comfort.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('experiences')}
              className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/25"
            >
              Explore Experiences
              <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => onNavigate('about')}
              className="group border-2 border-amber-400/40 hover:border-amber-400 text-amber-400 hover:bg-amber-400/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Future of Time Travel
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our revolutionary time travel watches combine cutting-edge temporal technology 
              with the finest luxury craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8 hover:bg-black/80 hover:border-amber-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-6">
                  <feature.icon className="h-12 w-12 text-amber-400 group-hover:text-amber-300 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-black to-gray-900/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make History?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join the elite few who have experienced the ultimate luxury: time itself.
          </p>
          
          <button
            onClick={() => onNavigate('signup')}
            className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white px-12 py-4 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/25"
          >
            Book Your Journey
            <Zap className="inline ml-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}