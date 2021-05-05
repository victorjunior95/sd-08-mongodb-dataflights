db.voos.deleteMany({ "empresa.nome": "GOL", 
    $and: [{ "passageiros.pagos": { $gte: 5, $lte: 10 } }] });
