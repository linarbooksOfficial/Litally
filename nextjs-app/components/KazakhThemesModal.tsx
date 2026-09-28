"use client"

import React, { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

export interface KazakhTheme {
  id: number
  name: string
  nameKk: string
  nameEn: string
  swatch: string
  accent: string
}

const KAZAKH_THEMES_50: KazakhTheme[] = [
  { id: 1, name: "Золотой Человек (Иссык)", nameKk: "Алтын Адам (Есік)", nameEn: "Golden Man (Issyk)", swatch: "#ffd700", accent: "#ffd700" },
  { id: 2, name: "Ковыльная Степь Сарыарка", nameKk: "Сарыарқа Селеулі Даласы", nameEn: "Feather Grass Steppe Saryarka", swatch: "#d4af37", accent: "#d4af37" },
  { id: 3, name: "Небесная Бирюза Хан-Тенгри", nameKk: "Хан Тәңірі Көк Аспаны", nameEn: "Celestial Turquoise Khan Tengri", swatch: "#00e5ff", accent: "#00e5ff" },
  { id: 4, name: "Алатауские Ледники", nameKk: "Алатау Мұздықтары", nameEn: "Alatau Glaciers", swatch: "#38bdf8", accent: "#38bdf8" },
  { id: 5, name: "Байтерек Величественный", nameKk: "Бәйтерек Асқары", nameEn: "Baiterek Majestic", swatch: "#f59e0b", accent: "#f59e0b" },
  { id: 6, name: "Чарынский Каньон Долина Замков", nameKk: "Шарын Қамалы", nameEn: "Charyn Canyon Castle Valley", swatch: "#ea580c", accent: "#ea580c" },
  { id: 7, name: "Озеро Каинды Затонувший Лес", nameKk: "Қайыңды Көлі", nameEn: "Kaindy Lake Sunken Forest", swatch: "#10b981", accent: "#10b981" },
  { id: 8, name: "Бурабай Изумрудная Жемчужина", nameKk: "Бурабай Жауһары", nameEn: "Burabay Emerald Jewel", swatch: "#059669", accent: "#059669" },
  { id: 9, name: "Кольсайские Озера", nameKk: "Көлсай Көлдері", nameEn: "Kolsay Alpine Lakes", swatch: "#0284c7", accent: "#0284c7" },
  { id: 10, name: "Поющий Бархан Алтын-Эмель", nameKk: "Әнші Құм", nameEn: "Singing Dune Altyn-Emel", swatch: "#fbbf24", accent: "#fbbf24" },
  { id: 11, name: "Священный Туркестан", nameKk: "Қасиетті Түркістан", nameEn: "Sacred Turkistan", swatch: "#2563eb", accent: "#2563eb" },
  { id: 12, name: "Мавзолей Ходжи Ахмеда Ясави", nameKk: "Қожа Ахмет Ясауи", nameEn: "Khoja Ahmed Yasawi Shrine", swatch: "#1d4ed8", accent: "#1d4ed8" },
  { id: 13, name: "Отрар Древняя Цитадель", nameKk: "Отырар Көне Қаласы", nameEn: "Otrar Ancient Citadel", swatch: "#b45309", accent: "#b45309" },
  { id: 14, name: "Древний Сауран", nameKk: "Көне Сауран", nameEn: "Ancient Sauran Fortress", swatch: "#78350f", accent: "#78350f" },
  { id: 15, name: "Плато Устюрт Космическое", nameKk: "Үстірт Үстірті", nameEn: "Ustyurt Plateau Cosmic", swatch: "#e2e8f0", accent: "#e2e8f0" },
  { id: 16, name: "Бозжыра Белоснежные Клыки", nameKk: "Бозжыра Ақ Шыңдары", nameEn: "Bozjyra White Fangs", swatch: "#cbd5e1", accent: "#cbd5e1" },
  { id: 17, name: "Каспийское Море Ақтау", nameKk: "Каспий Ақтауы", nameEn: "Caspian Sunset Aktau", swatch: "#0ea5e9", accent: "#0ea5e9" },
  { id: 18, name: "Подземная Мечеть Бекет-Ата", nameKk: "Бекет-Ата Мешіті", nameEn: "Beket-Ata Underground Shrine", swatch: "#64748b", accent: "#64748b" },
  { id: 19, name: "Долина Шаров Торыш", nameKk: "Торыш Тас Шарлары", nameEn: "Torysh Valley of Spheres", swatch: "#a8a29e", accent: "#a8a29e" },
  { id: 20, name: "Байконур Звездная Гавань", nameKk: "Байқоңыр Ғарыш айлағы", nameEn: "Baikonur Star Harbor", swatch: "#3b82f6", accent: "#3b82f6" },
  { id: 21, name: "Коркыт Ата Звуки Кобыза", nameKk: "Қорқыт Ата Қобызы", nameEn: "Qorqyt Ata Sacred Kobyz", swatch: "#92400e", accent: "#92400e" },
  { id: 22, name: "Аральское Море Надежда Возрождения", nameKk: "Арал Қайта Түлеуі", nameEn: "Aral Sea Rebirth", swatch: "#0369a1", accent: "#0369a1" },
  { id: 23, name: "Сырдарья Река Жизни", nameKk: "Сырдария Өмір Өзені", nameEn: "Syr Darya River of Life", swatch: "#0284c7", accent: "#0284c7" },
  { id: 24, name: "Каратау Древнейшие Горы", nameKk: "Қаратау Шежіресі", nameEn: "Karatau Ancient Range", swatch: "#475569", accent: "#475569" },
  { id: 25, name: "Петроглифы Танбалы ЮНЕСКО", nameKk: "Таңбалы Тас Петроглифтері", nameEn: "Tanbaly Petroglyphs UNESCO", swatch: "#d97706", accent: "#d97706" },
  { id: 26, name: "Беркутчи Охота с Беркутом", nameKk: "Бүркітші Саятшылығы", nameEn: "Berkutchi Golden Eagle", swatch: "#b45309", accent: "#b45309" },
  { id: 27, name: "Тулпар Крылатый Скакун", nameKk: "Қанатты Тұлпар", nameEn: "Tulpar Winged Steed", swatch: "#ffd700", accent: "#ffd700" },
  { id: 28, name: "Снежный Барс Ирбис", nameKk: "Ақ Барыс", nameEn: "Snow Leopard Irbis", swatch: "#e2e8f0", accent: "#e2e8f0" },
  { id: 29, name: "Сайгак Степная Антилопа", nameKk: "Ақбөкен Дала Еркін", nameEn: "Saiga Antelope Freedom", swatch: "#fed7aa", accent: "#fed7aa" },
  { id: 30, name: "Юрта Кочевой Космос", nameKk: "Киіз Үй Ғарышы", nameEn: "Yurt Nomadic Cosmos", swatch: "#fef08a", accent: "#fef08a" },
  { id: 31, name: "Шанырак Купол Единства", nameKk: "Шаңырақ Бірлігі", nameEn: "Shanyrak Celestial Dome", swatch: "#fbbf24", accent: "#fbbf24" },
  { id: 32, name: "Кюй Даулеткерея Көроғлы", nameKk: "Көроғлы Күйі", nameEn: "Koroghly Kui Epic", swatch: "#f97316", accent: "#f97316" },
  { id: 33, name: "Курмангазы Адай Буря", nameKk: "Құрманғазы Адай", nameEn: "Kurmangazy Aday Storm", swatch: "#ef4444", accent: "#ef4444" },
  { id: 34, name: "Дина Нурпеисова Науаи", nameKk: "Дина Науаи", nameEn: "Dina Nurpeisova Navai", swatch: "#dc2626", accent: "#dc2626" },
  { id: 35, name: "Наурыз Весеннее Равноденствие", nameKk: "Наурыз Жаңа Күні", nameEn: "Nauryz Spring Equinox", swatch: "#22c55e", accent: "#22c55e" },
  { id: 36, name: "Көк-Төбе Алматы Огни Города", nameKk: "Көктөбе Шырағы", nameEn: "Kok-Tobe Almaty Lights", swatch: "#a855f7", accent: "#a855f7" },
  { id: 37, name: "Медеу Высокогорный Каток", nameKk: "Медеу Мұз Айдыны", nameEn: "Medeu High-Altitude Rink", swatch: "#38bdf8", accent: "#38bdf8" },
  { id: 38, name: "Шымбулак Горнолыжный Рай", nameKk: "Шымбұлақ Ақ Қары", nameEn: "Shymbulak Mountain Paradise", swatch: "#f1f5f9", accent: "#f1f5f9" },
  { id: 39, name: "Катон-Карагай Алтайские Кедры", nameKk: "Қатонқарағай Самырсыны", nameEn: "Katon-Karagay Altai Cedars", swatch: "#15803d", accent: "#15803d" },
  { id: 40, name: "Озеро Маркаколь Хрусталь", nameKk: "Марқакөл Мөлдірі", nameEn: "Markakol Crystal Alpine", swatch: "#0ea5e9", accent: "#0ea5e9" },
  { id: 41, name: "Гора Белуха Священная Вершина", nameKk: "Мұзтау Шыңы", nameEn: "Belukha Sacred Peak", swatch: "#ffffff", accent: "#ffffff" },
  { id: 42, name: "Зайсан Золотое Озеро", nameKk: "Зайсан Алтын Көлі", nameEn: "Zaysan Golden Lake", swatch: "#eab308", accent: "#eab308" },
  { id: 43, name: "Каркаралы Сосновый Бор", nameKk: "Қарқаралы Қарағайы", nameEn: "Karkaraly Pine Sanctuary", swatch: "#166534", accent: "#166534" },
  { id: 44, name: "Улытау Колыбель Нации", nameKk: "Ұлытау Ұлт Ұясы", nameEn: "Ulytau Cradle of the Nation", swatch: "#854d0e", accent: "#854d0e" },
  { id: 45, name: "Мавзолей Жошы Хана", nameKk: "Жошы Хан Кесенесі", nameEn: "Jochi Khan Golden Horde", swatch: "#a16207", accent: "#a16207" },
  { id: 46, name: "Мавзолей Алаша Хана", nameKk: "Алаша Хан Мұрасы", nameEn: "Alasha Khan Legacy", swatch: "#9a3412", accent: "#9a3412" },
  { id: 47, name: "Шоколад Казахстан Вкус Детства", nameKk: "Қазақстан Шоколады", nameEn: "Kazakhstan Chocolate Cyan", swatch: "#0284c7", accent: "#0284c7" },
  { id: 48, name: "Яблоки Апорт Алма-Ата", nameKk: "Апорт Алмасы", nameEn: "Aport Apples Giant Crisp", swatch: "#e11d48", accent: "#e11d48" },
  { id: 49, name: "Красная Книга Тюльпан Грейга", nameKk: "Грейг Қызғалдағы", nameEn: "Greig's Tulip Wild Origin", swatch: "#f43f5e", accent: "#f43f5e" },
  { id: 50, name: "Астана Триумфальная Арка 4K", nameKk: "Мәңгілік Ел Аркасы", nameEn: "Astana Triumphal Arch 4K", swatch: "#ffd700", accent: "#ffd700" },
]

interface KazakhThemesModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedThemeId?: number
  onSelectTheme: (theme: KazakhTheme) => void
}

export function KazakhThemesModal({
  open,
  onOpenChange,
  selectedThemeId = 50,
  onSelectTheme,
}: KazakhThemesModalProps) {
  const [search, setSearch] = useState("")

  const filtered = KAZAKH_THEMES_50.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.nameKk.toLowerCase().includes(search.toLowerCase()) ||
      t.nameEn.toLowerCase().includes(search.toLowerCase()) ||
      String(t.id).includes(search)
  )

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl">
        <DialogHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pr-6">
            <div>
              <DialogTitle className="text-2xl sm:text-3xl text-gold-400">
                🎨 50 Тем Казахстана
              </DialogTitle>
              <DialogDescription>
                Выберите визуальную атмосферу Великой Степи для домена Litally
              </DialogDescription>
            </div>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-3.5 h-4 w-4 text-white/40" />
              <Input
                placeholder="Поиск темы..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 h-11"
              />
            </div>
          </div>
        </DialogHeader>

        {/* Themes Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-[60vh] overflow-y-auto pr-2 py-4">
          {filtered.map((theme) => {
            const isSelected = theme.id === selectedThemeId
            return (
              <div
                key={theme.id}
                onClick={() => onSelectTheme(theme)}
                className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all cursor-pointer select-none ${
                  isSelected
                    ? "border-gold-400 bg-gold-400/15 shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                    : "border-white/10 bg-white/5 hover:border-gold-400/50 hover:bg-white/10"
                }`}
              >
                <div
                  className="h-7 w-7 rounded-full shadow-md flex-shrink-0 border border-white/20"
                  style={{ backgroundColor: theme.swatch }}
                />
                <div className="flex flex-col overflow-hidden">
                  <span className="text-xs font-semibold text-white truncate">
                    #{theme.id} {theme.name}
                  </span>
                  <span className="text-[10px] text-white/50 truncate font-mono">
                    {theme.nameKk}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </DialogContent>
    </Dialog>
  )
}
