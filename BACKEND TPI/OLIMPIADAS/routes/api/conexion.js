const mysql = require("mysql");
const conexion = mysql.createConnection({

    host:"ctpoba.ar",
    user:"mirandaa",
    password:"44996652",
    database:"71_D"
})

conexion.connect(()=>{
    console.log("conectado a la db")
});


module.exports = conexion;