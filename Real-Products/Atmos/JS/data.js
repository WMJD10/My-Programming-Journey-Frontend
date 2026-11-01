const newLocal = {
   city: "Erbil",
   country: "Iraq",
   condition: "Partly Cloudy",

   current: {
      temperature: 10,
      feelsLike: 13,
      high: 15,
      low: 9
   },

   sun: {
      sunrise: "6:12 AM",
      sunset: "5:42 PM",
      daylight: "11h 30m"
   },

   metrics: {
      humidity: 35,
      windSpeed: 12,
      uvIndex: 5,
      visibility: 10
   },

   hourly: [
      { time: "Now", temperature: 20, icon: "🌤️", rainChance: 10 },
      { time: "1 PM", temperature: 10, icon: "☀️", rainChance: 5 },
      { time: "2 PM", temperature: 10, icon: "☀️", rainChance: 5 },
      { time: "3 PM", temperature: 12, icon: "🌤️", rainChance: 10 },
      { time: "4 PM", temperature: 11, icon: "🌤️", rainChance: 10 },
      { time: "5 PM", temperature: 10, icon: "🌥️", rainChance: 15 },
      { time: "6 PM", temperature: 9, icon: "🌙", rainChance: 10 }
   ],

   weekly: [
      { day: "Today", high: 14, low: 8, icon: "🌤️" },
      { day: "Sun", high: 11, low: 6, icon: "☀️" },
      { day: "Mon", high: 10, low: 6, icon: "🌤️" },
      { day: "Tue", high: 12, low: 7, icon: "🌧️" },
      { day: "Wed", high: 8, low: 4, icon: "🌤️" },
      { day: "Thu", high: 11, low: 8, icon: "☀️" },
      { day: "Fri", high: 13, low: 9, icon: "☀️" }
   ],

   trend: [
      { time: "6 AM", temperature: 9},
      { time: "9 AM", temperature: 10 },
      { time: "12 PM", temperature:11 },
      { time: "3 PM", temperature: 11 },
      { time: "6 PM", temperature: 9 },
      { time: "9 PM", temperature: 9 }
   ]
};
   let weatherData = newLocal;