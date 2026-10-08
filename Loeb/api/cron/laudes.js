import { enviarRecordatorio } from '../_enviarPush.js';

export default async function handler(req, res) {
  await enviarRecordatorio(
    "Laudes y Evangelio",
    "Toca aquí para ir a ePrex y rezar con la Palabra de hoy.",
    "https://liturgiadelashoras.github.io/"
  );
  return res.status(200).send('OK');
}