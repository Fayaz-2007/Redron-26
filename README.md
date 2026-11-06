<div align="center">

![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=REDRON&fontSize=60&fontColor=fff)

![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=DC2626&center=true&vCenter=true&width=600&lines=Event+landing+page+%E2%80%94+hero%2C+schedule%2C+team;Built+with+React%2C+Vite+%26+shadcn%2Fui)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Made By](https://img.shields.io/badge/Made%20by-Fayaz--2007-blueviolet?style=for-the-badge)

</div>

## 📌 Overview

REDRON is a single-page event website: a hero section with a countdown timer, an about section, an events grid with a detail modal, a schedule, a team section and a contact/footer area, all wrapped in a custom web-themed cursor effect. It's built as a React + TypeScript + Vite app on top of shadcn/ui, and is deployed live on Vercel.

## ✨ Features

- 🕸️ Custom animated cursor effect (`WebCursorEffect`) for a distinctive feel
- ⏱️ Live countdown timer to the event date
- 🗓️ Events grid with cards that open a detail modal (`EventCard` + `EventModal`)
- 📋 Schedule section laying out the event timeline
- 👥 Team section with team member cards
- 📬 Contact section and footer
- 🎨 Full shadcn/ui + Radix component library for consistent UI primitives
- ✅ Unit tests (Vitest) and end-to-end tests (Playwright)

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | ![React](https://img.shields.io/badge/React%2018-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) |
| UI | ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-black?style=flat-square) ![Radix UI](https://img.shields.io/badge/Radix%20UI-161618?style=flat-square&logo=radixui&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) |
| Forms / Data | React Hook Form · Zod · TanStack Query |
| Animation | ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=flat-square&logo=framer&logoColor=white) |
| Testing | ![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white) ![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white) |
| Deployment | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) |

## 🏗️ Architecture

```mermaid
flowchart TD
    APP[App.tsx] --> IDX[pages/Index.tsx]
    IDX --> NAV[Navbar]
    IDX --> HERO[HeroSection + CountdownTimer]
    IDX --> ABOUT[AboutSection]
    IDX --> EVENTS[EventsSection]
    EVENTS --> CARD[EventCard]
    CARD --> MODAL[EventModal]
    IDX --> SCHED[ScheduleSection]
    IDX --> TEAM[TeamSection]
    TEAM --> TCARD[TeamCard]
    IDX --> CONTACT[ContactSection]
    IDX --> FOOT[Footer]
    IDX --> CURSOR[WebCursorEffect]
```

## 📂 Project Structure

```
Redron-26/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/                 # shadcn/ui primitives
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── EventsSection.tsx
│   │   ├── EventCard.tsx
│   │   ├── EventModal.tsx
│   │   ├── ScheduleSection.tsx
│   │   ├── TeamSection.tsx
│   │   ├── TeamCard.tsx
│   │   ├── ContactSection.tsx
│   │   ├── CountdownTimer.tsx
│   │   ├── Navbar.tsx / NavLink.tsx
│   │   ├── Footer.tsx
│   │   └── WebCursorEffect.tsx
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── test/
│   └── main.tsx
├── playwright.config.ts
├── vitest.config.ts
└── vite.config.ts
```

## ⚙️ Installation

```bash
git clone https://github.com/Fayaz-2007/Redron-26.git
cd Redron-26

npm install
npm run dev
```

No `.env` file is required for local development.

## 🚀 Usage

```bash
npm run dev       # start the Vite dev server
npm run build      # production build
npm run test       # run Vitest unit tests
npx playwright test # run Playwright end-to-end tests
```

Live site: **https://web-slinger-events.vercel.app**

`[Screenshot: hero section with countdown]`

`[Screenshot: events grid + modal]`

## 🔮 Future Improvements

- Hook the events grid up to a real backend/CMS instead of static data
- Add a registration/RSVP flow with form validation
- Expand Playwright coverage to the events and schedule flows
- Add dark/light theme toggle (next-themes is already a dependency)
- SEO metadata and Open Graph tags for social sharing

## 👨‍💻 Author

**Fayaz Ahmed**
GitHub: [@Fayaz-2007](https://github.com/Fayaz-2007)
LinkedIn: [fayaz-ahmed-59287631a](https://linkedin.com/in/fayaz-ahmed-59287631a)

<div align="center">

![footer](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=150&section=footer)

</div>
