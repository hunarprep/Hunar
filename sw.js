// sw.js - Service Worker
const CACHE_NAME = 'hunar-app-v1';
const urlsToCache = [
  './',
  './index.html',
  './iti.html',
  './railwayd.html',
  './policeconstable.html',
  './manifest.json'
];

// Install Event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch Event (Offline Support)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
