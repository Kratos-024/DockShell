"# Dockshell"

# 🚀 DockShell

DockShell is a full-stack project that combines a **React + Vite + Tailwind frontend** with a **Node.js (TypeScript) backend**.
It provides authentication, secure routes, CTF-like features, and AI chat integration.

---

## 📂 Project Structure

```
DockShell/
├── DockShell-Backend/    # Backend (Node.js + TypeScript)
│   ├── src/
│   │   ├── controllers/  # Request handlers
│   │   ├── db/           # Database setup
│   │   ├── middlewares/  # Auth & validation middleware
│   │   ├── routes/       # API routes
│   │   ├── types/        # TypeScript types
│   │   ├── utility/      # Helpers
│   │   ├── app.ts        # App entry
│   │   └── index.ts      # Server bootstrap
│   ├── package.json
│   └── tsconfig.json
│
├── DockShell-Frontend/   # Frontend (React + Vite + Tailwind)
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── assets/       # Images, types
│   │   ├── components/   # UI components
│   │   ├── hooks/        # Custom hooks
│   │   ├── pages/        # Pages (Home, Labs, CTF, etc.)
│   │   ├── security/     # Route guards
│   │   ├── services/     # API calls
│   │   ├── App.tsx       # Main app
│   │   └── main.tsx      # Entry
│   ├── index.html
│   └── package.json
```

---

## 🛠️ Tech Stack

**Frontend:** React, Vite, TailwindCSS, Toastify, React Icons
**Backend:** Node.js, TypeScript, Express
**Database:** (add here, e.g., MongoDB / PostgreSQL if you’re using one)
**Deployment:**

- Frontend → Netlify
- Backend → EC2

---

## ⚙️ Installation

### 1️⃣ Clone Repo

```bash
git clone https://github.com/Kratos-024/Dockshell.git
cd dockshell
```

### 2️⃣ Backend Setup

```bash
cd DockShell-Backend
bun install   # or npm install
bun run dev   # or npm run dev
```

Backend runs at: `http://localhost:5000`

### 3️⃣ Frontend Setup

```bash
cd ../DockShell-Frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## 📦 Deployment

- **Frontend (Netlify):**
  Push your `DockShell-Frontend` to GitHub → connect to Netlify → it auto-deploys.

- **Backend (EC2/Docker):**
  Run `bun run build` or `npm run build`, then deploy the `dist/` folder on your server.

---

## 📜 License

MIT License – free to use and modify.
