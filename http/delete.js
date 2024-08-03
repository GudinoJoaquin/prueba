import conexion from "../conexion.js";

export const deleteAnuncio = (req, res) => {
  const id = req.query.id; // Obtiene el ID del anuncio de la consulta de la URL

  // Consulta SQL para eliminar un anuncio de la base de datos
  const sql = "DELETE FROM anuncios WHERE id = ?";

  // Ejecuta la consulta SQL en la base de datos
  conexion.query(sql, [id], (err, result) => {
    // Maneja los errores si ocurren durante la ejecución de la consulta
    if (err) {
      console.error(`Error al eliminar el anuncio ${err.name}`);
      res.status(500).send("Error interno del servidor");
      return;
    }
    // Redirige a la página de inicio después de que se haya eliminado el anuncio con éxito
    res.redirect("/");
  });
};
