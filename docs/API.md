# API Documentation

Complete API reference for Auxplay backend.

## Base URL
```
https://api.auxplay.io/v1
```

## Authentication

All endpoints require authentication token in header:
```
Authorization: Bearer {token}
```

## Response Format

### Success Response
```json
{
  "status": "success",
  "data": { },
  "message": "Operation successful"
}
```

### Error Response
```json
{
  "status": "error",
  "error": "error_code",
  "message": "Error description"
}
```

## Endpoints

### Authentication

#### Login
```
POST /auth/login
```
Request:
```json
{
  "wallet_address": "0x...",
  "signature": "0x..."
}
```

#### Logout
```
POST /auth/logout
```

### Songs

#### Get All Songs
```
GET /songs?page=1&limit=20&genre=electronic
```

Response:
```json
{
  "status": "success",
  "data": [
    {
      "id": "uuid",
      "title": "Electric Dreams",
      "creator_id": "uuid",
      "creator_name": "Luna Echo",
      "duration": 240,
      "price_per_stream": 0.1,
      "total_streams": 1234,
      "ipfs_hash": "QmXxxx..."
    }
  ]
}
```

#### Get Song Details
```
GET /songs/:id
```

#### Create Song (Creator)
```
POST /songs
```
Request:
```json
{
  "title": "Song Title",
  "description": "Description",
  "duration": 240,
  "price_per_stream": 0.1,
  "ipfs_hash": "QmXxxx..."
}
```

#### Update Song
```
PUT /songs/:id
```

#### Delete Song
```
DELETE /songs/:id
```

### Creators

#### Get Creator Profile
```
GET /creators/:id
```

Response:
```json
{
  "id": "uuid",
  "name": "Luna Echo",
  "bio": "Electronic music producer",
  "wallet_address": "0x...",
  "followers": 2400,
  "total_streams": 834000,
  "total_earnings": 12450.50,
  "profile_pic": "https://..."
}
```

#### Follow Creator
```
POST /creators/:id/follow
```

#### Unfollow Creator
```
DELETE /creators/:id/follow
```

#### Get Creator Stats
```
GET /creators/:id/stats
```

Response:
```json
{
  "total_streams": 834000,
  "total_earnings": 12450.50,
  "followers": 2400,
  "monthly_streams": 45000,
  "monthly_earnings": 1250.00
}
```

### Streams

#### Record Stream
```
POST /streams
```
Request:
```json
{
  "song_id": "uuid",
  "duration_listened": 240
}
```

#### Get Creator Earnings
```
GET /creators/:id/earnings?period=month
```

Response:
```json
{
  "total_earnings": 12450.50,
  "pending_earnings": 250.00,
  "withdrawn": 12200.50,
  "streams": [
    {
      "song_id": "uuid",
      "song_title": "Song",
      "streams": 1000,
      "earnings": 100.00
    }
  ]
}
```

### Playlists

#### Get Playlists
```
GET /playlists?type=official&limit=10
```

#### Create Playlist
```
POST /playlists
```
Request:
```json
{
  "title": "Vibe Check",
  "description": "Feel good tracks",
  "is_public": true
}
```

#### Add Song to Playlist
```
POST /playlists/:id/songs
```
Request:
```json
{
  "song_id": "uuid"
}
```

#### Remove Song from Playlist
```
DELETE /playlists/:id/songs/:song_id
```

### Tips/Donations

#### Send Tip
```
POST /tips
```
Request:
```json
{
  "creator_id": "uuid",
  "amount": 50,
  "currency": "AUX",
  "message": "Love your work!"
}
```

#### Get Received Tips
```
GET /creators/:id/tips
```

### Wallet

#### Get Balance
```
GET /wallet/balance
```

Response:
```json
{
  "balance": 12450.50,
  "pending": 250.00,
  "total": 12700.50
}
```

#### Withdraw
```
POST /wallet/withdraw
```
Request:
```json
{
  "amount": 1000,
  "address": "0x..."
}
```

## Error Codes

| Code | Message | Status |
|------|---------|--------|
| `AUTH_INVALID` | Invalid authentication | 401 |
| `AUTH_EXPIRED` | Token expired | 401 |
| `NOT_FOUND` | Resource not found | 404 |
| `INVALID_INPUT` | Invalid input data | 400 |
| `INSUFFICIENT_BALANCE` | Not enough balance | 402 |
| `RATE_LIMITED` | Too many requests | 429 |
| `SERVER_ERROR` | Internal server error | 500 |

## Rate Limiting

- 100 requests per minute per IP
- 1000 requests per hour per user
- Burst limit: 10 requests per second

## Pagination

```
?page=1&limit=20&sort=created_at&order=desc
```

## Filtering

```
?genre=electronic&creator_id=uuid&min_streams=1000
```

---

For more details, visit https://docs.auxplay.io
