import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
            Contact
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Nous sommes à votre écoute pour toutes vos questions et demandes de réservation
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-slate-800 mb-8">
                Nous Contacter
              </h2>
              
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <div className="w-6 h-6 bg-amber-500 rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-2">Adresse</h3>
                        <p className="text-slate-600">
                          15 Rue du Port<br />
                          Les Cayes, Port Salut<br />
                          Haïti
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-2">Téléphone</h3>
                        <p className="text-slate-600">
                          +509 2815-5555<br />
                          <span className="text-sm text-slate-500">Lun-Dim: 11h00-22h00</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-2">Email</h3>
                        <p className="text-slate-600">
                          contact@lephareportsalut.com<br />
                          <span className="text-sm text-slate-500">Réponse sous 24h</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Hours */}
              <div className="mt-8">
                <h3 className="font-playfair text-2xl font-bold text-slate-800 mb-4">
                  Heures d'Ouverture
                </h3>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700 font-medium">Restaurant</span>
                        <span className="text-slate-600"></span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Lundi - Jeudi</span>
                        <span className="text-slate-600">11h30 - 22h00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Vendredi - Samedi</span>
                        <span className="text-slate-600">11h30 - 23h00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Dimanche</span>
                        <span className="text-slate-600">12h00 - 21h00</span>
                      </div>
                      <div className="border-t pt-3 mt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-amber-600 font-medium">Service Café</span>
                          <span className="text-amber-600">7h00 - 11h30</span>
                        </div>
                        <p className="text-sm text-slate-500 mt-2">Tous les jours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-slate-800 mb-8">
                Envoyez-nous un Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-3xl font-bold text-slate-800 mb-4">
              Notre Emplacement
            </h2>
            <p className="text-slate-600">
              Situé en bord de mer avec vue imprenable sur la baie de Port Salut
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-96">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f30468fe-1be8-4125-8e72-ae93f3cf1028.png"
                alt="Carte de Port Salut avec emplacement du restaurant en bord de mer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-semibold text-lg mb-1">Le Phare du Port Salut</h3>
                <p className="text-sm">15 Rue du Port, Les Cayes, Port Salut</p>
              </div>
              <div className="absolute top-6 right-6">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-slate-600 mb-4">
              Facilement accessible depuis les Cayes, à seulement 10 minutes du centre-ville
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Ouvrir dans Google Maps
              </a>
              <a 
                href="tel:+50928155555"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
              >
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-playfair text-2xl font-bold text-slate-800 mb-6 text-center">
            Comment nous trouver
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-slate-800 mb-3">En Voiture</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Depuis Les Cayes, prenez la Route Nationale 2 direction Sud. 
                  Tournez à droite sur la Rue du Port après le pont. 
                  Le restaurant se trouve sur votre gauche, face à la mer.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-slate-800 mb-3">Transport Public</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Tap-tap depuis Les Cayes jusqu'à Port Salut (15 min). 
                  Descendez à l'arrêt "Rue du Port" et marchez 2 minutes 
                  vers la mer. Demandez "Le Phare" aux locaux.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}