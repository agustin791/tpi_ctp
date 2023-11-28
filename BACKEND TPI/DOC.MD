"/api"
    "/zonas"
        "/" GET
            -->  status, zonas
        "/" POST
            <--  token (headers)
            <--  nombre (body)
            -->  status, msj {zonas}
        "/" PUT
            <--  id (params)
            <--  nombre (body)
            -->  status, msj {nombre}
        "/" DELETE
            <--  id (params)
            -->  status

    "/enfermeros"
        "/" GET  
            -->  status, enfermeros:result
        "/" POST
            <--  token (headers)
            <--  apellidos, nombres, documento (body)
            -->  status
        "/" PUT
            <--  token
            <--  id (params)
            <--  apellidos, nombres, documento (body)
            -->  status
        "/" DELETE
            <--  token (headers)
            <--  id (params)
            -->  status

    "/pacientes"
        "/buscar" GET  
            <--documento (body)
            -->  status, pacientes:result
            "/" GET  
            -->  status, pacientes:result
        "/" POST
            <--  nombre, apellidos, documento, fec_nac (body)
            -->  status, msj {nombre, apellidos, documento, fec_nac}
        "/" PUT
            <--  id (params)
            <--  nombre, apellidos, documento, fec_nac (body)
            -->  status, msj { nombre, apellidos, documento, fec_nac }
        "/" DELETE
            <--  token (headers)
            <--  id (params)
            -->  status
    "/usuarios"
        "/" GET
            -->  status, usuario: result
        "/" POST
            <--  token (headers)
            <--  usuario,password,tipo (body)
            -->  status, msj {usuario,password,tipo}
        "/login" POST
            <--  user, pass (body)
            -->  status, msj {user}
    "/llamados"
        "/" GET
            -->  status, llamados: result
        "/" POST
            <--  zona_id, origen, enfermero_id, paciente_id,estado (body)
            -->  status
        "/atendiendo" PUT
            <--  id (params)
            <--  enfermero_id,estado (body)
            -->  status, msj {id}
         "/finalizado" PUT
            <--  id (params)
            <--  estado (body)
            -->  status, msj {id}
        "/" DELETE
            <--  id (params)
            -->  status, msj 