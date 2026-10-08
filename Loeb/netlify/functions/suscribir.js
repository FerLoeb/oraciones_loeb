import { getStore } from '@netlify/blobs';

export default async (req) => {
  if (req.method !== 'POST') {
    return new Response('Método no permitido', { status: 405 });
  }

  const subscription = await req.json();
  const store = getStore('suscripciones');

  // Guardamos la suscripción con un id único derivado del endpoint
  const id = Buffer.from(subscription.endpoint).toString('base64url');
  await store.setJSON(id, subscription);

  return new Response(JSON.stringify({ status: 'ok' }), {
    headers: { 'Content-Type': 'application/json' }
  });
};