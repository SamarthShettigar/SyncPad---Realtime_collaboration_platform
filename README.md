# SyncPad

SyncPad is a real-time collaborative workspace designed for developers and teams to write code and notes together instantaneously. Powered by WebSockets (Socket.io), React, Node.js, and MongoDB, it features live cursor tracking, multi-user document syncing, an integrated Monaco code editor, and AI assistance.

---

## Getting Started

### 1. Prerequisites
- **Node.js** (v18+ recommended)
- **MongoDB** (local instance or MongoDB Atlas URI)

---

### 2. Installation

Clone the repository and install dependencies for both the frontend and backend:

```bash
# Clone repository
git clone https://github.com/SamarthShettigar/SyncPad---Realtime_collaboration_platform.git
cd SyncPad

# Install frontend dependencies (in root)
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

---

### 3. Environment Setup

Create a `.env` file in the root directory (or in `server/.env`):

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

# Optional (for AI Copilot & Summarizer features)
GEMINI_API_KEY=your_gemini_api_key
```

---

### 4. Running the Application

Open two terminal windows:

**Terminal 1 — Backend:**
```bash
cd server
npm run dev
```
*Backend runs on `http://localhost:5000`*

**Terminal 2 — Frontend:**
```bash
npm run dev
```
*Frontend runs on `http://localhost:5173`*
