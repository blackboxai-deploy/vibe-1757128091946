import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <h3 className="font-playfair text-xl font-bold">Le Phare du Port Salut</h3>
                <p className="text-slate-400 text-sm">Restaurant & Café</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Découvrez l'authenticité de la cuisine côtière française dans un cadre maritime élégant, 
              où chaque repas est une invitation au voyage culinaire.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                  F
                </div>
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                  IG
                </div>
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">
                <span className="sr-only">TripAdvisor</span>
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                  TA
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">Accueil</Link></li>
              <li><Link href="/menu" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">Menu</Link></li>
              <li><Link href="/about" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">À Propos</Link></li>
              <li><Link href="/gallery" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">Galerie</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">Contact</Link></li>
              <li><Link href="/reservations" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">Réservations</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-slate-300">
              <div>
                <p className="font-medium text-white">Adresse</p>
                <p className="text-sm">15 Rue du Port<br />Les Cayes, Port Salut<br />Haïti</p>
              </div>
              <div>
                <p className="font-medium text-white">Téléphone</p>
                <p className="text-sm">+509 2815-5555</p>
              </div>
              <div>
                <p className="font-medium text-white">Email</p>
                <p className="text-sm">contact@lephareportsalut.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-white mb-3">Heures d'ouverture</h4>
              <div className="space-y-1 text-slate-300 text-sm">
                <div className="flex justify-between">
                  <span>Lundi - Jeudi</span>
                  <span>11h30 - 22h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Vendredi - Samedi</span>
                  <span>11h30 - 23h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span>12h00 - 21h00</span>
                </div>
                <div className="flex justify-between text-amber-400">
                  <span>Service Café</span>
                  <span>7h00 - 11h30</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <Link href="/reservations">
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-3 rounded-full transition-colors duration-200 w-full md:w-auto">
                  Réserver une table
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-400 text-sm">
          <p>&copy; 2024 Le Phare du Port Salut. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}