<div align="center">
<img width="220" height="200" alt="logo" src="https://github.com/user-attachments/assets/79da8354-f89b-448e-8f6f-d3112aafdb75" />

<br/>

# IntambweFlow

### *Master Your Day. One Intambwe at a Time.* ⚡

[![Live Site](https://img.shields.io/badge/🌍_Live_Site-intambwe--flow--com.vercel.app-c8f04a?style=for-the-badge&labelColor=0a0a0f&color=c8f04a)](https://intambwe-flow-com.vercel.app/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/Built_with-React-61DAFB?style=for-the-badge&logo=react&logoColor=61DAFB&labelColor=0a0a0f)](https://reactjs.org)
[![Privacy](https://img.shields.io/badge/🔒_Privacy-Local_First-c8f04a?style=for-the-badge&labelColor=0a0a0f)](https://intambwe-flow-com.vercel.app/)
[![License](https://img.shields.io/badge/License-MIT-white?style=for-the-badge&labelColor=0a0a0f)](LICENSE)

<br/>

> **"The ultimate companion for high-achievers."**
> Track your tasks, manage your finances, and document your learning journey — all in one secure, private dashboard.

</div>

---

## 📖 About IntambweFlow

**IntambweFlow** (*Intambwe* = "Step" in Kinyarwanda 🇷🇼) is a local-first productivity platform built for people who want to grow — one intentional step at a time.

Unlike most tools that send your data to the cloud, IntambweFlow stores **everything directly in your browser**. No accounts, no servers, no tracking. Just you and your goals.

Built and maintained with passion from **Kigali, Rwanda** 🇷🇼.

---

## ✨ Features

### 🗂️ Smart Task Tracking
Organize your daily to-dos, set priorities, and watch your **productivity percentage** grow in real-time. Visual progress bars keep you motivated throughout the day.

### 💰 Expense Manager
Keep a clear eye on your cash flow. Log income and expenses, view your balance at a glance, and understand exactly where your money goes — without spreadsheets.

### 📚 Knowledge Log
Never lose a lesson again. Document daily insights, learnings, and ideas to build your own **personal knowledge base** that grows with you over time.

### 📊 Weekly Analytics
Detailed performance reports to help you identify patterns, track streaks, and continuously optimize your daily habits for maximum output.

---

## 🔒 Privacy First — 100% Local

```
Your data  →  Browser LocalStorage  →  Never leaves your device
```

- ✅ **No cloud storage** — everything stays on your device
- ✅ **No account required** — open and use instantly
- ✅ **Works offline** — available anytime, anywhere
- ✅ **Zero tracking** — no analytics on your personal data
- ✅ **Blazing fast** — no server round-trips, instant response

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React** | Frontend UI framework |
| **Vite** | Build tool & lightning-fast dev server |
| **React Router** | Client-side navigation |
| **CSS Modules / Tailwind** | Styling & responsive layout |
| **localStorage API** | Private, offline-first data storage |
| **Lucide React** | Clean, consistent icon set |
| **Vercel** | Hosting & automatic deployment |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/intambweflow.git

# 2. Navigate into the project
cd intambweflow

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

Open **http://localhost:5173** in your browser 🎉

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
intambweflow/
├── public/
│   └── logo.jpeg               # App logo
├── src/
│   ├── assets/                 # Images & static media
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── TaskCard.jsx
│   │   ├── ExpenseItem.jsx
│   │   ├── ProgressBar.jsx
│   │   └── Footer.jsx
│   ├── pages/                  # Page-level components
│   │   ├── LandingPage.jsx     # Marketing landing page
│   │   ├── Dashboard.jsx       # Main productivity dashboard
│   │   ├── Tasks.jsx           # Task management
│   │   ├── Finance.jsx         # Expense tracker
│   │   └── Knowledge.jsx       # Knowledge log
│   ├── styles/                 # CSS files
│   │   └── LandingPage.css
│   ├── App.jsx                 # Root component & routing
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🌍 Deployment

IntambweFlow is deployed on **[Vercel](https://vercel.com)** with automatic deployments triggered on every push to the `main` branch.

**Live URL:** [https://intambwe-flow-com.vercel.app/](https://intambwe-flow-com.vercel.app/)

### Deploy your own instance

1. Fork this repository on GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your forked repository
4. Vercel auto-detects Vite — click **Deploy**
5. Your instance is live in under 60 seconds ✅

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| **Primary** | `#c8f04a` | Accent, CTAs, highlights |
| **Background** | `#0a0a0f` | Main dark background |
| **Surface** | `#111118` | Cards, panels |
| **Text** | `#f0ede8` | Primary text |
| **Muted** | `rgba(240,237,232,0.5)` | Secondary text |
| **Font Display** | `Syne` | Headings & brand |
| **Font Body** | `DM Sans` | Body & UI text |

---

## 🤝 Contributing

Contributions are welcome! Here's how to get involved:

1. **Fork** this repository
2. Create your branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add: amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a **Pull Request** with a clear description

Please keep code clean, well-commented, and consistent with the existing style.

---

## 🗺️ Roadmap

- [ ] 🌙 Dark / Light theme toggle
- [ ] 📤 Export data to CSV / JSON
- [ ] 🔔 Daily reminder notifications
- [ ] 📱 Progressive Web App (PWA) support
- [ ] 🌐 Multi-language support (Kinyarwanda, French, English)
- [ ] 📈 Monthly analytics reports

---

## 📞 Contact

- 🌐 **Website:** [intambwe-flow-com.vercel.app](https://intambwe-flow-com.vercel.app/)
- 📍 **Location:** Kigali, Rwanda 🇷🇼

---

## 📄 License

This project is open source and available under the **[MIT License](LICENSE)**.

---

<div align="center">

Made with ❤️ from Kigali, Rwanda 🇷🇼

**IntambweFlow** — *One step at a time.* ⚡

<br/>

[![Stars](https://img.shields.io/github/stars/ByteFlow-Ltd/intambweflow?style=social)](https://github.com/ByteFlow-Ltd/intambweflow)
[![Forks](https://img.shields.io/github/forks/ByteFlow-Ltd/intambweflow?style=social)](https://github.com/ByteFlow-Ltd/intambweflow)

</div>
