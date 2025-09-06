"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "Tous" },
    { id: "dishes", label: "Plats" },
    { id: "interior", label: "Intérieur" },
    { id: "exterior", label: "Extérieur" },
    { id: "events", label: "Événements" },
  ];

  const images = [
    {
      id: 1,
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0be1ba99-4b78-438c-a637-8d4e4d2e6870.png",
      alt: "Bouillabaisse signature avec fruits de mer frais dans bol traditionnel",
      title: "Bouillabaisse du Phare",
      category: "dishes"
    },
    {
      id: 2,
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/348747f9-8e97-426c-bcad-1e572277c900.png",
      alt: "Salle à manger élégante avec vue sur mer et décoration maritime",
      title: "Salle principale",
      category: "interior"
    },
    {
      id: 3,
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7c8629cb-aebc-4456-93bc-4acc719ea025.png",
      alt: "Terrasse romantique face à la mer au coucher du soleil",
      title: "Terrasse vue mer",
      category: "exterior"
    },
    {
      id: 4,
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/608b4bf5-6ccd-4543-8862-60ffaa1056ab.png",
      alt: "Langouste grillée aux herbes avec légumes colorés présentation raffinée",
      title: "Langouste aux herbes",
      category: "dishes"
    },
    {
      id: 5,
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/49f6cf3e-4a13-4774-b710-350845afdb71.png",
      alt: "Bar élégant avec collection de vins français et éclairage chaleureux",
      title: "Notre bar",
      category: "interior"
    },
    {
      id: 6,
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/eada2a49-cf02-4446-9d04-5146deb13fa2.png",
      alt: "Mariage élégant sur terrasse avec décoration florale et vue mer",
      title: "Réception de mariage",
      category: "events"
    },
    {
      id: 7,
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/acfbbe48-cc71-4cea-93ea-44ba13e2fe8d.png",
      alt: "Tarte tatin maison avec glace vanille et caramel doré",
      title: "Tarte tatin maison",
      category: "dishes"
    },
    {
      id: 8,
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d77ca33b-1f62-405b-9a6e-68b280644c2f.png",
      alt: "Façade du restaurant au coucher de soleil avec phare illuminé",
      title: "Le Phare au coucher du soleil",
      category: "exterior"
    },
    {
      id: 9,
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d16eca87-1f32-4789-b258-f867159b408c.png",
      alt: "Cuisine ouverte moderne avec chef en action et équipement professionnel",
      title: "Notre cuisine",
      category: "interior"
    },
    {
      id: 10,
      src: "https://platehold.co/400x300?text=Plateau+de+fruits+de+mer+frais+avec+huîtres+et+langoustines",
      alt: "Plateau de fruits de mer frais avec huîtres et langoustines",
      title: "Plateau fruits de mer",
      category: "dishes"
    },
    {
      id: 11,
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a966a9b0-3e1a-457d-99a4-a91f7939f66d.png",
      alt: "Jardin tropical avec palmiers et éclairage romantique le soir",
      title: "Jardin tropical",
      category: "exterior"
    },
    {
      id: 12,
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4ca7dc1f-63c8-42ff-a7fa-cac01e984ce2.png",
      alt: "Soirée jazz intime avec musiciens et clients dans ambiance feutrée",
      title: "Soirée jazz",
      category: "events"
    }
  ];

  const filteredImages = selectedCategory === "all" 
    ? images 
    : images.filter(image => image.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
            Galerie
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Découvrez l'atmosphère unique du Phare du Port Salut à travers nos images
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`
                  px-6 py-2 rounded-full transition-all duration-300
                  ${selectedCategory === category.id 
                    ? "bg-amber-600 hover:bg-amber-700 text-white" 
                    : "border-amber-600 text-amber-600 hover:bg-amber-50"
                  }
                `}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <Card 
                key={image.id} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="font-playfair text-lg font-semibold mb-1">
                          {image.title}
                        </h3>
                        <p className="text-sm text-white/80 capitalize">
                          {categories.find(cat => cat.id === image.category)?.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">
                Aucune image trouvée dans cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">150+</div>
              <div className="text-slate-600">Photos de plats</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
              <div className="text-slate-600">Événements capturés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">25</div>
              <div className="text-slate-600">Spécialités signature</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">6</div>
              <div className="text-slate-600">Années d'expérience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl font-bold text-slate-800 mb-4">
            Venez créer vos propres souvenirs
          </h2>
          <p className="text-slate-600 mb-8">
            Réservez votre table et découvrez par vous-même l'ambiance unique 
            et les saveurs exceptionnelles du Phare du Port Salut.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/reservations">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-3 rounded-full">
                Réserver une table
              </Button>
            </a>
            <a href="/contact">
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50 font-medium px-8 py-3 rounded-full">
                Organiser un événement
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}