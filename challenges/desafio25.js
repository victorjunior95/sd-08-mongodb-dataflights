db.voos.deleteMany({ $and: [
    { "empresa.nome": "AZUL" }, 
        { litrosCombustivel: { $lte: 400 } }] });