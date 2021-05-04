db.voos.deleteMany({ $and: [{ "empresa.nome": "AZUL" }, { litrosCombustivel: { $gt: 400 } }] });
