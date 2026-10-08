import { enviarRecordatorio } from './_enviarPush.js';

export default async () => {
  await enviarRecordatorio(
    "El Ángelus (12:00h)",
    "Toca para abrir la oración del Ángelus.",
    "https://tu-sitio.netlify.app/#angelus" // Reemplaza "tu-sitio.netlify.app" por tu dominio en Netlify
  );
};

export const config = {
  schedule: "0 11 * * *" // 12:00h en España peninsular (UTC+1)
};