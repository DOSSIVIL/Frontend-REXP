'use client'
import Link from 'next/link';

import React, { useState, useRef, useEffect } from 'react';
import { Search, Globe, TrendingUp, FileText, Menu, X, Home, Eye, MoreHorizontal } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  // Fermer les menus quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setShowMoreMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigationItems = [
    { href: "/", icon: Home, label: "Accueil" },
    { href: "/Mentions", icon: Globe, label: "Mentions" },
    { href: "#analytics", icon: TrendingUp, label: "Analytics" },
    { href: "#rapports", icon: FileText, label: "Rapports" }
  ];

  return (
    <>
      <header className={`${isDarkMode ? 'bg-slate-900/95 border-slate-700/50' : 'bg-white/95 border-gray-200/50'} backdrop-blur-xl shadow-2xl border-b sticky top-0 z-50 transition-all duration-300`}>
        {/* Effet de gradient subtil en arrière-plan */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-purple-50/10 to-pink-50/20 opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo - Toujours visible */}
            <div className="flex items-center space-x-3 sm:space-x-4 flex-shrink-0 min-w-0">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl opacity-75 group-hover:opacity-100 transition duration-300 blur-sm group-hover:blur-none"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 sm:p-2.5 rounded-xl transform group-hover:scale-105 transition-all duration-300">
                  <Eye className="h-5 w-5 sm:h-6 sm:w-6 text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="block">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
                  REXP
                </h1>
                <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-50"></div>
              </div>
            </div>

            {/* Navigation adaptative */}
            <div className="flex items-center space-x-2 flex-1 justify-center max-w-2xl">
              {/* Navigation desktop complète */}
              <nav className="hidden lg:flex space-x-1">
                {navigationItems.map(({ href, icon: Icon, label }) => (
                  <a
                    key={href}
                    href={href}
                    className={`group flex items-center space-x-2 px-3 xl:px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                      isDarkMode 
                        ? 'text-gray-300 hover:bg-slate-800/50 hover:text-white' 
                        : 'text-gray-700 hover:bg-gray-50/80 hover:text-gray-900'
                    } hover:shadow-lg hover:shadow-blue-500/10 hover:scale-105 relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
                    <Icon className="h-4 w-4 xl:h-5 xl:w-5 group-hover:text-blue-600 transition-colors duration-300 relative z-10" />
                    <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300 text-sm xl:text-base">{label}</span>
                  </a>
                ))}
              </nav>

              {/* Navigation tablet - Items principaux + menu trois points */}
              <nav className="hidden md:flex lg:hidden items-center space-x-1">
                {/* Premiers items toujours visibles */}
                {navigationItems.slice(0, 2).map(({ href, icon: Icon, label }) => (
                  <a
                    key={href}
                    href={href}
                    className={`group flex items-center space-x-1 px-3 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                      isDarkMode 
                        ? 'text-gray-300 hover:bg-slate-800/50 hover:text-white' 
                        : 'text-gray-700 hover:bg-gray-50/80 hover:text-gray-900'
                    } hover:shadow-lg hover:shadow-blue-500/10 hover:scale-105 relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
                    <Icon className="h-4 w-4 group-hover:text-blue-600 transition-colors duration-300 relative z-10" />
                    <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300 text-sm">{label}</span>
                  </a>
                ))}
                
                {/* Menu trois points pour les items restants */}
                <div className="relative" ref={moreMenuRef}>
                  <button
                    onClick={() => setShowMoreMenu(!showMoreMenu)}
                    className={`group flex items-center justify-center px-3 py-2.5 rounded-xl transition-all duration-300 ${
                      isDarkMode 
                        ? 'text-gray-300 hover:bg-slate-800/50 hover:text-white' 
                        : 'text-gray-700 hover:bg-gray-50/80 hover:text-gray-900'
                    } hover:shadow-lg hover:scale-105 relative overflow-hidden`}
                  >
                    <MoreHorizontal className="h-5 w-5 group-hover:text-blue-600 transition-colors duration-300" />
                  </button>

                  {/* Dropdown menu */}
                  {showMoreMenu && (
                    <div className={`absolute right-0 top-full mt-2 py-2 w-48 rounded-xl shadow-xl border transition-all duration-200 ${
                      isDarkMode 
                        ? 'bg-slate-800/95 border-slate-700/50' 
                        : 'bg-white/95 border-gray-200/50'
                    } backdrop-blur-xl`}>
                      {navigationItems.slice(2).map(({ href, icon: Icon, label }) => (
                        <a
                          key={href}
                          href={href}
                          className={`flex items-center space-x-3 px-4 py-3 transition-colors duration-200 ${
                            isDarkMode 
                              ? 'text-gray-300 hover:bg-slate-700/50 hover:text-white' 
                              : 'text-gray-700 hover:bg-gray-50/80 hover:text-gray-900'
                          } hover:text-blue-600`}
                          onClick={() => setShowMoreMenu(false)}
                        >
                          <Icon className="h-4 w-4" />
                          <span className="text-sm">{label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </nav>
            </div>

            {/* Section droite */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              
              {/* Barre de recherche - Cachée sur mobile */}
              <div className={`hidden sm:flex transition-all duration-500 ${searchFocused ? 'w-64' : 'w-48'}`}>
                <div className={`relative flex items-center w-full transition-all duration-300 ${
                  searchFocused ? 'transform scale-105' : ''
                }`}>
                  <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 blur transition-all duration-300 ${
                    searchFocused ? 'opacity-20' : ''
                  }`}></div>
                  
                  <div className={`relative flex items-center ${
                    isDarkMode ? 'bg-slate-800/80' : 'bg-gray-100/80'
                  } backdrop-blur-sm rounded-full px-4 py-2 w-full transition-all duration-300 ${
                    searchFocused 
                      ? `ring-2 ${isDarkMode ? 'ring-blue-400/50' : 'ring-blue-500/50'} shadow-xl shadow-blue-500/20` 
                      : 'shadow-lg'
                  }`}>
                    <Search className={`h-4 w-4 mr-2 transition-all duration-300 ${
                      searchFocused 
                        ? 'text-blue-500 transform scale-110' 
                        : isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                    <input
                      type="text"
                      placeholder="Rechercher..."
                      className={`bg-transparent outline-none text-sm flex-1 ${
                        isDarkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
                      } placeholder:transition-all placeholder:duration-300`}
                      onFocus={() => setSearchFocused(true)}
                      onBlur={() => setSearchFocused(false)}
                    />
                  </div>
                </div>
              </div>

              {/* Avatar IA */}
              <button
                onClick={() => setIsWelcomeOpen(true)}
                className="relative flex items-center justify-center group flex-shrink-0"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 blur transition-all duration-300"></div>
                <div className="relative transform transition-all duration-500 hover:scale-110 group-hover:animate-bounce">
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-50 blur-sm animate-pulse"></div>
                      <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 8V4H8"></path>
                          <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                          <path d="M2 14h2"></path>
                          <path d="M20 14h2"></path>
                          <path d="M15 13v2"></path>
                          <path d="M9 13v2"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="w-4 h-0.5 sm:w-6 sm:h-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full mt-1 shadow-sm"></div>
                  </div>
                </div>
              </button>

              {/* Boutons de connexion - Masqués sur très petits écrans */}
              <div className="hidden sm:flex items-center space-x-2">
                <button className="relative group px-3 lg:px-6 py-2 lg:py-2.5 text-xs lg:text-sm rounded-full overflow-hidden font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <span className="relative text-white drop-shadow-sm">Connexion</span>
                </button>
                <button className="relative group px-3 lg:px-6 py-2 lg:py-2.5 text-xs lg:text-sm rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-border">
                  <div className="absolute inset-0 rounded-full bg-white group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-300"></div>
                  <span className="relative bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-bold">S'inscrire</span>
                </button>
              </div>

              {/* Menu mobile toggle */}
              <button
                className={`md:hidden p-2 rounded-xl transition-all duration-300 hover:scale-110 ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-slate-800/50' 
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50/80'
                } hover:shadow-lg flex-shrink-0`}
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          <div className={`absolute right-0 top-0 h-full w-80 max-w-[90vw] ${
            isDarkMode ? 'bg-slate-900/95' : 'bg-white/95'
          } backdrop-blur-xl shadow-2xl transition-transform duration-300`}>
            
            {/* Header du menu mobile */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200/20">
              <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Menu</h3>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-100'} transition-colors`}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation mobile */}
            <nav className="p-4 space-y-2">
              {navigationItems.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors duration-200 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:bg-slate-800/50 hover:text-white' 
                      : 'text-gray-700 hover:bg-gray-50/80 hover:text-gray-900'
                  } hover:text-blue-600`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </a>
              ))}
            </nav>

            {/* Barre de recherche mobile */}
            <div className="p-4 border-t border-gray-200/20">
              <div className={`flex items-center ${
                isDarkMode ? 'bg-slate-800/80' : 'bg-gray-100/80'
              } rounded-full px-4 py-3`}>
                <Search className="h-4 w-4 mr-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className={`bg-transparent outline-none text-sm flex-1 ${
                    isDarkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>
            </div>

            {/* Boutons de connexion mobile */}
            <div className="p-4 space-y-3 border-t border-gray-200/20">
              <Link 
                href="/Connexion"
                className="block w-full py-3 text-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold"
              >
                Connexion
              </Link>
              <Link 
                href="/Inscription"
                className="block w-full py-3 text-center rounded-full border-2 border-blue-500 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold"
              >
                S'inscrire
              </Link>
            </div>

          </div>
        </div>
      )}

      {/* Modale avec le robot */}
      {isWelcomeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-all duration-300"
            onClick={() => setIsWelcomeOpen(false)}
          ></div>

          <div className="relative z-50 transform transition-all duration-500 scale-100 opacity-100 mx-4">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 blur-xl"></div>
            
            <div className="relative bg-white/90 backdrop-blur-xl p-6 sm:p-10 rounded-3xl shadow-2xl max-w-md text-center border border-white/20">
              <div className="flex flex-col items-center mb-6">
                <div className="relative mb-4">
                  <div className="absolute -inset-8 border-2 border-blue-200 rounded-full animate-ping opacity-20"></div>
                  <div className="absolute -inset-6 border-2 border-purple-200 rounded-full animate-ping opacity-30" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute -inset-4 border-2 border-pink-200 rounded-full animate-ping opacity-40" style={{animationDelay: '1s'}}></div>
                  
                  <div className="relative transform animate-bounce">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-30 blur-md animate-pulse"></div>
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-2xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 8V4H8"></path>
                        <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                        <path d="M2 14h2"></path>
                        <path d="M20 14h2"></path>
                        <path d="M15 13v2"></path>
                        <path d="M9 13v2"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-12 h-2 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full shadow-sm"></div>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
                Bienvenue sur <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">REXP</span> 
                <span className="inline-block ml-2 text-2xl animate-bounce">🚀</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                Votre assistant robotique est prêt à vous aider à <span className="font-bold text-blue-600">surveiller votre exposition médiatique</span> et <span className="font-bold text-purple-600">anticiper les crises</span>.
              </p>
              <button
                onClick={() => setIsWelcomeOpen(false)}
                className="relative group px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <span className="relative flex items-center space-x-2">
                  <span>Démarrer</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;