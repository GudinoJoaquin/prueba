import mysql from 'mysql2'

const conexion = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: 'railway',
    port: process.env.port
})



conexion.connect((err) => {
    if(err){
        throw err;
    } else {
        console.log('Conectado a la base de datos')
    }
})

export default conexion