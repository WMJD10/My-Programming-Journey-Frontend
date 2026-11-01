const CACHE_NAME = "atmos-static-v1.1";

const APP_FILES = [
   "./index.html",
   "./style.css",
   "./JS/data.js",
   "./JS/api.js",
   "./JS/app.js",
   "./data/world-cities.csv"
];

// Install: cache the main files.
self.addEventListener("install", (event) => {
   event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
         return cache.addAll(APP_FILES);
      })
   );

   self.skipWaiting();
});

// Activate: remove old Atmos caches.
self.addEventListener("activate", (event) => {
   event.waitUntil(
      caches.keys().then((cacheNames) => {
         return Promise.all(
         cacheNames
            .filter((name) => name.startsWith("atmos-") && name !== CACHE_NAME)
            .map((name) => caches.delete(name))
         );
      })
   );

   self.clients.claim();
});


 // Fetch: network first, cache fallback.
self.addEventListener("fetch", (event) => {
   if (event.request.method !== "GET") return;

   const requestUrl = new URL(event.request.url);

   // Let external requests, including weather APIs and Fuse.js, use the network.
   if (requestUrl.origin !== self.location.origin) return;

   event.respondWith(
      (async () => {
         const cache = await caches.open(CACHE_NAME);

         try {
            const networkResponse = await fetch(event.request);

            if (networkResponse.ok) {
               await cache.put(event.request, networkResponse.clone());
            }

            return networkResponse;
         } catch (error) {
            const cachedResponse = await cache.match(event.request);

            if (cachedResponse) {
               return cachedResponse;
            }

            throw error;
         }
      })()
   );
});
