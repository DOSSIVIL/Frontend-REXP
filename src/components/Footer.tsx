// components/Footer.jsx - Version Next.js PURE (sans React Router)
import React from 'react';
import Link from 'next/link';
import { Eye, Globe, TrendingUp, Users, Mail, Phone } from 'lucide-react';
import { AboutUs } from '../components';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* À propos de REXP */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 w-fit">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl shadow-lg">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  REXP
                </h3>
                <p className="text-sm text-gray-400">Radar d'Exposition Publique</p>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-lg">
              Solution complète de veille médiatique alimentée par l'IA pour surveiller, 
              analyser et optimiser votre présence publique sur tous les canaux de communication 
              en temps réel.
            </p>
            
            <div className="flex space-x-3">
              <button className="bg-gray-800/80 hover:bg-gray-700 p-3 rounded-xl transition-all duration-300 hover:scale-105 group">
                <Globe className="h-5 w-5 group-hover:text-blue-400 transition-colors" />
              </button>
              <button className="bg-gray-800/80 hover:bg-gray-700 p-3 rounded-xl transition-300 hover:scale-105 group">
                <TrendingUp className="h-5 w-5 group-hover:text-purple-400 transition-colors" />
              </button>
              <button className="bg-gray-800/80 hover:bg-gray-700 p-3 rounded-xl transition-all duration-300 hover:scale-105 group">
                <Mail className="h-5 w-5 group-hover:text-green-400 transition-colors" />
              </button>
            </div>
          </div>

          {/* Fonctionnalités */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></div>
              Fonctionnalités
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Veille automatisée", icon: "🤖", href: "/features" },
                { name: "Analyse de sentiment", icon: "😊", href: "/analysis" },
                { name: "Alertes intelligentes", icon: "🔔", href: "/alerts" },
                { name: "Rapports détaillés", icon: "📊", href: "/reports" }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="mr-2 group-hover:scale-125 transition-transform">{item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* À propos de Nous & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <div className="w-2 h-6 bg-gradient-to-b from-green-500 to-blue-500 rounded-full mr-3"></div>
              À propos & Support
            </h4>
            <ul className="space-y-3">
              {[
                { name: "À propos de nous", icon: <Users className="h-4 w-4" />, href: "/AboutUs" },
                { name: "Documentation", icon: "", href: "/docs" },
                { name: "API Reference", icon: "", href: "/api" },
                { name: "Status", icon: "🟢", href: "/status" }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group hover:pl-2"
                  >
                    <span className="mr-3 group-hover:scale-110 transition-transform">
                      {typeof item.icon === 'string' ? item.icon : item.icon}
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ligne de séparation avec effet */}
        <div className="relative mt-12 mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-24 h-1 rounded-full"></div>
          </div>
        </div>

        {/* Copyright amélioré */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <p className="text-gray-400 text-sm">
              © 2025 <span className="font-semibold">Radar d'Exposition Publique</span>. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-2 text-gray-500 text-xs">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Système opérationnel</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            <Link 
              href="/privacy"
              className="text-gray-400 hover:text-white text-sm transition-colors hover:underline decoration-blue-400"
            >
              Politique de confidentialité
            </Link>
            <Link 
              href="/terms"
              className="text-gray-400 hover:text-white text-sm transition-colors hover:underline decoration-purple-400"
            >
              Conditions d'utilisation
            </Link>
            <Link 
              href="/cookies"
              className="text-gray-400 hover:text-white text-sm transition-colors hover:underline decoration-green-400"
            >
              Politique des cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;