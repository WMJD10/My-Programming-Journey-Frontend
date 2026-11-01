async function getWeatherData(latitude, longitude) {
   const API_URL =
      "https://api.open-meteo.com/v1/forecast" +
      `?latitude=${latitude}` +
      `&longitude=${longitude}` +
      "&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m" +
      "&hourly=temperature_2m,precipitation_probability,weather_code,uv_index,visibility,is_day" +
      "&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,uv_index_max" +
      "&forecast_days=7" +
      "&timezone=auto";

   try {
      const response = await fetch(API_URL);

      if (!response.ok) {
         throw new Error(`HTTP error: ${response.status}`);
      }

      return await response.json();
   } catch (error) {
      console.error("Failed to fetch weather data:", error);
      return null;
   }
}

function getCurrentWeather(data) {
   const current = data.current;

   return {
      temperature: current.temperature_2m,
      feelsLike: current.apparent_temperature,
      humidity: current.relative_humidity_2m,
      windSpeed: current.wind_speed_10m,
      weatherCode: current.weather_code,
      isDay: current.is_day,
      condition: getWeatherCondition(current.weather_code),
      icon: getWeatherIcon(current.weather_code, current.is_day),
   };
}

function getWeatherCondition(code) {
   const conditions = {
      0: "Clear Sky",
      1: "Mainly Clear",
      2: "Partly Cloudy",
      3: "Overcast",
      45: "Fog",
      48: "Depositing Rime Fog",
      51: "Light Drizzle",
      53: "Moderate Drizzle",
      55: "Dense Drizzle",
      56: "Light Freezing Drizzle",
      57: "Dense Freezing Drizzle",
      61: "Light Rain",
      63: "Moderate Rain",
      65: "Heavy Rain",
      66: "Light Freezing Rain",
      67: "Heavy Freezing Rain",
      71: "Light Snowfall",
      73: "Moderate Snowfall",
      75: "Heavy Snowfall",
      77: "Snow Grains",
      80: "Light Rain Showers",
      81: "Moderate Rain Showers",
      82: "Violent Rain Showers",
      85: "Light Snow Showers",
      86: "Heavy Snow Showers",
      95: "Thunderstorm",
      96: "Thunderstorm with Slight Hail",
      97: "Heavy Thunderstorm",
      99: "Thunderstorm with Heavy Hail"
   };

   return conditions[code] ?? "Unknown Conditions";
}

function getWeatherIcon(code, isDay = 1) {
   const isNight = isDay === 0;

   const icons = {
      0: isNight ? "clear-night" : "clear-day",

      1: isNight
         ? "mostly-clear-night"
         : "mostly-clear-day",

      2: isNight
         ? "partly-cloudy-night"
         : "partly-cloudy-day",

      3: isNight ? "overcast-night" : "overcast",

      45: "fog",
      48: "fog",

      51: "drizzle",
      53: "drizzle",
      55: "drizzle",

      56: "sleet",
      57: "sleet",

      61: "rain",
      63: "rain",
      65: "extreme-rain",
      66: "sleet",
      67: "sleet",

      71: "snow",
      73: "snow",
      75: "snow",
      77: "snowflake",

      80: "rain",
      81: "rain",
      82: "extreme-rain",

      85: "snow",
      86: "snow",

      95: isNight
         ? "thunderstorms-night"
         : "thunderstorms-day",

      96: "thunderstorms",
      97: "thunderstorms",
      99: "thunderstorms"
   };

   return icons[code] ?? "not-available";
}

function getDailyForecast(data) {
   const daily = data.daily;

   return daily.time.map((date, index) => ({
      date: date,
      maxTemp: daily.temperature_2m_max[index],
      minTemp: daily.temperature_2m_min[index],
      weatherCode: daily.weather_code[index],
      condition: getWeatherCondition(daily.weather_code[index]),
      sunrise: daily.sunrise[index],
      sunset: daily.sunset[index],
      daylightDuration: daily.daylight_duration[index],
      maxUV: daily.uv_index_max[index],
   }));
}

function formatLocalTime(dateTime) {
   const time = dateTime.split("T")[1];
   const [hours, minutes] = time.split(":").map(Number);

   const date = new Date(2000, 0, 1, hours, minutes);

   return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
   });
}

function getCurrentHourIndex(data) {
   const currentHour = data.current.time.slice(0, 13);

   return data.hourly.time.findIndex(
      time => time.slice(0, 13) === currentHour
   );
}

function buildWeatherData(data, location) {
   const current = getCurrentWeather(data);
   const daily = getDailyForecast(data);
   const currentHourIndex = getCurrentHourIndex(data);

   return {
      timezone: data.timezone,
      city: location.name,
      country: location.country,
      condition: current.condition,

      current: {
         temperature: current.temperature,
         feelsLike: current.feelsLike,
         high: daily[0].maxTemp,
         low: daily[0].minTemp,
         icon: current.icon,
         isDay: current.isDay,
      },

      hourly: getHourlyForecast(data),

      trend: (() => {
         const currentHour = data.current.time.slice(0, 13);

         const foundIndex = data.hourly.time.findIndex(
            time => time.slice(0, 13) >= currentHour
         );

         const lastIndex = data.hourly.time.length - 1;

         if (foundIndex === -1 || lastIndex < 0) {
            return [];
         }

         const startIndex = foundIndex;

         const trendIndexes = Array.from(
            { length: 6 },
            (_, index) => startIndex + index * 3
         ).filter(index => index <= lastIndex);

         return trendIndexes.map(hourIndex => {
            const weatherCode = data.hourly.weather_code[hourIndex];

            return {
               time: data.hourly.time[hourIndex],
               temperature: data.hourly.temperature_2m[hourIndex],
               weatherCode,
               condition: getWeatherCondition(weatherCode),
               icon: getWeatherIcon(
                  weatherCode,
                  data.hourly.is_day[hourIndex]
               ),
            };
         });
      })(),

      weekly: daily.slice(0, 7).map((day, index) => ({
         day: index === 0
         ? "Today"
         : new Date(`${day.date}T12:00:00Z`).toLocaleDateString(
            "en-US",
            {
               weekday: "short",
               timeZone: "UTC",
            }
         ),
         high: day.maxTemp,
         low: day.minTemp,
         icon: getWeatherIcon(day.weatherCode),
         condition: day.condition,
      })),

      sun: {
         sunrise: formatLocalTime(daily[0].sunrise),
         sunset: formatLocalTime(daily[0].sunset),

         daylight: `${Math.floor(daily[0].daylightDuration / 3600)}h ${Math.floor(
            (daily[0].daylightDuration % 3600) / 60
            )}m`
         },

         metrics: {
            humidity: current.humidity,
            windSpeed: current.windSpeed,

            uvIndex: currentHourIndex >= 0
               ? data.hourly.uv_index[currentHourIndex]
               : null,

            visibility: currentHourIndex >= 0
               ? data.hourly.visibility[currentHourIndex] / 1000
               : null,
         },
      };
}

function getHourlyForecast(data) {
   const hourly = data.hourly;
   const currentHourIndex = getCurrentHourIndex(data);

   if (
      !Array.isArray(hourly.time) ||
      currentHourIndex < 0
   ) {
      return [];
   }

   const availableHours = Math.min(
      7,
      hourly.time.length - currentHourIndex
   );

   const requiredFields = [
      hourly.temperature_2m,
      hourly.weather_code,
      hourly.is_day,
      hourly.precipitation_probability,
   ];

   if (
      availableHours <= 0 ||
      requiredFields.some(
         values =>
            !Array.isArray(values) ||
            values.length < currentHourIndex + availableHours
      )
   ) {
      return [];
   }

   return hourly.time
      .slice(currentHourIndex, currentHourIndex + availableHours)
      .map((time, index) => {
         const i = currentHourIndex + index;

         return {
            time: index === 0
               ? "Now"
               : formatLocalTime(time),
            temperature: hourly.temperature_2m[i],
            icon: getWeatherIcon(
               hourly.weather_code[i],
               hourly.is_day[i]
            ),
            rainChance: hourly.precipitation_probability[i],
         };
      });
}

const defaultLocation = {
   name: "Erbil",
   country: "Iraq",
   latitude: 36.2312,
   longitude: 43.9926
};

let savedLocation = null;

try {
   savedLocation = JSON.parse(
      localStorage.getItem("atmos-location")
   );
} catch (error) {
   console.error("Failed to read saved location:", error);
}

let weatherRequestId = 0;

async function loadCityWeather(location) {
   const requestId = ++weatherRequestId;

   try {
      const data = await getWeatherData(
         location.latitude,
         location.longitude
      );

      // Ignore outdated requests or failed responses.
      if (!data || requestId !== weatherRequestId) {
         return;
      }

      weatherData = buildWeatherData(data, location);

      localStorage.setItem(
         "atmos-location",
         JSON.stringify(location)
      );

      updateWeatherDate();
      setUnit(currentUnit);
   } catch (error) {
      console.error("Failed to load city weather:", error);
   }
}

const initialLocation = savedLocation ?? defaultLocation;

getWeatherData(
   initialLocation.latitude,
   initialLocation.longitude
).then(data => {
   if (data) {
      weatherData = buildWeatherData(data, initialLocation);
   }

   setUnit(currentUnit);
});
