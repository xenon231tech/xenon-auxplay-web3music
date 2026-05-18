export default function UploadMusic() {
  return (
    <div className="bg-zinc-900 border border-yellow-500/20 rounded-3xl p-6 text-white">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">
        Upload Music
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Song Title"
          className="w-full bg-black border border-yellow-500/20 rounded-xl p-3"
        />

        <input
          type="text"
          placeholder="Artist Name"
          className="w-full bg-black border border-yellow-500/20 rounded-xl p-3"
        />

        <input
          type="file"
          className="w-full bg-black border border-yellow-500/20 rounded-xl p-3"
        />

        <button className="w-full bg-yellow-500 text-black py-3 rounded-xl font-bold">
          Upload Track
        </button>
      </div>
    </div>
  )
}
