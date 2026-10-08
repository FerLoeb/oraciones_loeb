import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Método no permitido');
  }

  const subscription = req.body;
  const id = Buffer.from(subscription.endpoint).toString('base64url');

  // Guardamos la suscripción en una lista/set
  await kv.set(`sub:${id}`, subscription);

  return res.status(200).json({ status: 'ok' });
}