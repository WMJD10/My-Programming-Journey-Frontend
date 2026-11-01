const celsiusButton = document.querySelector("#C-unit");
const fahrenheitButton = document.querySelector("#F-unit");
const feelsLikeElement = document.querySelector(".feels-like");
const highTemperatureElement = document.querySelector(
   ".temperature-range span:first-child"
);
const lowTemperatureElement = document.querySelector(
   ".temperature-range span:last-child"
);
const hourlyCards = document.querySelectorAll(".hourly-card");
const hourlyTimeElements = document.querySelectorAll(".hourly-time");
const hourlyIconElements = document.querySelectorAll(".hourly-icon");
const hourlyRainElements = document.querySelectorAll(".hourly-rain");
const weeklyRows = document.querySelectorAll(".weekly-row");
const weeklyDayElements = document.querySelectorAll(".weekly-day");
const weeklyIconElements = document.querySelectorAll(".weekly-icon");
const weeklyConditionElements = document.querySelectorAll(".weekly-condition");
const chartTemperatureLabels = document.querySelectorAll(
   ".chart-temperatures text"
);
const chartTimeLabels = document.querySelectorAll(
   ".chart-times text"
);
const chartCurrentValue = document.querySelector(".chart-value");
const chartRange = document.querySelectorAll(".chart-range span");
const chartLine = document.querySelector(".chart-line");
const chartArea = document.querySelector(".chart-area");
const chartPoints = document.querySelectorAll(".chart-points circle");
const cityNameElement = document.querySelector(".city-name");
const weatherConditionElement = document.querySelector(".weather-condition");
const weatherEmojiElement = document.querySelector(".weather-emoji");
const weatherDataElement = document.querySelector(".weather-date");
const weeklyTemperatureBars = document.querySelectorAll(
   ".temperature-bar span"
);
const humidityElement = document.querySelector(
   ".metric-card:nth-child(1) .metric-value"
);
const windSpeedElement = document.querySelector(
   ".metric-card:nth-child(2) .metric-value"
);
const uvIndexElement = document.querySelector(
   ".metric-card:nth-child(3) .metric-value"
);
const visibilityElement = document.querySelector(
   ".metric-card:nth-child(4) .metric-value"
);
const metricDescriptions = document.querySelectorAll(".metric-description");
const sunriseElement = document.querySelector(".sunrise-time");
const sunsetElement = document.querySelector(".sunset-time");
const daylightElement = document.querySelector(".daylight-time")


async function loadCitiesDatabase() {
   try {
      const response = await fetch("./data/world-cities.csv");

      if (!response.ok) {
         throw new Error(`HTTP error: ${response.status}`);
      }

      const csvText = await response.text();

      const parsedData = Papa.parse(csvText, {
         header: true,
         dynamicTyping: true,
         skipEmptyLines: true
      });

      if (parsedData.errors.length > 0) {
         console.warn("CSV parsing warnings:", parsedData.errors);
      }

      return parsedData.data;

   } catch (error) {
      console.error("Failed to load cities database:", error);
      return [];
   }
}

const citiesDatabasePromise = loadCitiesDatabase();

const citiesSearchPromise = citiesDatabasePromise.then((cities) => {
   return new Fuse(cities, {
      keys: [
         { name: "name", weight: 1 }
      ],
      threshold: 0.25,
      ignoreLocation: true,
      includeScore: true
   });
});

const countriesSearchPromise = citiesDatabasePromise.then((cities) => {
   const countryNames = new Intl.DisplayNames(["en"], {
      type: "region"
   });

   const countriesMap = new Map();

   cities.forEach((city) => {
      if (!countriesMap.has(city.country_code)) {
         countriesMap.set(city.country_code, {
            code: city.country_code,
            name: countryNames.of(city.country_code)
         });
      }
   });

   const countries = [...countriesMap.values()];

   return new Fuse(countries, {
      keys: [
         { name: "name", weight: 1 }
      ],
      threshold: 0.3,
      ignoreLocation: true,
      includeScore: true
   });
});

const countryAliases = new Map([
   ["usa", "US"],
   ["us", "US"],
   ["america", "US"],
   ["united states of america", "US"],

   ["uk", "GB"],
   ["britain", "GB"],
   ["great britain", "GB"],

   ["uae", "AE"],
   ["ksa", "SA"],
   ["drc", "CD"],
   ["car", "CF"]
]);

function getLevenshteinDistance(firstWord, secondWord) {
   const first = firstWord.toLowerCase().trim();
   const second = secondWord.toLowerCase().trim();

   if (first === second) return 0;

   if (first.length === 0) return second.length;
   if (second.length === 0) return first.length;

   let previousRow = Array.from(
      { length: second.length + 1 },
      (_, index) => index
   );

   for (let i = 1; i <= first.length; i++) {
      const currentRow = [i];

      for (let j = 1; j <= second.length; j++) {
         const insertion = currentRow[j - 1] + 1;
         const deletion = previousRow[j] + 1;

         const substitution =
            previousRow[j - 1] +
            (first[i - 1] === second[j - 1] ? 0 : 1);

         currentRow[j] = Math.min(
            insertion,
            deletion,
            substitution
         );
      }

      previousRow = currentRow;
   }

   return previousRow[second.length];
}

let currentUnit = "C";

function convertTemperature(celsius, unit) {
   if (unit === "C") {
      return celsius;
   }

  return Math.round((celsius * 9 / 5) + 32);
}

function setUnit(unit) {
   currentUnit = unit;

   celsiusButton.classList.toggle("active", unit === "C");
   fahrenheitButton.classList.toggle("active", unit === "F");

   updateCurrentTemperature();
   updateWeatherMetrics();
   updateHourlyTemperatures();
   updateWeeklyTemperatures();
   updateTrendSummary();
   updateTrendLabels();
   updateTrendPoints();
   updateTrendLine();
   updateTrendArea();
   updateWeeklyTemperatureBars();
   updateSunInfo();
}

const currentTemperatureElement = document.querySelector(
   ".temperature"
   );

function updateCurrentTemperature() {
   cityNameElement.textContent =
   `${weatherData.city}, ${weatherData.country}`;

   weatherConditionElement.textContent =
      weatherData.condition;

   weatherEmojiElement.src =
      `https://cdn.meteocons.com/3.0.0-next.10/svg/fill/${weatherData.current.icon}.svg`;

   weatherEmojiElement.alt = weatherData.condition;

   const current = weatherData.current;

   const temperatures = {
      current: convertTemperature(current.temperature, currentUnit),
      feelsLike: convertTemperature(current.feelsLike, currentUnit),
      high: convertTemperature(current.high, currentUnit),
      low: convertTemperature(current.low, currentUnit)
   };

   currentTemperatureElement.firstChild.textContent =
      temperatures.current;

   feelsLikeElement.textContent =
      `Feels like ${temperatures.feelsLike}°`;

   highTemperatureElement.textContent =
      ` H: ${temperatures.high}°`;

   lowTemperatureElement.textContent =
      `L: ${temperatures.low}°`;
}

function updateWeatherDate() {
   const now = new Date();

   weatherDataElement.textContent =
      now.toLocaleDateString("en-US", {
         weekday: "long",
         month: "long",
         day: "numeric",
         timeZone: weatherData.timezone,
      });
}

function updateHourlyTemperatures() {
   hourlyCards.forEach((card, index) => {
      const hour = weatherData.hourly[index];

      if (!hour) return;

      hourlyTimeElements[index].textContent = hour.time;
      hourlyIconElements[index].src =
         `https://cdn.meteocons.com/3.0.0-next.10/svg/fill/${hour.icon}.svg`;

      hourlyIconElements[index].alt = hour.condition;
      hourlyRainElements[index].textContent = `${hour.rainChance}% rain`;

      const temperatureElement = card.querySelector(".hourly-temp");

      temperatureElement.textContent =
         `${convertTemperature(hour.temperature, currentUnit)}°`;
   });
}

function updateWeeklyTemperatures() {
   weeklyRows.forEach((row, index) => {
      const day = weatherData.weekly[index];

      if (!day) return;

      weeklyDayElements[index].textContent = day.day;
      weeklyIconElements[index].src =
         `https://cdn.meteocons.com/3.0.0-next.10/svg/fill/${day.icon}.svg`;

      weeklyIconElements[index].alt = day.condition;
      weeklyConditionElements[index].textContent = day.condition;

      const lowTemperature = row.querySelector(".weekly-low");
      const highTemperature = row.querySelector(".weekly-high");

      lowTemperature.textContent =
         `${convertTemperature(day.low, currentUnit)}°`;

      highTemperature.textContent =
         `${convertTemperature(day.high, currentUnit)}°`;
   });
}

function updateTrendSummary() {
   const current = weatherData.current;

   const displayedCurrent = convertTemperature(
      current.temperature,
      currentUnit
   );

const trendTemperatures = weatherData.trend.map(
   point => point.temperature
);

const displayedLow = convertTemperature(
   Math.min(...trendTemperatures),
   currentUnit
);

const displayedHigh = convertTemperature(
   Math.max(...trendTemperatures),
   currentUnit
);

   chartCurrentValue.firstChild.textContent =
      `${displayedCurrent}° `;

   chartRange[0].textContent =` Low ${displayedLow}°`;
   chartRange[1].textContent =` High ${displayedHigh}°`;
}

function formatTrendTime(time) {
   if (!time || !time.includes("T")) {
      return time ?? "";
   }

   const timePart = time.split("T")[1];
   const [hours, minutes] = timePart.split(":").map(Number);

   const date = new Date(
      Date.UTC(2000, 0, 1, hours, minutes)
   );

   return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: true,
      timeZone: "UTC",
   });
}

function updateTrendLabels() {
   weatherData.trend.forEach((point, index) => {
      const displayedTemperature = convertTemperature(
         point.temperature,
         currentUnit
      );

      chartTemperatureLabels[index].textContent =
         `${displayedTemperature}°`;

      if (point.time) {
         chartTimeLabels[index].textContent =
            formatTrendTime(point.time);
      }
   });
}

function getTrendPoints() {
   const chartWidth = 640;
   const chartLeft = 30;
   const chartTop = 35;
   const chartBottom = 165;

   const temperatures = weatherData.trend.map(
      point => point.temperature
   );

   if (temperatures.length === 0) {
      return [];
   }

   const minTemperature = Math.min(...temperatures);
   const maxTemperature = Math.max(...temperatures);

   const temperatureRange = maxTemperature - minTemperature;

   return temperatures.map((temperature, index) => {
      const x = temperatures.length === 1
         ? chartLeft + chartWidth / 2
         : chartLeft +
           (chartWidth / (temperatures.length - 1)) * index;

      const y = temperatureRange === 0
         ? (chartTop + chartBottom) / 2
         : chartBottom -
           ((temperature - minTemperature) / temperatureRange) *
            (chartBottom - chartTop);

      return { x, y, temperature };
   });
}

function updateTrendPoints() {
   const points = getTrendPoints();

   chartPoints.forEach((circle, index) => {
      const point = points[index];

      if (!point) {
         circle.setAttribute("display", "none");
         return;
      }

      circle.removeAttribute("display");
      circle.setAttribute("cx", point.x);
      circle.setAttribute("cy", point.y);
   });

   chartTemperatureLabels.forEach((label, index) => {
      const point = points[index];

      if (!point) {
         label.setAttribute("display", "none");
         return;
      }

      label.removeAttribute("display");
      label.setAttribute("x", point.x);
      label.setAttribute("y", point.y - 15);
   });
}

function updateTrendLine() {
   const points = getTrendPoints();

   const pathData = points.map((point, index) => {
      if (index === 0) {
         return `M ${point.x} ${point.y}`;
      }

      const previousPoint = points[index - 1];

      const controlX =
         (previousPoint.x + point.x) / 2;

      return `C ${controlX} ${previousPoint.y},
               ${controlX} ${point.y},
               ${point.x} ${point.y}`;
   }).join(" ");

   chartLine.setAttribute("d", pathData);
}

function updateTrendArea() {
   const points = getTrendPoints();

   const firstPoint = points[0];
   const lastPoint = points[points.length - 1];

   const baselineY = 195;

   const pathData = points.map((point, index) => {
      if (index === 0) {
         return `M ${point.x} ${point.y}`;
      }

      const previousPoint = points[index - 1];

      const controlX =
         (previousPoint.x + point.x) / 2;

      return `C ${controlX} ${previousPoint.y},
               ${controlX} ${point.y},
               ${point.x} ${point.y}`;
   }).join(" ");

   const areaPath =
      `${pathData} L ${lastPoint.x} ${baselineY}
      L ${firstPoint.x} ${baselineY} Z`;

   chartArea.setAttribute("d", areaPath);
}

function getTemperatureColor(temperature, minTemperature, maxTemperature) {
   const coldColor = { r: 119, g: 168, b: 239 };
   const hotColor = { r: 231, g: 189, b: 130 };

   const range = maxTemperature - minTemperature;

   const ratio = range === 0
      ? 0.5
      : (temperature - minTemperature) / range;

   const r = Math.round(
      coldColor.r + (hotColor.r - coldColor.r) * ratio
   );

   const g = Math.round(
      coldColor.g + (hotColor.g - coldColor.g) * ratio
   );

   const b = Math.round(
      coldColor.b + (hotColor.b - coldColor.b) * ratio
   );

   return `rgb(${r}, ${g}, ${b})`;
}

function updateWeeklyTemperatureBars() {
   const allTemperatures = weatherData.weekly.flatMap(day => [
      day.high,
      day.low
   ]);

   const minTemperature = Math.min(...allTemperatures);
   const maxTemperature = Math.max(...allTemperatures);
   const temperatureRange = maxTemperature - minTemperature;

   weeklyRows.forEach((row, index) => {
      const day = weatherData.weekly[index];

      if (!day) return;

      const bar = row.querySelector(".temperature-bar span");

      const left = temperatureRange === 0
         ? 50
         : ((day.low - minTemperature) / temperatureRange) * 100;

      const width = temperatureRange === 0
         ? 4
         : ((day.high - day.low) / temperatureRange) * 100;

      if (day.high === day.low) {
         bar.style.left = `calc(${left}% - 2px)`;
         bar.style.width = "4px";
      } else {
         bar.style.left = `${left}%`;
         bar.style.width = `${width}%`;
      }

      const lowColor = getTemperatureColor(
      day.low,
      minTemperature,
      maxTemperature
      );
   
      const highColor = getTemperatureColor(
         day.high,
         minTemperature,
         maxTemperature
      );
   
      bar.style.setProperty("--low-color", lowColor);
      bar.style.setProperty("--high-color", highColor);
   });

}

function updateWeatherMetrics() {
   const metrics = weatherData.metrics;
   const hasUV = Number.isFinite(metrics.uvIndex);
   const hasVisibility = Number.isFinite(metrics.visibility);

   humidityElement.innerHTML =
      `${metrics.humidity}<span>%</span>`;

   windSpeedElement.innerHTML =
      `${Math.round(metrics.windSpeed)} <span>km/h</span>`;

   uvIndexElement.innerHTML = hasUV
      ? `${metrics.uvIndex.toFixed(1)} <span>/ 11</span>`
      : "--";

   visibilityElement.innerHTML = hasVisibility
      ? `${Math.round(metrics.visibility)} <span>km</span>`
      : "--";

   metricDescriptions[0].textContent =
      metrics.humidity < 30 ? "Low humidity" :
      metrics.humidity <= 60 ? "Comfortable level" :
      "High humidity";

   metricDescriptions[1].textContent =
      metrics.windSpeed < 5 ? "Calm winds" :
      metrics.windSpeed < 20 ? "Light breeze" :
      metrics.windSpeed < 40 ? "Moderate winds" :
      "Strong winds";

   metricDescriptions[2].textContent = !hasUV
      ? "Unavailable"
      : metrics.uvIndex < 3 ? "Low" :
      metrics.uvIndex < 6 ? "Moderate" :
      metrics.uvIndex < 8 ? "High" :
      metrics.uvIndex < 11 ? "Very high" :
      "Extreme";

   metricDescriptions[3].textContent = !hasVisibility
      ? "Unavailable"
      : metrics.visibility >= 10 ? "Clear conditions" :
      metrics.visibility >= 5 ? "Good visibility" :
      metrics.visibility >= 2 ? "Reduced visibility" :
      "Poor visibility";
}

function updateSunInfo() {
   const sun = weatherData.sun;

   sunriseElement.textContent = sun.sunrise;
   sunsetElement.textContent = sun.sunset;
   daylightElement.textContent = sun.daylight;
}

celsiusButton.addEventListener("click", () => {
   setUnit("C");
});

fahrenheitButton.addEventListener("click", () => {
   setUnit("F");
});

updateWeatherDate();
setUnit("C")

const searchForm = document.querySelector("#search-form");
const citySearchInput = document.querySelector("#city-search");
const cityResultsList = document.querySelector("#city-results");

let searchTimeout;
let latestSearchId = 0;

function hideCityResults() {
   cityResultsList.replaceChildren();
   cityResultsList.hidden = true;
   citySearchInput.setAttribute("aria-expanded", "false");
}

function showCityResults() {
   cityResultsList.hidden = false;
   citySearchInput.setAttribute("aria-expanded", "true");
}

function getCitySearchVariants(query) {
   const trimmedQuery = query.trim();

   const variants = [trimmedQuery];

   // Add shorter prefixes to discover more possible matches.
   for (
      let length = trimmedQuery.length - 1;
      length >= 3;
      length--
   ) {
      variants.push(trimmedQuery.slice(0, length));
   }

   return [...new Set(variants)];
}

async function searchCities(query, searchId) {
   try {
      const fuse = await citiesSearchPromise;

      const countryFuse = await countriesSearchPromise;

      const normalizedQuery = query.trim().toLowerCase();

      const countryMatch = countryFuse.search(query).find(
         (result) =>
            result.item.name.toLowerCase() === normalizedQuery
      );

      const aliasCountryCode = countryAliases.get(normalizedQuery);

      const countryCode = countryMatch?.item.code || aliasCountryCode;

      let rankedCities;

      if (countryCode) {
         const cities = await citiesDatabasePromise;

         rankedCities = cities
            .filter((city) => city.country_code === countryCode)
            .sort((a, b) => {
               const capitalDifference =
                  Number(b.feature_code === "PPLC") -
                  Number(a.feature_code === "PPLC");

               if (capitalDifference !== 0) {
                  return capitalDifference;
               }

               return (b.population || 0) - (a.population || 0);
            });

      } else {
         const searchResults = fuse.search(query);

         rankedCities = searchResults
            .sort((a, b) => {
               const distanceA = getLevenshteinDistance(
                  query,
                  a.item.name
               );

               const distanceB = getLevenshteinDistance(
                  query,
                  b.item.name
               );

               if (distanceA !== distanceB) {
                  return distanceA - distanceB;
               }

               return a.score - b.score;
            })
            .map((result) => result.item);
      }

      if (searchId !== latestSearchId) return;

      cityResultsList.replaceChildren();

      if (rankedCities.length === 0) {
         hideCityResults();
         return;
      }

      rankedCities.forEach((city) => {
         const item = document.createElement("li");
         const button = document.createElement("button");
         const cityName = document.createElement("span");
         const cityDetails = document.createElement("span");

         button.type = "button";
         button.className = "city-result";
         button.setAttribute("role", "option");

         cityName.className = "city-result-name";
         cityName.textContent = city.name;

         cityDetails.className = "city-result-details";
         cityDetails.textContent = city.country_code;

         button.append(cityName, cityDetails);
         item.append(button);
         cityResultsList.append(item);

         button.addEventListener("click", () => {
            const selectedCity = {
               name: city.name,
               country: city.country_code,
               latitude: city.latitude,
               longitude: city.longitude,
               timezone: city.timezone
            };

            citySearchInput.value = city.name;
            hideCityResults();

            loadCityWeather(selectedCity);
         });
      });

      showCityResults();

   } catch (error) {
      if (searchId !== latestSearchId) return;

      console.error("City search failed:", error);
      hideCityResults();
   }
}

citySearchInput.addEventListener("input", () => {
   clearTimeout(searchTimeout);

   const searchId = ++latestSearchId;
   const query = citySearchInput.value.trim();

   if (query.length < 2) {
      hideCityResults();
      return;
   }

   searchTimeout = setTimeout(() => {
      searchCities(query, searchId);
   }, 500);
});

searchForm.addEventListener("submit", (event) => {
   event.preventDefault();
});

document.addEventListener("click", (event) => {
   if (!event.target.closest(".search-container")) {
      hideCityResults();
   }
});

if ("serviceWorker" in navigator) {
   window.addEventListener("load", async () => {
      try {
         const registration =
         await navigator.serviceWorker.register("./sw.js");

      } catch (error) {
         console.error("Service Worker registration failed:", error);
      }
   });
}