# 🌤️ Atmos — Weather Dashboard

**Your calm weather companion.**

Atmos is a responsive weather dashboard built with HTML, CSS, and JavaScript. It provides an intuitive way to explore current weather conditions, hourly forecasts, seven-day predictions, and essential weather metrics.

Designed with clarity and simplicity in mind, Atmos combines a clean interface with dynamic weather data, global city search, and basic offline support.

---

## ✨ Features

### 🌡️ Current Weather
- Current temperature and weather conditions.
- Feels-like temperature.
- Daily high and low temperatures.
- Dynamic weather information for the selected city.

### 🔎 Global City Search
- Search for cities around the world.
- Fuzzy matching to handle spelling variations.
- Local city database powered by CSV data.
- Search functionality enhanced with Fuse.js.

### 🌅 Sunrise & Sunset
- Local sunrise and sunset times.
- Total daylight duration.

### 📊 Weather Metrics
- Relative humidity.
- Wind speed.
- UV index.
- Visibility.

### 🕒 Forecasts
- Hourly weather forecast.
- Seven-day weather forecast.
- Daily high and low temperatures.
- Precipitation probability.

### 📈 Temperature Trend
- Visual representation of temperature changes throughout the day.
- Temperature labels and time markers.

### 🌙 Temperature Units
- Switch between Celsius (°C) and Fahrenheit (°F).

### 🌦️ Weather Icons
- Weather conditions represented using Meteocons.

### 📱 Responsive Design
- Layout adapted for desktop, tablet, and mobile screens.

### 📡 Offline Support
- Service Worker caching for essential application resources.
- Cached application files can remain accessible offline.
- Live weather updates require an internet connection.

---

## 🛠️ Technologies & Libraries

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| CSS3 | Styling and responsive layouts |
| JavaScript (ES6+) | Application logic and dynamic updates |
| Open-Meteo API | Weather data and forecasts |
| Fuse.js | Fuzzy city search |
| Papa Parse | CSV data parsing |
| Meteocons | Weather icons |
| Service Workers | Application resource caching |

### External Resources

- [Open-Meteo](https://open-meteo.com/) — Weather forecast API.
- [Fuse.js](https://www.fusejs.io/) — Lightweight fuzzy-search library.
- [Papa Parse](https://www.papaparse.com/) — CSV parsing library.
- [Meteocons](https://meteocons.com/) — Weather icon set.

---

## 📁 Project Structure

```text
Atmos/
│
├── index.html
├── style.css
├── sw.js
│
├── JS/
│   ├── app.js
│   ├── api.js
│   └── data.js
│
└── data/
    └── world-cities.csv
```

### File Overview

- **index.html** — Main dashboard structure and page content.
- **style.css** — Visual design, layouts, and responsive styling.
- **app.js** — Main application interactions and interface updates.
- **api.js** — Weather API requests and data handling.
- **data.js** — Application data and supporting configuration.
- **sw.js** — Service Worker installation, caching, and offline handling.
- **world-cities.csv** — Persistent local city database used by the search functionality.

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser.
- A local development server.
- An active internet connection for live weather data and external resources.

### Run Locally

1. Clone or download this repository.
2. Open the project folder in your preferred code editor.
3. Start a local development server, such as the VS Code Live Server extension.
4. Open the provided local URL in your browser.

**Note:** Do not open `index.html` directly through the `file://` protocol. Service Workers require a secure context, such as `localhost` or HTTPS.

---

## 🌐 Weather Data & Attribution

Atmos uses the [Open-Meteo API](https://open-meteo.com/) to retrieve weather information and forecasts.

Open-Meteo API data is provided under the **Creative Commons Attribution 4.0 International License (CC BY 4.0)**.

Weather data attribution:

**Weather data by [Open-Meteo.com](https://open-meteo.com/).**

For additional information, refer to:
- [Open-Meteo Terms of Use](https://open-meteo.com/en/terms)
- [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/)

The free Open-Meteo API is intended for non-commercial use. Commercial projects should use an appropriate Open-Meteo subscription.

---

## 📡 Offline Functionality

Atmos includes a Service Worker that caches essential application resources.

After the application has been loaded successfully, cached resources can allow parts of the interface to remain accessible without an internet connection.

However:
- Live weather updates require an internet connection.
- External libraries and resources may not be available offline unless cached.
- Cached resources do not guarantee that weather information is up to date.

---

## 🔮 Future Improvements

Atmos is an evolving project. Future updates may introduce additional features, interface refinements, and improvements to the overall weather experience.

---

## 👨‍💻 Author

**WMJD**

Built as part of a personal web development journey.

---

*Designed for calm, everyday planning.*