# Architecture Overview

Auxplay system architecture and component breakdown.

## System Architecture

```
┌─────────────────────────────────────────────────┐
│           Frontend (Web3-ready)                  │
│  ┌───────────────────────────────────────────┐  │
│  │  HTML5 / Tailwind CSS / Vanilla JS        │  │
│  │  - Music Dashboard                        │  │
│  │  - Creator Profiles                       │  │
│  │  - Player Controls                        │  │
│  │  - Analytics Dashboard                    │  │
│  └───────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────┐
│      Web3 Layer (Wagmi + Ethers.js)             │
│  ┌───────────────────────────────────────────┐  │
│  │  Wallet Connection (MetaMask, etc.)       │  │
│  │  Smart Contract Interaction               │  │
│  │  Transaction Signing                      │  │
│  └───────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────┐
│      Backend API (Node.js/Express)              │
│  ┌───────────────────────────────────────────┐  │
│  │  Authentication & Authorization           │  │
│  │  Stream Recording                         │  │
│  │  Payment Processing                       │  │
│  │  User Management                          │  │
│  │  Analytics Engine                         │  │
│  └───────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────┐
│    Blockchain Layer (Base/Ethereum)             │
│  ┌───────────────────────────────────────────┐  │
│  │  $AUX Token Contract                      │  │
│  │  Streaming Payment Contract               │  │
│  │  Creator Registry Contract                │  │
│  │  Reward Distribution                      │  │
│  └───────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────┐
│         Data Layer (Database)                   │
│  ┌───────────────────────────────────────────┐  │
│  │  PostgreSQL / MongoDB                     │  │
│  │  User Profiles                            │  │
│  │  Song Metadata                            │  │
│  │  Stream Records                           │  │
│  │  Analytics Data                           │  │
│  └───────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
```

## Component Structure

### Frontend Components

```
App
├── Header
│   ├── Logo
│   ├── Search
│   └── WalletButton
├── Layout
│   ├── Sidebar
│   │   ├── Analytics
│   │   ├── Navigation
│   │   └── Settings
│   └── Main
│       ├── HeroSection
│       ├── FeaturedTracks
│       ├── TopCreators
│       ├── Playlists
│       └── HowItWorks
├── Modals
│   ├── SearchModal
│   ├── TipModal
│   └── ConnectWallet
├── Player
│   ├── Playback Controls
│   ├── Progress Bar
│   └── NowPlaying
└── Notifications
    └── Toast
```

## Data Flow

### User Plays a Song
```
1. User clicks Play
   ↓
2. Frontend records action
   ↓
3. API call: POST /api/streams
   ↓
4. Backend records stream
   ↓
5. Smart contract processes reward
   ↓
6. Creator balance updated
   ↓
7. Analytics updated
```

### User Sends Tip
```
1. User clicks Tip button
   ↓
2. TipModal opens
   ↓
3. User selects amount
   ↓
4. Wallet connects (if needed)
   ↓
5. Smart contract executes transfer
   ↓
6. Creator receives $AUX
   ↓
7. Transaction recorded
   ↓
8. Toast notification shown
```

## Smart Contracts

### AUXToken (ERC-20)
```solidity
contract AUXToken is ERC20 {
    // Standard token functions
    // Mint for rewards
    // Burn mechanism
}
```

### StreamingPayment
```solidity
contract StreamingPayment {
    // Record streams
    // Calculate rewards
    // Distribute tokens
    // Handle disputes
}
```

### CreatorRegistry
```solidity
contract CreatorRegistry {
    // Register creators
    // Update profiles
    // Manage royalties
    // Track statistics
}
```

## Database Schema

### Users Table
```sql
users {
    id UUID PRIMARY KEY
    wallet_address VARCHAR(42) UNIQUE
    username VARCHAR(255) UNIQUE
    email VARCHAR(255)
    profile_pic VARCHAR(255)
    bio TEXT
    created_at TIMESTAMP
    updated_at TIMESTAMP
}
```

### Songs Table
```sql
songs {
    id UUID PRIMARY KEY
    creator_id UUID FOREIGN KEY
    title VARCHAR(255)
    description TEXT
    ipfs_hash VARCHAR(255)
    duration INT
    price_per_stream DECIMAL
    total_streams INT
    created_at TIMESTAMP
}
```

### Streams Table
```sql
streams {
    id UUID PRIMARY KEY
    user_id UUID FOREIGN KEY
    song_id UUID FOREIGN KEY
    creator_id UUID FOREIGN KEY
    amount_paid DECIMAL
    timestamp TIMESTAMP
}
```

## API Endpoints

### Authentication
- `POST /auth/login`
- `POST /auth/logout`
- `POST /auth/refresh`
- `POST /auth/verify`

### Users
- `GET /users/:id`
- `PUT /users/:id`
- `POST /users/:id/follow`

### Songs
- `GET /songs`
- `GET /songs/:id`
- `POST /songs` (Creator only)
- `PUT /songs/:id`
- `DELETE /songs/:id`

### Streams
- `POST /streams`
- `GET /creators/:id/streams`
- `GET /creators/:id/earnings`

### Playlists
- `GET /playlists`
- `POST /playlists`
- `POST /playlists/:id/songs`

## Performance Optimization

### Frontend
- Lazy loading for images
- Code splitting for modals
- Service workers for offline
- Caching strategies

### Backend
- Database indexing
- Query optimization
- Caching layer (Redis)
- CDN for static assets

### Blockchain
- Batch transactions
- Gas optimization
- L2 scaling (Base)

## Security Measures

- ✅ JWT authentication
- ✅ Rate limiting
- ✅ Input validation
- ✅ SQL injection protection
- ✅ CORS configuration
- ✅ Wallet signature verification

## Scalability

- Microservices architecture (future)
- Database sharding (future)
- Load balancing
- CDN distribution
- Message queue (Kafka)

---

For implementation details, check individual component files.
