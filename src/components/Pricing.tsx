'use client';

import { useState, useRef, useEffect } from 'react';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for small teams just getting started with competitive intelligence.",
    features: [
      "Track up to 5 competitors",
      "Basic AI analysis",
      "Email notifications",
      "Weekly reports",
      "Basic dashboard"
    ]
  },
  {
    name: "Professional",
    price: "$99",
    description: "Ideal for growing teams that need deeper competitive insights.",
    features: [
      "Track up to 15 competitors",
      "Advanced AI analysis",
      "Slack & Email notifications",
      "Daily reports",
      "Advanced dashboard",
      "Custom alerts",
      "API access"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations requiring maximum competitive advantage.",
    features: [
      "Unlimited competitors",
      "Premium AI analysis",
      "Custom integrations",
      "Real-time reports",
      "Custom dashboard",
      "Priority support",
      "Dedicated account manager",
      "SLA guarantee"
    ]
  }
];

export const Pricing = () => {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % pricingTiers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + pricingTiers.length) % pricingTiers.length);
  };

  useEffect(() => {
    if (sliderRef.current && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      sliderRef.current.style.transform = `translateX(-${currentSlide * containerWidth}px)`;
    }
  }, [currentSlide]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(currentSlide * (containerRef.current?.offsetWidth || 0));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const newSlide = Math.round((scrollLeft - walk) / containerWidth);
    
    if (newSlide >= 0 && newSlide < pricingTiers.length) {
      setCurrentSlide(newSlide);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(currentSlide * (containerRef.current?.offsetWidth || 0));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const newSlide = Math.round((scrollLeft - walk) / containerWidth);
    
    if (newSlide >= 0 && newSlide < pricingTiers.length) {
      setCurrentSlide(newSlide);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="bg-black text-white py-[72px] overflow-hidden">
      <div className="@container p-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tighter text-white">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-white/70">
            Choose the plan that's right for your team's competitive intelligence needs.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 mt-16">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border transition-all duration-300 transform hover:scale-105 ${
                selectedTier === index
                  ? 'border-[#38BDF8] border-opacity-100 scale-105 bg-white/5'
                  : 'border-white/30'
              } p-8`}
              onClick={() => setSelectedTier(index)}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#38BDF8] text-black text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#38BDF8]">
                    {tier.price}
                  </span>
                  {tier.price !== "Custom" && (
                    <span className="text-white/70">/month</span>
                  )}
                </div>
                <p className="mt-4 text-white/70">{tier.description}</p>
              </div>

              <ul className="mt-8 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 text-[#38BDF8] flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  selectedTier === index
                    ? 'transform scale-105'
                    : ''
                } bg-[#38BDF8] text-black hover:bg-[#38BDF8]/90`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Tablet View */}
        <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-6 max-w-4xl mx-auto px-4 mt-16">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border transition-all duration-300 ${
                selectedTier === index
                  ? 'border-[#38BDF8] border-opacity-100 bg-white/5'
                  : 'border-white/30'
              } p-6`}
              onClick={() => setSelectedTier(index)}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#38BDF8] text-black text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#38BDF8]">
                    {tier.price}
                  </span>
                  {tier.price !== "Custom" && (
                    <span className="text-white/70">/month</span>
                  )}
                </div>
                <p className="mt-4 text-white/70">{tier.description}</p>
              </div>

              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 text-[#38BDF8] flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-white/90 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-6 w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 bg-[#38BDF8] text-black hover:bg-[#38BDF8]/90`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Mobile Slider View */}
        <div 
          className="md:hidden mt-16 relative" 
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-visible">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-300 ease-out"
              style={{ 
                width: `${pricingTiers.length * 100}%`,
                cursor: isDragging ? 'grabbing' : 'grab'
              }}
            >
              {pricingTiers.map((tier, index) => (
                <div
                  key={tier.name}
                  className="w-full flex-shrink-0 px-4"
                  style={{ width: `${100 / pricingTiers.length}%` }}
                >
                  <div
                    className={`relative rounded-2xl border transition-all duration-300 ${
                      selectedTier === index
                        ? 'border-[#38BDF8] border-opacity-100 bg-white/5'
                        : 'border-white/30'
                    } p-6 shadow-lg`}
                    onClick={() => setSelectedTier(index)}
                  >
                    {tier.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                        <span className="bg-[#38BDF8] text-black text-sm font-medium px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-[#38BDF8]">
                          {tier.price}
                        </span>
                        {tier.price !== "Custom" && (
                          <span className="text-white/70">/month</span>
                        )}
                      </div>
                      <p className="mt-4 text-white/70 text-sm">{tier.description}</p>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <svg
                            className="h-5 w-5 text-[#38BDF8] flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-white/90 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`mt-6 w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 bg-[#38BDF8] text-black hover:bg-[#38BDF8]/90 shadow-lg`}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {pricingTiers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-[#38BDF8] w-4' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/80 p-3 rounded-full text-white hover:bg-black/90 z-10 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/80 p-3 rounded-full text-white hover:bg-black/90 z-10 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="mt-16 text-center text-white/70">
          <p>Need a custom plan? <a href="#" className="text-[#38BDF8] hover:underline">Contact us</a></p>
        </div>
      </div>
    </div>
  );
}; 