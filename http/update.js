import conexion from "../conexion.js";

export const updateAnuncio = (req, res) => {
    // Obtiene los datos del cuerpo de la solicitud HTTP
  
    const { titulo, mensaje, imagen, adjunto, id } = req.body;
  
    // Consulta SQL para actualizar un anuncio en la base de datos
    const sql =
      "UPDATE anuncios SET titulo=?, mensaje=?, imagen=?, contenido_adjunto=? WHERE id = ?";
  
    // Ejecuta la consulta SQL en la base de datos
    conexion.query(sql, [titulo, mensaje, imagen, adjunto, id], (err, result) => {
      // Maneja los errores si ocurren durante la ejecución de la consulta
      if (err) {
        console.error(`Error al modificar el anuncio ${err.name}`);
        res.status(500).send("Error interno a del servidor");
        return;
      }
      // Redirige a la página de inicio después de que se haya editado el anuncio con éxito
      res.send('Anuncio modificado');
    });
  };