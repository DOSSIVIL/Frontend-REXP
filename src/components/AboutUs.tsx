'use client';

import React, { useState } from 'react';
import { Users, Code, Brain, Rocket, Github, Linkedin, Mail, MapPin, Calendar, Award, Shield } from 'lucide-react';

const AboutUs = () => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const teamMembers = [
    {
      name: "DossiviL Rivoire Vianey",
      role: "Co-fondateur / Data Scientist & Developer",
      image: "/Images/moi.jpeg",
      bio: "Expert en intelligence artificielle et traitement du langage naturel avec 8+ ans d'expérience.",
      specialties: ["IA/ML", "Python", "TensorFlow", "NLP"],
      github: "alex-dubois",
      linkedin: "alexandre-dubois-dev",
      email: "alex@rexp.dev"
    },
    {
      name: "Dassi Mandjo Léa Justine",
      role: "Co-fondatrice / Data Scientist & Developer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Passionnée par l'expérience utilisateur et les interfaces intuitives, spécialiste React/TypeScript.",
      specialties: ["Next.js", "TypeScript", "Machine Learning"],
      github: "marie-chen",
      linkedin: "marie-chen-ux",
      email: "marie@rexp.dev"
    }
  ];

  const stats = [
    { number: "2", label: "Développeurs passionnés", icon: Users },
    { number: "50K+", label: "Lignes de code", icon: Code },
    { number: "99.9%", label: "Uptime garanti", icon: Rocket },
    { number: "2025", label: "Année de création", icon: Calendar }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Nous repoussons constamment les limites de la technologie de veille médiatique.",
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Transparence",
      description: "Notre code est ouvert, nos méthodes sont transparentes, nos résultats sont vérifiables.",
      icon: Award,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Performance",
      description: "Chaque ligne de code est optimisée pour offrir la meilleure expérience utilisateur.",
      icon: Rocket,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Fiabilité",
      description: "Nous garantissons la sécurité et la confidentialité de vos données avec des standards de qualité élevés.",
      icon: Shield,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 xs:w-48 sm:w-72 h-32 xs:h-48 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 xs:w-64 sm:w-96 h-40 xs:h-64 sm:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="text-center">
            <div className="inline-flex items-center space-x-1.5 xs:space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-2.5 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 mb-4 xs:mb-6 sm:mb-8">
              <Users className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
              <span className="text-[10px] xs:text-xs sm:text-sm font-medium">Notre équipe</span>
            </div>
            
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 xs:mb-4 sm:mb-6 px-2 leading-tight">
              À propos de <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">REXP</span>
            </h1>
            
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed px-2">
              Nous sommes une équipe de développeurs passionnés qui transforment 
              la façon dont les entreprises surveillent et analysent leur présence médiatique.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-6 xs:-mt-8 sm:-mt-12 md:-mt-16 mb-8 xs:mb-12 sm:mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 shadow-lg sm:shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <stat.icon className="h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-600 mx-auto mb-1.5 xs:mb-2 sm:mb-3" />
                <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-0.5 xs:mb-1">{stat.number}</div>
                <div className="text-gray-600 text-[10px] xs:text-xs sm:text-sm leading-tight px-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 mb-8 xs:mb-12 sm:mb-16 md:mb-20">
        <div className="bg-white rounded-xl xs:rounded-2xl sm:rounded-3xl shadow-xl p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12 border border-gray-100">
          <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-6">Notre Mission</h2>
            <div className="w-12 xs:w-16 sm:w-20 md:w-24 h-0.5 xs:h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 xs:mb-6 sm:mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 items-center">
            <div>
              <p className="text-sm xs:text-base sm:text-lg text-gray-700 leading-relaxed mb-3 xs:mb-4 sm:mb-6">
                Chez REXP, nous croyons que chaque organisation mérite d'avoir une vision claire 
                et complète de sa présence médiatique. Notre plateforme utilise l'intelligence 
                artificielle de pointe pour transformer des millions de données brutes en 
                insights exploitables.
              </p>
              <p className="text-sm xs:text-base sm:text-lg text-gray-700 leading-relaxed">
                Nous nous efforçons de démocratiser l'accès aux outils de veille médiatique 
                professionnels, en rendant l'analyse de sentiment et le monitoring de réputation 
                accessibles à toutes les entreprises, quelle que soit leur taille.
              </p>
            </div>
            <div className="relative mt-4 xs:mt-6 md:mt-0">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg xs:rounded-xl sm:rounded-2xl p-0.5 sm:p-1">
                <div className="bg-white rounded-md xs:rounded-lg sm:rounded-xl p-4 xs:p-6 sm:p-8">
                  <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 text-center">
                    <div>
                      <div className="text-lg xs:text-xl sm:text-2xl font-bold text-blue-600">24/7</div>
                      <div className="text-[10px] xs:text-xs sm:text-sm text-gray-600">Monitoring</div>
                    </div>
                    <div>
                      <div className="text-lg xs:text-xl sm:text-2xl font-bold text-purple-600">95%</div>
                      <div className="text-[10px] xs:text-xs sm:text-sm text-gray-600">Précision</div>
                    </div>
                    <div>
                      <div className="text-lg xs:text-xl sm:text-2xl font-bold text-green-600">1M+</div>
                      <div className="text-[10px] xs:text-xs sm:text-sm text-gray-600">Sources</div>
                    </div>
                    <div>
                      <div className="text-lg xs:text-xl sm:text-2xl font-bold text-orange-600">5s</div>
                      <div className="text-[10px] xs:text-xs sm:text-sm text-gray-600">Latence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 mb-8 xs:mb-12 sm:mb-16 md:mb-20">
        <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-6">Nos Valeurs</h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 leading-relaxed">
            Les principes qui guident notre travail et nos décisions au quotidien
          </p>
        </div>
        
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl p-4 xs:p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                <div className={`w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r ${value.color} rounded-lg xs:rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 xs:mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-xs xs:text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 mb-8 xs:mb-12 sm:mb-16 md:mb-20">
        <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-6">Rencontrez Notre Équipe</h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 leading-relaxed">
            Des développeurs passionnés qui donnent vie à REXP avec expertise et créativité
          </p>
        </div>
        
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 xs:gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 h-full flex flex-col">
                <div className="relative overflow-hidden">
                  {!imageErrors[index] ? (
                    <img 
                      src={member.image} 
                      alt={`Photo de ${member.name}`}
                      className="w-full h-40 xs:h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={() => handleImageError(index)}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-40 xs:h-48 sm:h-56 md:h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      <Users className="h-12 w-12 xs:h-16 xs:w-16 sm:h-20 sm:w-20 text-white/80" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-3 xs:p-4 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 mb-0.5 xs:mb-1">{member.name}</h3>
                  <p className="text-xs xs:text-sm sm:text-base text-blue-600 font-medium mb-1.5 xs:mb-2 sm:mb-3">{member.role}</p>
                  <p className="text-[11px] xs:text-xs sm:text-sm text-gray-600 mb-2 xs:mb-3 sm:mb-4 leading-relaxed flex-grow">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-1 xs:gap-1.5 mb-2 xs:mb-3 sm:mb-4">
                    {member.specialties.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-1.5 xs:px-2 py-0.5 xs:py-1 bg-gray-100 text-gray-700 text-[10px] xs:text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-1.5 xs:space-x-2 sm:space-x-3 mt-auto">
                    <a 
                      href={`https://github.com/${member.github}`}
                      className="p-1.5 xs:p-2 bg-gray-100 rounded-lg hover:bg-gray-800 hover:text-white transition-colors group/icon"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Profil GitHub de ${member.name}`}
                    >
                      <Github className="h-3.5 w-3.5 xs:h-4 xs:w-4" />
                    </a>
                    <a 
                      href={`https://linkedin.com/in/${member.linkedin}`}
                      className="p-1.5 xs:p-2 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Profil LinkedIn de ${member.name}`}
                    >
                      <Linkedin className="h-3.5 w-3.5 xs:h-4 xs:w-4" />
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="p-1.5 xs:p-2 bg-gray-100 rounded-lg hover:bg-green-600 hover:text-white transition-colors"
                      aria-label={`Envoyer un email à ${member.name}`}
                    >
                      <Mail className="h-3.5 w-3.5 xs:h-4 xs:w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-8 xs:py-12 sm:py-14 md:py-16">
          <div className="text-center">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4 sm:mb-6">Rejoignez-nous dans cette aventure</h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-blue-100 mb-4 xs:mb-6 sm:mb-8 max-w-3xl mx-auto px-2 leading-relaxed">
              Nous recrutons ! Si vous partagez notre passion pour l'innovation et la technologie, 
              nous serions ravis de vous rencontrer.
            </p>
            
            <div className="flex flex-col xs:flex-row gap-2.5 xs:gap-3 sm:gap-4 justify-center">
              <a
                href="mailto:contact@rexp.dev"
                className="inline-flex items-center justify-center bg-white text-blue-900 px-4 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 rounded-lg xs:rounded-xl font-semibold hover:bg-blue-50 transition-colors text-xs xs:text-sm sm:text-base"
              >
                <Mail className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5 inline mr-1.5 xs:mr-2" />
                <span>Nous contacter</span>
              </a>
              <button 
                className="inline-flex items-center justify-center border-2 border-white text-white px-4 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 rounded-lg xs:rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-colors text-xs xs:text-sm sm:text-base"
                aria-label="Visitez nos bureaux"
              >
                <MapPin className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5 inline mr-1.5 xs:mr-2" />
                <span>Visitez nos bureaux</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;