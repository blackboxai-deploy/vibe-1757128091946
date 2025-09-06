"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      console.log("Form submitted:", formData);
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                placeholder="Votre nom et prénom"
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone" className="text-slate-700 font-medium">
                Téléphone
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1"
                placeholder="+509 XXXX-XXXX"
              />
            </div>
            <div>
              <Label htmlFor="subject" className="text-slate-700 font-medium">
                Sujet *
              </Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleInputChange}
                className="mt-1"
                placeholder="Sujet de votre message"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="message" className="text-slate-700 font-medium">
              Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleInputChange}
              className="mt-1 min-h-[120px]"
              placeholder="Écrivez votre message ici..."
            />
          </div>
          
          {submitStatus === "success" && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">
                Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.
              </p>
            </div>
          )}
          
          {submitStatus === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-medium">
                Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone.
              </p>
            </div>
          )}
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 rounded-lg transition-colors duration-200"
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
          </Button>
          
          <p className="text-sm text-slate-500 text-center">
            Les champs marqués d&apos;un astérisque (*) sont obligatoires.
            <br />
            Nous nous engageons à protéger votre vie privée et à répondre rapidement à vos demandes.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}