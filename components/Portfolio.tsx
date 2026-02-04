'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Star, TrendingUp } from 'lucide-react'

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const portfolioItems = [
    {
      title: 'SaaS Company - Lead Generation',
      industry: 'Software',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      results: {
        openRate: '52%',
        responseRate: '18%',
        meetings: '127',
        revenue: '$450K',
      },
      description: 'Generated 127 qualified meetings for a B2B SaaS platform, resulting in $450K in pipeline revenue.',
      testimonial: 'TargetPulse transformed our outbound strategy. The quality of leads was exceptional.',
      author: 'Sarah Johnson, VP Sales',
    },
    {
      title: 'Marketing Agency - Client Acquisition',
      industry: 'Marketing',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
      results: {
        openRate: '48%',
        responseRate: '15%',
        meetings: '89',
        revenue: '$320K',
      },
      description: 'Helped a digital marketing agency acquire 15 new enterprise clients through targeted outreach.',
      testimonial: 'The personalization and strategy were on point. We saw results within the first week.',
      author: 'Michael Chen, Founder',
    },
    {
      title: 'Tech Startup - Investor Outreach',
      industry: 'Technology',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      results: {
        openRate: '61%',
        responseRate: '22%',
        meetings: '43',
        revenue: '$2.5M',
      },
      description: 'Secured meetings with 43 VCs and angel investors, leading to a successful Series A round.',
      testimonial: 'Their expertise in investor outreach was invaluable. We closed our round ahead of schedule.',
      author: 'Emily Rodriguez, CEO',
    },
    {
      title: 'E-commerce Brand - Partnership Development',
      industry: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      results: {
        openRate: '44%',
        responseRate: '12%',
        meetings: '67',
        revenue: '$280K',
      },
      description: 'Established strategic partnerships with 20+ retailers and distributors for product expansion.',
      testimonial: 'TargetPulse helped us build relationships that transformed our distribution network.',
      author: 'David Park, Head of Partnerships',
    },
    {
      title: 'Consulting Firm - Enterprise Sales',
      industry: 'Consulting',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      results: {
        openRate: '55%',
        responseRate: '19%',
        meetings: '94',
        revenue: '$680K',
      },
      description: 'Booked 94 meetings with C-suite executives at Fortune 500 companies.',
      testimonial: 'The quality of conversations we had was significantly higher than our previous campaigns.',
      author: 'Amanda White, Managing Partner',
    },
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length)
  }, [portfolioItems.length])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real campaigns. See how we&apos;ve helped companies like yours achieve their goals.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {portfolioItems.map((item, index) => (
                <div key={index} className="min-w-full">
                  <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 bg-gradient-to-br from-gray-50 to-white">
                    {/* Image Side */}
                    <div className="relative">
                      <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                          <span className="text-sm font-semibold text-primary-600">
                            {item.industry}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-3xl font-bold mb-4 text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-6 text-lg">
                          {item.description}
                        </p>

                        {/* Results Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          <div className="bg-white rounded-xl p-4 shadow-md">
                            <div className="text-3xl font-bold gradient-text mb-1">
                              {item.results.openRate}
                            </div>
                            <div className="text-sm text-gray-600">Open Rate</div>
                          </div>
                          <div className="bg-white rounded-xl p-4 shadow-md">
                            <div className="text-3xl font-bold gradient-text mb-1">
                              {item.results.responseRate}
                            </div>
                            <div className="text-sm text-gray-600">Response Rate</div>
                          </div>
                          <div className="bg-white rounded-xl p-4 shadow-md">
                            <div className="text-3xl font-bold gradient-text mb-1">
                              {item.results.meetings}
                            </div>
                            <div className="text-sm text-gray-600">Meetings Booked</div>
                          </div>
                          <div className="bg-white rounded-xl p-4 shadow-md">
                            <div className="text-3xl font-bold gradient-text mb-1">
                              {item.results.revenue}
                            </div>
                            <div className="text-sm text-gray-600">Revenue Generated</div>
                          </div>
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl p-6 text-white">
                        <div className="flex mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current" />
                          ))}
                        </div>
                        <p className="text-lg mb-3 italic">&ldquo;{item.testimonial}&rdquo;</p>
                        <p className="font-semibold">— {item.author}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

