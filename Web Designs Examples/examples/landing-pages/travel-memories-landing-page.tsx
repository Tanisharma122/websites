"use client"

import * as React from "react"
import PolaroidLineCarousel, { Slide } from "@/components/ui/polaroid-line-carousel"
import { 
  Camera, 
  Compass, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  Heart, 
  Share2, 
  BookOpen, 
  SlidersHorizontal 
} from "lucide-react"

// Curated verified high-resolution Unsplash photography
const UNSPLASH_EXPEDITIONS: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1800&auto=format&fit=crop",
    title: "Alpine Horizons",
    caption: "Valais, Switzerland — sunrise breaking over the summit ridge at 3,100 m.",
    alt: "Snow-covered peaks under a dawn sky",
  },
  {
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1800&auto=format&fit=crop",
    title: "Emerald Waters",
    caption: "Lago di Braies, Dolomites — wooden rowboat floating on glass-calm alpine water.",
    alt: "Reflective turquoise mountain lake",
  },
  {
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1800&auto=format&fit=crop",
    title: "Golden Hour Ridge",
    caption: "Pacific Northwest — amber sun pouring across mist-filled fir valleys.",
    alt: "Sunlight shining through mountain ridges and pine trees",
  },
  {
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1800&auto=format&fit=crop",
    title: "The High Range",
    caption: "Mount Robson — glaciers meeting glacial river flats below towering cliffs.",
    alt: "Majestic glacier mountains with pine forest",
  },
  {
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1800&auto=format&fit=crop",
    title: "Twilight Mist",
    caption: "Blue Ridge Mountains — undulating layers of dusk haze spanning into infinity.",
    alt: "Blue layers of mountain hills in fog",
  },
  {
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1800&auto=format&fit=crop",
    title: "Canyon Cascade",
    caption: "Columbia River Gorge — historic stone bridge draped over misting waterfalls.",
    alt: "Stone bridge with cascading waterfall",
  },
]

export default function TravelMemoriesLandingPage() {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)
  const [liked, setLiked] = React.useState(false)

  return (
    <div className="min-h-screen bg-[#141312] text-[#f2ede4] selection:bg-[#c9a67a] selection:text-[#161513] font-sans antialiased">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#141312]/80 border-b border-[#2e2a25]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2a241f] border border-[#4a3f33] flex items-center justify-center text-[#d9ba90]">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-lg tracking-wide text-[#efece6] font-semibold">
                Nostalgia
              </span>
              <span className="text-xs uppercase tracking-widest text-[#a89886] ml-2 font-mono">
                Expedition Journal
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-[#b8ab9a]">
            <a href="#gallery" className="hover:text-[#efece6] transition-colors">Gallery</a>
            <a href="#narrative" className="hover:text-[#efece6] transition-colors">Field Notes</a>
            <a href="#about" className="hover:text-[#efece6] transition-colors">The Craft</a>
          </nav>

          <div className="flex items-center gap-3">
            <button 
              type="button" 
              onClick={() => setLiked(!liked)}
              className={`p-2 rounded-full border transition-all ${
                liked 
                  ? "bg-rose-950/40 border-rose-600 text-rose-400" 
                  : "border-[#383127] text-[#a89886] hover:text-[#f2ede4] hover:border-[#5a4d3f]"
              }`}
              aria-label="Save to favorites"
            >
              <Heart className={`w-4 h-4 ${liked ? "fill-rose-400" : ""}`} />
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full bg-[#d9ba90] text-[#1a1714] hover:bg-[#ebd5b3] transition-colors shadow-sm"
            >
              <span>Explore Reel</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Headline Section */}
      <section className="pt-16 pb-6 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#3b3228] bg-[#1f1b16] text-[#c9a67a] text-xs font-mono tracking-wider mb-5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PHYSICS-BASED POLAROID STRINGLINE</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight text-[#fbfaf7] leading-[1.15]">
          Moments Suspended in Light & Breeze
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#9e9080] max-w-2xl mx-auto leading-relaxed">
          Interactive instant film prints drying on a sagging twine line. Drag the line, 
          tilt the angle, and feel the natural harmonic swing of analog memories.
        </p>
      </section>

      {/* Main Feature: Polaroid Line Carousel */}
      <section id="gallery" className="relative w-full border-y border-[#2a241e] bg-[#181614] overflow-hidden">
        <PolaroidLineCarousel
          slides={UNSPLASH_EXPEDITIONS}
          height="75vh"
          cardWidth={290}
          sag={48}
          swing={1.1}
          autoplay={4000}
          string="#7d6e5d"
          background="#161412"
          ink="#f7f3ec"
          onChange={(index) => setCurrentSlideIndex(index)}
          className="shadow-2xl"
        />
      </section>

      {/* Under-Carousel Quick Stats / Details */}
      <section id="narrative" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-[#1a1815] border border-[#2e2923]">
            <div className="w-10 h-10 rounded-xl bg-[#26211b] border border-[#3d3327] flex items-center justify-center text-[#d9ba90] mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-[#fbfaf7] font-medium">Kinetic Physics</h3>
            <p className="mt-2 text-sm text-[#9e9080] leading-relaxed">
              Critically damped spring equations deliver authentic momentum, 
              simulating gravity and air resistance as photos sway on wooden pegs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1a1815] border border-[#2e2923]">
            <div className="w-10 h-10 rounded-xl bg-[#26211b] border border-[#3d3327] flex items-center justify-center text-[#d9ba90] mb-4">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-[#fbfaf7] font-medium">Procedural Landscapes</h3>
            <p className="mt-2 text-sm text-[#9e9080] leading-relaxed">
              When photographs are absent, the canvas procedurally renders multi-layered ridge horizons 
              with atmospheric mist and film grain.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1a1815] border border-[#2e2923]">
            <div className="w-10 h-10 rounded-xl bg-[#26211b] border border-[#3d3327] flex items-center justify-center text-[#d9ba90] mb-4">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-[#fbfaf7] font-medium">Accessible Interaction</h3>
            <p className="mt-2 text-sm text-[#9e9080] leading-relaxed">
              Full touch-swiping, pointer dragging, keyboard arrow steering (←/→), 
              and screen reader announcements for modern web applications.
            </p>
          </div>
        </div>

        {/* Current Active Story Highlight */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#211c16] via-[#1c1814] to-[#211c16] border border-[#3a3227] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#d9ba90] uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5" />
              <span>Current Focus: Slide {currentSlideIndex + 1} of {UNSPLASH_EXPEDITIONS.length}</span>
            </div>
            <h4 className="mt-2 text-2xl font-serif text-[#fbfaf7]">
              {UNSPLASH_EXPEDITIONS[currentSlideIndex]?.title}
            </h4>
            <p className="mt-1 text-sm text-[#a89b8c]">
              {UNSPLASH_EXPEDITIONS[currentSlideIndex]?.caption}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2c241c] hover:bg-[#382f25] border border-[#483d30] text-sm text-[#f2ede4] transition-colors"
            >
              <Share2 className="w-4 h-4 text-[#c9a67a]" />
              <span>Share Frame</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#26211b] py-10 text-center text-xs text-[#786b5e]">
        <p>© {new Date().getFullYear()} Nostalgia UI — Built with Tailwind CSS, TypeScript & React.</p>
      </footer>
    </div>
  )
}
