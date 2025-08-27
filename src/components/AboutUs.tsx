import React from 'react';
import { Users, Code, Brain, Rocket, Github, Linkedin, Mail, MapPin, Calendar, Award } from 'lucide-react';

export const metadata = {
  title: 'À propos de nous - REXP',
  description: 'Découvrez l\'équipe passionnée derrière REXP et notre mission de révolutionner la veille médiatique',
}

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Alexandre Dubois",
      role: "Lead Developer & Co-fondateur",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Expert en intelligence artificielle et traitement du langage naturel avec 8+ ans d'expérience.",
      specialities: ["IA/ML", "Python", "TensorFlow", "NLP"],
      github: "alex-dubois",
      linkedin: "alexandre-dubois-dev",
      email: "alex@rexp.dev"
    },
    {
      name: "Marie Chen",
      role: "Frontend Architect & UX Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Passionnée par l'expérience utilisateur et les interfaces intuitives, spécialiste React/TypeScript.",
      specialities: ["React", "TypeScript", "UX Design", "CSS"],
      github: "marie-chen",
      linkedin: "marie-chen-ux",
      email: "marie@rexp.dev"
    },
    {
      name: "Thomas Laurent",
      role: "Backend Engineer & DevOps",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Architecte backend robuste et expert en infrastructure cloud, garantit la scalabilité de REXP.",
      specialities: ["Node.js", "AWS", "Docker", "Microservices"],
      github: "thomas-laurent",
      linkedin: "thomas-laurent-devops",
      email: "thomas@rexp.dev"
    },
    {
      name: "Sophie Martin",
      role: "Data Scientist & Analytics",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b2bc?w=400&h=400&fit=crop&crop=face",
      bio: "Spécialiste en analyse de données et visualisation, transforme les données brutes en insights.",
      specialities: ["Python", "R", "Data Viz", "Machine Learning"],
      github: "sophie-martin",
      linkedin: "sophie-martin-data",
      email: "sophie@rexp.dev"
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
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <Users className="h-5 w-5" />
              <span className="text-sm font-medium">Notre équipe</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              À propos de <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">REXP</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Nous sommes une équipe de développeurs passionnés qui transforment 
              la façon dont les entreprises surveillent et analysent leur présence médiatique.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Notre Mission</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Chez REXP, nous croyons que chaque organisation mérite d'avoir une vision claire 
                et complète de sa présence médiatique. Notre plateforme utilise l'intelligence 
                artificielle de pointe pour transformer des millions de données brutes en 
                insights exploitables.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nous nous efforçons de démocratiser l'accès aux outils de veille médiatique 
                professionnels, en rendant l'analyse de sentiment et le monitoring de réputation 
                accessibles à toutes les entreprises, quelle que soit leur taille.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-1">
                <div className="bg-white rounded-xl p-8">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">24/7</div>
                      <div className="text-sm text-gray-600">Monitoring</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">95%</div>
                      <div className="text-sm text-gray-600">Précision</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">1M+</div>
                      <div className="text-sm text-gray-600">Sources</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">5s</div>
                      <div className="text-sm text-gray-600">Latence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nos Valeurs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Les principes qui guident notre travail et nos décisions au quotidien
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Rencontrez Notre Équipe</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des développeurs passionnés qui donnent vie à REXP avec expertise et créativité
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.specialities.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={`https://github.com/${member.github}`}
                      className="p-2 bg-gray-100 rounded-lg hover:bg-gray-800 hover:text-white transition-colors group/icon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a 
                      href={`https://linkedin.com/in/${member.linkedin}`}
                      className="p-2 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="p-2 bg-gray-100 rounded-lg hover:bg-green-600 hover:text-white transition-colors"
                    >
                      <Mail className="h-4 w-4" />
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Rejoignez-nous dans cette aventure</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Nous recrutons ! Si vous partagez notre passion pour l'innovation et la technologie, 
              nous serions ravis de vous rencontrer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                <Mail className="h-5 w-5 inline mr-2" />
                Nous contacter
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                <MapPin className="h-5 w-5 inline mr-2" />
                Visitez nos bureaux
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;