import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
            À Propos
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Découvrez l'histoire et la passion derrière Le Phare du Port Salut
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Fondé en 2018 par le chef français Jean-Claude Martineau et sa femme haïtienne Marie-Claire, 
                  Le Phare du Port Salut est né d'une vision : créer un pont culinaire entre la tradition 
                  gastronomique française et les saveurs authentiques d'Haïti.
                </p>
                <p>
                  Installé dans une villa coloniale magnifiquement restaurée face à la mer, notre restaurant 
                  tire son nom du phare historique qui guide les marins vers le port sûr de Port Salut depuis 
                  plus d'un siècle. Comme ce phare, nous nous efforçons d'être un refuge chaleureux et accueillant 
                  pour tous nos invités.
                </p>
                <p>
                  Chaque plat raconte une histoire, chaque recette est un héritage transmis avec respect et innovation. 
                  Nous croyons fermement que la cuisine est un langage universel qui unit les cultures et les cœurs.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bff3d6c9-2ca6-4621-a2aa-f43e14ad3acd.png"
                alt="Villa coloniale française restaurée face à la mer avec terrasse élégante"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-400 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">2018</div>
                  <div className="text-sm text-white">Fondé</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Notre Équipe
            </h2>
            <p className="text-lg text-slate-600">
              Rencontrez les passionnés qui donnent vie à notre vision culinaire
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3bb38ba8-c27e-4ccf-8aa4-3d3c7efa5846.png"
                    alt="Chef français professionnel en toque blanche dans cuisine moderne"
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-2">
                  Jean-Claude Martineau
                </h3>
                <p className="text-amber-600 font-medium mb-3">Chef Exécutif & Propriétaire</p>
                <p className="text-slate-600 text-sm">
                  Diplômé de l'Institut Paul Bocuse à Lyon, Jean-Claude apporte 25 ans d'expérience 
                  des plus grands restaurants de France et des Caraïbes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cf980331-2a32-4d67-ab3f-ae0248ed2c5a.png"
                    alt="Femme haïtienne élégante souriante responsable restaurant professionnel"
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-2">
                  Marie-Claire Martineau
                </h3>
                <p className="text-amber-600 font-medium mb-3">Directrice & Sommelier</p>
                <p className="text-slate-600 text-sm">
                  Native de Port Salut, Marie-Claire supervise l'accueil et la sélection des vins. 
                  Elle veille à ce que chaque client vive une expérience authentique et chaleureuse.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/75a3a61b-2a1c-4c2b-b3de-71e45683a655.png"
                    alt="Jeune chef pâtissier concentré préparant desserts français élégants"
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-2">
                  Antoine Dubois
                </h3>
                <p className="text-amber-600 font-medium mb-3">Chef Pâtissier</p>
                <p className="text-slate-600 text-sm">
                  Ancien de la pâtisserie Ladurée à Paris, Antoine créé des desserts qui allient 
                  techniques françaises traditionnelles et saveurs tropicales locales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Notre Philosophie
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-amber-500 rounded-full"></div>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-3">Authenticité</h3>
              <p className="text-slate-600">
                Nous respectons les traditions culinaires françaises tout en célébrant 
                les ingrédients et saveurs locales d'Haïti.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-3">Durabilité</h3>
              <p className="text-slate-600">
                Nous privilégions les producteurs locaux et pratiquons une cuisine responsable 
                respectueuse de l'environnement maritime.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full"></div>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-3">Excellence</h3>
              <p className="text-slate-600">
                Chaque détail compte, de la sélection des ingrédients au service en salle, 
                pour offrir une expérience culinaire inoubliable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Reconnaissances
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl mb-2">🏆</div>
                <h4 className="font-semibold text-slate-800 mb-1">Prix d'Excellence</h4>
                <p className="text-sm text-slate-600">TripAdvisor 2023</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl mb-2">⭐</div>
                <h4 className="font-semibold text-slate-800 mb-1">Restaurant 5 étoiles</h4>
                <p className="text-sm text-slate-600">Guide Caraïbes 2024</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl mb-2">🥇</div>
                <h4 className="font-semibold text-slate-800 mb-1">Meilleur Restaurant</h4>
                <p className="text-sm text-slate-600">Sud d'Haïti 2023</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl mb-2">🌟</div>
                <h4 className="font-semibold text-slate-800 mb-1">Certification Bio</h4>
                <p className="text-sm text-slate-600">Produits Locaux 2024</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}