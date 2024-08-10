import conexion from "../conexion.js";

export const getAnuncio = (req, res) => {
  const id = req.query.id; // Obtiene el ID del anuncio de la consulta de la URL
  let sql = "SELECT * FROM anuncios"; // Consulta SQL para obtener todos los anuncios

  // Si se proporciona un ID en la consulta, agrega una cláusula WHERE para filtrar por ID
  if (id) {
    sql += " WHERE id = ?";
  }

  sql += " ORDER BY id DESC"; // Ordena los anuncios por ID de forma descendente

  // Ejecuta la consulta SQL en la base de datos
  conexion.query(sql, [id], (err, result) => {
    // Maneja los errores si ocurren durante la ejecución de la consulta
    if (err) {
      console.error(`Error al obtener los datos en la base de datos ${err}`);
      res.status(500).send("Error interno del servidor");
      return;
    }
    // Devuelve los resultados de la consulta como respuesta HTTP
    res.send(result);
  });
};

export const getUser = (req, res) => {
  const { user, pass } = req.body
  const sql = 'SELECT * FROM users WHERE id = 1'
  conexion.query(sql, [user, pass], (err, result) => {
    if(err){
      console.log('Error obteniendo usuario de la base de datos')
      res.status(500).send('Error interno del servidor')
      return
    }
    const userData = result[0]
    res.send({
      user: userData.name,
      pass: userData.pass
    })
  })
}
