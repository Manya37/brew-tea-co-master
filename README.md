# Brew Tea Co. — Next.js Website

A Next.js conversion of the Brew Tea Co. HTML designs, built with **JavaScript** and **Tailwind CSS**.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, compounds, supply & waitlist |
| `/about` | About Us — brand story, industries & origin |
| `/wholesale` | Supply — partnerships, guarantees & inquiry |
| `/contact` | Contact — general contact form |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **Hanken Grotesk** (Google Fonts)
- **Material Symbols** icons

## Project Structure

```
brew-tea-co/
├── app/
│   ├── page.js          # Home
│   ├── about/page.js
│   ├── wholesale/page.js
│   ├── contact/page.js
│   ├── layout.js
│   └── globals.css      # Design tokens & Tailwind theme
├── components/
│   ├── Navbar.js
│   └── Footer.js
└── next.config.mjs      # Remote image domains
```
