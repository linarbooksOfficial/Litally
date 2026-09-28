"use client"

import React, { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, RotateCcw } from "lucide-react"

export interface A11yModalItem {
  id: number
  icon: string
  category: "vision" | "neuro" | "gaze" | "audio" | "motor" | "circadian" | "declutter"
  name: string
  nameRu: string
  desc: string
  descRu: string
}

const A11Y_ITEMS_50: A11yModalItem[] = [
  // 1. Vision & Optics
  { id: 1, icon: "👑", category: "vision", name: "High-Contrast Sovereign Gold", nameRu: "Высококонтрастное Золото (OLED)", desc: "Pure OLED black with luminescent gold outlines.", descRu: "Глубокий черный OLED-фон с контрастной 2.5px золотой обводкой." },
  { id: 2, icon: "⚫", category: "vision", name: "Pure Black Ultra-OLED", nameRu: "Абсолютный Черный (0 Lux)", desc: "Zero-luminance background with ambient particles disabled.", descRu: "Полное отключение светового излучения фона и частиц." },
  { id: 3, icon: "🌅", category: "vision", name: "Morning Soft Parchment", nameRu: "Утренний Пергамент (Дневной свет)", desc: "Warm amber-ivory circadian tone eliminating glare.", descRu: "Теплый янтарно-пергаментный тон, устраняющий блики и усталость глаз." },
  { id: 4, icon: "🔴", category: "vision", name: "Protanopia Compensation", nameRu: "Коррекция Протанопии (Красный)", desc: "Spectral shift matrix for red-weak color perception.", descRu: "Спектральный SVG-фильтр для красно-слепого зрения." },
  { id: 5, icon: "🟢", category: "vision", name: "Deuteranopia Compensation", nameRu: "Коррекция Дейтеранопии (Зеленый)", desc: "Color remapping to separate green-spectrum shades.", descRu: "Калибровка цветовой матрицы для дейтеранопии." },
  { id: 6, icon: "🔵", category: "vision", name: "Tritanopia Compensation", nameRu: "Коррекция Тританопии (Сине-желтый)", desc: "Recalibrates chromatic axes for blue-yellow vision.", descRu: "Перекалибровка хроматических осей для тританопии." },
  { id: 7, icon: "⚪", category: "vision", name: "Monochrome Sanctuary", nameRu: "Монохромное Святилище", desc: "Achromatic grayscale eliminating chromatic fatigue.", descRu: "Высококонтрастная черно-белая палитра." },
  { id: 8, icon: "🔍", category: "vision", name: "Cataract Soft Sharpener", nameRu: "Резкость Контуров (Катаракта)", desc: "Geometric edge detection sharpening blurred text.", descRu: "Усиление контраста кромок текста при помутнении хрусталика." },
  { id: 9, icon: "🔦", category: "vision", name: "Glaucoma Central Focus", nameRu: "Центральный Фокус (Глаукома)", desc: "Central luminosity field aiding peripheral reduction.", descRu: "Увеличение освещенности центральной зоны взгляда." },
  { id: 10, icon: "🕶️", category: "vision", name: "Photophobia Anti-Glare Shield", nameRu: "Поляризационный Щит (Фотофобия)", desc: "Deep sepia polaroid layer with 82% luminance cut.", descRu: "Глубокий поляризационный сепия-слой с гашением света на 82%." },

  // 2. Neuro & Cognitive
  { id: 11, icon: "🧠", category: "neuro", name: "AI Easy-to-Read Simplifier", nameRu: "ИИ-Упрощение Текста (Easy-Read)", desc: "Neural rewriter: condenses complex clauses into plain language.", descRu: "Нейросетевой адаптер: мгновенно упрощает текст." },
  { id: 12, icon: "⚡", category: "neuro", name: "Bionic Reading Morph", nameRu: "Бионическое Чтение (Bionic Read)", desc: "Bolds initial word syllables to guide saccadic eye movement.", descRu: "Выделение первых букв каждого слова золотом." },
  { id: 13, icon: "📏", category: "neuro", name: "Dyslexia Laser Guide Ruler", nameRu: "Лазерная Линейка Дислексии", desc: "Horizontal illuminated golden ruler tracking cursor.", descRu: "Световая горизонтальная направляющая за курсором." },
  { id: 14, icon: "🔤", category: "neuro", name: "OpenDyslexic Weight Bias", nameRu: "Антидислексический Шрифт", desc: "Weighted baseline letterforms preventing character flipping.", descRu: "Утяжеленные основания букв против переворачивания знаков." },
  { id: 15, icon: "🎯", category: "neuro", name: "ADHD Hyper-Focus Mask", nameRu: "СДВГ-Маска Гиперфокуса", desc: "Dims all content except the paragraph under cursor.", descRu: "Затемняет экран кроме активного блока под мышью." },
  { id: 16, icon: "🛡️", category: "neuro", name: "Sensory Overload Shield", nameRu: "Щит Сенсорной Перегрузки", desc: "Terminates all canvas particles and glow pulses.", descRu: "Моментально гасит все частицы и анимации сайта." },
  { id: 17, icon: "🚶", category: "neuro", name: "Cognitive Scroll Pacer", nameRu: "Когнитивный Пейсер Скролла", desc: "Locks page scroll momentum to gentle reading intervals.", descRu: "Ступенчатая плавная прокрутка без рывков." },
  { id: 18, icon: "🖍️", category: "neuro", name: "TTS Karaoke Highlighting", nameRu: "Караоке-Подсветка Текста", desc: "Illuminates words as they are read aloud by synthetic speech.", descRu: "Подсвечивает читаемое слово золотым маркером." },
  { id: 19, icon: "🧭", category: "neuro", name: "Cognitive Memory Breadcrumbs", nameRu: "Навигационные Хлебные Крошки", desc: "Persistent visual breadcrumbs waypoint tracker.", descRu: "Постоянная полоса пройденных разделов." },
  { id: 20, icon: "💡", category: "neuro", name: "Jargon & Metaphor Decrypter", nameRu: "Дешифратор Сложных Терминов", desc: "Interactive tooltips attached to literary terminology.", descRu: "Всплывающие подсказки с объяснением редких слов." },

  // 3. Optics & Gaze Control
  { id: 21, icon: "👁️", category: "gaze", name: "Interactive Virtual Eye-Tracker", nameRu: "Виртуальный Трекер Взгляда", desc: "Software gaze simulator tracking visual attention.", descRu: "Программный трекер точки взгляда с зумом." },
  { id: 22, icon: "🤏", category: "gaze", name: "Micro-Facial Gesture Engine", nameRu: "Управление Мимикой Лица", desc: "Simulated nod to scroll, eyebrow raise for menu.", descRu: "Кивок головой листает вниз, брови открывают меню." },
  { id: 23, icon: "⏱️", category: "gaze", name: "Gaze Dwell-Clicker (1.2s)", nameRu: "Авто-Клик Взглядом (Dwell 1.2s)", desc: "Hovering for 1.2s triggers click without tapping.", descRu: "Автоклик при наведении на кнопку 1.2 секунды." },
  { id: 24, icon: "🔎", category: "gaze", name: "Optical Loupe Magnifier (2.5x)", nameRu: "Оптическая Лупа (2.5x Zoom)", desc: "Floating 200px circular optical loupe with 2.5x zoom.", descRu: "Плавающая круглая оптическая лупа 2.5x." },
  { id: 25, icon: "👓", category: "gaze", name: "Peripheral Contrast Amplifier", nameRu: "Усилитель Периферийного Контраста", desc: "Reinforces outer boundaries with 4px prominent outlines.", descRu: "Мощная контурная обводка интерфейса." },
  { id: 26, icon: "📋", category: "gaze", name: "Line-Focus Letterbox Blinds", nameRu: "Чтение Через Щелевую Шторку", desc: "Shades screen leaving an unobstructed 3-line aperture.", descRu: "Оставляет открытой только узкую щель в 3 строки." },
  { id: 27, icon: "✨", category: "gaze", name: "Giant Beacon Cursor", nameRu: "Курсор-Маяк с Перекрестием", desc: "Glowing 48px targeting reticle with coordinate crosshair.", descRu: "Светящийся 48px золотой маяк с перекрестием." },

  // 4. 3D Spatial Audio
  { id: 28, icon: "🔊", category: "audio", name: "3D Spatial Sound Compass", nameRu: "3D-Аудио Пространственный Компас", desc: "Stereo audio panner shifting frequencies by cursor X/Y.", descRu: "Панорамирование звука по положению мыши." },
  { id: 29, icon: "🗣️", category: "audio", name: "Emotional AI Narrator", nameRu: "Эмоциональный ИИ-Диктор", desc: "Context-aware speech synthesis vocalizing page content.", descRu: "Синтезатор речи с выразительной интонацией." },
  { id: 30, icon: "📯", category: "audio", name: "Sub-Bass Navigational Pulses", nameRu: "Суб-Басовые Импульсы (55Hz)", desc: "Low-frequency beacons confirming navigation boundaries.", descRu: "Низкочастотные маяки 55 Гц на границах блоков." },
  { id: 31, icon: "🧘", category: "audio", name: "Binaural Reading Beats (432Hz)", nameRu: "Бинауральный Тон (432Hz)", desc: "Calming harmonic 432Hz tone elevating concentration.", descRu: "Гармоническая волна 432 Гц для фокусировки." },
  { id: 32, icon: "🎧", category: "audio", name: "Whisper Audio Guide", nameRu: "Шепотный Гид (ASMR)", desc: "Soft whisper synthetic speech for auditory sensitivity.", descRu: "Мягкая шепотная озвучка для чувствительного слуха." },
  { id: 33, icon: "🔔", category: "audio", name: "Acoustic Earcon Landmarks", nameRu: "Звуковые Метки (Earcons)", desc: "Unique harmonic audio signatures for buttons.", descRu: "Гармонические аккорды при наведении на кнопки." },
  { id: 34, icon: "🎙️", category: "audio", name: "Hands-Free Voice Commander", nameRu: "Голосовой Командир", desc: "Voice listener for 'Books', 'Menu', 'Read'.", descRu: "Голосовые команды для навигации." },

  // 5. Motor & Tremor
  { id: 35, icon: "✋", category: "motor", name: "Tremor Click Guard", nameRu: "Защита от Тремора (Паркинсон)", desc: "Suppresses rapid double-clicks and expands hitboxes to 56px.", descRu: "Подавление дрожащих кликов и кнопки 56px." },
  { id: 36, icon: "⌨️", category: "motor", name: "Single-Key Keyboard Matrix", nameRu: "Управление Одной Клавишей", desc: "Traverse entire website sequentially using Spacebar.", descRu: "Обход всех элементов сайта клавишей Пробел." },
  { id: 37, icon: "🕹️", category: "motor", name: "Virtual Head-Tracking Joystick", nameRu: "Виртуальный Джойстик Головы", desc: "Gimbal reticle translating head tilt into scroll.", descRu: "Индикатор наклона для прокрутки без рук." },
  { id: 38, icon: "🧲", category: "motor", name: "Magnetic Button Snapping", nameRu: "Магнитное Притяжение к Кнопкам", desc: "Cursor slides into button center within 45px.", descRu: "Курсор примагничивается к центру кнопок." },
  { id: 39, icon: "📱", category: "motor", name: "Giant Touch Targets (64px)", nameRu: "Гигантские Кнопки (64px)", desc: "Enlarges clickable elements to massive 64px hitboxes.", descRu: "Увеличение кнопок до 64px для надежного нажатия." },
  { id: 40, icon: "💨", category: "motor", name: "Sip-and-Puff Simulator", nameRu: "Симулятор Выключателя (Sip-Puff)", desc: "Automatic rhythmic scanning across buttons.", descRu: "Циклический перебор элементов с подсветкой." },
  { id: 41, icon: "🐌", category: "motor", name: "Ultra-Slow Kinetic Deceleration", nameRu: "Сверхплавный Скролл", desc: "Reduces inertia by 80% to eliminate dizziness.", descRu: "Снижает инерцию скролла для вестибулярного комфорта." },
  { id: 42, icon: "⚖️", category: "motor", name: "Hand Drift Involuntary Filter", nameRu: "Фильтр Дрейфа Руки", desc: "Kalman smoothing filter neutralizing hand vibration.", descRu: "Сглаживание дрожания курсора мыши." },

  // 6. Circadian & Biometric
  { id: 43, icon: "🕯️", category: "circadian", name: "Circadian Sunset Solar Sync", nameRu: "Циркадная Синхронизация", desc: "Dynamically warms Kelvin color temperature past sunset.", descRu: "Автоматически утепляет гамму после заката." },
  { id: 44, icon: "🌙", category: "circadian", name: "Melatonin Midnight Amber (<550nm)", nameRu: "Мелатониновый Янтарный Щит", desc: "Filters out blue light wavelengths under 550nm.", descRu: "100% блокировка синего излучения для сна." },
  { id: 45, icon: "🫁", category: "circadian", name: "4-7-8 Breathing Coherence Aura", nameRu: "Аура Дыхания 4-7-8", desc: "Pulsing aura guiding 4s inhale, 7s hold, 8s exhale.", descRu: "Пульсирующая световая аура анти-стресс." },
  { id: 46, icon: "⏳", category: "circadian", name: "Anti-Panic Infinite Timers", nameRu: "Анти-Паника: Безлимитные Сессии", desc: "Extends all session timeouts to infinity.", descRu: "Убирает любые тикающие таймеры." },

  // 7. Visual De-clutter
  { id: 47, icon: "🖼️", category: "declutter", name: "Graphic De-Clutter", nameRu: "Очистка от Графики", desc: "Strips non-essential decorative backgrounds.", descRu: "Убирает фоновый декоративный шум." },
  { id: 48, icon: "📑", category: "declutter", name: "Semantic ARIA Blueprint", nameRu: "Семантический Чертеж (ARIA)", desc: "Displays visual ARIA role badges over interactive blocks.", descRu: "Отображает метки ролей ARIA над элементами." },
  { id: 49, icon: "📳", category: "declutter", name: "Tactile Haptic Pulses", nameRu: "Тактильная Вибро-Отдача", desc: "Subtle vibration pulses when tracing fingers over prose.", descRu: "Вибрации Taptic Engine при чтении со смартфона." },
  { id: 50, icon: "📜", category: "declutter", name: "Gutenberg Sheet Zen", nameRu: "Монашеский Лист Гутенберга", desc: "Strips chrome, leaving serene monumental typography.", descRu: "Абсолютный дзен: чистейший печатный лист без меню." },
]

interface AccessibilityMatrixModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  activeModes: Set<number>
  onToggleMode: (id: number) => void
  onResetAll: () => void
}

export function AccessibilityMatrixModal({
  open,
  onOpenChange,
  activeModes,
  onToggleMode,
  onResetAll,
}: AccessibilityMatrixModalProps) {
  const [category, setCategory] = useState<string>("all")
  const [search, setSearch] = useState<string>("")

  const categories = [
    { id: "all", label: "All (50)" },
    { id: "vision", label: "👁️ Vision & Optics (10)" },
    { id: "neuro", label: "🧠 Neuro (10)" },
    { id: "gaze", label: "🎯 Gaze & Optics (7)" },
    { id: "audio", label: "🔊 3D Spatial Audio (7)" },
    { id: "motor", label: "✋ Motor & Tremor (8)" },
    { id: "circadian", label: "🕯️ Circadian & Bio (4)" },
    { id: "declutter", label: "📜 De-clutter (4)" },
  ]

  const filtered = A11Y_ITEMS_50.filter((item) => {
    const matchesCat = category === "all" || item.category === category
    const q = search.toLowerCase()
    const matchesSearch =
      !q ||
      item.name.toLowerCase().includes(q) ||
      item.nameRu.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      String(item.id).includes(q)
    return matchesCat && matchesSearch
  })

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl">
        <DialogHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pr-6">
            <div>
              <DialogTitle className="text-2xl sm:text-3xl text-gold-400">
                ♿ Accessibility Sanctuary Matrix (50)
              </DialogTitle>
              <DialogDescription>
                50 clinical-grade assistive modalities: AI neuro-simplifier, 3D audio & motor guards.
              </DialogDescription>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="glass"
                size="sm"
                onClick={onResetAll}
                className="gap-1.5 border-white/20 text-xs hover:border-gold-400"
              >
                <RotateCcw className="h-3.5 w-3.5 text-gold-400" />
                <span>Reset All</span>
              </Button>
              <div className="relative w-48 sm:w-64">
                <Search className="absolute left-3 top-3.5 h-4 w-4 text-white/40" />
                <Input
                  placeholder="Search 50 modalities..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 h-11"
                />
              </div>
            </div>
          </div>
        </DialogHeader>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                category === c.id
                  ? "bg-gold-400 text-black border-gold-400 shadow-[0_0_15px_rgba(255,215,0,0.4)]"
                  : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Modality Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 max-h-[62vh] overflow-y-auto pr-2 py-3">
          {filtered.map((item) => {
            const isActive = activeModes.has(item.id)
            return (
              <div
                key={item.id}
                onClick={() => onToggleMode(item.id)}
                className={`flex flex-col justify-between p-4 rounded-2xl border transition-all cursor-pointer select-none min-h-[130px] ${
                  isActive
                    ? "border-gold-400 bg-gold-400/15 shadow-[0_0_25px_rgba(255,215,0,0.4)]"
                    : "border-white/10 bg-[rgba(14,18,26,0.7)] hover:border-gold-400/50 hover:bg-white/10 hover:-translate-y-1"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl leading-none">{item.icon}</span>
                  <Badge variant={isActive ? "active" : "outline"} className="text-[10px]">
                    {isActive ? "ACTIVE" : `#${item.id}`}
                  </Badge>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white mb-1 leading-snug">
                    {item.nameRu}
                  </h4>
                  <p className="text-xs text-white/60 line-clamp-2 leading-relaxed font-light">
                    {item.descRu}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </DialogContent>
    </Dialog>
  )
}
