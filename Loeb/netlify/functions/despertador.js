import { enviarRecordatorio } from './_enviarPush.js';

export default async () => {
  await enviarRecordatorio(
    "¡Buenos días!",
    "Toca para escuchar 'Todo' de Hakuna y empezar el día.",
    "https://open.spotify.com/intl-es/track/32AudWhiMVnj7j4gbdzxTX?si=25e234a29fc04a92" // Sustituye por el enlace exacto
  );
};

export const config = {
  schedule: "30 8 * * *"
};