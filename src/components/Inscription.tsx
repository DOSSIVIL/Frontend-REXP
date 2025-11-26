'use client';

import Link from 'next/link';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { UserPlus, Mail, Lock, User, Users, Eye, EyeOff, Sparkles } from 'lucide-react';

// Définition d'un type pour l'état du formulaire
type FormState = {
  nom: string;
  prenom: string;
  sexe: string;
  email: string;
  password: string;
  confirmPassword: string;
};

// État initial
const initialFormState: FormState = {
  nom: '',
  prenom: '',
  sexe: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function InscriptionPage() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialFormState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Gère la mise à jour des champs de manière générique
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((prevForm) => ({
        ...prevForm,
        [e.target.id]: e.target.value,
      }));
    },
    []
  );

  // Gère la soumission du formulaire
  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    setError(null);

    if (form.password !== form.confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    if (form.password.length < 8) {
      setError('Le mot de passe doit contenir au moins 8 caractères.');
      return;
    }

    // Simulation de l'appel API
    setIsLoading(true);
    console.log('Données d\'inscription:', form);

    setTimeout(() => {
      setIsLoading(false);
      console.log('Inscription réussie !');
      router.push('/Connexion?success=true');
    }, 2000);
  };

  // Logique pour évaluer la force du mot de passe
  const passwordStrength = form.password.length >= 12
    ? 'Fort'
    : form.password.length >= 8
    ? 'Moyen'
    : form.password.length > 0
    ? 'Faible'
    : '';

  const passwordStrengthClass = form.password.length >= 12
    ? 'bg-gradient-to-r from-green-400 to-green-600 w-full'
    : form.password.length >= 8
    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 w-2/3'
    : form.password.length > 0
    ? 'bg-gradient-to-r from-red-400 to-red-600 w-1/3'
    : 'w-0';

  const imageData = {
    name: "Image de bienvenue",
    image: "/Images/login_side.png"
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-2 xs:p-3 sm:p-4">

      {/* Conteneur du Bloc 2-colonnes */}
      <div className="w-full max-w-7xl mx-auto bg-white dark:bg-slate-800 rounded-2xl xs:rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100 dark:border-slate-700">

        {/* Partie Image/Illustration (Gauche - 40%) */}
        <div className="relative lg:w-2/5 overflow-hidden order-2 lg:order-1">

          {/* Image principale - visible sur desktop - occupe tout l'espace */}
          <div className="hidden lg:block w-full h-full">
            <img
              src={imageData.image}
              alt={imageData.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contenu alternatif pour mobile */}
          <div className="lg:hidden w-full p-6 xs:p-8 text-white text-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
            <div className="space-y-3 xs:space-y-4">
              <div className="w-16 h-16 xs:w-20 xs:h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 xs:w-10 xs:h-10 text-white" />
              </div>
              <h2 className="text-2xl xs:text-3xl font-bold">Bienvenue sur REXP</h2>
              <p className="text-white/90 text-base xs:text-lg leading-relaxed px-2">
                Créez votre compte et commencez à surveiller vos données en toute simplicité
              </p>
            </div>
          </div>
        </div>

        {/* Partie Formulaire (Droite - 60%) */}
        <div className="lg:w-3/5 p-4 xs:p-6 sm:p-8 lg:p-12 flex items-center justify-center order-1 lg:order-2">
          <div className="w-full max-w-xl">
            <div className="relative">

              {/* Effet de glow en arrière-plan */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl xs:rounded-3xl opacity-20 blur-xl"></div>

              <div className="relative bg-white dark:bg-slate-800 p-4 xs:p-6 sm:p-8 rounded-2xl xs:rounded-3xl shadow-xl border border-gray-100 dark:border-slate-700">

                {/* En-tête avec icône animée */}
                <div className="text-center mb-4 xs:mb-6">
                  <div className="inline-flex items-center justify-center mb-3 xs:mb-4">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-30 blur-md animate-pulse"></div>
                      <div className="relative w-14 h-14 xs:w-16 xs:h-16 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-xl">
                        <UserPlus className="h-7 w-7 xs:h-8 xs:w-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-1.5 xs:mb-2">
                    Créer un compte
                  </h2>
                  <p className="text-sm xs:text-base text-gray-600 dark:text-gray-300 flex items-center justify-center gap-1.5 xs:gap-2">
                    <Sparkles className="h-4 w-4 xs:h-5 xs:w-5 text-purple-500" />
                    <span>Commencez votre surveillance dès aujourd'hui</span>
                  </p>
                </div>

                {/* Message d'Erreur */}
                {error && (
                  <div className="p-3 xs:p-4 mb-4 xs:mb-6 text-sm xs:text-base text-red-800 dark:text-red-200 bg-red-50 dark:bg-red-900/20 rounded-lg xs:rounded-xl border-l-4 border-red-500" role="alert">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 xs:h-6 xs:w-6 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                      </svg>
                      <span className="break-words">{error}</span>
                    </div>
                  </div>
                )}

                {/* Formulaire */}
                <div className="space-y-4 xs:space-y-5">

                  {/* Nom / Prénom */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4">
                    <div>
                      <label htmlFor="nom" className="block text-sm xs:text-base font-semibold text-gray-700 dark:text-gray-200 mb-1.5 xs:mb-2">
                        Nom <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 xs:h-6 xs:w-6 text-gray-400" />
                        </div>
                        <input
                          id="nom"
                          type="text"
                          placeholder="Nom de famille"
                          value={form.nom}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 xs:pl-12 pr-3 xs:pr-4 py-2.5 xs:py-3 text-base xs:text-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg xs:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 outline-none placeholder-gray-400 dark:placeholder-gray-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="prenom" className="block text-sm xs:text-base font-semibold text-gray-700 dark:text-gray-200 mb-1.5 xs:mb-2">
                        Prénom <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 xs:h-6 xs:w-6 text-gray-400" />
                        </div>
                        <input
                          id="prenom"
                          type="text"
                          placeholder="Prénom"
                          value={form.prenom}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 xs:pl-12 pr-3 xs:pr-4 py-2.5 xs:py-3 text-base xs:text-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg xs:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 outline-none placeholder-gray-400 dark:placeholder-gray-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Sexe */}
                  <div>
                    <label htmlFor="sexe" className="block text-sm xs:text-base font-semibold text-gray-700 dark:text-gray-200 mb-1.5 xs:mb-2">
                      Sexe <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Users className="h-5 w-5 xs:h-6 xs:w-6 text-gray-400" />
                      </div>
                      <select
                        id="sexe"
                        value={form.sexe}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 xs:pl-12 pr-10 xs:pr-12 py-2.5 xs:py-3 text-base xs:text-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg xs:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 outline-none appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Sélectionnez votre sexe</option>
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 xs:h-6 xs:w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm xs:text-base font-semibold text-gray-700 dark:text-gray-200 mb-1.5 xs:mb-2">
                      Adresse Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 xs:h-6 xs:w-6 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        type="email"
                        placeholder="votre.email@exemple.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 xs:pl-12 pr-3 xs:pr-4 py-2.5 xs:py-3 text-base xs:text-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg xs:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 outline-none placeholder-gray-400 dark:placeholder-gray-500"
                      />
                    </div>
                  </div>

                  {/* Mot de passe */}
                  <div>
                    <label htmlFor="password" className="block text-sm xs:text-base font-semibold text-gray-700 dark:text-gray-200 mb-1.5 xs:mb-2">
                      Mot de passe <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 xs:h-6 xs:w-6 text-gray-400" />
                      </div>
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Minimum 8 caractères"
                        value={form.password}
                        onChange={handleChange}
                        required
                        minLength={8}
                        className="w-full pl-10 xs:pl-12 pr-12 xs:pr-14 py-2.5 xs:py-3 text-base xs:text-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg xs:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 outline-none placeholder-gray-400 dark:placeholder-gray-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 xs:pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 touch-target"
                        aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                      >
                        {showPassword ? <EyeOff className="h-5 w-5 xs:h-6 xs:w-6" /> : <Eye className="h-5 w-5 xs:h-6 xs:w-6" />}
                      </button>
                    </div>

                    {/* Indicateur de force du mot de passe */}
                    {form.password && (
                      <div className="space-y-1.5 xs:space-y-2 pt-2">
                        <div className="flex items-center justify-between text-xs xs:text-sm text-gray-600 dark:text-gray-400">
                          <span>Force du mot de passe</span>
                          <span className={`font-semibold ${passwordStrength === 'Fort' ? 'text-green-500' : passwordStrength === 'Moyen' ? 'text-yellow-500' : 'text-red-500'}`}>
                            {passwordStrength}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 xs:h-2.5">
                          <div
                            className={`h-full rounded-full transition-all duration-300 ${passwordStrengthClass}`}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Confirmation du mot de passe */}
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm xs:text-base font-semibold text-gray-700 dark:text-gray-200 mb-1.5 xs:mb-2">
                      Confirmer le mot de passe <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 xs:h-6 xs:w-6 text-gray-400" />
                      </div>
                      <input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Retaper le mot de passe"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 xs:pl-12 pr-12 xs:pr-14 py-2.5 xs:py-3 text-base xs:text-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg xs:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 outline-none placeholder-gray-400 dark:placeholder-gray-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 xs:pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 touch-target"
                        aria-label={showConfirmPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                      >
                        {showConfirmPassword ? <EyeOff className="h-5 w-5 xs:h-6 xs:w-6" /> : <Eye className="h-5 w-5 xs:h-6 xs:w-6" />}
                      </button>
                    </div>
                  </div>

                  {/* Bouton de Soumission */}
                  <button
                    type="button"
                    onClick={(e) => handleSubmit(e as any)}
                    disabled={isLoading}
                    className={`w-full relative group py-3 xs:py-4 rounded-lg xs:rounded-xl font-bold text-base xs:text-lg text-white overflow-hidden transition-all duration-300 transform ${
                      isLoading
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98]'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                    {isLoading ? (
                      <span className="relative flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 xs:h-6 xs:w-6 mr-2 xs:mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Inscription en cours...</span>
                      </span>
                    ) : (
                      <span className="relative flex items-center justify-center space-x-2">
                        <UserPlus className="h-5 w-5 xs:h-6 xs:w-6" />
                        <span>Créer mon compte</span>
                      </span>
                    )}
                  </button>
                </div>

                {/* Lien Connexion */}
                <div className="mt-4 xs:mt-6 text-center">
                  <p className="text-sm xs:text-base text-gray-600 dark:text-gray-400">
                    Vous avez déjà un compte ?{" "}
                    <Link
                      href="/Connexion"
                      className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition duration-200 underline-offset-2 hover:underline"
                    >
                      Connectez-vous ici
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}