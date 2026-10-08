import webpush from 'web-push';

export async function enviarRecordatorio(titulo, mensaje, urlDestino) {
  webpush.setVapidDetails(
    'mailto:contacto@tudominio.com', // tu email
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
  );

  const payload = JSON.stringify({
    title: titulo,
    body: mensaje,
    url: urlDestino
  });

  // Si tienes tu suscripción configurada en Vercel
  if (process.env.MI_SUSCRIPCION) {
    try {
      const sub = JSON.parse(process.env.MI_SUSCRIPCION);
      await webpush.sendNotification(sub, payload);
    } catch (err) {
      console.error("Error al enviar push:", err);
    }
  }
}