import { enviarRecordatorio } from './_enviarPush.js';

export default async () => {
  await enviarRecordatorio(
    "Completas y Maravilla del día",
    "Termina la jornada dando gracias por lo vivido.",
    "https://tu-sitio.netlify.app/#maravilla"
  );
};

export const config = {
  schedule: "30 21 * * *"
};