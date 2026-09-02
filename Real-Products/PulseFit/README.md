# PulseFit — Elevate Your Fitness

PulseFit is a high-performance hybrid platform combining a marketing website and interactive fitness app for the MENA market.

Built with an Arabic-first, RTL experience, it uses Tajawal typography and a Cyber-Fitness aesthetic featuring dark glassmorphism and neon accents.

---

## Project Identity

PulseFit is a localized, performance-focused platform with native RTL support and premium Arabic readability.

---

## Market Reach

- **50,000+** active users
- **12,500+** monthly subscriptions
- **96%** satisfaction rate
- **675+** certified trainers

---

## Core Features

**Interactive Dashboard**

Tracks:

- Calories
- Completed sessions
- Activity streaks

**Workout Planning**

State-aware routines with:

- Completed
- Current
- Upcoming

Includes set and rep tracking.

**Performance Analytics**

Weekly charts monitor:

- Strength
- Fitness
- Endurance

**Pricing**

| Plan | Price | Features |
| --- | --- | --- |
| Free | Free | Essential routines |
| Pro | 3,500 د.ع / Month| Advanced tracking and plans |
| Elite | 13,000 د.ع / Quarter| VIP support and analytics |

**3D Visualization**

Uses CSS 3D transformations for high-performance statistics cards without heavy JavaScript libraries.

---

## Technical Specification

**Category**| **Technology**
Architecture| Build-less, zero-dependency Vanilla HTML/CSS
Markup| Semantic HTML5 with "lang="ar"" and "dir="rtl""
Layout| CSS Grid and Flexbox
Styling| CSS variables and "backdrop-filter"
Typography| Tajawal
Icons| Font Awesome 7.3.1
Motion| "translate3d" and GPU-accelerated transforms

---

## Multi-Page Overview

**1. Landing Page**

Features a responsive hero heading and a 3D status card with a flicker-free 180° flip using:

```css
clamp(2.5rem, 5vw, 4.5rem);
backface-visibility: hidden;
```

**2. Product Website**

Highlights:

- Weightlifting
- Calisthenics
- Nutrition Control

Service cards use "rotateY" and "rotateX" hover effects.

**3. Secure Login**

A responsive dual-pane layout combining branding and form functionality, with:

- Responsive typography
- Neon focus states
- Google integration
- Apple integration

**4. Interactive Dashboard**

Includes:

- Glassmorphic statistics cards
- Weekly activity charts
- Neon gradients and shadows
- Personal record tracking

---

## Engineering

AI supported rapid prototyping, followed by manual refinement for:

- WCAG compliance
- Semantic accuracy
- Rendering performance

The mobile-first RTL layout uses breakpoints at:

- "1150px"
- "800px"
- "600px"
- "380px"

On mobile, the sidebar becomes bottom navigation.

Animations use "translate3d" to reduce main-thread workload and maintain smooth performance.

---

## Design System

```css
:root {
  --pg-primary: #131313;
  --pg-secondary: #080808;
  --accent-color: #88ff00;
  --accent-hover: #63b900;
  --text-main: #ffffff;
  --text-muted: #aaaaaa;
}
```

Neon effects use layered shadows:

```css
box-shadow:
  0 0 10px var(--accent-color),
  0 0 20px rgba(0, 255, 100, 0.15);
```

---

## Installation

```bash
git clone https://github.com/WMJD10/My-Programming-Journey-Frontend.git
```

Open "index.html" in a modern browser.

---

**Dependencies**

No installation, build steps, framework, or runtime dependencies required.

---

**Project Status**

Phase 1 — Completed ✅

- Design system
- RTL architecture
- Responsive layouts
- Interactive components
- 3D effects
- Dashboard UI

Phase 2 — Upcoming ⏳

- Backend integration
- Data persistence
- JWT authentication
- Trainer chat

---

# PulseFit

**2026 © Architected for Uncompromising Performance**

Developed by **WMJD**.