var express = require('express');
var router = express.Router();
var con = require('../conexion');

const rand = function(){
    return Math.random().toString(36).substr(2);
};

const getToken = function(){
    return rand() + rand ();

};

router.get("/",function(req, res, next){
    const sql = 'SELECT * FROM usuarios';
    con.query(sql,function(error, result){
        if (error){
            res.json({
                status:"error",
                 error
        
           })
         }else {
            res.json({
                status:"usuarios",
                    usuarios:result
            
          })
       }
    })
 })


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

const getUsuario = function(user, pass){
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM usuarios WHERE usuario = ? AND password = ?';
        con.query(sql, [user, pass], function(error, result){
            if (error) return(reject(error));
            if (result.llength === 0) return(reject("no existe"));
            resolve(result[0]);
        })
    })
}

const setToken = function(ID_usuario, newToken){
    return new Promise((resolve, reject) =>{
        const sql = 'UPDATE usuarios SET token = ? WHERE id = ?';
        con.query(sql, [newToken, ID_usuario], function(error, result){
            if (error) return(reject(error));
            resolve();
        })
    })
}
router.post("/",function(req, res, next){
    const {token}=req.headers
    const {usuario,password,tipo} = req.body
    isAdmin(token)
    .then((tipo) => {
        if (tipo === "Admin"){
            const sql = 'INSERT INTO usuarios (usuario,password,tipo) VALUES (?,?,?)'

            con.query(sql, [usuario,password,tipo], function(error, result){
                if(error){
                    res.json({
                  status:"error",
                     error  
                    })  
               
                } else {
                    res.json({
                        status:"usuarios",
                        msj:{usuario,password,tipo}
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
}) 



router.post("/login",function(req, res, next){
    const{user, pass} = req.body;
    //validar contra la UB user y pass
    getUsuario(user, pass)
    .then(async (user)=> {
        const newToken = getToken();
        await setToken(user.ID_usuario, newToken);
        user.newToken = newToken;
        delete user.contraseña;
        res.json({
            status:"usuarios",
            msj: (user)
        })
    })
    .catch((error) =>{
        res.json({
            status:"error",
            error
        })
    })
})


module.exports = router;