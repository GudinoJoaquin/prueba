import mysql from "mysql2";

const conexion = mysql.createConnection({
  host: "www.eest5mdp.edu.ar",
  user: "DiegoAdministradorT5",
  password: "EESTN5anunciosADMIN",
  database: "anunciosT5mdp",
  port: 3306,
});

// const conexion = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "anunciost5mdp",
// });

conexion.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("Conectado a la base de datos");
  }
});

export default conexion;
