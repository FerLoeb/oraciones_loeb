import { enviarRecordatorio } from '../_enviarPush.js';

export default async function handler(req, res) {
  await enviarRecordatorio(
    "El Ángelus (12:00h)",
    "Toca para abrir la oración del Ángelus.",
    "https://tu-proyecto.vercel.app/#angelus" // Tu dominio en Vercel
  );
  return res.status(200).send('OK');
}