"use client"

import React, { useState } from "react"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { BooksCatalog } from "@/components/BooksCatalog"
import { KazakhThemesModal, KazakhTheme } from "@/components/KazakhThemesModal"
import { AccessibilityMatrixModal } from "@/components/AccessibilityMatrixModal"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Sparkles, Send, BookOpen } from "lucide-react"

export default function Home() {
  const [themesOpen, setThemesOpen] = useState(false)
  const [a11yOpen, setA11yOpen] = useState(false)
  const [selectedThemeId, setSelectedThemeId] = useState(50)
  const [activeA11yModes, setActiveA11yModes] = useState<Set<number>>(new Set())

  const handleSelectTheme = (theme: KazakhTheme) => {
    setSelectedThemeId(theme.id)
    setThemesOpen(false)
  }

  const handleToggleA11yMode = (id: number) => {
    setActiveA11yModes((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const handleResetA11y = () => {
    setActiveA11yModes(new Set())
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* 4K Top Navigation */}
      <Header
        onOpenThemes={() => setThemesOpen(true)}
        onOpenAccessibility={() => setA11yOpen(true)}
        activeA11yCount={activeA11yModes.size}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          onExploreBooks={() => {
            const el = document.getElementById("catalogSection")
            if (el) el.scrollIntoView({ behavior: "smooth" })
          }}
          onOpenStudio={() => {
            alert("✨ Litally Studio Alpha: Редактор и ИИ-генерация доступны авторизованным авторам.")
          }}
        />

        {/* Books & Manuscripts Catalog */}
        <div id="catalogSection">
          <BooksCatalog />
        </div>

        {/* Author Biography 4K Showcase */}
        <section className="py-20 px-4 max-w-5xl mx-auto">
          <Card className="p-8 sm:p-12 flex flex-col md:flex-row items-center gap-10">
            <div className="relative flex-shrink-0">
              <div className="h-44 w-44 sm:h-56 sm:w-56 rounded-full overflow-hidden border-2 border-gold-400 shadow-[0_0_40px_rgba(255,215,0,0.4)]">
                <img
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop"
                  alt="Author Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <Badge variant="active" className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                Линар • Автор
              </Badge>
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-mono font-bold tracking-widest text-gold-400 uppercase mb-2">
                Философия и Наследие
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                Спекулятивные Вселенные Litally
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light mb-6">
                Линар — современный писатель в жанре спекулятивной фантастики и грандиозного миростроения. Вдохновляясь атмосферой Великой Степи, холодными созвездиями и древней кочевой мудростью, автор создает масштабные вселенные Litally, где каждая глава наполнена глубоким смыслом и вневременной памятью.
              </p>
              <div className="flex items-center gap-3">
                <Button variant="gold" size="sm" className="gap-2">
                  <Sparkles className="h-4 w-4" />
                  <span>Познакомиться с лором</span>
                </Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Legal & Sovereign Protocol Section */}
        <section className="py-16 px-4 max-w-5xl mx-auto">
          <Card className="p-6 sm:p-10 border-white/10 bg-black/40">
            <div className="flex items-center gap-3 mb-4 text-gold-400">
              <Shield className="h-6 w-6" />
              <h4 className="font-serif text-lg sm:text-xl font-bold tracking-wide">
                Защита авторских прав, антиплагиат и суверенный регламент
              </h4>
            </div>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6">
              Все литературные произведения, вселенные, рукописи, персонажи, синопсисы и визуальные материалы на платформе Litally защищены международным законодательством об интеллектуальной собственности и Бернской конвенцией. Любое несанкционированное копирование, распространение, обучение нейросетевых моделей (AI/ML) без письменного разрешения автора преследуются по закону.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-semibold">
              <a href="#terms" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ⚖️ Условия использования (Terms of Use) ↗
              </a>
              <a href="#privacy" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                🔒 Политика конфиденциальности (Privacy Policy) ↗
              </a>
            </div>
          </Card>
        </section>
      </main>

      {/* 4K Footer */}
      <footer className="border-t border-white/10 bg-black/80 py-10 px-4 text-center text-xs text-white/50 safe-bottom-padding">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>Все авторские права защищены. LITALLY 4K ULTRA HD EDITION</span>
          <span className="font-mono text-gold-400 tracking-wider">
            THEME #{selectedThemeId} • SOVEREIGN SANCTUARY
          </span>
        </div>
      </footer>

      {/* 50 Kazakh Themes Modal */}
      <KazakhThemesModal
        open={themesOpen}
        onOpenChange={setThemesOpen}
        selectedThemeId={selectedThemeId}
        onSelectTheme={handleSelectTheme}
      />

      {/* 50 Accessibility Matrix Modal */}
      <AccessibilityMatrixModal
        open={a11yOpen}
        onOpenChange={setA11yOpen}
        activeModes={activeA11yModes}
        onToggleMode={handleToggleA11yMode}
        onResetAll={handleResetA11y}
      />
    </div>
  )
}
