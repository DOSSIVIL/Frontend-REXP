import React from 'react';
import { Eye, Globe, TrendingUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* À propos */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Eye className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold">REXP (Radar d'Exposition Publique)</h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Solution complète de veille médiatique pour surveiller, analyser et optimiser 
              votre présence publique sur tous les canaux de communication.
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                <Globe className="h-5 w-5" />
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                <TrendingUp className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Fonctionnalités */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Fonctionnalités</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Veille automatisée</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Analyse de sentiment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Alertes intelligentes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rapports détaillés</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Radar d'Exposition Publique. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Conditions d'utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;