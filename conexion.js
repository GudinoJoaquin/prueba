import mysql from 'mysql2'

const conexion = mysql.createConnection({
    host: 'mysql.railway.internal',
    user: 'root',
    password: 'HMjsCMdOGRnbiwRcUoAESpGqltjEHgen',
    database: 'railway',
    port: 3306
})

conexion.connect((err) => {
    if(err){
        throw err;
    } else {
        console.log('Conectado a la base de datos')
    }
})

export default conexion