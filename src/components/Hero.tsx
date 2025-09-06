"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5aebc023-84c4-4c50-b7ff-0695a5c63b9e.png"
          alt="Restaurant français élégant face à la mer avec phare en arrière-plan au coucher du soleil"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-slate-900/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          {/* Lighthouse Icon */}
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-amber-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Le Phare
            <span className="block text-3xl md:text-4xl text-amber-400 mt-2">
              du Port Salut
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-200 mb-2 font-light">
            Restaurant & Café
          </p>
          
          <div className="w-24 h-0.5 bg-amber-400 mx-auto mb-6"></div>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Découvrez l'art de la cuisine française dans un cadre maritime exceptionnel, 
            où chaque repas devient une célébration des saveurs authentiques.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/reservations">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
              Réserver une table
            </Button>
          </Link>
          <Link href="/menu">
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
            >
              Découvrir le menu
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Défiler pour explorer</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}