"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, Globe, Palette, ShieldCheck, ChevronDown } from "lucide-react"

interface HeaderProps {
  onOpenThemes: () => void
  onOpenAccessibility: () => void
  activeA11yCount?: number
}

export function Header({
  onOpenThemes,
  onOpenAccessibility,
  activeA11yCount = 0,
}: HeaderProps) {
  const [lang, setLang] = useState("RU")
  const [langOpen, setLangOpen] = useState(false)

  const languages = [
    { code: "EN", label: "👑 English (Master)" },
    { code: "RU", label: "📜 Русский" },
    { code: "KK", label: "🦅 Қазақша" },
    { code: "ZH", label: "🏮 中文" },
    { code: "ES", label: "⚔️ Español" },
    { code: "DE", label: "🏰 Deutsch" },
    { code: "FR", label: "⚜️ Français" },
    { code: "AR", label: "🌙 العربية" },
    { code: "JA", label: "🌸 日本語" },
    { code: "PT", label: "⚓ Português" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[rgba(5,7,12,0.82)] backdrop-blur-2xl transition-all duration-300 pt-[max(12px,env(safe-area-inset-top))] px-4 sm:px-8">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <Sparkles className="h-6 w-6 text-gold-400 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
          <span className="font-serif text-xl sm:text-2xl font-black tracking-widest bg-gradient-to-r from-white via-gold-400 to-gold-600 bg-clip-text text-transparent">
            LITALLY
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-end">
          {/* 50 Kazakh Themes */}
          <Button
            variant="glass"
            size="sm"
            onClick={onOpenThemes}
            className="rounded-full text-xs sm:text-sm gap-1.5 border-white/15 hover:border-gold-400 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]"
          >
            <Palette className="h-4 w-4 text-gold-400" />
            <span className="hidden sm:inline">🎨 Темы (50)</span>
            <span className="sm:hidden">Темы</span>
          </Button>

          {/* 50 Accessibility Modalities (Master English) */}
          <Button
            variant="glass"
            size="sm"
            onClick={onOpenAccessibility}
            className="rounded-full text-xs sm:text-sm gap-1.5 border-gold-400/40 text-gold-400 hover:border-gold-400 hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] bg-gold-400/5 font-semibold"
          >
            <span>♿ Accessibility ({activeA11yCount > 0 ? `${activeA11yCount}/50` : "50"})</span>
          </Button>

          {/* Multi-language Selector */}
          <div className="relative">
            <Button
              variant="glass"
              size="sm"
              onClick={() => setLangOpen(!langOpen)}
              className="rounded-full text-xs sm:text-sm gap-1 border-white/15"
            >
              <Globe className="h-3.5 w-3.5 text-gold-400" />
              <span>{lang}</span>
              <ChevronDown className="h-3 w-3 text-white/50" />
            </Button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-2xl border border-gold-400/30 bg-[rgba(8,10,16,0.95)] backdrop-blur-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-50 animate-in fade-in-50 zoom-in-95">
                <div className="text-[11px] font-bold text-white/40 uppercase tracking-wider px-3 py-1.5 border-b border-white/10 mb-1">
                  10 Языков Портала
                </div>
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code)
                      setLangOpen(false)
                    }}
                    className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-all flex items-center justify-between ${
                      lang === l.code
                        ? "bg-gold-400 text-black font-bold"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
