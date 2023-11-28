var express = require('express');
var con = require('../conexion');
var router = express.Router();

router.get("/",function(req, res, next){
    const sql = 'SELECT * FROM zonas';
    con.query(sql,function(error, result){

        res.json({
            status:"zonas",
            zonas:result
            
        })
        
    })
    //SQL listado de zonas
})

router.post("/",function(req, res, next){
    const {token}=req.headers
    const {nombre} = req.body
    isAdmin(token)
    .then((tipo) => {
        if (tipo === "admin"){
            const sql = 'INSERT INTO zonas (nombre) VALUES (?)'

            con.query(sql, [nombre], function(error, result){
                if(error){
                    res.json({
                  status:"error",
                     error  
                    })  
               
                } else {
                    res.json({
                        status:"zonas",
                        msj:{nombre}
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
    


router.put("/", function(req, res, next) {
    const { token } = req.headers;
    const { id } = req.query;
    const { nombre } = req.body;

    isAdmin(token)
        .then((tipo) => {
            if (tipo === "admin") {
                const sql = 'UPDATE zonas SET nombre = ? WHERE id = ?';

                con.query(sql, [nombre, id], function(error, result) {
                    if (error) {
                        res.json({
                            status: "error",
                            error
                        });
                    } else {
                        res.json({
                            status: "zonas",
                            msj: { nombre }
                        });
                    }
                });
            } else {
                res.json({
                    status: "error",
                    error: "sin autorizacion"
                });
            }
        })
        .catch((error) => {
            res.json({
                status: "error",
                error
            });
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
            const sql = 'DELETE FROM zonas WHERE id = ? '
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