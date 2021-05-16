db.voos.find({
    $and: [
        { litrosCombustivel: { $lt: 601 } },
        { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
    ],
},
    { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 },
).limit(1);
