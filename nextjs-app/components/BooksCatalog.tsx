"use client"

import React, { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { BookOpen, Calendar, Star } from "lucide-react"

export interface BookItem {
  id: number
  title: string
  genre: string
  year: string
  description: string
  photo?: string
}

const DEFAULT_BOOKS: BookItem[] = [
  {
    id: 1,
    title: "Хроники Номадов: Шепот Звезд",
    genre: "Космический Эпос",
    year: "2026",
    description: "Величественная сага о древних кочевниках, бороздящих пустоту космоса в поисках Праматери. Столкновение древней философии степи и передовых квантовых двигателей.",
    photo: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Золотой Алтарь Тенгри",
    genre: "Спекулятивная Мифология",
    year: "2026",
    description: "В глубинах сакральных гор скрыт артефакт, способный переписать историю материи. Загадка небесного пантеона и судьба последнего хранителя кургана.",
    photo: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Кибер-Юрта 2099",
    genre: "Нео-Номад Киберпанк",
    year: "2026",
    description: "Неоновые степи будущего, автономные караваны и нейро-домбры, передающие закодированную память предков сквозь межзвездные глушилки Корпораций.",
    photo: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop"
  }
]

export function BooksCatalog() {
  const [books] = useState<BookItem[]>(DEFAULT_BOOKS)
  const [activeBook, setActiveBook] = useState<BookItem | null>(null)
  const [fontSize, setFontSize] = useState(1.1)

  return (
    <section className="relative z-10 py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <Badge variant="gold" className="mb-4">
          Официальная Библиография
        </Badge>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-wide mb-4">
          Книги и Рукописи Litally
        </h2>
        <p className="text-white/60 max-w-xl mx-auto text-sm sm:text-base">
          Суверенные архивы спекулятивной прозы, эпических вселенных и философской фантастики.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <Card key={book.id} className="flex flex-col justify-between group">
            <div>
              {book.photo && (
                <div className="h-56 w-full overflow-hidden relative">
                  <img
                    src={book.photo}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,15,22,0.95)] via-transparent to-transparent" />
                  <Badge variant="active" className="absolute top-4 left-4">
                    {book.genre}
                  </Badge>
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl group-hover:text-gold-400 transition-colors">
                  {book.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 text-white/70">
                  {book.description}
                </CardDescription>
              </CardHeader>
            </div>

            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-white/50 font-mono">
                <Calendar className="h-3.5 w-3.5 text-gold-400" />
                <span>{book.year}</span>
              </div>
              <Button
                variant="gold"
                size="sm"
                onClick={() => setActiveBook(book)}
                className="gap-1.5"
              >
                <BookOpen className="h-4 w-4" />
                <span>Читать</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Book Reader Modal */}
      {activeBook && (
        <Dialog open={!!activeBook} onOpenChange={(open) => !open && setActiveBook(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <div className="flex items-center justify-between pr-8">
                <div>
                  <Badge variant="gold" className="mb-2">
                    {activeBook.genre} • {activeBook.year}
                  </Badge>
                  <DialogTitle className="text-2xl sm:text-3xl text-gold-400">
                    {activeBook.title}
                  </DialogTitle>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="glass"
                    size="sm"
                    onClick={() => setFontSize(Math.max(0.9, fontSize - 0.1))}
                    title="Уменьшить шрифт"
                  >
                    A-
                  </Button>
                  <Button
                    variant="glass"
                    size="sm"
                    onClick={() => setFontSize(Math.min(1.8, fontSize + 0.1))}
                    title="Увеличить шрифт"
                  >
                    A+
                  </Button>
                </div>
              </div>
            </DialogHeader>

            <div
              className="py-6 font-serif text-white/90 leading-loose transition-all duration-200"
              style={{ fontSize: `${fontSize}rem` }}
            >
              <p className="mb-6">{activeBook.description}</p>
              <p className="text-white/70 text-sm font-sans italic border-l-2 border-gold-400 pl-4 my-8">
                «В этой главе разворачиваются ключевые события хроники. Кочевые корабли переходят на сверхсветовую скорость, приближаясь к границе известного сектора галактики...»
              </p>
              <p className="text-white/80">
                Линар мастерски сплетает философскую глубину номадической культуры с футуристическим размахом твердой спекулятивной фантастики. Каждое слово выверено, а ритм повествования держит читателя в напряжении до последней строки.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
