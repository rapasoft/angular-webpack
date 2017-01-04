/*eslint no-console: ["error", { allow: ["info"] }] */
const log = (messages) => console.info('[ServiceWorker]', ...messages);

const CACHE_NAME = 'angular-test-cache';

const STATIC_ASSETS = [
  '/',
  '/app.bundle.js',
  '/img/notfound.png',
  '/img/favicon.ico'
];

self.addEventListener('install', (event) =>
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        log(['Static assets added to cache: ', STATIC_ASSETS]);
        return cache.addAll(STATIC_ASSETS);
      })
  )
);

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) {
          log([event.request.url, 'Retrieved from cache']);
          return response;
        }
        return fetch(event.request).catch(() => log(['An error has occured']));
      })
  );
});

self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
