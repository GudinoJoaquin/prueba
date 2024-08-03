import conexion from "../conexion.js";
import { format } from "date-fns";

export const postAnuncio = (req, res) => {
  // Obtiene los datos del cuerpo de la solicitud HTTP o establece valores predeterminados

  const titulo = req.body.titulo || "Titulo";
  const mensaje = req.body.mensaje || "Mensaje";
  let img =
    req.body.imagen ||
    "https://lh3.googleusercontent.com/p/AF1QipOMvxtzYmxLLIoY56X1Hh8kkVR3kUASy6Rz38pT=s680-w680-h510";
  const adjunto = req.body.adjunto || "https://eest5mdp.edu.ar";
  const fecha = format(new Date(), "dd-MM-yyyy"); // Formatea la fecha actual

  // Consulta SQL para insertar un nuevo anuncio en la base de datos
  const sql =
    "INSERT INTO anuncios (fecha, titulo, mensaje, imagen, contenido_adjunto) VALUES (?, ?, ?, ?, ?)";

  // Ejecuta la consulta SQL en la base de datos
  conexion.query(sql, [fecha, titulo, mensaje, img, adjunto], (err, result) => {
    // Maneja los errores si ocurren durante la ejecución de la consulta
    if (err) {
      console.error(`Error al insertar el anuncio a la db ${err.name}`);
      res.status(500).send("Error interno del servidor");
      return;
    }
    // Redirige a la página de inicio después de que se haya insertado el anuncio con éxito
    res.redirect("/");
  });
};
