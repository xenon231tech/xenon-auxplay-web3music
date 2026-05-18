export default function MusicPlayer() {
  return (
    <div className="bg-zinc-900 border border-yellow-500/20 rounded-3xl p-6 text-white">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">
        Live Player
      </h2>

      <div className="bg-black rounded-2xl p-6">
        <p className="text-lg font-bold">
          Neon Phoenix — Digital Fire
        </p>

        <p className="text-gray-400 text-sm mt-1">
          Cyber Synth
        </p>

        <div className="w-full h-2 bg-zinc-800 rounded-full mt-6 overflow-hidden">
          <div className="w-1/2 h-full bg-yellow-400"></div>
        </div>

        <div className="flex gap-4 mt-6">
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-xl font-bold">
            Play
          </button>

          <button className="border border-yellow-500/30 px-4 py-2 rounded-xl">
            Like
          </button>
        </div>
      </div>
    </div>
  )
}
