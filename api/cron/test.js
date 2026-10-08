import { enviarRecordatorio } from '../_enviarPush.js';

export default async function handler(req, res) {
  // Evitar cualquier caché del navegador
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

  try {
    if (!process.env.MI_SUSCRIPCION) {
      return res.status(500).json({ error: 'Falta la variable MI_SUSCRIPCION en Vercel' });
    }

    await enviarRecordatorio(
      "Prueba de Notificación 🔔",
      "¡Funciona! Si ves esto, las notificaciones están bien configuradas.",
      "https://oracionesloeb.vercel.app/#angelus"
    );

    return res.status(200).json({ 
      status: 'Enviado a Google/Apple',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return res.status(500).json({ 
      error: error.message,
      detalles: error.body || error
    });
  }
}