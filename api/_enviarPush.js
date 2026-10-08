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

  const sub = JSON.parse(process.env.MI_SUSCRIPCION);
  // Si Google o Apple rechazan la suscripción, lanzará la excepción aquí
  await webpush.sendNotification(sub, payload);
}