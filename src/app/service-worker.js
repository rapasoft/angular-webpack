const CACHE_NAME = 'angular-test-cache';
const URLS_TO_CACHE = [
  '/',
  '/app.bundle.js',
  '/img/notfound.png',
  '/img/favicon.ico'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cached: ', URLS_TO_CACHE);
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));