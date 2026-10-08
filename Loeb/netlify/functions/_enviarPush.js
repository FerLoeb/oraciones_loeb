import { getStore } from '@netlify/blobs';
import webpush from 'web-push';

export async function enviarRecordatorio(titulo, mensaje, urlDestino) {
  webpush.setVapidDetails(
    'mailto:contacto@tudominio.com',
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
  );

  const store = getStore('suscripciones');
  const { blobs } = await store.list();

  const payload = JSON.stringify({
    title: titulo,
    body: mensaje,
    url: urlDestino
  });

  for (const item of blobs) {
    const sub = await store.get(item.key, { type: 'json' });
    if (sub) {
      try {
        await webpush.sendNotification(sub, payload);
      } catch (err) {
        if (err.statusCode === 404 || err.statusCode === 410) {
          // Si la suscripción expiró, la borramos
          await store.delete(item.key);
        }
      }
    }
  }
}