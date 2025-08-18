'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Search, Globe, TrendingUp, FileText, Menu, X, Home, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);

  // Fermer les menus quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header className={`${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} shadow-lg border-b sticky top-0 z-50 transition-colors duration-200`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>REXP</h1>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}></p>
              </div>
            </div>

            {/* Navigation links */}
            <nav className="hidden md:flex space-x-1">
              <a href="#home" className={`flex items-center space-x-1 px-3 py-2 rounded-lg ${isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50'} hover:text-blue-600 transition-colors`}>
                <Home className="h-5 w-5" /> <span>Accueil</span>
              </a>
              <a href="#mentions" className={`flex items-center space-x-1 px-3 py-2 rounded-lg ${isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50'} hover:text-blue-600 transition-colors`}>
                <Globe className="h-5 w-5" /> <span>Mentions</span>
              </a>
              <a href="#analytics" className={`flex items-center space-x-1 px-3 py-2 rounded-lg ${isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50'} hover:text-blue-600 transition-colors`}>
                <TrendingUp className="h-5 w-5" /> <span>Analytics</span>
              </a>
              <a href="#rapports" className={`flex items-center space-x-1 px-3 py-2 rounded-lg ${isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50'} hover:text-blue-600 transition-colors`}>
                <FileText className="h-5 w-5" /> <span>Rapports</span>
              </a>
            </nav>

            {/* Barre de recherche */}
            <div className={`flex-1 max-w-md mx-4 hidden md:flex justify-end transition-all duration-300 ${searchFocused ? 'max-w-xl' : ''}`}>
              <div className={`flex items-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-full px-4 py-2 w-full max-w-md transition-all duration-300 ${searchFocused ? 'ring-2 ring-blue-500' : ''}`}>
                <Search className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mr-2`} />
                <input
                  type="text"
                  placeholder="Rechercher une entité, un rapport..."
                  className={`bg-transparent outline-none text-sm flex-1 ${isDarkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'}`}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              
              {/* --- Avatar IA animé --- */}
              <button
                onClick={() => setIsWelcomeOpen(true)}
                className="relative flex items-center justify-center"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex flex-col items-center"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 8V4H8"></path>
                      <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                      <path d="M2 14h2"></path>
                      <path d="M20 14h2"></path>
                      <path d="M15 13v2"></path>
                      <path d="M9 13v2"></path>
                    </svg>
                  </div>
                  <div className="w-6 h-1 bg-gray-300 rounded-full mt-1"></div>
                </motion.div>
              </button>

              {/* Profil */}
              <div className="hidden md:flex items-center space-x-2">
                <button className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:scale-105 transition-transform duration-200">
                  Connexion
                </button>
                <button className="px-4 py-2 text-sm rounded-full border border-blue-500 text-blue-500 font-medium hover:bg-blue-500 hover:text-white transition-colors duration-200">
                  S'inscrire
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className={`lg:hidden p-2 rounded-lg transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- Modal Bienvenue --- */}
      {isWelcomeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Fond flouté */}
          <div
            className="absolute inset-0 bg-gray-200/30 backdrop-blur-md"
            onClick={() => setIsWelcomeOpen(false)}
          ></div>

          {/* Contenu de la modale */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative z-50 bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-2xl max-w-md text-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="flex flex-col items-center mb-4"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white mb-2">
                <Eye className="h-10 w-10" />
              </div>
              <div className="w-12 h-2 bg-gray-300 rounded-full"></div>
            </motion.div>
            
            <h2 className="text-xl font-bold text-gray-900">Bienvenue sur <span className="text-blue-600">REXP</span> 🚀</h2>
            <p className="mt-3 text-gray-600">
              Votre radar intelligent pour <b>surveiller votre exposition médiatique</b> et <b>anticiper les crises</b>.
            </p>
            <button
              onClick={() => setIsWelcomeOpen(false)}
              className="mt-6 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:scale-105 transition-transform"
            >
              Démarrer
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Header;