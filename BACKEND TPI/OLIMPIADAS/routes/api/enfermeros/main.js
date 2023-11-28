var express = require('express');
var router = express.Router();
var con = require('../conexion');

router.get("/",function(req, res, next){
    const sql ="SELECT * FROM enfermeros";
    con.query(sql,function(error,result){
        if (error){
            res.json({
                status:"error",
                error
            })
           }   else {
            res.json({
                status:"ok",
                enfermeros:result   
            })
        }
    })
});


router.post("/", function(req, res, next) {
    const { token } = req.headers;
    const { apellidos, nombres, documento } = req.body;
    isAdmin(token)
        .then((tipo) => {
            if (tipo === "admin") {
                const sql = 'INSERT INTO enfermeros (apellidos, nombres, documento) VALUES (?, ?, ?)'
                con.query(sql, [apellidos, nombres, documento], function(error, result) {
                    if (error) {
                        res.json({
                            status: "error",
                            error
                        });
                    } else {
                        res.json({
                            status: "ok"
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



router.put("/", function(req, res, next) {
    const {token}=req.headers
    const { id } = req.query;
    const { apellidos, nombres, documento } = req.body;
    isAdmin(token)
        .then((tipo) => {
            if (tipo === "admin") {
                const sql = 'UPDATE enfermeros SET apellidos= ?, nombres= ?, documento= ? WHERE id= ?';
                con.query(sql, [apellidos, nombres, documento, id], function(error, result) {
                    if (error) {
                        res.json({
                            status: "error",
                            error
                        });
                    } else {
                        res.json({
                            status: "ok"
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
            const sql = 'DELETE FROM enfermeros WHERE id = ? '
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