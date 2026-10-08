import webpush from 'web-push';

export async function enviarRecordatorio(titulo, mensaje, urlDestino) {
  webpush.setVapidDetails(
    'mailto:contacto@oracionesloeb.com',
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
  );

  const payload = JSON.stringify({
    title: titulo,
    body: mensaje,
    url: urlDestino
  });

  if (!process.env.MI_SUSCRIPCION) {
    throw new Error('Variable MI_SUSCRIPCION no encontrada');
  }

  // Parseamos el contenido
  const datos = JSON.parse(process.env.MI_SUSCRIPCION);

  // Si es una sola suscripción la metemos en un array; si ya es un array, lo dejamos tal cual
  const listaSuscripciones = Array.isArray(datos) ? datos : [datos];

  // Enviamos la notificación a cada móvil en paralelo
  const promesas = listaSuscripciones.map(async sub => {
    try {
      await webpush.sendNotification(sub, payload);
    } catch (err) {
      console.error('Error enviando a un dispositivo:', err.message);
    }
  });

  await Promise.all(promesas);
}