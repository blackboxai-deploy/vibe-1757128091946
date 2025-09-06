import { Hero } from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Bienvenue au Phare du Port Salut
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Nichés sur les côtes pittoresques de Port Salut, nous vous invitons à découvrir une expérience culinaire 
              authentique où la tradition française rencontre les saveurs locales dans un cadre maritime enchanteur.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-amber-500 rounded-full"></div>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-2">Cuisine Authentique</h3>
                <p className="text-slate-600">Des plats français traditionnels préparés avec des ingrédients locaux frais et de saison.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-2">Vue sur Mer</h3>
                <p className="text-slate-600">Profitez de votre repas avec une vue imprenable sur les eaux cristallines de Port Salut.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-2">Ambiance Chaleureuse</h3>
                <p className="text-slate-600">Un cadre élégant et accueillant parfait pour vos moments intimes et célébrations.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Nos Spécialités
            </h2>
            <p className="text-lg text-slate-600">
              Découvrez quelques-uns de nos plats signature
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fcec97fc-9697-49fd-b3d7-e954d084eef3.png" 
                  alt="Bouillabaisse marseillaise authentique avec fruits de mer frais et rouille provençale"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-2">Bouillabaisse du Phare</h3>
                <p className="text-slate-600 mb-4">Notre version signature de la bouillabaisse marseillaise avec les poissons locaux les plus frais.</p>
                <p className="text-amber-600 font-semibold">1,200 HTG</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/27c0e809-122a-4e4a-917f-f9601abcf004.png'ail+et+citron" 
                  alt="Langouste grillée aux herbes de Provence avec beurre à l'ail et citron"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-2">Langouste aux Herbes</h3>
                <p className="text-slate-600 mb-4">Langouste fraîche grillée aux herbes de Provence, accompagnée de légumes de saison.</p>
                <p className="text-amber-600 font-semibold">1,800 HTG</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f714fd12-7f7a-4066-acb7-da53f7ecb5b6.png" 
                  alt="Tarte tatin française traditionnelle avec pommes caramélisées et crème fraîche"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-2">Tarte Tatin Maison</h3>
                <p className="text-slate-600 mb-4">Notre tarte tatin traditionnelle aux pommes caramélisées, servie tiède avec crème fraîche.</p>
                <p className="text-amber-600 font-semibold">350 HTG</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/menu">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-3 rounded-full">
                Voir notre menu complet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Ce que disent nos clients
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-slate-600 mb-4 italic">
                  "Une expérience culinaire exceptionnelle! La bouillabaisse était divine et l'ambiance parfaite pour notre anniversaire de mariage."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-slate-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold text-slate-800">Marie & Pierre Dubois</p>
                    <p className="text-sm text-slate-500">Client régulier</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-slate-600 mb-4 italic">
                  "Le service impeccable et la vue magnifique font de ce restaurant un incontournable de Port Salut. Hautement recommandé!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-slate-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold text-slate-800">Jean-Baptiste Laurent</p>
                    <p className="text-sm text-slate-500">Critique gastronomique</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-slate-600 mb-4 italic">
                  "Chaque visite au Phare est un voyage culinaire. L'équipe est professionnelle et les plats toujours parfaits."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-slate-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold text-slate-800">Sophie Moreau</p>
                    <p className="text-sm text-slate-500">Locale</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Réservez votre table dès aujourd'hui
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Vivez une expérience culinaire inoubliable face à la mer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservations">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-3 rounded-full">
                Faire une réservation
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 font-medium px-8 py-3 rounded-full">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}