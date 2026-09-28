"use client"

import React, { useEffect, useRef } from "react"

export function AmbientCanvas4K() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768
    const particleCap = isMobile ? 25 : 55

    interface Particle {
      x: number
      y: number
      size: number
      speedY: number
      speedX: number
      alpha: number
      fade: number
      reset: () => void
      update: () => void
      draw: () => void
    }

    const particles: Particle[] = []

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }

    resize()
    window.addEventListener("resize", resize)

    class StarParticle implements Particle {
      x = 0
      y = 0
      size = 0
      speedY = 0
      speedX = 0
      alpha = 0
      fade = 0

      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight
        this.size = Math.random() * 2.2 + 0.6
        this.speedY = -(Math.random() * 0.35 + 0.12)
        this.speedX = (Math.random() - 0.5) * 0.2
        this.alpha = Math.random() * 0.7 + 0.2
        this.fade = Math.random() * 0.003 + 0.0015
      }

      update() {
        this.y += this.speedY
        this.x += this.speedX
        this.alpha -= this.fade
        if (this.alpha <= 0 || this.y < 0) {
          this.reset()
          this.y = window.innerHeight + 5
        }
      }

      draw() {
        if (!ctx) return
        ctx.save()
        ctx.globalAlpha = Math.max(0, this.alpha)
        ctx.fillStyle = "#ffd700"
        ctx.shadowBlur = 10
        ctx.shadowColor = "rgba(255, 215, 0, 0.7)"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    for (let i = 0; i < particleCap; i++) {
      particles.push(new StarParticle())
    }

    const render = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render)
        return
      }

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      particles.forEach((p) => {
        p.update()
        p.draw()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] opacity-75"
    />
  )
}
