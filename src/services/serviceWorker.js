// SERVICE WORKER has many eventListeners, listen process like install, activate, push, fetch, sync, message. Contains actions to events in the web page


self.addEventListener('install', (event) => {
  console.log('Service Worker: Instalado');
  // Aquí puedes manejar la caché inicial si lo necesitas
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activado');
  // Aquí puedes manejar la limpieza de cachés antiguas, si es necesario
});

self.addEventListener('fetch', (event) => {
  console.log('Service Worker: Fetching', event.request.url);
  // Aquí puedes interceptar peticiones y manejar caché si deseas
});