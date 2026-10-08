import { enviarRecordatorio } from './_enviarPush.js';

export default async () => {
  await enviarRecordatorio(
    "Laudes y Evangelio",
    "Toca aquí para ir a ePrex y rezar con la Palabra de hoy.",
    "https://liturgiadelashoras.github.io/"
  );
};

export const config = {
  schedule: "45 8 * * *"
};