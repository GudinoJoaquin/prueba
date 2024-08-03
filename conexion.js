import mysql from 'mysql2'

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'anunciost5mdp'
})

conexion.connect((err) => {
    if(err){
        throw err;
    } else {
        console.log('Conectado a la base de datos')
    }
})

export default conexion