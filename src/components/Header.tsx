'use client';

import Link from 'next/link';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Search, Globe, TrendingUp, FileText, Menu, X, Home, Eye, MoreHorizontal, LogIn, UserPlus, Moon, Sun
} from 'lucide-react';
import { useRouter } from 'next/navigation';

// --- Définitions ---

// Les éléments de navigation sont définis une seule fois
const navigationItems = [
  { href: "/", icon: Home, label: "Accueil" },
  { href: "/Mentions", icon: Globe, label: "Mentions" },
  { href: "#analytics", icon: TrendingUp, label: "Analytics" },
  { href: "/rapports", icon: FileText, label: "Rapports" }
];

// --- Composant Interne : NavItem (pour la clarté) ---

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  isDarkMode: boolean;
  onClick?: () => void;
  isMobile?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, label, isDarkMode, onClick, isMobile = false }) => {
  const baseClasses = `group flex items-center px-3 py-2.5 rounded-xl font-medium transition-all duration-300 relative overflow-hidden`;
  const colorClasses = isDarkMode
    ? 'text-gray-300 hover:bg-slate-800/50 hover:text-white'
    : 'text-gray-700 hover:bg-gray-50/80 hover:text-gray-900';
  const sizeClasses = isMobile
    ? 'space-x-3 text-base w-full'
    : 'space-x-1 lg:space-x-2 xl:space-x-3 text-sm lg:text-base hover:shadow-lg hover:shadow-blue-500/10 hover:scale-[1.02]';
  const iconSize = isMobile ? 'h-5 w-5' : 'h-4 w-4 xl:h-5 xl:w-5';

  return (
    <Link
      href={href}
      className={`${baseClasses} ${colorClasses} ${sizeClasses}`}
      onClick={onClick}
      aria-label={label}
    >
      {/* Effet de fond subtil au survol */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>

      <Icon className={`${iconSize} group-hover:text-blue-600 transition-colors duration-300 relative z-10`} />
      <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">{label}</span>
    </Link>
  );
};

// --- Composant Principal Header ---

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const moreMenuRef = useRef<HTMLDivElement>(null);

  // Fermer les menus quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Fermeture du menu "Plus"
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setShowMoreMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchFocus = useCallback((isFocused: boolean) => {
    setSearchFocused(isFocused);
  }, []);


  return (
    <>
      <header className={`${isDarkMode ? 'bg-slate-900/90 border-slate-700/50' : 'bg-white/90 border-gray-200/50'}
        backdrop-blur-lg shadow-xl border-b sticky top-0 z-50 transition-all duration-300`}
        aria-label="En-tête de navigation principale"
      >
        {/* Effet de gradient subtil en arrière-plan */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 via-purple-50/5 to-pink-50/10 opacity-40 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo - REXP */}
            <Link href="/" className="flex items-center space-x-3 sm:space-x-4 flex-shrink-0 min-w-0" aria-label="Accueil REXP">
              {/* Animation du logo */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl opacity-75 group-hover:opacity-100 transition duration-300 blur-sm"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 sm:p-2.5 rounded-xl transform group-hover:scale-105 transition-all duration-300">
                  <Eye className="h-5 w-5 sm:h-6 sm:w-6 text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="block">
                <h1 className="text-xl lg:text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm font-orbitron">
                  REXP
                </h1>
                <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-50"></div>
              </div>
            </Link>

            {/* Navigation adaptative (Desktop & Tablet) */}
            <div className="flex items-center space-x-2 flex-1 justify-center max-w-3xl">

              {/* Navigation Desktop (lg+) */}
              <nav className="hidden lg:flex space-x-1" aria-label="Navigation principale">
                {navigationItems.map((item) => (
                  <NavItem key={item.href} {...item} isDarkMode={isDarkMode} />
                ))}
              </nav>

              {/* Navigation Tablet (md-lg) */}
              <nav className="hidden md:flex lg:hidden items-center space-x-1" aria-label="Navigation secondaire">
                {/* Premiers deux items toujours visibles */}
                {navigationItems.slice(0, 2).map((item) => (
                  <NavItem key={item.href} {...item} isDarkMode={isDarkMode} />
                ))}

                {/* Menu trois points pour les items restants */}
                <div className="relative" ref={moreMenuRef}>
                  <button
                    onClick={() => setShowMoreMenu(!showMoreMenu)}
                    className={`group p-2.5 rounded-xl transition-all duration-300 ${
                      isDarkMode
                        ? 'text-gray-300 hover:bg-slate-800/50 hover:text-white'
                        : 'text-gray-700 hover:bg-gray-50/80 hover:text-gray-900'
                    } hover:shadow-md hover:scale-105`}
                    aria-expanded={showMoreMenu}
                    aria-controls="more-menu-dropdown"
                    aria-label="Plus d'options de navigation"
                  >
                    <MoreHorizontal className="h-5 w-5 group-hover:text-blue-600 transition-colors duration-300" />
                  </button>

                  {/* Dropdown menu */}
                  {showMoreMenu && (
                    <div id="more-menu-dropdown" className={`absolute right-0 top-full mt-2 py-2 w-48 rounded-xl shadow-2xl border transition-all duration-200 z-50 ${
                      isDarkMode
                        ? 'bg-slate-800/95 border-slate-700/50'
                        : 'bg-white/95 border-gray-200/50'
                    } backdrop-blur-xl origin-top-right animate-fade-in-up`}>
                      {navigationItems.slice(2).map((item) => (
                        <NavItem
                          key={item.href}
                          {...item}
                          isDarkMode={isDarkMode}
                          onClick={() => setShowMoreMenu(false)}
                          isMobile={true} // Utilise le style mobile pour le dropdown
                        />
                      ))}
                    </div>
                  )}
                </div>
              </nav>
            </div>

            {/* Section droite (Recherche, Dark Mode, IA, Auth) */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">

              {/* Barre de recherche (Améliorée et Responsive) */}
              <div className={`hidden sm:flex transition-all duration-500 ${searchFocused ? 'w-64 md:w-56 lg:w-64' : 'w-40 md:w-44 lg:w-48'}`}>
                <div className={`relative flex items-center w-full`}>

                  {/* Effet d'éclat au focus */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 blur transition-all duration-300 ${
                    searchFocused ? 'opacity-20' : ''
                  }`}></div>

                  <div className={`relative flex items-center ${
                    isDarkMode ? 'bg-slate-800/80' : 'bg-gray-100/80'
                  } backdrop-blur-sm rounded-full px-4 py-2 w-full transition-all duration-300 ${
                    searchFocused
                      ? `ring-2 ${isDarkMode ? 'ring-blue-400/50' : 'ring-blue-500/50'} shadow-xl shadow-blue-500/20`
                      : 'shadow-md'
                  }`}>
                    <Search className={`h-4 w-4 mr-2 transition-all duration-300 ${
                      searchFocused
                        ? 'text-blue-500 transform scale-110'
                        : isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                    <input
                      type="search"
                      placeholder="Rechercher..."
                      aria-label="Recherche sur le site REXP"
                      className={`bg-transparent outline-none text-sm flex-1 ${
                        isDarkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
                      }`}
                      onFocus={() => handleSearchFocus(true)}
                      onBlur={() => handleSearchFocus(false)}
                    />
                  </div>
                </div>
              </div>

              {/* Bouton Dark Mode */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`relative flex items-center justify-center group flex-shrink-0 p-2.5 rounded-xl transition-all duration-300 hover:scale-110 ${
                  isDarkMode
                    ? 'bg-slate-800/50 text-yellow-400 hover:bg-slate-700/50'
                    : 'bg-gray-100/80 text-gray-700 hover:bg-gray-200/80'
                } focus:outline-none focus:ring-2 focus:ring-blue-500/70 shadow-md hover:shadow-xl`}
                aria-label={isDarkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
              >
                <div className={`absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-300 ${
                  isDarkMode ? 'bg-yellow-400' : 'bg-slate-700'
                }`}></div>
                {isDarkMode ? (
                  <Sun className="h-5 w-5 relative z-10 transform group-hover:rotate-180 transition-transform duration-500" />
                ) : (
                  <Moon className="h-5 w-5 relative z-10 transform group-hover:-rotate-12 transition-transform duration-500" />
                )}
              </button>

              {/* Avatar IA (Animation conservée) */}
              <button
                onClick={() => setIsWelcomeOpen(true)}
                className="relative flex items-center justify-center group flex-shrink-0 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500/70"
                aria-label="Ouvrir l'assistant REXP IA"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-all duration-300"></div>
                {/* Animation conservée : group-hover:animate-bounce */}
                <div className="relative transform transition-all duration-500 group-hover:scale-110 group-hover:animate-bounce">
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path>
                    </svg>
                    <div className="absolute bottom-0 right-0 h-2 w-2 bg-green-400 rounded-full ring-2 ring-white"></div>
                  </div>
                </div>
              </button>

             {/* Boutons de connexion/inscription */}
             <div className="hidden sm:flex items-center space-x-2 lg:space-x-3">
               {/* Bouton Connexion */}
               <Link
                 href="/Connexion"
                 className="relative group px-4 lg:px-6 py-2 text-sm rounded-full overflow-hidden font-semibold transition-all duration-300 hover:scale-[1.05] hover:shadow-xl hover:shadow-blue-500/25 min-w-[100px] text-center"
               >
                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 opacity-100 group-hover:opacity-0 transition-all duration-300"></div>
                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                 <span className="relative text-white flex items-center justify-center space-x-1 drop-shadow-sm">
                    <span>Connexion</span>
                 </span>
               </Link>

               {/* Bouton S'inscrire */}
               <Link
                 href="/Inscription"
                 className="relative group px-4 lg:px-6 py-2 text-sm rounded-full font-bold transition-all duration-300 hover:scale-[1.05] hover:shadow-xl border-2 border-transparent bg-white shadow-md hover:shadow-lg min-w-[100px] text-center"
               >
                 <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                 <span className="relative bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:text-white group-hover:opacity-0 transition-all duration-300">
                    S'inscrire
                 </span>
                 <span className="absolute inset-0 flex items-center justify-center rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-sm font-bold">
                    <UserPlus className='h-4 w-4 hidden lg:block mr-1'/>
                    S'inscrire
                 </span>
               </Link>
             </div>


              {/* Menu mobile toggle */}
              <button
                className={`md:hidden p-2 rounded-xl transition-all duration-300 hover:scale-110 ${
                  isDarkMode
                    ? 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50/80'
                } focus:outline-none focus:ring-2 focus:ring-blue-500/70 flex-shrink-0`}
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Ouvrir le menu mobile"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- Menu Mobile (Off-Canvas) --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Overlay de fond sombre */}
          <div
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          ></div>

          {/* Contenu du menu coulissant */}
          <div className={`absolute right-0 top-0 h-full w-72 max-w-[90vw] ${
            isDarkMode ? 'bg-slate-900/95' : 'bg-white/95'
          } backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-in-out transform translate-x-0`}>

            {/* Header du menu mobile */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200/20">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-orbitron">
                REXP Menu
              </h3>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-100'} transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/70`}
                aria-label="Fermer le menu mobile"
              >
                <X className={`h-6 w-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} />
              </button>
            </div>

            {/* Navigation mobile */}
            <nav className="p-4 space-y-2">
              {navigationItems.map((item) => (
                <NavItem
                  key={item.href}
                  {...item}
                  isDarkMode={isDarkMode}
                  onClick={() => setIsMobileMenuOpen(false)}
                  isMobile={true}
                />
              ))}
            </nav>

            {/* Barre de recherche mobile */}
            <div className="p-4 border-t border-gray-200/20">
              <div className={`flex items-center ${
                isDarkMode ? 'bg-slate-800/80' : 'bg-gray-100/80'
              } rounded-full px-4 py-3 shadow-inner`}>
                <Search className="h-5 w-5 mr-3 text-gray-400" />
                <input
                  type="search"
                  placeholder="Rechercher..."
                  className={`bg-transparent outline-none text-base flex-1 ${
                    isDarkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
                  }`}
                  aria-label="Recherche mobile"
                />
              </div>
            </div>

            {/* Bouton Dark Mode Mobile */}
            <div className="px-4 pb-3">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`w-full flex items-center justify-center space-x-3 py-3 rounded-xl transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-slate-800/80 text-yellow-400 hover:bg-slate-700/80'
                    : 'bg-gray-100/80 text-gray-700 hover:bg-gray-200/80'
                } font-medium shadow-md`}
              >
                {isDarkMode ? (
                  <>
                    <Sun className="h-5 w-5" />
                    <span>Mode Clair</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5" />
                    <span>Mode Sombre</span>
                  </>
                )}
              </button>
            </div>

            {/* Boutons de connexion mobile */}
            <div className="p-4 space-y-3 border-t border-gray-200/20">
              <Link
                href="/Connexion"
                className="block w-full py-3 text-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold transition hover:opacity-90 shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Connexion
              </Link>

              <Link
                href="/Inscription"
                className="block w-full py-3 text-center rounded-full border-2 border-blue-500 font-bold transition hover:shadow-xl hover:scale-[1.01] duration-300
                           bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                S'inscrire
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* --- Modale de Bienvenue IA (Animation conservée) --- */}
      {isWelcomeOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-all duration-300"
            onClick={() => setIsWelcomeOpen(false)}
            aria-hidden="true"
          ></div>

          <div className="relative z-50 transform transition-all duration-500 scale-100 opacity-100 w-full max-w-md">
            {/* Effet d'éclat autour de la modale */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-30 blur-xl"></div>

            <div className="relative bg-white/95 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl text-center border border-white/40">

              {/* Icône IA animée (Restauration de l'animation d'origine) */}
              <div className="flex flex-col items-center mb-6">
                <div className="relative mb-4">
                  {/* Effets de Ping conservés */}
                  <div className="absolute -inset-8 border-2 border-blue-200 rounded-full animate-ping opacity-20"></div>
                  <div className="absolute -inset-6 border-2 border-purple-200 rounded-full animate-ping opacity-30" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute -inset-4 border-2 border-pink-200 rounded-full animate-ping opacity-40" style={{animationDelay: '1s'}}></div>

                  {/* Animation de Bounce conservée */}
                  <div className="relative transform animate-bounce">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-30 blur-md animate-pulse"></div>
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-2xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-12 h-2 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full shadow-sm"></div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 font-orbitron">
                Assistant REXP <span className="inline-block text-3xl animate-shake">✨</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                Bonjour ! Je suis votre IA, prêt à vous guider pour <span className="font-semibold text-blue-600">monitorer votre image</span> et <span className="font-semibold text-purple-600">analyser les tendances</span> de votre exposition publique.
              </p>

              <button
                onClick={() => setIsWelcomeOpen(false)}
                className="w-full relative group px-6 py-3 rounded-full font-bold text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/30 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <span className="relative flex items-center justify-center space-x-2">
                  <span>Démarrer l'analyse</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
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