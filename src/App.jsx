import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MusicPlayer from './components/MusicPlayer'
import UploadMusic from './components/UploadMusic'

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />

      <div className="grid md:grid-cols-2 gap-6 px-8 pb-12">
        <MusicPlayer />
        <UploadMusic />
      </div>
    </div>
  )
}
