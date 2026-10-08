export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Método no permitido');
  }

  // Te devuelve los datos de tu móvil para que los copies
  console.log("TU_SUSCRIPCION:", JSON.stringify(req.body));
  return res.status(200).json({ 
    mensaje: "Copia esto", 
    subscription: req.body 
  });
}