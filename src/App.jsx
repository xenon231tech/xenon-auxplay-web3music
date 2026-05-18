import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MusicPlayer from './components/MusicPlayer'

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />

      <div className="px-8 pb-12">
        <MusicPlayer />
      </div>
    </div>
  )
}
