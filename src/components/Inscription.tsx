'use client';

import Link from 'next/link';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation'; // Pour la redirection après inscription

// Définition d'un type pour l'état du formulaire (bonne pratique TS)
type FormState = {
  nom: string;
  prenom: string;
  sexe: string;
  email: string;
  password: string;
  confirmPassword: string;
};

// État initial (plus facile à réinitialiser)
const initialFormState: FormState = {
  nom: '',
  prenom: '',
  sexe: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function Inscription() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialFormState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Gère la mise à jour des champs de manière générique
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((prevForm) => ({
        ...prevForm,
        [e.target.id]: e.target.value, // Utilisation de l'ID comme clé
      }));
    },
    []
  );

  // Gère la soumission du formulaire
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (form.password !== form.confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    // --- Simulation de l'appel API ---
    setIsLoading(true);
    console.log('Données d\'inscription:', form);

    // Remplacer ce setTimeout par votre appel API réel (ex: fetch('/api/inscription', ...))
    setTimeout(() => {
      setIsLoading(false);
      // Supposons que l'inscription a réussi
      console.log('Inscription réussie !');
      // setForm(initialFormState); // Optionnel : réinitialiser le formulaire
      router.push('/Connexion?success=true'); // Rediriger l'utilisateur
    }, 2000);
    // --- Fin Simulation ---
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-lg bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl border border-gray-100 transition-all duration-300">

        {/* En-tête du formulaire */}
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-2 font-orbitron">
          Créer un compte REXP
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Rejoignez la communauté du Radar d'Exposition Publique.
        </p>

        {/* Message d'Erreur */}
        {error && (
          <div className="p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-lg text-center" role="alert">
            {error}
          </div>
        )}

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Section Nom / Prénom (Meilleur agencement responsive) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
              <input
                id="nom"
                type="text"
                placeholder="Nom de famille"
                value={form.nom}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition duration-150 outline-none placeholder-gray-400"
              />
            </div>
            <div>
              <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
              <input
                id="prenom"
                type="text"
                placeholder="Prénom"
                value={form.prenom}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition duration-150 outline-none placeholder-gray-400"
              />
            </div>
          </div>

          {/* Sexe */}
          <div>
            <label htmlFor="sexe" className="block text-sm font-medium text-gray-700 mb-1">Sexe</label>
            <select
              id="sexe"
              value={form.sexe}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition duration-150 outline-none bg-white"
            >
              <option value="" disabled>Sélectionnez votre sexe</option>
              <option value="homme">Homme</option>
              <option value="femme">Femme</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Adresse Email</label>
            <input
              id="email"
              type="email"
              placeholder="votre.email@exemple.com"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition duration-150 outline-none placeholder-gray-400"
            />
          </div>

          {/* Mot de passe */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
            <input
              id="password"
              type="password"
              placeholder="Minimum 8 caractères"
              value={form.password}
              onChange={handleChange}
              required
              minLength={8}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition duration-150 outline-none placeholder-gray-400"
            />
          </div>

          {/* Confirmation du mot de passe */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirmer le mot de passe</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Retaper le mot de passe"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition duration-150 outline-none placeholder-gray-400"
            />
          </div>

          {/* Bouton de Soumission */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-lg font-bold transition duration-300
                       ${isLoading
                         ? 'bg-blue-400 cursor-not-allowed'
                         : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'}`
                      }
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">...</svg> {/* Remplacer par un vrai SVG spinner */}
                Inscription en cours...
              </span>
            ) : (
              "S’inscrire"
            )}
          </button>
        </form>

        {/* Lien Connexion */}
        <p className="text-sm text-gray-500 text-center mt-6">
          Vous avez déjà un compte ?{" "}
          <Link
            href="/Connexion"
            className="text-blue-600 font-semibold hover:text-blue-800 hover:underline transition duration-150"
          >
            Connectez-vous ici
          </Link>
        </p>
      </div>
    </div>
  );
}