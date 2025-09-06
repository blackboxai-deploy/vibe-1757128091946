import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MenuPage() {
  const menuSections = [
    {
      title: "Entrées",
      subtitle: "Pour bien commencer",
      items: [
        {
          name: "Soupe de Poissons Provençale",
          description: "Soupe traditionnelle aux poissons locaux, rouille maison et croûtons aillés",
          price: "450 HTG",
          speciality: true
        },
        {
          name: "Escargots de Bourgogne",
          description: "Six escargots au beurre persillé, servis dans leur coquille traditionnelle",
          price: "380 HTG"
        },
        {
          name: "Plateau de Fruits de Mer",
          description: "Sélection d'huîtres, langoustines, et crevettes de Port Salut",
          price: "850 HTG",
          speciality: true
        },
        {
          name: "Foie Gras Mi-Cuit",
          description: "Foie gras maison, pain de campagne grillé et confiture de figues",
          price: "680 HTG"
        },
        {
          name: "Salade Niçoise du Phare",
          description: "Thon frais grillé, légumes croquants, œufs, olives et anchoïade",
          price: "420 HTG"
        }
      ]
    },
    {
      title: "Plats Principaux",
      subtitle: "Nos spécialités de la mer et de la terre",
      items: [
        {
          name: "Bouillabaisse du Phare",
          description: "Notre version signature avec poissons nobles locaux, rouille et croûtons",
          price: "1,200 HTG",
          speciality: true
        },
        {
          name: "Langouste Grillée aux Herbes",
          description: "Langouste fraîche, beurre aux herbes de Provence, légumes confits",
          price: "1,800 HTG",
          speciality: true
        },
        {
          name: "Coq au Vin de Bordeaux",
          description: "Coq fermier mijoté au vin rouge, lardons, champignons et pommes de terre",
          price: "950 HTG"
        },
        {
          name: "Dorade Royale en Croûte de Sel",
          description: "Dorade entière cuite en croûte de sel, beurre blanc et légumes printaniers",
          price: "1,100 HTG"
        },
        {
          name: "Confit de Canard aux Cerises",
          description: "Cuisse de canard confite, sauce aux cerises, gratin dauphinois",
          price: "890 HTG"
        },
        {
          name: "Ratatouille Provençale",
          description: "Légumes méditerranéens mijotés, herbes fraîches, accompagné de riz pilaf",
          price: "650 HTG",
          vegetarian: true
        }
      ]
    },
    {
      title: "Desserts",
      subtitle: "Douceurs de la maison",
      items: [
        {
          name: "Tarte Tatin Maison",
          description: "Pommes caramélisées, pâte feuilletée, crème fraîche de Normandie",
          price: "350 HTG",
          speciality: true
        },
        {
          name: "Crème Brûlée à la Vanille",
          description: "Crème onctueuse à la vanille de Madagascar, sucre caramélisé",
          price: "320 HTG"
        },
        {
          name: "Profiteroles au Chocolat",
          description: "Choux garnis de glace vanille, sauce chocolat chaud maison",
          price: "380 HTG"
        },
        {
          name: "Tarte au Citron Meringuée",
          description: "Pâte sablée, curd de citron vert local, meringue italienne",
          price: "340 HTG"
        },
        {
          name: "Sélection de Fromages Français",
          description: "Plateau de fromages affinés, noix, miel et pain aux raisins",
          price: "450 HTG"
        }
      ]
    },
    {
      title: "Boissons",
      subtitle: "Carte des vins et boissons",
      items: [
        {
          name: "Champagne Brut",
          description: "Champagne français, bulles fines et élégantes",
          price: "1,200 HTG / bouteille"
        },
        {
          name: "Vin Rouge - Châteauneuf-du-Pape",
          description: "Appellation contrôlée, riche et corsé",
          price: "850 HTG / bouteille"
        },
        {
          name: "Vin Blanc - Sancerre",
          description: "Loire Valley, frais et minéral, parfait avec les fruits de mer",
          price: "750 HTG / bouteille"
        },
        {
          name: "Café Français",
          description: "Expresso traditionnel ou café au lait",
          price: "120 HTG"
        },
        {
          name: "Cocktail Signature - Phare Royale",
          description: "Champagne, liqueur de pêche, jus de fruits tropicaux",
          price: "380 HTG",
          speciality: true
        },
        {
          name: "Eaux Minérales",
          description: "Evian ou Perrier, plate ou gazeuse",
          price: "80 HTG"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
            Notre Menu
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Découvrez notre sélection de plats français authentiques, préparés avec passion et des ingrédients de première qualité
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-16">
              <div className="text-center mb-12">
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                  {section.title}
                </h2>
                <p className="text-lg text-slate-600">{section.subtitle}</p>
                <div className="w-16 h-0.5 bg-amber-400 mx-auto mt-4"></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {section.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-playfair text-xl font-semibold text-slate-800 flex-1">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-2 ml-4">
                          {item.speciality && (
                            <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                              Spécialité
                            </Badge>
                          )}
                          {item.vegetarian && (
                            <Badge className="bg-green-100 text-green-800 border-green-200">
                              Végétarien
                            </Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-slate-600 mb-3 leading-relaxed">
                        {item.description}
                      </p>
                      <p className="text-amber-600 font-semibold text-lg">
                        {item.price}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Footer */}
      <section className="bg-amber-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-playfair text-2xl font-bold text-slate-800 mb-4">
            Informations sur le Menu
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-600">
            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Allergies & Régimes Spéciaux</h4>
              <p className="text-sm">
                Nous nous adaptons aux allergies alimentaires et régimes particuliers. 
                N'hésitez pas à informer notre équipe de vos besoins spécifiques.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Fraîcheur Garantie</h4>
              <p className="text-sm">
                Nos poissons et fruits de mer sont pêchés quotidiennement par nos partenaires locaux. 
                Certains plats peuvent être indisponibles selon les arrivages.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-amber-200">
            <p className="text-sm text-slate-500">
              Prix en Gourdes Haïtiennes (HTG) • Service et taxes inclus • Dernière mise à jour: Décembre 2024
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}