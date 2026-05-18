const songs = [
  {
    title: 'Digital Fire',
    artist: 'Neon Phoenix',
    streams: '12.4M'
  },
  {
    title: 'Cyber Dreams',
    artist: 'Aux Nova',
    streams: '8.9M'
  },
  {
    title: 'Dark Signal',
    artist: 'DarkWave-X',
    streams: '21M'
  }
]

export default function TrendingSongs() {
  return (
    <div className="bg-zinc-900 border border-yellow-500/20 rounded-3xl p-6 text-white">
      <h2 className="text-2xl font-bold text-yellow-400 mb-6">
        Trending Songs
      </h2>

      <div className="space-y-4">
        {songs.map((song) => (
          <div
            key={song.title}
            className="bg-black border border-yellow-500/10 rounded-2xl p-4"
          >
            <h3 className="font-bold text-lg">
              {song.title}
            </h3>

            <p className="text-gray-400 text-sm">
              {song.artist}
            </p>

            <p className="text-yellow-400 mt-2">
              {song.streams} Streams
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
