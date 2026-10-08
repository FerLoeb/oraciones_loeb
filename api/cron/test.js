import { enviarRecordatorio } from '../_enviarPush.js';

export default async function handler(req, res) {
  try {
    await enviarRecordatorio(
      "Prueba de Notificación 🔔",
      "¡Funciona! Si ves esto, las notificaciones de Vercel están bien configuradas.",
      "https://oracionesloeb.vercel.app/#angelus"
    );
    return res.status(200).json({ status: 'Notificación de prueba enviada con éxito' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}