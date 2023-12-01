var express = require('express');
var router = express.Router();
var con = require('../conexion');

router.get("/buscar",function(req, res, next){
    const {documento}=req.query
    const sql = 'SELECT* FROM pacientes WHERE documento = ?';
    con.query(sql,[documento],function(error, result){

        res.json({
            status:"Pacientes",
            pacientes:result
            
        })
        
    })
    //SQL listado de Paciente
})

router.get("/",function(req, res, next){

    const sql = 'SELECT * FROM pacientes';
    con.query(sql,function(error, result){

        res.json({
            status:"Pacientes",
            pacientes:result
            
        })
        
    })
    //SQL listado de Paciente
})

router.post("/",function(req, res, next){
    const { nombre, apellidos, documento, fec_nac} = req.body
    const sql = 'INSERT INTO pacientes (nombre, apellidos, documento, fec_nac ) VALUES (?, ?, ?, ?)'
    con.query(sql, [nombre, apellidos, documento, fec_nac ], function(error, result){
        if(error){
            res.json({
          status:"error",
             error  
            })  
       
        } else {
            res.json({
                status:"paciente",
                msj:{nombre, apellidos, documento, fec_nac}
            })
        }
    })
})

router.put("/", function(req, res, next) {
    const { id } = req.query;
    const { nombre, apellidos, documento, fec_nac } = req.body;
    const sql = 'UPDATE pacientes SET nombre = ?, apellidos = ?, documento = ?, fec_nac = ? WHERE id = ?';

    con.query(sql, [nombre, apellidos, documento, fec_nac, id], function(error, result) {
        if (error) {
            res.json({
                status: "error",
                error
            });
        } else {
            res.json({
                status: "pacientes",
                msj: { nombre, apellidos, documento, fec_nac }
            });
        }
    });
});


const isAdmin = function(token){
    return new Promise((resolve, reject) => {
        const sql = 'SELECT tipo FROM usuarios WHERE token = ?';
        con.query(sql, [token], function(error, result, cant){

            if(error){
                reject(error);  
        
            } else {

                if (result.length === 0)return( reject("No existe"));
                resolve(result[0].tipo); 
            
            }

        })
    })
}

    

router.delete("/",function(req, res, next){
    const {token} = req.headers
    const {id} = req.query
    isAdmin(token)
    .then((tipo) => {
        if (tipo === "admin"){
            const sql = 'DELETE FROM pacientes WHERE id = ? '
            con.query(sql, [id], function(error, result){    
                if(error){
                    res.json({
                  status:"error",
                     error  
                    })  
               
                } else {
                    res.json({
                        status:"eliminado",
                    })
                }
            }) 
           
        } else {
            res.json({
                status:"error",
                error:"sin autorizacion"
            })
         }
    }) 
    .catch((error) => {

        res.json({
            status:"error",
            error
            
        })
    })
   // console.log({nombre});
    
})
module.exports = router;