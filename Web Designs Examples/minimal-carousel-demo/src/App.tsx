import { useState } from 'react'
import TravelMemoriesLandingPage from '@/examples/landing-pages/travel-memories-landing-page'
import DemoPhotos from '@/components/ui/demo'

function App() {
  const [view, setView] = useState<'landing' | 'demo'>('landing')

  return (
    <div className="relative min-h-screen">
      {/* Top Floating View Switcher */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center bg-[#1e1b17]/90 backdrop-blur-md border border-[#3b3329] p-1.5 rounded-full shadow-2xl">
        <button
          onClick={() => setView('landing')}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
            view === 'landing'
              ? 'bg-[#d9ba90] text-[#161412] shadow-sm font-semibold'
              : 'text-[#9e9080] hover:text-[#f2ede4]'
          }`}
        >
          Landing Page Theme
        </button>
        <button
          onClick={() => setView('demo')}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
            view === 'demo'
              ? 'bg-[#d9ba90] text-[#161412] shadow-sm font-semibold'
              : 'text-[#9e9080] hover:text-[#f2ede4]'
          }`}
        >
          Minimal Carousel Demo
        </button>
      </div>

      {view === 'landing' ? <TravelMemoriesLandingPage /> : <DemoPhotos />}
    </div>
  )
}

export default App
