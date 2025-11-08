# 🎌 Anime Search App

A mini-project built to demonstrate React proficiency. This application allows users to search for anime titles and view detailed information using the [Jikan API](https://docs.api.jikan.moe/).

---

## 🚀 Overview

This project is a **two-page React application**:

- **Page 1:** Search page displaying anime results  
- **Page 2:** Detail page for a selected anime  

All data is fetched from the free **Jikan API**, which requires no authentication.

---

## 🧠 Technical Requirements

### 🧩 Core Stack

- **React 18+**
- **TypeScript**
- **React Hooks** (no class components)
- **react-router-dom** for navigation
- **Redux** for state management
- **UI library:** (Your chosen UI library)
- **Single Page App (SPA)** — no Next.js

---

## ⚙️ Functionality

- **Server-side pagination** on the search page  
- **Instant search** with debouncing  
- **Redux** for centralized state management  

### 🔍 Instant Search Details

The search bar updates results in real-time without pressing Enter or a button:

- Debounce API calls at **250ms** intervals  
- Cancel in-flight requests if typing continues  
- Keeps the UI responsive and prevents API spam  

---

## 🧑‍💻 Setup & Installation

> ⚠️ **You must use `npm` only.** Other package managers (yarn, pnpm, etc.) are not allowed.

Clone the repository and run:

```bash
npm install
npm run dev
