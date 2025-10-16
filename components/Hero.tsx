'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, TrendingUp, Target, Zap, Sparkles, ArrowRight } from 'lucide-react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }> = []

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        )
        gradient.addColorStop(0, `rgba(41, 92, 81, ${particle.opacity})`)
        gradient.addColorStop(1, `rgba(233, 187, 113, ${particle.opacity * 0.3})`)
        ctx.fillStyle = gradient
        ctx.fill()

        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const parallaxOffset = mousePosition.y / 50

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 md:pb-0"
    >
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10"
      />

      {/* Interactive Gradient Orbs with Parallax */}
      <div 
        className="absolute top-20 left-10 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float transition-transform duration-300"
        style={{ transform: `translate(${mousePosition.x / 30}px, ${mousePosition.y / 30}px)` }}
      />
      <div 
        className="absolute top-40 right-10 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float transition-transform duration-300" 
        style={{ 
          animationDelay: '2s',
          transform: `translate(${-mousePosition.x / 40}px, ${mousePosition.y / 40}px)`
        }} 
      />
      <div 
        className="absolute -bottom-8 left-1/2 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float transition-transform duration-300" 
        style={{ 
          animationDelay: '4s',
          transform: `translate(${mousePosition.x / 50}px, ${-mousePosition.y / 50}px)`
        }} 
      />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl mb-8 animate-slide-up border border-accent-200 hover:scale-105 transition-all duration-300 group cursor-pointer">
            <Sparkles className="w-5 h-5 text-accent-600 group-hover:rotate-12 transition-transform" />
            <span className="text-sm font-semibold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              #1 Cold Email Marketing Agency
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Transform Your Outreach with{' '}
            <span className="gradient-text">Data-Driven</span> Cold Email
            Campaigns
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            We help B2B companies generate qualified leads and close deals with
            personalized, high-converting cold email strategies that actually
            work.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#contact"
              className="group relative px-10 py-5 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full text-lg font-bold overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Start Your Campaign</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
            </a>
            <a
              href="#portfolio"
              className="group px-10 py-5 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 border-2 border-primary-200 hover:border-primary-400 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>View Our Work</span>
                <Target className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Feature Icons - Redesigned */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #295C51 0%, #1e3e37 100%)' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-white mb-2">Personalized Outreach</h3>
                    <p className="text-white/80 text-sm">
                      Custom-tailored messages that resonate
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #E9BB71 0%, #d69634 100%)' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-white mb-2">High Conversion Rates</h3>
                    <p className="text-white/80 text-sm">
                      Proven strategies that turn prospects into leads
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #244d44 0%, #295C51 100%)' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-white mb-2">Targeted Campaigns</h3>
                    <p className="text-white/80 text-sm">
                      Reach the right decision-makers at the right time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

