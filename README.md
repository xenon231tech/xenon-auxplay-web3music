# Auxplay - The Decentralized Audio Hub on Base

![Auxplay](https://img.shields.io/badge/Web3-Music%20Streaming-blue?style=for-the-badge&logo=ethereum)
![Base](https://img.shields.io/badge/Chain-Base-cyan?style=for-the-badge&logo=coinbase)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

> A modern, beautiful Web3 music streaming and creator donation platform built on Base blockchain.

## 🎵 Features

### Core Functionality
- **💰 Earn $AUX Tokens**: Creators earn tokens per stream instantly
- **🎁 Direct Donations**: Listeners can tip creators with custom amounts
- **🔍 Search Songs**: Quick search modal to find songs and artists
- **🎸 Top Creators**: Discover and follow trending artists
- **📋 Trending Playlists**: Curated collections with one-click add to queue
- **💡 How It Works**: Educational section explaining the Auxplay ecosystem

### Design & UX
- **🎨 Beautiful Dark UI**: Modern Spotify-inspired dark mode interface
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop
- **⚡ Lightning Fast**: Built with Tailwind CSS and vanilla JavaScript
- **🌟 Smooth Animations**: Hover effects, toast notifications, modals
- **📊 Real-time Analytics**: Track earnings, streams, and wallet balance

### Music Player
- **🎛️ Interactive Player**: Beautiful bottom player bar with full controls
- **⏯️ Playback Controls**: Play/Pause, Skip, Shuffle, Repeat
- **📈 Progress Bar**: Visual progress with time display
- **📝 Now Playing**: Real-time song and artist information

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
   ```

3. **View on mobile (recommended)**
   ```bash
   # Start a local server
   python -m http.server 8000
   
   # Visit on your phone
   http://localhost:8000
   ```

## 📋 Project Structure

```
auxplay/
├── index.html       # Complete application (2500+ lines)
├── README.md        # This file
├── package.json     # Project metadata
└── .gitignore       # Git ignore rules
```

## ✨ Sections & Features

### 1. Header
- Auxplay branding with animated gradient logo
- Search button with modal
- "Connect Wallet" button for Web3 integration
- Sticky navigation

### 2. Hero Section
- Compelling tagline: "Stream. Earn. Donate."
- Dual CTA buttons (Start Streaming, Learn More)
- Core value proposition explanation

### 3. Sidebar Analytics (Desktop)
- Total $AUX Earned with trend indicator
- Total Streams count
- Wallet Balance with withdrawal option
- Responsive: Hidden on mobile, visible on desktop

### 4. Featured Tracks Dashboard
- 5 curated songs with gradient album covers
- Song title and creator name
- $AUX price per stream
- Interactive Play & Tip buttons
- Hover animations and smooth transitions
- Fully responsive grid layout

### 5. Top Creators Section
- 3 featured creators with profile cards
- Follower and stream counts
- Follow buttons with toast notifications
- Grid layout (1-3 columns based on screen size)

### 6. Trending Playlists
- 4 themed playlists with gradient backgrounds
- Song count and genre information
- One-click "Add to Queue" buttons
- Hover animations and shadows

### 7. How It Works Section
- 3-step educational guide
- Listen & Stream explanation
- Support & Donate description
- Earn & Withdraw details
- Icon-based visual hierarchy

### 8. Search Modal
- Full-screen search interface (mobile)
- Real-time search results preview
- Quick song/artist selection
- Touch-optimized for phones

### 9. Tip Modal
- Custom tip amount selection (10, 25, 50, 100 $AUX)
- Artist name display
- Web3-ready donation interface
- Smooth animations

### 10. Interactive Player Bar
- Now playing song information
- Progress bar with time display
- Full playback controls
- Mobile-optimized
- Appears when a song is played

### 11. Toast Notifications
- Success messages for actions
- Auto-dismiss after 3 seconds
- Smooth slide-in animation
- Mobile-friendly positioning

## 🎨 Design Details

### Color Scheme
- **Background**: Slate-900 to Slate-800 gradient
- **Primary Accent**: Blue (#3b82f6) and Cyan (#06b6d4)
- **Secondary**: Pink (#ec4899) for donations
- **Text**: Slate-100 to Slate-400 hierarchy

### Typography
- **Font**: Inter (system fonts fallback)
- **Headings**: Bold, gradient text
- **Body**: Regular weight, excellent readability

### Responsive Breakpoints
- **Mobile**: < 768px (Default single column, hidden sidebar)
- **Tablet**: 768px - 1024px (Flexible layout)
- **Desktop**: 1024px+ (Full sidebar + content)

## 🛠️ Customization

### Add More Songs
```html
<!-- Duplicate a song-row div and update: -->
<h4>Your Song Title</h4>
<p>by Artist Name</p>
<span>0.XX $AUX</span>
```

### Change Brand Colors
```html
<!-- Replace gradient classes globally -->
from-blue-500 to-cyan-400  →  from-[yourcolor]-500 to-[yourcolor]-400
```

### Update Analytics
```html
<!-- Edit sidebar values -->
<p class="text-3xl font-bold gradient-text">YOUR_VALUE</p>
```

## 🔗 Web3 Integration (Next Steps)

To add real blockchain functionality:

1. **Wallet Connection**
   ```bash
   npm install wagmi ethers viem
   ```
   - Implement Connect Wallet button
   - Add wallet connection logic

2. **Smart Contracts**
   - Deploy $AUX token on Base
   - Create streaming payment contracts
   - Implement donation logic

3. **Backend**
   - Track streams with database
   - Trigger token transfers
   - Real-time analytics updates

## 📱 Mobile Optimization

✅ Touch-friendly button sizes (44x44px minimum)
✅ Optimized spacing for small screens
✅ Modal sheets slide from bottom on mobile
✅ Collapsible sidebar navigation
✅ Bottom player bar always accessible
✅ Text sizes scale responsively
✅ Images and gradients optimized for mobile

## 🌐 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

MIT License - feel free to use for your Web3 projects!

## 🤝 Contributing

Contributions welcome! Areas for enhancement:
- [ ] User authentication & profiles
- [ ] Advanced playlist creation
- [ ] Audio visualization
- [ ] Dark/Light theme toggle
- [ ] Creator statistics dashboard
- [ ] Payment gateway integration
- [ ] Real-time notifications
- [ ] IPFS integration for music storage
- [ ] AI-powered recommendations

## 🌟 Future Roadmap

- 🎤 Creator Dashboard with detailed analytics
- 🎵 Full audio playback with visualization
- 🎨 Multiple theme options
- 🌍 Multi-language support
- 📊 Advanced reporting & insights
- 🔐 Advanced wallet security
- 🎸 Collaboration features for artists
- 🎁 NFT collectibles & rewards

## 📞 Support

For issues, questions, or feature requests, please open an issue on GitHub.

---

**Built with ❤️ for the Web3 music community**

**Live on Base - The Decentralized Audio Hub** 🎵