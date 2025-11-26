'use client'
import React from 'react';
import { Globe, TrendingUp, Bell, ArrowRight, Shield, Target, Zap } from 'lucide-react';

const MainSection = () => {
  return (
    // ✅ Suppression du background ici - il est géré par le RootLayout
    <div className="w-full py-8 sm:py-12 lg:py-16">

      {/* Hero Section */}
      <section className="text-center mb-12 lg:mb-20">
        <div className="bg-white dark:bg-slate-800 rounded-2xl lg:rounded-3xl shadow-xl border border-gray-100 dark:border-slate-700 p-6 sm:p-8 lg:p-12 transition-colors duration-300">

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Nouvelle technologie IA</span>
          </div>

          {/* Titre principal */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight transition-colors duration-300">
            Surveillez votre
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              {" "}exposition publique
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-3xl mx-auto px-4 transition-colors duration-300">
            Détectez, mesurez et analysez votre présence médiatique en temps réel sur
            <span className="font-semibold text-gray-800 dark:text-gray-100"> toutes les plateformes</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-6 sm:mb-8">
            <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Démarrer l'analyse</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button className="w-full sm:w-auto border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-200 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-300">
              Voir la démo
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
              <span>100% Sécurisé</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
              <span>99.9% Précision</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
              <span>Temps réel</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 lg:mb-20">

        {/* Card 1 - Collecte */}
        <div className="bg-white dark:bg-slate-800 rounded-xl lg:rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 p-5 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 p-3 sm:p-4 rounded-xl">
              <Globe className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white ml-3 sm:ml-4">
              Collecte Multi-plateformes
            </h3>
          </div>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
            Surveillance automatisée des mentions sur les réseaux sociaux, médias en ligne et forums
          </p>

          <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base">
            <span>En savoir plus</span>
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
          </div>
        </div>

        {/* Card 2 - Analyse */}
        <div className="bg-white dark:bg-slate-800 rounded-xl lg:rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 p-5 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-900/50 dark:to-emerald-800/50 p-3 sm:p-4 rounded-xl">
              <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white ml-3 sm:ml-4">
              Analyse de Sentiment
            </h3>
          </div>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
            Évaluation automatique du ton et du contexte des mentions avec IA avancée
          </p>

          {/* Sentiment bars */}
          <div className="space-y-2 sm:space-y-3 mb-4">
            <div>
              <div className="flex items-center justify-between text-xs sm:text-sm mb-1">
                <span className="font-medium text-green-700 dark:text-green-400">Positif</span>
                <span className="font-bold text-green-600 dark:text-green-400">65%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-1.5 sm:h-2">
                <div className="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full" style={{width: '65%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs sm:text-sm mb-1">
                <span className="font-medium text-yellow-700 dark:text-yellow-400">Neutre</span>
                <span className="font-bold text-yellow-600 dark:text-yellow-400">25%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-1.5 sm:h-2">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-full rounded-full" style={{width: '25%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs sm:text-sm mb-1">
                <span className="font-medium text-red-700 dark:text-red-400">Négatif</span>
                <span className="font-bold text-red-600 dark:text-red-400">10%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-1.5 sm:h-2">
                <div className="bg-gradient-to-r from-red-400 to-red-600 h-full rounded-full" style={{width: '10%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 - Alertes */}
        <div className="bg-white dark:bg-slate-800 rounded-xl lg:rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 p-5 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="bg-gradient-to-br from-purple-100 to-pink-200 dark:from-purple-900/50 dark:to-pink-800/50 p-3 sm:p-4 rounded-xl">
              <Bell className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white ml-3 sm:ml-4">
              Alertes Intelligentes
            </h3>
          </div>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
            Notifications en temps réel pour les pics d'activité et événements remarquables
          </p>

          {/* Alert examples */}
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center justify-between p-2 sm:p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-400">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full"></div>
                <span className="text-xs sm:text-sm font-medium text-orange-800 dark:text-orange-300">Pic d'activité détecté</span>
              </div>
              <span className="text-xs text-orange-600 dark:text-orange-400">2h</span>
            </div>

            <div className="flex items-center justify-between p-2 sm:p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-400">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-400 rounded-full"></div>
                <span className="text-xs sm:text-sm font-medium text-red-800 dark:text-red-300">Sentiment négatif élevé</span>
              </div>
              <span className="text-xs text-red-600 dark:text-red-400">5h</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl lg:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-16 text-center">
        <h3 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
          Commencez votre surveillance
          <span className="block sm:inline"> dès aujourd'hui</span>
        </h3>

        <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-3xl mx-auto">
          Rejoignez plus de <span className="font-bold text-white">500 entreprises</span> qui font confiance à notre technologie
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
          <button className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
            <span>Essayer gratuitement</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <button className="w-full sm:w-auto border-2 border-white/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium hover:border-white hover:bg-white/10 transition-all duration-300">
            Planifier une démo
          </button>
        </div>
      </section>

    </div>
  );
};

export default MainSection;