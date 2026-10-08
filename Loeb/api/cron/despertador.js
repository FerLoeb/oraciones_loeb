import { enviarRecordatorio } from '../_enviarPush.js';

export default async function handler(req, res) {
  await enviarRecordatorio(
    "¡Buenos días!",
    "Toca para escuchar 'Todo' de Hakuna y empezar el día.",
    "https://open.spotify.com/intl-es/track/32AudWhiMVnj7j4gbdzxTX?si=5656a1a1b3b54ac6"
  );
  return res.status(200).send('OK');
}