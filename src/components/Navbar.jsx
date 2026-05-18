export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-yellow-500/20 bg-black text-white">
      <h1 className="text-2xl font-black tracking-widest text-yellow-400">
        AUXPLAY
      </h1>

      <div className="flex gap-6 text-sm">
        <a href="#">Dashboard</a>
        <a href="#">Explorer</a>
        <a href="#">Marketplace</a>
        <a href="#">Artists</a>
      </div>

      <button className="bg-yellow-500 text-black px-5 py-2 rounded-xl font-bold">
        Connect Wallet
      </button>
    </nav>
  )
}
