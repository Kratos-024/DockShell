# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# DockShell Frontend

🚀 The frontend for **DockShell**, built with React + Vite.
This handles the user interface and communicates with the backend API.

---

## 🛠️ Tech Stack

* **Framework:** React
* **Styling:** Tailwind CSS, React-Toastify, React-Icons
* **Animations:** Framer Motion
* **Charts:** Chart.js + react-chartjs-2
* **Icons:** Lucide React, React-Icons
* **Terminal:** Xterm.js + addons
* **Build Tool:** Vite
* **Language:** TypeScript

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Kratos-024/Dockshell.git

# Go into the project folder
cd DockShell-Frontend

# Install dependencies
npm install   # or yarn / bun install

# Start development server
npm run dev
```

The app will be available at:
👉 `http://localhost:5173`

---

## 📦 Dependencies

### Core

* **React 19** – UI framework
* **React Router DOM** – Routing
* **Tailwind CSS** – Styling
* **React-Toastify** – Notifications
* **Lucide-React & React-Icons** – Icons
* **Framer Motion** – Animations
* **Chart.js + react-chartjs-2** – Data visualization
* **Xterm.js + addons** – Terminal support

### Dev Tools

* **TypeScript** – Type safety
* **Vite** – Fast build tool
* **ESLint + Prettier (with Tailwind plugin)** – Linting & formatting

---

## 📂 Project Structure

```
src/
├── assets/            # Static files, types, and icons
│   ├── react.svg
│   └── types.ts
│
├── components/        # Reusable UI components
│   ├── AiChat.tsx
│   ├── Chart.tsx
│   ├── CreateAccount.tsx
│   ├── CtfBody.tsx
│   ├── CtfHero.tsx
│   ├── CtfMenu.tsx
│   ├── CtfProgress.tsx
│   ├── CtfSection.tsx
│   ├── FeatureSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── LabSection.tsx
│   ├── NavBar.tsx
│   ├── StatsSection.tsx
│   ├── TerminalType.tsx
│   ├── UserProfile.tsx
│   └── XtremTerminal.tsx
│
├── hooks/             # Custom hooks
│   └── useAuth.ts
│
├── pages/             # Page routes
│   ├── AichatPage.tsx
│   ├── CtfPage.tsx
│   ├── HomePage.tsx
│   ├── LabsPage.tsx
│   └── UserProfilePage.tsx
│
├── security/          # Route protection
│   ├── PrivateRoutes.tsx
│   └── ProtectedRoutes.tsx
│
├── services/          # API & services
│   ├── ctf.service.ts
│   └── user.service.ts
│
├── App.tsx            # Root component
├── App.css            # Global styles
└── main.tsx           # Entry point
```

---

## 🚀 Deployment (Netlify)

1. Run a production build:

   ```bash
   npm run build
   ```

   This creates a `dist/` folder.

2. Go to [Netlify](https://dockshell.netlify.app/), create a new project, and connect your GitHub repo.

3. Configure build settings in Netlify:

   * **Build Command:** `npm run build`
   * **Publish Directory:** `dist`

4. Deploy 🚀. Netlify will provide a live URL.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.

---

## 📜 License

MIT License – free to use and modify.

