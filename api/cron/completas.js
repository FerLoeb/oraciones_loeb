import { enviarRecordatorio } from '../_enviarPush.js';

export default async function handler(req, res) {
  await enviarRecordatorio(
    "Completas y Maravilla del día",
    "Termina la jornada dando gracias por lo vivido.",
    "https://liturgiadelashoras.github.io/"
  );
  return res.status(200).send('OK');
}