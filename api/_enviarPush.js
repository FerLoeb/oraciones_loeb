import { kv } from '@vercel/kv';
import webpush from 'web-push';

export async function enviarRecordatorio(titulo, mensaje, urlDestino) {
  webpush.setVapidDetails(
    'mailto:frdloeb@gmail.com',
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
  );

  const keys = await kv.keys('sub:*');
  const payload = JSON.stringify({
    title: titulo,
    body: mensaje,
    url: urlDestino
  });

  for (const key of keys) {
    const sub = await kv.get(key);
    if (sub) {
      try {
        await webpush.sendNotification(sub, payload);
      } catch (err) {
        if (err.statusCode === 404 || err.statusCode === 410) {
          await kv.del(key);
        }
      }
    }
  }
}