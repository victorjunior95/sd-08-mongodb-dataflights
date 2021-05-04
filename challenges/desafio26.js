db.voos.deleteMany({ 
    "passageiros.pagos": { $lte: 10, $gte: 5 }, 
"empresa.nome": "GOL" });