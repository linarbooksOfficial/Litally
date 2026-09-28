"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { BookOpen, Compass } from "lucide-react"

interface HeroSectionProps {
  onExploreBooks: () => void
  onOpenStudio?: () => void
}

export function HeroSection({ onExploreBooks, onOpenStudio }: HeroSectionProps) {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-16 pb-20 sm:pt-24 sm:pb-32 max-w-5xl mx-auto">
      {/* 4K Status Beacon */}
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10 shadow-[0_0_25px_rgba(0,229,255,0.25)] animate-pulse">
        <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00e5ff]" />
        <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase">
          Официальный Суверенный Домен • Доступ Открыт
        </span>
      </div>

      {/* 4K Sovereign Crest */}
      <div className="relative mb-8 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-gold-400/20 blur-2xl animate-pulse" />
        <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full border-2 border-gold-400/50 bg-black/60 backdrop-blur-xl flex items-center justify-center shadow-[0_0_35px_rgba(255,215,0,0.3)]">
          <Compass className="h-12 w-12 text-gold-400 animate-[spin_60s_linear_infinite]" />
        </div>
      </div>

      {/* 4K Holographic Main Title */}
      <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-widest uppercase bg-gradient-to-r from-white via-gold-400 via-white to-gold-500 bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)] animate-shimmer-gold select-none">
        LITALLY
      </h1>

      {/* Golden Divider Line */}
      <div className="h-[2px] w-48 sm:w-80 bg-gradient-to-r from-transparent via-gold-400 to-transparent my-8 shadow-[0_0_15px_rgba(255,215,0,0.6)]" />

      {/* Hero Statement */}
      <p className="font-sans text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-3xl mb-12 font-light">
        Welcome to Litally! You have arrived at a premier platform dedicated to supporting emerging authors, streamlining publishing, and ensuring quality book moderation. For professional writers, we offer powerful, AI-driven tools designed for seamless image generation, advanced editing, and automated synopsis creation. Beyond production, Litally invites you to explore rich author biographies, discover new books, and even engage in interactive chats with AI-powered characters from your favorite books and movies. Truly, everyone will find something to love here. Have a great and highly productive day!
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <Button
          variant="gold"
          size="xl"
          onClick={onExploreBooks}
          className="w-full sm:w-auto gap-3 text-sm sm:text-base"
        >
          <BookOpen className="h-5 w-5" />
          <span>Исследовать Каталог</span>
        </Button>

        {onOpenStudio && (
          <Button
            variant="glass"
            size="xl"
            onClick={onOpenStudio}
            className="w-full sm:w-auto gap-3 text-sm sm:text-base border-white/20 hover:border-gold-400"
          >
            <span>✨ Litally Studio</span>
          </Button>
        )}
      </div>
    </section>
  )
}
