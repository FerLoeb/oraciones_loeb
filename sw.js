// Escuchar cuando llega una notificación desde Netlify
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};

  const title = data.title || "Recordatorio de Oración";
  const options = {
    body: data.body || "Es hora de orar.",
    icon: "https://cdn-icons-png.flaticon.com/512/3249/3249935.png",
    badge: "https://cdn-icons-png.flaticon.com/512/3249/3249935.png",
    data: {
      url: data.url || "/"
    }
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// Qué hacer al TOCAR la notificación
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const urlToOpen = event.notification.data?.url || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // Si la app/pestaña ya está abierta, enfocarse en ella y redirigir
      for (const client of clientList) {
        if ('focus' in client) {
          client.navigate(urlToOpen);
          return client.focus();
        }
      }
      // Si está cerrada, abrir la URL o app externa (Spotify / ePrex)
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});