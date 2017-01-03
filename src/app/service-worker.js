/*eslint no-console: ["error", { allow: ["info"] }] */
const CACHE_NAME = 'angular-test-cache';

const STATIC_ASSETS = [
  '/',
  '/app.bundle.js',
  '/img/notfound.png',
  '/img/favicon.ico'
];

const DYNAMIC_ASSETS_MATCHER = /(https:\/\/api\.adorable\.io\/.*)|(http:\/\/localhost.*?\/api\/.*)/;

self.addEventListener('install', (event) =>
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.info('[SW]', 'Static assets added to cache: ', STATIC_ASSETS);
        return cache.addAll(STATIC_ASSETS);
      })
  )
);

const cacheApiResponse = (event) =>
  caches
    .open(CACHE_NAME)
    .then((cache) => {
      if (event.request.url.match(DYNAMIC_ASSETS_MATCHER)) {
        fetch(event.request)
          .then((response) => cache.put(event.request, response))
          .catch((err) => console.info('[SW]', 'Failed to update cache', err));
        return Promise.resolve(true);
      }
      return Promise.resolve(false);
    });

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );

  event.waitUntil(cacheApiResponse(event));
});

self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
