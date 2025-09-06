"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    specialRequests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const timeSlots = [
    "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"
  ];

  const occasions = [
    "Dîner romantique",
    "Anniversaire",
    "Anniversaire de mariage",
    "Repas d'affaires",
    "Célébration familiale",
    "Demande en mariage",
    "Autre"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real application, you would send the data to your backend
      console.log("Reservation submitted:", formData);
      
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
        occasion: "",
        specialRequests: "",
      });
    } catch (error) {
      console.error("Error submitting reservation:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get today's date in YYYY-MM-DD format for min attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
            Réservations
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Réservez votre table pour une expérience culinaire inoubliable face à la mer
          </p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="font-playfair text-3xl font-bold text-slate-800 mb-8">
                Faire une Réservation
              </h2>
              
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-slate-700 font-medium">
                          Nom complet *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="M./Mme Nom Prénom"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-slate-700 font-medium">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-slate-700 font-medium">
                        Téléphone *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="+509 XXXX-XXXX"
                      />
                    </div>

                    {/* Reservation Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div>
                        <Label htmlFor="date" className="text-slate-700 font-medium">
                          Date *
                        </Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          required
                          min={today}
                          value={formData.date}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="time" className="text-slate-700 font-medium">
                          Heure *
                        </Label>
                        <select
                          id="time"
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleInputChange}
                          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        >
                          <option value="">Choisir l'heure</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="guests" className="text-slate-700 font-medium">
                          Convives *
                        </Label>
                        <select
                          id="guests"
                          name="guests"
                          required
                          value={formData.guests}
                          onChange={handleInputChange}
                          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <option key={num} value={num}>
                              {num} personne{num > 1 ? 's' : ''}
                            </option>
                          ))}
                          <option value="10+">Plus de 10 personnes</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="occasion" className="text-slate-700 font-medium">
                        Occasion spéciale
                      </Label>
                      <select
                        id="occasion"
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      >
                        <option value="">Sélectionnez une occasion</option>
                        {occasions.map((occasion) => (
                          <option key={occasion} value={occasion}>
                            {occasion}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="specialRequests" className="text-slate-700 font-medium">
                        Demandes spéciales
                      </Label>
                      <Textarea
                        id="specialRequests"
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        className="mt-1 min-h-[100px]"
                        placeholder="Allergies alimentaires, préférences de placement, demandes spéciales..."
                      />
                    </div>

                    {submitStatus === "success" && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <h4 className="font-medium text-green-800 mb-2">Réservation confirmée !</h4>
                        <p className="text-green-700 text-sm">
                          Nous avons bien reçu votre demande de réservation. Notre équipe vous contactera 
                          dans les prochaines heures pour confirmer votre réservation.
                        </p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-800 font-medium">
                          Une erreur est survenue. Veuillez réessayer ou nous contacter directement au +509 2815-5555.
                        </p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 rounded-lg transition-colors duration-200"
                    >
                      {isSubmitting ? "Envoi en cours..." : "Confirmer la réservation"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-4">
                    Informations Pratiques
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-medium text-slate-800 mb-1">Heures de service</h4>
                      <p className="text-slate-600">
                        Déjeuner: 11h30 - 15h00<br />
                        Dîner: 18h00 - 22h00
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-1">Politique d'annulation</h4>
                      <p className="text-slate-600">
                        Annulation gratuite jusqu'à 4 heures avant la réservation.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-1">Code vestimentaire</h4>
                      <p className="text-slate-600">
                        Tenue décontractée chic recommandée pour le dîner.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-4">
                    Contact Direct
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Téléphone</p>
                        <p className="text-slate-600">+509 2815-5555</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Email</p>
                        <p className="text-slate-600">reservations@lephareportsalut.com</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-4">
                    Pour les groupes de plus de 10 personnes ou les événements spéciaux, 
                    contactez-nous directement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}