'use client';

import Link from 'next/link';
import { useState, useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff, User, Facebook, Linkedin, Github } from 'lucide-react';

type LoginFormState = {
  email: string;
  password: string;
};

const initialLoginForm: LoginFormState = {
  email: '',
  password: '',
};

// Composant Globe 3D animé
function AnimatedGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Taille adaptative selon l'écran
    const isMobile = window.innerWidth < 640;
    const canvasSize = isMobile ? 300 : 700;
    
    canvas.width = canvasSize;
    canvas.height = canvasSize;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const globeRadius = isMobile ? 100 : 250;
    let rotation = 0;

    // Points représentant les grandes villes du monde
    const cities = [
      { lat: 40.7128, lon: -74.0060, name: 'New York' },
      { lat: 51.5074, lon: -0.1278, name: 'London' },
      { lat: 35.6762, lon: 139.6503, name: 'Tokyo' },
      { lat: -33.8688, lon: 151.2093, name: 'Sydney' },
      { lat: 19.4326, lon: -99.1332, name: 'Mexico' },
      { lat: -23.5505, lon: -46.6333, name: 'São Paulo' },
      { lat: 55.7558, lon: 37.6173, name: 'Moscow' },
      { lat: 28.6139, lon: 77.2090, name: 'New Delhi' },
      { lat: 1.3521, lon: 103.8198, name: 'Singapore' },
      { lat: 6.5244, lon: 3.3792, name: 'Lagos' },
    ];

    // Contours simplifiés des continents (échantillon de points)
    const continents = [
      // Amérique du Nord
      [
        { lat: 70, lon: -100 }, { lat: 60, lon: -130 }, { lat: 50, lon: -125 },
        { lat: 40, lon: -120 }, { lat: 30, lon: -110 }, { lat: 25, lon: -100 },
        { lat: 20, lon: -90 }, { lat: 25, lon: -80 }, { lat: 35, lon: -75 },
        { lat: 45, lon: -70 }, { lat: 50, lon: -65 }, { lat: 60, lon: -70 },
        { lat: 70, lon: -80 }, { lat: 70, lon: -100 }
      ],
      // Amérique du Sud
      [
        { lat: 10, lon: -80 }, { lat: 0, lon: -75 }, { lat: -10, lon: -70 },
        { lat: -20, lon: -65 }, { lat: -30, lon: -60 }, { lat: -40, lon: -65 },
        { lat: -50, lon: -70 }, { lat: -40, lon: -75 }, { lat: -30, lon: -75 },
        { lat: -20, lon: -78 }, { lat: -10, lon: -80 }, { lat: 0, lon: -82 },
        { lat: 10, lon: -80 }
      ],
      // Europe
      [
        { lat: 70, lon: 20 }, { lat: 60, lon: 10 }, { lat: 50, lon: 5 },
        { lat: 40, lon: 0 }, { lat: 35, lon: 10 }, { lat: 40, lon: 20 },
        { lat: 45, lon: 30 }, { lat: 50, lon: 35 }, { lat: 60, lon: 30 },
        { lat: 70, lon: 20 }
      ],
      // Afrique
      [
        { lat: 35, lon: 10 }, { lat: 30, lon: 0 }, { lat: 20, lon: -10 },
        { lat: 10, lon: -15 }, { lat: 0, lon: -10 }, { lat: -10, lon: 0 },
        { lat: -20, lon: 10 }, { lat: -30, lon: 20 }, { lat: -35, lon: 25 },
        { lat: -30, lon: 35 }, { lat: -20, lon: 40 }, { lat: -10, lon: 45 },
        { lat: 0, lon: 45 }, { lat: 10, lon: 40 }, { lat: 20, lon: 35 },
        { lat: 30, lon: 30 }, { lat: 35, lon: 20 }, { lat: 35, lon: 10 }
      ],
      // Asie
      [
        { lat: 70, lon: 60 }, { lat: 60, lon: 50 }, { lat: 50, lon: 40 },
        { lat: 40, lon: 50 }, { lat: 30, lon: 60 }, { lat: 20, lon: 70 },
        { lat: 10, lon: 80 }, { lat: 0, lon: 100 }, { lat: 10, lon: 110 },
        { lat: 20, lon: 120 }, { lat: 30, lon: 130 }, { lat: 40, lon: 140 },
        { lat: 50, lon: 145 }, { lat: 60, lon: 140 }, { lat: 70, lon: 120 },
        { lat: 70, lon: 100 }, { lat: 70, lon: 80 }, { lat: 70, lon: 60 }
      ],
      // Australie
      [
        { lat: -10, lon: 115 }, { lat: -20, lon: 113 }, { lat: -30, lon: 115 },
        { lat: -35, lon: 120 }, { lat: -38, lon: 140 }, { lat: -35, lon: 150 },
        { lat: -25, lon: 153 }, { lat: -15, lon: 145 }, { lat: -10, lon: 130 },
        { lat: -10, lon: 115 }
      ]
    ];

    // Icônes des réseaux sociaux avec SVG path (codes réels)
    const socialPlatforms = [
      {
        name: 'Facebook',
        color: '#1877F2',
        icone: '📘',
        svg: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z'
      },
      {
        name: 'Twitter',
        color: '#1DA1F2',
        icone: '🐦',
        svg: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'
      },
      {
        name: 'Instagram',
        color: '#E4405F',
        icone: '📸',
        svg: 'M12 2.163c3.204 0 3.584.012 4.85.07 ...'
      },
      {
        name: 'LinkedIn',
        color: '#0A66C2',
        icone: '💼',
        svg: 'M20.447 20.452h-3.554v-5.569 ...'
      },
      {
        name: 'YouTube',
        color: '#FF0000',
        icone: '▶️',
        svg: 'M23.498 6.186a3.016 3.016 0 0 0...'
      },
      {
        name: 'TikTok',
        color: '#000000',
        icone: '🎵',
        svg: 'M12.525.02c1.31-.02 2.61-.01...'
      },
      {
        name: 'WhatsApp',
        color: '#25D366',
        icone: '💬',
        svg: 'M17.472 14.382c-.297-.149-1.758...'
      },
      {
        name: 'Telegram',
        color: '#26A5E4',
        icone: '📨',
        svg: 'M11.944 0A12 12 0 0 0 0 12a12...'
      }
    ];
    

    const connections: Array<{from: number, to: number, progress: number, platform: typeof socialPlatforms[0]}> = [];

    // Créer des connexions aléatoires
    for (let i = 0; i < (isMobile ? 10 : 20); i++) {
      connections.push({
        from: Math.floor(Math.random() * cities.length),
        to: Math.floor(Math.random() * cities.length),
        progress: Math.random(),
        platform: socialPlatforms[Math.floor(Math.random() * socialPlatforms.length)]
      });
    }

    function project3D(lat: number, lon: number, rot: number) {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + rot) * (Math.PI / 180);

      const x = globeRadius * Math.sin(phi) * Math.cos(theta);
      const y = globeRadius * Math.cos(phi);
      const z = globeRadius * Math.sin(phi) * Math.sin(theta);

      return { x: centerX + x, y: centerY - y, z };
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dessiner le globe - océans
      const oceanGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, globeRadius);
      oceanGradient.addColorStop(0, 'rgba(15, 23, 42, 0.95)');
      oceanGradient.addColorStop(0.5, 'rgba(30, 58, 138, 0.8)');
      oceanGradient.addColorStop(1, 'rgba(12, 74, 110, 0.7)');

      ctx.fillStyle = oceanGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius, 0, Math.PI * 2);
      ctx.fill();

      // Ajouter un contour lumineux au globe
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)';
      ctx.lineWidth = isMobile ? 2 : 3;
      ctx.stroke();

      // Dessiner les continents
      continents.forEach(continent => {
        ctx.beginPath();
        let firstPoint = true;
        continent.forEach(point => {
          const projected = project3D(point.lat, point.lon, rotation);
          if (projected.z > 0) {
            if (firstPoint) {
              ctx.moveTo(projected.x, projected.y);
              firstPoint = false;
            } else {
              ctx.lineTo(projected.x, projected.y);
            }
          }
        });
        ctx.closePath();

        // Remplir les continents
        const landGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, globeRadius);
        landGradient.addColorStop(0, 'rgba(34, 197, 94, 0.7)');
        landGradient.addColorStop(0.5, 'rgba(22, 163, 74, 0.6)');
        landGradient.addColorStop(1, 'rgba(21, 128, 61, 0.5)');
        ctx.fillStyle = landGradient;
        ctx.fill();

        // Contour des continents
        ctx.strokeStyle = 'rgba(34, 197, 94, 0.8)';
        ctx.lineWidth = isMobile ? 1 : 1.5;
        ctx.stroke();
      });

      // Dessiner les lignes de latitude et longitude (simplifié sur mobile)
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.lineWidth = 1;

      const step = isMobile ? 60 : 30;
      for (let lat = -90; lat <= 90; lat += step) {
        ctx.beginPath();
        for (let lon = -180; lon <= 180; lon += (isMobile ? 10 : 5)) {
          const point = project3D(lat, lon, rotation);
          if (point.z > 0) {
            if (lon === -180) ctx.moveTo(point.x, point.y);
            else ctx.lineTo(point.x, point.y);
          }
        }
        ctx.stroke();
      }

      for (let lon = -180; lon <= 180; lon += step) {
        ctx.beginPath();
        for (let lat = -90; lat <= 90; lat += (isMobile ? 10 : 5)) {
          const point = project3D(lat, lon, rotation);
          if (point.z > 0) {
            if (lat === -90) ctx.moveTo(point.x, point.y);
            else ctx.lineTo(point.x, point.y);
          }
        }
        ctx.stroke();
      }

      // Dessiner les connexions entre villes
      connections.forEach(conn => {
        const from = cities[conn.from];
        const to = cities[conn.to];
        const fromPoint = project3D(from.lat, from.lon, rotation);
        const toPoint = project3D(to.lat, to.lon, rotation);

        if (fromPoint.z > 0 || toPoint.z > 0) {
          // Dessiner la ligne de connexion avec effet lumineux
          const lineGradient = ctx.createLinearGradient(fromPoint.x, fromPoint.y, toPoint.x, toPoint.y);
          lineGradient.addColorStop(0, `${conn.platform.color}40`);
          lineGradient.addColorStop(0.5, `${conn.platform.color}80`);
          lineGradient.addColorStop(1, `${conn.platform.color}40`);

          ctx.strokeStyle = lineGradient;
          ctx.lineWidth = isMobile ? 1.5 : 2;
          ctx.shadowBlur = isMobile ? 5 : 10;
          ctx.shadowColor = conn.platform.color;
          ctx.beginPath();
          ctx.moveTo(fromPoint.x, fromPoint.y);
          ctx.lineTo(toPoint.x, toPoint.y);
          ctx.stroke();
          ctx.shadowBlur = 0;

          // Animer un point le long de la connexion
          const progress = conn.progress;
          const x = fromPoint.x + (toPoint.x - fromPoint.x) * progress;
          const y = fromPoint.y + (toPoint.y - fromPoint.y) * progress;
          const z = fromPoint.z + (toPoint.z - fromPoint.z) * progress;

          if (z > 0) {
            const iconSize = isMobile ? 10 : 16;
            // Cercle de fond avec couleur de la plateforme
            ctx.beginPath();
            ctx.arc(x, y, iconSize, 0, Math.PI * 2);
            ctx.fillStyle = conn.platform.color;
            ctx.shadowBlur = isMobile ? 8 : 15;
            ctx.shadowColor = conn.platform.color;
            ctx.fill();
            ctx.shadowBlur = 0;

            // Bordure blanche
            ctx.strokeStyle = 'white';
            ctx.lineWidth = isMobile ? 1.5 : 2;
            ctx.stroke();

            // Icône emoji
            ctx.font = isMobile ? 'bold 12px Arial' : 'bold 18px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(conn.platform.icone, x, y);
          }

          // Mettre à jour la progression
          conn.progress += 0.004;
          if (conn.progress > 1) {
            conn.progress = 0;
            conn.from = Math.floor(Math.random() * cities.length);
            conn.to = Math.floor(Math.random() * cities.length);
            conn.platform = socialPlatforms[Math.floor(Math.random() * socialPlatforms.length)];
          }
        }
      });

      // Dessiner les villes avec effet lumineux
      cities.forEach(city => {
        const point = project3D(city.lat, city.lon, rotation);
        if (point.z > 0) {
          const citySize = isMobile ? 3 : 5;
          // Point principal
          ctx.fillStyle = 'rgba(59, 130, 246, 1)';
          ctx.shadowBlur = isMobile ? 5 : 10;
          ctx.shadowColor = 'rgba(59, 130, 246, 0.8)';
          ctx.beginPath();
          ctx.arc(point.x, point.y, citySize, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;

          // Effet de pulse
          ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)';
          ctx.lineWidth = isMobile ? 1.5 : 2;
          ctx.beginPath();
          ctx.arc(point.x, point.y, (isMobile ? 8 : 10) + Math.sin(Date.now() / 500) * (isMobile ? 2 : 3), 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      rotation += 0.2;
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full max-w-full"
      style={{ maxWidth: '100%', maxHeight: '100%' }}
    />
  );
}

export default function ConnexionPage() {
  const router = useRouter();
  const [form, setForm] = useState<LoginFormState>(initialLoginForm);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }, []);

  const handleSubmit = () => {
    setError(null);

    if (!form.email || !form.password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    setIsLoading(true);
    console.log('Connexion avec:', form);

    setTimeout(() => {
      setIsLoading(false);
      console.log('Connexion réussie !');
      router.push('/dashboard');
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-2 xs:p-3 sm:p-4">
      <div className="w-full max-w-7xl mx-auto bg-white dark:bg-slate-800 rounded-2xl xs:rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100 dark:border-slate-700">

        {/* Partie Image avec Globe 3D (Gauche) */}
        <div className="relative lg:w-2/5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-4 xs:p-6 sm:p-8 lg:p-12 overflow-hidden order-2 lg:order-1 min-h-[300px] xs:min-h-[400px] sm:min-h-[500px]">

          {/* Effet de particules en arrière-plan */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-64 xs:w-96 h-64 xs:h-96 -top-32 xs:-top-48 -left-32 xs:-left-48 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute w-64 xs:w-96 h-64 xs:h-96 -bottom-32 xs:-bottom-48 -right-32 xs:-right-48 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute w-48 xs:w-64 h-48 xs:h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Grille de fond technologique */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>

          {/* Contenu */}
          <div className="relative z-10 text-white text-center space-y-3 xs:space-y-4 sm:space-y-6 w-full px-2">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-2 xs:mb-3 sm:mb-4">
              Bienvenue chez <br className="hidden xs:block" />
              <div className="block mt-1 xs:mt-2">
                <span className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm font-orbitron">
                  REXP
                </span>
                <div className="h-0.5 xs:h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-50 mt-1"></div>
              </div>
            </h1>
            <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-300 max-w-md mx-auto px-2 xs:px-4 leading-relaxed">
              Connectez-vous au monde entier. Une plateforme qui unit les réseaux sociaux et facilite la surveillance globale.
            </p>

            {/* Globe 3D animé */}
            <div className="flex items-center justify-center mt-4 xs:mt-6 sm:mt-8 mb-4 xs:mb-6">
              <div className="w-[200px] h-[200px] xs:w-[250px] xs:h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]">
                <AnimatedGlobe />
              </div>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-3 gap-2 xs:gap-3 sm:gap-4 px-2 xs:px-4">
              <div className="text-center bg-slate-800/50 backdrop-blur-sm rounded-lg xs:rounded-xl p-2 xs:p-3 border border-blue-500/20">
                <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-blue-400">150+</div>
                <div className="text-xs xs:text-sm text-gray-400">Pays</div>
              </div>
              <div className="text-center bg-slate-800/50 backdrop-blur-sm rounded-lg xs:rounded-xl p-2 xs:p-3 border border-purple-500/20">
                <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-purple-400">10M+</div>
                <div className="text-xs xs:text-sm text-gray-400">Utilisateurs</div>
              </div>
              <div className="text-center bg-slate-800/50 backdrop-blur-sm rounded-lg xs:rounded-xl p-2 xs:p-3 border border-cyan-500/20">
                <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-cyan-400">24/7</div>
                <div className="text-xs xs:text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Partie Formulaire (Droite) */}
        <div className="lg:w-3/5 p-4 xs:p-6 sm:p-8 lg:p-12 flex items-center justify-center order-1 lg:order-2">
          <div className="w-full max-w-md">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl xs:rounded-3xl opacity-20 blur-xl"></div>

              <div className="relative bg-white dark:bg-slate-800 p-4 xs:p-6 sm:p-8 rounded-2xl xs:rounded-3xl shadow-xl border border-gray-100 dark:border-slate-700">

                {/* Header */}
                <div className="text-center mb-4 xs:mb-6">
                  <div className="inline-flex items-center justify-center mb-3 xs:mb-4">
                    <div className="relative w-14 h-14 xs:w-16 xs:h-16 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-xl">
                      <User className="h-7 w-7 xs:h-8 xs:w-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
                    Connectez-vous
                  </h2>
                  <p className="text-sm xs:text-base text-gray-600 dark:text-gray-300 mt-1 xs:mt-2">Accédez à votre compte REXP</p>
                </div>

                {/* Erreur */}
                {error && (
                  <div className="p-3 xs:p-4 mb-4 xs:mb-6 text-sm xs:text-base text-red-800 dark:text-red-200 bg-red-50 dark:bg-red-900/20 rounded-lg xs:rounded-xl border-l-4 border-red-500">
                    <div className="flex items-start">
                      <svg className="h-5 w-5 xs:h-6 xs:w-6 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                      </svg>
                      <span className="break-words">{error}</span>
                    </div>
                  </div>
                )}

                {/* Formulaire */}
                <div className="space-y-4 xs:space-y-5">
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
                        className="w-full pl-10 xs:pl-12 pr-3 xs:pr-4 py-2.5 xs:py-3 text-base xs:text-lg border border-gray-300 dark:border-slate-600 rounded-lg xs:rounded-xl bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
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
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Votre mot de passe"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 xs:pl-12 pr-12 xs:pr-14 py-2.5 xs:py-3 text-base xs:text-lg border border-gray-300 dark:border-slate-600 rounded-lg xs:rounded-xl bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 xs:pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-200 touch-target"
                        aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                      >
                        {showPassword ? <EyeOff className="h-5 w-5 xs:h-6 xs:w-6" /> : <Eye className="h-5 w-5 xs:h-6 xs:w-6" />}
                      </button>
                    </div>

                    <div className="text-right mt-2">
                      <Link
                        href="/reset-password"
                        className="text-xs xs:text-sm font-semibold text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors duration-200"
                      >
                        Mot de passe oublié ?
                      </Link>
                    </div>
                  </div>

                  {/* Bouton de soumission */}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className={`w-full py-3 xs:py-4 rounded-lg xs:rounded-xl font-bold text-base xs:text-lg text-white transition-all duration-300 ease-in-out active:scale-[0.98] ${
                      isLoading
                        ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:scale-[1.02] hover:shadow-lg'
                    }`}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 xs:h-6 xs:w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Connexion...
                      </span>
                    ) : (
                      'Se connecter'
                    )}
                  </button>
                </div>

                {/* Ligne de séparation "OU" */}
                <div className="flex items-center my-4 xs:my-6">
                  <div className="flex-1 h-px bg-gray-300 dark:bg-slate-700"></div>
                  <span className="px-3 xs:px-4 text-xs xs:text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase">OU</span>
                  <div className="flex-1 h-px bg-gray-300 dark:bg-slate-700"></div>
                </div>

                {/* Connexion Google */}
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 xs:gap-3 py-2.5 xs:py-3 border border-gray-300 dark:border-slate-600 rounded-lg xs:rounded-xl bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-slate-700 transition duration-300 ease-in-out shadow-sm hover:shadow-md transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 xs:h-6 xs:w-6" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4.5c1.67 0 3.17.59 4.35 1.57l3.23-3.23C17.88.96 15.1 0 12 0 7.29 0 3.22 2.69 1.28 6.65l3.76 2.92C6 6.34 8.77 4.5 12 4.5Z" fill="#EA4335"/>
                    <path d="M23.64 12.27c0-.82-.07-1.42-.22-2.04H12v3.87h6.68c-.13 1.02-.84 2.56-2.42 3.59l3.75 2.9c2.2-2.03 3.63-5.03 3.63-8.32Z" fill="#4285F4"/>
                    <path d="M5.04 14.73A7.46 7.46 0 0 1 4.5 12c0-.95.17-1.87.53-2.73L1.28 6.65C.46 8.32 0 10.17 0 12c0 1.83.46 3.68 1.28 5.35l3.76-2.92Z" fill="#FBBC05"/>
                    <path d="M12 24c3.1 0 5.88-1.02 7.84-2.75l-3.75-2.9c-1.01.68-2.33 1.15-4.09 1.15-3.23 0-6-1.84-7.23-4.42l-3.76 2.92C3.22 21.31 7.29 24 12 24Z" fill="#34A853"/>
                  </svg>
                  <span className="font-semibold text-sm xs:text-base">Continuer avec Google</span>
                </button>

                {/* Boutons sociaux */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 xs:gap-3 mt-3 xs:mt-4">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-1.5 xs:gap-2 py-2.5 xs:py-3 rounded-lg xs:rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md text-sm xs:text-base font-medium"
                  >
                    <Facebook className="h-4 w-4 xs:h-5 xs:w-5" />
                    <span className="hidden sm:inline">Facebook</span>
                  </button>

                  <button
                    type="button"
                    className="flex items-center justify-center gap-1.5 xs:gap-2 py-2.5 xs:py-3 rounded-lg xs:rounded-xl bg-blue-700 hover:bg-blue-800 text-white transition duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md text-sm xs:text-base font-medium"
                  >
                    <Linkedin className="h-4 w-4 xs:h-5 xs:w-5" />
                    <span className="hidden sm:inline">LinkedIn</span>
                  </button>

                  <button
                    type="button"
                    className="flex items-center justify-center gap-1.5 xs:gap-2 py-2.5 xs:py-3 rounded-lg xs:rounded-xl bg-gray-800 hover:bg-black text-white transition duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md text-sm xs:text-base font-medium"
                  >
                    <Github className="h-4 w-4 xs:h-5 xs:w-5" />
                    <span className="hidden sm:inline">GitHub</span>
                  </button>
                </div>

                {/* Lien inscription */}
                <div className="mt-4 xs:mt-6 text-center">
                  <p className="text-xs xs:text-sm text-gray-600 dark:text-gray-400">
                    Pas encore de compte ?{' '}
                    <Link
                      href="/Inscription"
                      className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-80 transition-opacity duration-200 underline-offset-2 hover:underline"
                    >
                      Inscrivez-vous ici
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