'use client'
import React, { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, Globe, Bell, Zap, Shield, Target, ArrowRight, Play, Star, Quote, ArrowLeft, Award, Heart, Users, Clock, CheckCircle, Sparkles, Rocket, Brain, Lock, Monitor } from 'lucide-react';

const MainSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Logos des plateformes avec leurs vraies icônes SVG
  const platforms = [
    {
      name: 'Twitter',
      logo: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: 'text-black hover:text-blue-500'
    },
    {
      name: 'LinkedIn',
      logo: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'text-blue-700 hover:text-blue-800'
    },
    {
      name: 'Facebook',
      logo: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      name: 'Instagram',
      logo: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'text-pink-500 hover:text-pink-600'
    },
    {
      name: 'YouTube',
      logo: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      color: 'text-red-600 hover:text-red-700'
    },
    {
      name: 'TikTok',
      logo: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      color: 'text-gray-800 hover:text-pink-500'
    },
    {
      name: 'Reddit',
      logo: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
        </svg>
      ),
      color: 'text-orange-600 hover:text-orange-700'
    },
    {
      name: 'Medium',
      logo: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
        </svg>
      ),
      color: 'text-green-600 hover:text-green-700'
    }
  ];

  // Témoignages avec défilement
  const testimonials = [
    {
      id: 1,
      text: "Grâce à Radar d'Exposition, nous suivons efficacement notre réputation en ligne et améliorons notre engagement client.",
      author: "Camille Lefèvre",
      role: "Responsable Marketing",
      company: "BrightMedia",
      avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop&crop=face",
      rating: 4,
      impact: "+72% d'engagement",
      color: "from-pink-500 to-red-400"
    },
    {
      id: 2,
      text: "L'IA de Radar détecte des tendances que nous n'aurions jamais vues. C'est comme avoir une équipe d'analystes 24h/24.",
      author: "Jean-Pierre Martin",
      role: "CEO",
      company: "Innovation Labs",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 4,
      impact: "+120% de visibilité",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      text: "Interface intuitive, données précises, alertes instantanées. Exactement ce dont nous avions besoin pour notre transformation digitale.",
      author: "Sarah Chen",
      role: "CMO",
      company: "Global Ventures",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      impact: "+200% d'engagement",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 4,
      text: "Le ROI est impressionnant. En 3 mois, nous avons économisé plus de 50% sur nos coûts de veille traditionnelle.",
      author: "Alexandre Moreau",
      role: "Directeur Marketing",
      company: "Retail Plus",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      impact: "+50% d'économies",
      color: "from-orange-500 to-red-500"
    }
  ];

  // Auto-défilement des témoignages
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsVisible(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToTestimonial = (index: number) => {
    if (index === currentTestimonial) return;
    setIsVisible(false);
    setTimeout(() => {
      setCurrentTestimonial(index);
      setIsVisible(true);
    }, 300);
  };

  const nextTestimonial = () => {
    goToTestimonial((currentTestimonial + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    goToTestimonial(currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1);
  };

  const currentData = testimonials[currentTestimonial];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Hero Section */}
      <section className="text-center mb-16 lg:mb-20">
        <div className={`relative overflow-hidden bg-white rounded-3xl shadow-2xl border border-gray-100 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20 -translate-x-20 -translate-y-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20 translate-x-16 translate-y-16 animate-pulse"></div>

          <div className="relative z-10 px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce">
                <Zap className="h-4 w-4" />
                <span>Nouvelle technologie IA</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Surveillez votre
                <span className="relative inline-block ml-3">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse">
                    exposition publique
                  </span>
                </span>
              </h2>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                Détectez, mesurez et analysez votre présence médiatique en temps réel sur
                <span className="font-semibold text-gray-800"> toutes les plateformes</span> avec une précision inégalée
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
                <button className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center space-x-2">
                    <span>Démarrer l'analyse</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>

                <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-medium hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 flex items-center space-x-2">
                  <span>Voir la démo</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </button>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 lg:mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span>100% Sécurisé</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="h-4 w-4 text-blue-500" />
                  <span>99.9% Précision</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-yellow-500" />
                  <span>Temps réel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section défilement des logos plateformes */}
      <section className="mb-16 lg:mb-20 overflow-hidden">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Surveillez toutes les plateformes</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Notre système surveille automatiquement plus de 50 plateformes et sources d'information
          </p>
        </div>

        <div className="overflow-hidden">
        <div className="flex space-x-8 scroll-logos">
          {[...platforms, ...platforms].map((platform, index) => (
            <div
              key={`${platform.name}-${index}`}
              className="flex-shrink-0 group"
            >
              <div className="flex items-center space-x-3 bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-100 px-6 py-4 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 min-w-max">
                <div className={`${platform.color} transition-colors duration-300`}>
                  {platform.logo}
                </div>
                <span className="font-medium text-gray-800 whitespace-nowrap">
                  {platform.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .scroll-logos {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
        }
      `}</style>
      </section>

      {/* Section témoignages améliorée */}
      <section className="mb-16 lg:mb-20 relative overflow-hidden">
        {/* Background décoratif */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 rounded-3xl"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>

        <div className="relative">
          {/* Header de section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Heart className="h-6 w-6 text-pink-500 animate-pulse" />
              <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">Témoignages</span>
              <Heart className="h-6 w-6 text-pink-500 animate-pulse" />
            </div>

            <h3 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Ils nous font confiance
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez comment nos clients utilisent Radar d'Exposition pour
              <span className="font-semibold text-blue-600"> transformer leur stratégie </span>
              de communication
            </p>

            {/* Stats rapides */}
            <div className="flex justify-center items-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-500">Clients satisfaits</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">4.9/5</div>
                <div className="text-sm text-gray-500">Note moyenne</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">98%</div>
                <div className="text-sm text-gray-500">Recommandent</div>
              </div>
            </div>
          </div>

          {/* Témoignage principal */}
          <div className="relative max-w-5xl mx-auto">
            {/* Contrôles de navigation */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border border-gray-200/50 group"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border border-gray-200/50 group"
            >
              <ArrowRight className="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </button>

            {/* Carte de témoignage */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 lg:p-12 relative overflow-hidden">
              {/* Effet de brillance animé */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>

              {/* Badge de couleur dynamique */}
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${currentData.color} rounded-t-3xl`}></div>

              <div className={`transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                {/* Quote icon */}
                <div className="flex justify-center mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${currentData.color} shadow-lg`}>
                    <Quote className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Témoignage */}
                <blockquote className="text-xl lg:text-2xl text-gray-800 font-medium leading-relaxed mb-8 text-center relative">
                  <span className="text-6xl text-gray-200 absolute -top-4 -left-4 font-serif">"</span>
                  {currentData.text}
                  <span className="text-6xl text-gray-200 absolute -bottom-8 -right-4 font-serif">"</span>
                </blockquote>

                {/* Profil auteur */}
                <div className="flex items-center justify-center space-x-6">
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-r ${currentData.color} rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <img
                      src={currentData.avatar}
                      alt={currentData.author}
                      className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover border-4 border-white shadow-xl transform group-hover:scale-105 transition-all duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full w-5 h-5 border-2 border-white flex items-center justify-center">
                      <Award className="h-3 w-3 text-white" />
                    </div>
                  </div>

                  <div className="text-center lg:text-left">
                    <div className="font-bold text-xl text-gray-900 mb-1">{currentData.author}</div>
                    <div className="text-gray-600 mb-2">
                      <span className="font-medium">{currentData.role}</span>
                      <span className="mx-2">•</span>
                      <span className="font-semibold text-blue-600">{currentData.company}</span>
                    </div>

                    {/* Rating stars */}
                    <div className="flex items-center justify-center lg:justify-start space-x-1 mb-2">
                      {[...Array(currentData.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Impact badge */}
                    <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r ${currentData.color} text-white text-sm font-medium shadow-lg`}>
                      <TrendingUp className="h-3 w-3" />
                      <span>{currentData.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contrôle auto-play */}
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isAutoPlaying
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
                title={isAutoPlaying ? 'Pause auto-défilement' : 'Reprendre auto-défilement'}
              >
                <Play className={`h-4 w-4 ${isAutoPlaying ? 'animate-pulse' : ''}`} />
              </button>
            </div>
          </div>

          {/* Indicateurs de pagination améliorés */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 transform hover:scale-110"
            >
              <ArrowLeft className="h-4 w-4 text-gray-600" />
            </button>

            <div className="flex space-x-3">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  className={`relative group transition-all duration-300 ${
                    index === currentTestimonial ? 'scale-125' : 'hover:scale-110'
                  }`}
                  onClick={() => goToTestimonial(index)}
                >
                  {/* Photo miniature */}
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className={`w-12 h-12 rounded-full object-cover border-3 transition-all duration-300 ${
                        index === currentTestimonial
                          ? `border-white shadow-lg shadow-blue-500/30`
                          : 'border-gray-200 opacity-60 hover:opacity-100'
                      }`}
                    />
                    {index === currentTestimonial && (
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${testimonial.color} opacity-20 animate-pulse`}></div>
                    )}
                  </div>

                  {/* Tooltip au hover */}
                  <div className="absolute bottom-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="bg-gray-900 text-white text-xs py-2 px-3 rounded-lg whitespace-nowrap">
                      {testimonial.author}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 transform hover:scale-110"
            >
              <ArrowRight className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>

        <style jsx>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%) skewX(-12deg); }
            100% { transform: translateX(200%) skewX(-12deg); }
          }
          .animate-shimmer {
            animation: shimmer 3s infinite;
          }
        `}</style>
      </section>

      {/* Enhanced Feature Cards */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
        {/* Collecte de mentions */}
        <div
          className={`group relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ transitionDelay: '200ms' }}
          onMouseEnter={() => setActiveCard(0)}
          onMouseLeave={() => setActiveCard(null)}
        >
          {/* Gradient overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 ${activeCard === 0 ? 'opacity-5' : ''} transition-opacity duration-300`}></div>

          <div className="relative z-10 p-6 lg:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-4">Collecte Multi-plateformes</h3>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Surveillance automatisée des mentions sur les réseaux sociaux, médias en ligne et forums
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {platforms.slice(0, 6).map((platform, index) => (
                <div
                  key={platform.name}
                  className="group inline-flex items-center space-x-2 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-100 hover:to-purple-100 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`${platform.color} transition-colors duration-300`}>
                    {platform.logo}
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900">{platform.name}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
              <span className="text-sm">En savoir plus</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </div>
        </div>

        {/* Analyse de sentiment */}
        <div
          className={`group relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ transitionDelay: '400ms' }}
          onMouseEnter={() => setActiveCard(1)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className={`absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 ${activeCard === 1 ? 'opacity-5' : ''} transition-opacity duration-300`}></div>

          <div className="relative z-10 p-6 lg:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-green-100 to-emerald-200 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-4">Analyse de Sentiment</h3>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Évaluation automatique du ton et du contexte des mentions avec IA avancée
            </p>

            {/* Enhanced sentiment bars */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-green-700">Positif</span>
                <span className="text-sm font-bold text-green-600">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-1000 animate-pulse" style={{width: '65%'}}></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-yellow-700">Neutre</span>
                <span className="text-sm font-bold text-yellow-600">25%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full transition-all duration-1000" style={{width: '25%'}}></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-red-700">Négatif</span>
                <span className="text-sm font-bold text-red-600">10%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-red-400 to-red-600 h-2 rounded-full transition-all duration-1000" style={{width: '10%'}}></div>
              </div>
            </div>

            <div className="flex items-center text-green-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
              <span className="text-sm">Voir l'analyse complète</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </div>
        </div>

        {/* Alertes et rapports */}
        <div
          className={`group relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ transitionDelay: '600ms' }}
          onMouseEnter={() => setActiveCard(2)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className={`absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 ${activeCard === 2 ? 'opacity-5' : ''} transition-opacity duration-300`}></div>

          <div className="relative z-10 p-6 lg:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-purple-100 to-pink-200 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Bell className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-4">Alertes Intelligentes</h3>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Notifications en temps réel pour les pics d'activité et événements remarquables
            </p>

            {/* Live alerts preview */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-orange-800">Pic d'activité détecté</span>
                </div>
                <span className="text-xs text-orange-600">il y a 2h</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-red-800">Sentiment négatif élevé</span>
                </div>
                <span className="text-xs text-red-600">il y a 5h</span>
              </div>
            </div>

            <div className="flex items-center text-purple-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
              <span className="text-sm">Configurer les alertes</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </div>
        </div>
      </section>

      {/* Section "Pourquoi nous choisir" */}
      <section className={`mb-16 lg:mb-20 relative overflow-hidden transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
        {/* Background décoratif */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-pink-50/50 rounded-3xl"></div>

        <div className="relative z-10 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 lg:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Pourquoi nous choisir</span>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              La solution complète pour votre veille
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une technologie de pointe au service de votre réputation et de votre stratégie de communication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Brain,
                title: "IA Avancée",
                description: "Algorithmes de machine learning pour une analyse précise du sentiment et des tendances",
                color: "from-blue-500 to-indigo-600",
                stat: "99.2%",
                statLabel: "Précision"
              },
              {
                icon: Zap,
                title: "Temps Réel",
                description: "Surveillance continue et alertes instantanées pour ne jamais rater l'essentiel",
                color: "from-yellow-500 to-orange-600",
                stat: "<30s",
                statLabel: "Délai moyen"
              },
              {
                icon: Lock,
                title: "Sécurité",
                description: "Chiffrement de bout en bout et conformité RGPD pour protéger vos données",
                color: "from-green-500 to-emerald-600",
                stat: "100%",
                statLabel: "Sécurisé"
              },
              {
                icon: Users,
                title: "Support 24/7",
                description: "Équipe d'experts disponible pour vous accompagner à tout moment",
                color: "from-purple-500 to-pink-600",
                stat: "24/7",
                statLabel: "Support"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border border-gray-200/50 hover:border-white/80"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800">
                    {feature.title}
                  </h4>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 group-hover:text-gray-700">
                    {feature.description}
                  </p>

                  <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-gradient-to-r ${feature.color} text-white text-sm font-bold shadow-md`}>
                    <span>{feature.stat}</span>
                    <span className="text-xs opacity-80">{feature.statLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA finale */}
      <section className={`relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
        {/* Effets visuels de fond */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl -translate-y-20 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl translate-y-20 -translate-x-20"></div>

        <div className="relative z-10 px-8 lg:px-12 py-16 lg:py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 animate-pulse">
              <Rocket className="h-4 w-4" />
              <span>Prêt à décoller ?</span>
            </div>

            <h3 className="text-3xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Commencez votre surveillance
              <span className="block lg:inline"> dès aujourd'hui</span>
            </h3>

            <p className="text-xl lg:text-2xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Rejoignez plus de <span className="font-bold text-white">500 entreprises</span> qui font déjà confiance à notre technologie
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-12">
              <button className="group relative bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-2">
                  <span>Esssayé</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>

              <button className="group border-2 border-white/50 text-white px-8 py-4 rounded-2xl font-medium hover:border-white hover:bg-white/10 transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm">
                <Monitor className="h-4 w-4" />
                <span>Planifier une démo</span>
              </button>
            </div>

            {/* Garanties */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-blue-100">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Configuration en 2 minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Support inclus</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainSection;