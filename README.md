# Auxplay - The Decentralized Audio Hub on Base

![Auxplay](https://img.shields.io/badge/Web3-Music%20Streaming-blue?style=for-the-badge&logo=ethereum)
![Base](https://img.shields.io/badge/Chain-Base-cyan?style=for-the-badge&logo=coinbase)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

> A modern, beautiful Web3 music streaming and creator donation platform built on Base blockchain.

## 🎵 Features

- **💰 Earn $AUX Tokens**: Creators earn tokens per stream instantly
- **🎁 Direct Donations**: Listeners can tip creators directly
- **🎨 Beautiful Dark UI**: Modern Spotify-inspired dark mode interface
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop
- **⚡ Lightning Fast**: Built with Tailwind CSS and vanilla JavaScript
- **🔗 Web3 Ready**: Ready for wallet integration and Base chain integration
- **📊 Real-time Analytics**: Track earnings, streams, and wallet balance
- **🎵 Interactive Player**: Beautiful bottom player bar with controls

## 🚀 Quick Start

### Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/xenon231tech/auxplay.git
   cd auxplay
   ```

2. **Open in your browser**
   ```bash
   # Simply open index.html in your browser
   # On macOS: open index.html
   # On Windows: start index.html
   # Or drag and drop into your browser
   ```

3. **View on mobile**
   - Open a local server: `python -m http.server 8000`
   - Visit `http://localhost:8000` on your phone or use ngrok for remote access

## 📋 Project Structure

```
auxplay/
├── index.html          # Main application file (complete app)
├── README.md          # This file
└── LICENSE            # MIT License
```

## ✨ Key Components

### Header
- Auxplay branding with logo
- "Connect Wallet" button for Web3 integration
- Sticky navigation

### Hero Section
- Compelling tagline: "Stream. Earn. Donate."
- Call-to-action buttons
- Core value proposition explanation

### Sidebar Analytics (Desktop)
- Total $AUX Earned
- Total Streams Count
- Wallet Balance with withdrawal option
- Responsive: Hidden on mobile, visible on desktop

### Music Dashboard
- Featured songs with album covers (colored gradients)
- Song title and creator name
- $AUX price per stream
- Play and Tip buttons
- Hover animations and interactions
- Fully responsive grid

### Interactive Player Bar
- Now playing song information
- Progress bar with time display
- Play/Pause controls
- Skip forward/backward
- Shuffle and repeat options
- Appears when a song is played
- Mobile-optimized controls

## 🎨 Design Details

### Color Scheme
- **Background**: Slate-900 to Slate-800 gradient
- **Accent Colors**: Blue (#3b82f6) and Cyan (#06b6d4)
- **Highlights**: Pink (#ec4899) for donation buttons
- **Text**: Slate-100 to Slate-400 hierarchy

### Typography
- **Font**: Inter (system fonts fallback)
- **Headings**: Bold, gradient text
- **Body**: Regular weight, excellent readability

### Responsive Breakpoints
- **Mobile**: Default (< 768px) - Single column layout, hidden sidebar
- **Tablet**: md (768px - 1024px) - Flexible layout
- **Desktop**: lg (1024px+) - Full sidebar + content layout

## 🔧 Customization

### Change Brand Color
Replace `from-blue-500 to-cyan-400` with your preferred Tailwind colors:
```html
<!-- Search and replace in button/text classes -->
from-[yourcolor]-500 to-[yourcolor]-400
```

### Add Your Songs
Duplicate a song row in the "Featured Tracks" section and update:
- Album cover gradient colors
- Song title
- Creator name
- $AUX per stream price

### Update Analytics
Edit the sidebar values in the Analytics section with real data.

## 🔐 Web3 Integration (Next Steps)

To connect this to actual blockchain functionality:

1. **Wallet Connection**
   - Install: `npm install wagmi ethers`
   - Implement: Connect button logic

2. **Smart Contracts**
   - Deploy AUX token contract on Base
   - Create streaming payment contracts
   - Implement donation logic

3. **Backend**
   - Track streams with off-chain database
   - Trigger token transfers
   - Real-time analytics

## 📱 Mobile Optimization

- Touch-friendly button sizes (minimum 44x44px)
- Optimized spacing for small screens
- Collapsible sidebar on mobile
- Bottom player bar remains accessible
- Swipe-friendly controls (ready for enhancement)

## 🌐 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

MIT License - feel free to use this for your Web3 projects!

## 🤝 Contributing

Contributions welcome! Areas for enhancement:
- [ ] Add more songs to the dashboard
- [ ] Implement wallet integration
- [ ] Add audio visualization
- [ ] Create playlist functionality
- [ ] Build creator profile pages
- [ ] Add search and filter
- [ ] Implement real-time notifications

## 🌟 Future Features

- 🎤 Creator profiles with stats
- 🎵 Playlist creation and sharing
- 🔔 Real-time notifications
- 📊 Advanced analytics dashboard
- 🎨 Customizable themes
- 🌐 IPFS integration for music storage
- 🤖 AI-powered recommendations
- 💳 Fiat onramp integration

## 📞 Support

For issues, questions, or feature requests, please open an issue on GitHub.

---

**Built with ❤️ for the Web3 music community**

**Live on Base - The Decentralized Audio Hub** 🎵