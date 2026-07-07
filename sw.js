// sw.js — Campo de Frecuencias · MIU
// IMPORTANTE: subir CACHE_VERSION cada vez que cambie algún archivo cacheado,
// o los usuarios quedarán atrapados en una versión anterior indefinidamente.
const CACHE_VERSION = 'miu-v1.0.0';
const CACHE_NAME = `campo-frecuencias-${CACHE_VERSION}`;

const ASSETS_NUCLEO = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
  './icons/apple-touch-icon.png'
];

// JSZip se sirve desde CDN y es opcional (solo para el botón "descargar todo en ZIP").
// Si el usuario está offline la primera vez, ese botón puede fallar — es aceptable,
// el resto de la app (reproducción en vivo y descarga individual) no depende de red.
const CDN_OPCIONAL = [
  'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_NUCLEO).then(() => {
        // Intento best-effort del CDN opcional; no bloquea la instalación si falla.
        return Promise.allSettled(
          CDN_OPCIONAL.map((url) => cache.add(url).catch(() => null))
        );
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((nombres) =>
      Promise.all(
        nombres
          .filter((nombre) => nombre.startsWith('campo-frecuencias-') && nombre !== CACHE_NAME)
          .map((nombre) => caches.delete(nombre))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cacheada) => {
      if (cacheada) return cacheada;

      return fetch(event.request)
        .then((respuesta) => {
          // Cachear silenciosamente respuestas válidas del propio origen para uso futuro offline
          if (respuesta && respuesta.status === 200 && event.request.url.startsWith(self.location.origin)) {
            const clon = respuesta.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clon));
          }
          return respuesta;
        })
        .catch(() => {
          // Sin red y sin caché: no hay nada razonable que devolver para la mayoría de assets.
          // Para navegación de documento, al menos devolvemos el shell principal si existe.
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
          return new Response('', { status: 504, statusText: 'Sin conexión y sin caché' });
        });
    })
  );
});
