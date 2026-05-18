# Auxplay - The Decentralized Audio Hub on Base

A modern, beautiful Web3 music streaming and creator donation platform built on Base blockchain. Stream music, support creators, earn $AUX tokens.

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/xenon231tech/auxplay.git
cd auxplay

# Start local server (Python)
python -m http.server 8000

# Open in browser
http://localhost:8000
```

## ✨ Features

- 🎵 Stream music from amazing creators
- 💰 Earn $AUX tokens per stream
- 💝 Direct creator donations
- 🔍 Search songs & artists
- 🌟 Follow top creators
- 🎧 Interactive music player
- 📊 Real-time analytics dashboard
- 📱 Fully responsive mobile design
- 🎨 Beautiful dark UI (Spotify-inspired)

## 📁 Project Structure

```
auxplay/
├── index.html              # Main application (2500+ lines)
├── styles/
│   └── main.css           # Custom CSS (if needed)
├── js/
│   └── app.js             # JavaScript utilities (if needed)
├── assets/
│   ├── images/
│   ├── fonts/
│   └── icons/
├── docs/
│   ├── API.md             # API documentation
│   ├── CONTRIBUTING.md    # Contribution guidelines
│   ├── DEPLOYMENT.md      # Deployment guide
│   └── ARCHITECTURE.md    # Architecture overview
├── config/
│   ├── wallet.config.js   # Wallet configuration
│   ├── contract.abi.json  # Smart contract ABI
│   └── networks.json      # Network configuration
├── README.md              # This file
├── LICENSE                # MIT License
├── CHANGELOG.md           # Version history
├── .gitignore             # Git ignore rules
├── .env.example           # Environment variables template
└── package.json           # Project metadata
```

## 🎯 Usage

### For Listeners
1. Open the app
2. Browse featured tracks
3. Click "Play" to listen
4. Click "Tip" to support creators
5. Follow your favorite artists

### For Creators
1. Connect your Web3 wallet
2. Upload your music
3. Earn $AUX tokens per stream
4. Receive direct donations
5. Withdraw to Base chain

## 💻 Tech Stack

- **Frontend**: HTML5, Tailwind CSS, Vanilla JavaScript
- **Blockchain**: Base (Coinbase Layer 2)
- **Web3**: Wagmi, Ethers.js (ready for integration)
- **Icons**: Font Awesome 6
- **Hosting**: GitHub Pages / Vercel

## 🔐 Web3 Integration

### Wallet Connection
```javascript
// Connect wallet
await connectWallet();
```

### Token Transfer
```javascript
// Send tip to creator
await sendTip(creatorAddress, amount);
```

### Smart Contract Interaction
```javascript
// Stream reward
await recordStream(songId, creatorAddress);
```

## 📊 API Endpoints (Backend)

### Songs
- `GET /api/songs` - Get all songs
- `GET /api/songs/:id` - Get song details
- `POST /api/songs` - Create new song (creator)
- `PUT /api/songs/:id` - Update song
- `DELETE /api/songs/:id` - Delete song

### Creators
- `GET /api/creators` - Get all creators
- `GET /api/creators/:id` - Get creator profile
- `POST /api/creators` - Register creator
- `PUT /api/creators/:id` - Update profile
- `GET /api/creators/:id/stats` - Get creator stats

### Streams
- `POST /api/streams` - Record stream
- `GET /api/streams/:creatorId` - Get creator streams
- `GET /api/streams/:creatorId/earnings` - Get earnings

### Playlists
- `GET /api/playlists` - Get all playlists
- `POST /api/playlists` - Create playlist
- `POST /api/playlists/:id/songs` - Add song to playlist

## 🎨 Customization

### Change Colors
Edit Tailwind color classes in `index.html`:
```html
from-blue-500 to-cyan-400  →  from-[yourcolor]-500 to-[yourcolor]-400
```

### Add Songs
Duplicate a song row and update:
- Title
- Artist name
- $AUX per stream
- Album cover gradient

### Update Analytics
Edit sidebar values in the Analytics section.

## 📱 Mobile Optimization

✅ Responsive design (mobile-first)
✅ Touch-friendly controls (44px minimum)
✅ Bottom sheet modals on mobile
✅ Optimized typography
✅ Fast loading times
✅ Offline support ready

## 🚀 Deployment

### GitHub Pages
```bash
git push origin main
# Enable Pages in settings
```

### Vercel
```bash
npm i -g vercel
vercel
```

### Self-Hosted
```bash
Nginx / Apache setup
SSL certificate required
Node.js backend (optional)
```

## 🔄 GitHub Workflow

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'feat: Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📝 Commit Convention

```
feat: Add new feature
fix: Fix bug
docs: Update documentation
style: Format code
refactor: Refactor code
test: Add tests
chore: Update dependencies
```

## 🐛 Known Issues

- [ ] Audio playback UI only (not real audio)
- [ ] Web3 integration in progress
- [ ] Backend API not connected
- [ ] User authentication pending

## 🎯 Roadmap

### Phase 1 (Current)
- ✅ Beautiful UI/UX
- ✅ Music dashboard
- ✅ Creator profiles
- ⏳ Wallet integration

### Phase 2
- 🔜 Smart contracts deployment
- 🔜 User authentication
- 🔜 Real audio streaming
- 🔜 Creator dashboard

### Phase 3
- 🔜 Mobile app (iOS/Android)
- 🔜 Social features
- 🔜 Recommendations engine
- 🔜 NFT collectibles

## 💡 Contributing

We welcome contributions! See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 📞 Support

- 📧 Email: support@auxplay.io
- 💬 Discord: [Join our server]
- 🐦 Twitter: [@auxplay_io](https://twitter.com/auxplay_io)
- 📖 Docs: [docs.auxplay.io](https://docs.auxplay.io)

## 🙏 Acknowledgments

- Spotify for UI/UX inspiration
- Audius for Web3 music streaming concepts
- Base (Coinbase) for Layer 2 infrastructure
- Tailwind CSS for beautiful styling

---

**Built with ❤️ for the Web3 music community**

**Version**: 1.0.0  
**Last Updated**: 2026-05-18  
**Status**: 🟢 Active Development
