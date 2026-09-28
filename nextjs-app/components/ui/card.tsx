import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative rounded-2xl border border-white/10 bg-[rgba(12,15,22,0.72)] backdrop-blur-2xl text-card-foreground shadow-[0_25px_70px_rgba(0,0,0,0.85)] transition-all duration-300 hover:border-gold-400/50 hover:shadow-[0_35px_90px_rgba(0,0,0,0.95),0_0_30px_rgba(255,215,0,0.25)] hover:-translate-y-1.5 overflow-hidden",
      className
    )}
    {...props}
  >
    {/* 4K Corner accents */}
    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gold-400/60 pointer-events-none" />
    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gold-400/60 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gold-400/60 pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gold-400/60 pointer-events-none" />
    {props.children}
  </div>
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight font-serif text-white",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground leading-relaxed", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0 border-t border-white/5 mt-4", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
