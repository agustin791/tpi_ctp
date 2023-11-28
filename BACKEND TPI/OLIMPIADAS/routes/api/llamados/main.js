var express = require('express');
var router = express.Router();
var con = require('../conexion');

router.get("/",function(req, res, next){

    const sql = 'SELECT * FROM llamados';
    con.query(sql,function(error, result){

        res.json({
            status:"llamados",
            llamados:result
            
        })
        
    })
    //SQL listado de llamado
})

router.post("/",function(req, res, next){
    const {zona_id, origen, enfermero_id, paciente_id,estado } = req.body
    console.log({zona_id, origen, enfermero_id, paciente_id, estado});

const sql = 'INSERT INTO llamados (zona_id, origen, enfermero_id, paciente_id, estado) VALUES (?, ?, ?, ?, "pendiente")'

    con.query(sql, [zona_id, origen, enfermero_id, paciente_id,estado], function(error, result){
        if(error){
            res.json({
          status:"error",
             error  
            })  
        } else {
            res.json({
                status:"Post llamado",
                msj:{  }
            })
        }
    })
})

router.put("/atendiendo",function(req, res, next){
    const {id} = req.query;
    const {enfermero_id,estado} = req.body;
    const sql = 'UPDATE llamados SET enfermero_id= ?, estado = "atendiendo" WHERE id = ?'

    con.query(sql, [enfermero_id, id], function(error, result){
        if(error){
            res.json({
          status:"error",
             error  
            })  
        } else {
            res.json({
                status:"atendiendo",
                msj:{id}
            })
        }
    })
})

router.put("/finalizado",function(req, res, next){
    const {id} = req.query;
    const {estado} = req.body;
    const sql = 'UPDATE llamados SET estado = "finalizado" WHERE id= ?'

    con.query(sql, [id ], function(error, result){
        if(error){
            res.json({
          status:"error",
             error  
            })  
        } else {
            res.json({
                status:"Finalizado",
                msj:{id}
            })
        }
    })
})
   
router.delete("/", function(req, res, next){
    const { id } = req.query;
    const sql = 'DELETE FROM llamados WHERE id = ?';

    con.query(sql, [id], function(error, result) {
        if (error) {
            res.json({
                status: "error",
                error: "Error en la consulta SQL"
            });
        } else {
            res.json({
                status: "ok",
                msj: "Eliminado"
            });
        }
    });
});


module.exports = router;